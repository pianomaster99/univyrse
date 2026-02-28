import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type"); // "signup" | "recovery" | etc
  const next = url.searchParams.get("next") ?? "/dashboard";

  if (!token_hash || !type) {
    return NextResponse.redirect(
      `${url.origin}/auth/error?message=${encodeURIComponent(
        "Missing token_hash or type"
      )}`
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.verifyOtp({
    type: type as any,
    token_hash,
  });

  if (error) {
    return NextResponse.redirect(
      `${url.origin}/auth/error?message=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(`${url.origin}${next}`);
}