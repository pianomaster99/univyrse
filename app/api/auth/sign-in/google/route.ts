import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const supabase = await createClient();

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL!;
  const redirectTo = `${origin}/api/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
      // Optional: request offline access / refresh token (Google specific)
      // queryParams: { access_type: "offline", prompt: "consent" },
    },
  });

  if (error || !data?.url) {
    return NextResponse.json(
      { error: error?.message ?? "Failed to start OAuth" },
      { status: 400 }
    );
  }

  return NextResponse.json({ url: data.url });
}