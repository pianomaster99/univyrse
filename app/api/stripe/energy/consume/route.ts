import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

type Body = {
  amount?: number; // default 1
  reason?: string; // e.g. "deep_review"
};

export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as Body;
  const amount = Math.floor(Number(body.amount ?? 1));
  const reason = (body.reason ?? "deep_review").slice(0, 64);

  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const { data: bal } = await supabase
    .from("energy_balances")
    .select("balance_int")
    .eq("user_id", user.id)
    .maybeSingle();

  const current = bal?.balance_int ?? 0;
  if (current < amount) {
    return NextResponse.json({ error: "Not enough energy" }, { status: 402 });
  }

  // Ledger
  await supabase.from("energy_ledger").insert({
    user_id: user.id,
    delta_int: -amount,
    reason,
  });

  // Balance
  await supabase.from("energy_balances").upsert(
    { user_id: user.id, balance_int: current - amount, updated_at: new Date().toISOString() },
    { onConflict: "user_id" }
  );

  return NextResponse.json({ ok: true, remaining: current - amount });
}