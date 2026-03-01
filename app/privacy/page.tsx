import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy | Univyrse",
  description: "Univyrse privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#000]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-black/8 bg-white p-8 shadow-lg shadow-black/5 md:p-10">
          <h1 className="mb-2 text-3xl font-bold text-[#000] md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-10 text-[#000] opacity-80">
            Last updated: February 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                1. Information we collect
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                We collect information you provide when you use Univyrse, including
                your email address, account details, and the essays you submit for
                review. We use this information to deliver our service, improve
                feedback quality, and communicate with you.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                2. How we use your information
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                Your essays are processed to generate feedback. We do not use your
                content to train general-purpose AI models or share it with third
                parties for marketing. We may use anonymized, aggregated data to
                improve our product.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                3. Data security and storage
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                We use industry-standard measures to protect your data. You can
                delete your essays and account at any time. We retain data only as
                long as necessary to provide the service and comply with legal
                obligations.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                4. Contact
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                For privacy-related questions, contact us via our{" "}
                <Link href="/contact" className="font-medium text-violet-600 underline decoration-violet-600/50 underline-offset-2 hover:decoration-violet-600">
                  Contact Us
                </Link>{" "}
                page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
