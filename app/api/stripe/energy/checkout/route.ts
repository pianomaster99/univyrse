import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { ENERGY_PACKS } from "@/lib/billing/energy";
import { stripe } from "@/lib/stripe/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = (await req.json().catch(() => ({}))) as { packId?: string };
    const packId = body.packId;

    if (!packId) return NextResponse.json({ error: "Missing packId" }, { status: 400 });

    const pack = (ENERGY_PACKS as any)[packId];
    if (!pack) {
      return NextResponse.json(
        { error: `Invalid packId: ${packId}. Available: ${Object.keys(ENERGY_PACKS).join(", ")}` },
        { status: 400 }
      );
    }

    // Helpful debug
    console.log("checkout packId:", packId);
    console.log("checkout priceId:", pack.priceId);
    console.log("stripe key starts:", (process.env.STRIPE_SECRET_KEY ?? "").slice(0, 12));

    const { origin } = new URL(req.url);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: pack.priceId, quantity: 1 }],
      success_url: `${origin}/stripe-test?status=success`,
      cancel_url: `${origin}/stripe-test?status=cancel`,
      client_reference_id: user.id,
      metadata: {
        kind: "energy_purchase",
        user_id: user.id,
        energy_amount: String(pack.energyAmount),
        pack_id: packId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    // Stripe errors often have these fields
    console.error("Checkout error full:", e);

    return NextResponse.json(
      {
        error: e?.message ?? "Unknown error",
        type: e?.type,
        code: e?.code,
        param: e?.param,
        statusCode: e?.statusCode,
        raw: e?.raw?.message,
      },
      { status: 500 }
    );
  }
}