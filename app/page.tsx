import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 16, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 8 }}>Univyrse</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Simple auth test flow: Home → Login/Signup → Dashboard.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
        <Link
          href="/login"
          style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #ccc", textDecoration: "none" }}
        >
          Log in
        </Link>

        <Link
          href="/signup"
          style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #ccc", textDecoration: "none" }}
        >
          Sign up
        </Link>
      </div>
    </main>
  );
}