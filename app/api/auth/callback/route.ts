import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  // If Supabase sent an error back
  const errorDescription = searchParams.get("error_description");
  if (errorDescription) {
    return NextResponse.redirect(`${origin}/auth/error?message=${encodeURIComponent(errorDescription)}`);
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/error?message=${encodeURIComponent("Missing auth code")}`);
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      `${origin}/auth/error?message=${encodeURIComponent(error.message)}`
    );
  }

  // Session cookies are now set. Send user where you want.
  return NextResponse.redirect(`${origin}${next}`);
}