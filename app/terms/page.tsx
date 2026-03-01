import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Terms of Service | Univyrse",
  description: "Univyrse terms of service. Rules and guidelines for using our essay review platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#000]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-black/8 bg-white p-8 shadow-lg shadow-black/5 md:p-10">
          <h1 className="mb-2 text-3xl font-bold text-[#000] md:text-4xl">
            Terms of Service
          </h1>
          <p className="mb-10 text-[#000] opacity-80">
            Last updated: February 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                1. Acceptance of terms
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                By using Univyrse, you agree to these Terms of Service. If you do
                not agree, please do not use our service.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                2. Use of the service
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                Univyrse provides AI-powered essay review. You must use the service
                in good faith and only submit content you have the right to use.
                You may not use the service to generate content that violates
                academic integrity policies or to circumvent admissions
                requirements.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                3. Your content
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                You keep ownership of your essays. We use your submissions only to
                provide feedback and as described in our Privacy Policy. We do not
                claim ownership of your work.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                4. Limitation of liability
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                Univyrse is provided as is. We are not liable for decisions made
                based on our feedback or for outcomes of your applications. Our
                total liability is limited to the amount you paid for the service
                in the past 12 months.
              </p>
            </section>

            <section className="border-t border-black/5 pt-8">
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                5. Contact
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                For questions about these terms, please use our{" "}
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
