import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Univyrse (Auth Test)</h1>
      <p>Use these links to test password auth + email confirmation.</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}