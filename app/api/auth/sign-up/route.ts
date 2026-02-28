import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

type Body = {
  email?: string;
  password?: string;
  next?: string; // where to go after confirmation
};

export async function POST(req: Request) {
  try {
    const { origin } = new URL(req.url);
    const body = (await req.json()) as Body;

    const email = (body.email ?? "").trim().toLowerCase();
    const password = body.password ?? "";
    const next = body.next ?? "/dashboard";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // This controls where the confirmation email link sends the user back to.
    const emailRedirectTo = `${origin}/api/auth/confirm?next=${encodeURIComponent(
      next
    )}`;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // If email confirmation is ON, session will typically be null until confirmed.
    const needsEmailConfirmation = !data.session;

    return NextResponse.json(
      {
        user: data.user,
        session: data.session,
        needsEmailConfirmation,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}