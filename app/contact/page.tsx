import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Contact Us | Univyrse",
  description: "Get in touch with Univyrse. Support, feedback, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#000]">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-16 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-[#000] md:text-4xl">
          Contact Us
        </h1>
        <p className="mb-12 text-lg text-[#000] opacity-90">
          Have a question, feedback, or need support? We would like to hear from
          you.
        </p>

        <div className="space-y-8">
          <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-md shadow-black/5">
            <h2 className="mb-2 text-xl font-semibold text-[#000]">Email</h2>
            <p className="text-[#000] opacity-90">
              For general inquiries and support:{" "}
              <a
                href="mailto:support@univyrse.com"
                className="font-medium text-violet-600 underline decoration-violet-600/50 underline-offset-2 hover:decoration-violet-600"
              >
                support@univyrse.com
              </a>
            </p>
          </section>

          <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-md shadow-black/5">
            <h2 className="mb-2 text-xl font-semibold text-[#000]">
              Response time
            </h2>
            <p className="text-[#000] opacity-90">
              We aim to respond within one business day. For urgent account or
              technical issues, include &quot;Urgent&quot; in your subject line.
            </p>
          </section>

          <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-md shadow-black/5">
            <h2 className="mb-2 text-xl font-semibold text-[#000]">
              Help Center
            </h2>
            <p className="text-[#000] opacity-90">
              You may find a faster answer in our{" "}
              <Link
                href="/help"
                className="font-medium text-violet-600 underline decoration-violet-600/50 underline-offset-2 hover:decoration-violet-600"
              >
                Help Center
              </Link>
              , where we cover common questions about reviews, privacy, and
              account settings.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
