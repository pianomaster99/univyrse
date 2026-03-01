import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token_hash = url.searchParams.get("token_hash");

  // Supabase email confirm commonly uses type=email. Password recovery uses type=recovery.
  const type = url.searchParams.get("type") ?? "email";

  const next = url.searchParams.get("next") ?? "/dashboard";

  if (!token_hash) {
    return NextResponse.redirect(
      `${url.origin}/auth/error?message=${encodeURIComponent("Missing token_hash")}`
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