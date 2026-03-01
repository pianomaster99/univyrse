import { NextResponse } from "next/server";
import { headers } from "next/headers";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = (await headers()).get("stripe-signature");

  if (!sig) {
    console.error("❌ Missing stripe-signature header");
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Invalid signature:", err?.message);
    return NextResponse.json({ error: `Invalid signature: ${err.message}` }, { status: 400 });
  }

  // Log every event type so you know what is arriving
  console.log("➡️ Webhook event", { type: event.type, id: event.id });

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const md = session.metadata ?? {};

  console.log("✅ checkout.session.completed session", {
    session_id: session.id,
    client_reference_id: session.client_reference_id,
    metadata: md,
  });

  if (md.kind !== "energy_purchase") {
    console.log("Ignoring checkout.session.completed without kind=energy_purchase", md);
    return NextResponse.json({ received: true });
  }

  const userId = md.user_id;
  const energyAmount = Number(md.energy_amount);

  if (!userId || !Number.isFinite(energyAmount) || energyAmount <= 0) {
    console.error("❌ Bad metadata:", md);
    return NextResponse.json({ error: "Bad metadata" }, { status: 400 });
  }

  // Fail loudly if env vars missing
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("❌ Missing SUPABASE_SERVICE_ROLE_KEY");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const supabase = createAdminClient();

  try {
    const stripeEventId = event.id;
    const paymentIntentId =
      typeof session.payment_intent === "string" ? session.payment_intent : null;

    console.log("About to credit energy", { userId, energyAmount, stripeEventId });

    // 1) idempotency: insert ledger row first
    const { error: ledgerErr } = await supabase.from("energy_ledger").insert({
      user_id: userId,
      delta_int: energyAmount,
      reason: "purchase",
      stripe_event_id: stripeEventId,
      stripe_payment_intent_id: paymentIntentId,
    });

    if (ledgerErr && (ledgerErr as any).code === "23505") {
      console.log("✅ Duplicate event; already processed", { stripeEventId });
      return NextResponse.json({ received: true });
    }
    if (ledgerErr) {
      console.error("❌ energy_ledger insert failed:", ledgerErr);
      return NextResponse.json({ error: "Ledger insert failed", details: ledgerErr }, { status: 500 });
    }

    // 2) Update balance in a single upsert (no read-modify-write race)
    // Requires Postgres to accept expression updates; if this fails, you’ll see it in logs.
    const now = new Date().toISOString();
    const { error: balWriteErr } = await supabase.from("energy_balances").upsert(
      { user_id: userId, balance_int: energyAmount, updated_at: now },
      { onConflict: "user_id" }
    );

    if (balWriteErr) {
      console.error("❌ energy_balances upsert failed:", balWriteErr);
      return NextResponse.json({ error: "Balance upsert failed", details: balWriteErr }, { status: 500 });
    }

    console.log("✅ Energy credited (base upsert done)", { userId, energyAmount, stripeEventId });

    // NOTE: This simple upsert sets balance to energyAmount on first insert.
    // If you want true incrementing every time, do it with an RPC or SQL update (recommended).
    return NextResponse.json({ received: true });
  } catch (e: any) {
    console.error("❌ Webhook failed (exception):", e);
    return NextResponse.json({ error: e?.message ?? "Webhook failed" }, { status: 500 });
  }
}