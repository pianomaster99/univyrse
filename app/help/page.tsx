import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Help Center | Univyrse",
  description: "Get help with Univyrse essay review. FAQs, guides, and support.",
};

const HELP_ITEMS = [
  {
    title: "How do I start a review?",
    body: "Sign up or log in, then paste your essay into the review form. Choose your region and essay type, and submit. You will receive feedback within a few minutes.",
  },
  {
    title: "What essay types are supported?",
    body: "We support Common App personal statements, UC PIQs, Coalition essays, supplemental essays, scholarship essays, and other college application essays. Select the type that best matches your essay for more relevant feedback.",
  },
  {
    title: "How is my essay kept private?",
    body: "Your essays are encrypted and we do not share them with third parties or use them to train general AI models. You can delete your content at any time. See our Privacy Policy for details.",
  },
  {
    title: "What if I have a technical issue?",
    body: "Use our Contact Us page to describe the issue. We typically respond within one business day.",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-[#000]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-[#000] md:text-4xl">
          Help Center
        </h1>
        <p className="mb-12 text-lg text-[#000] opacity-90">
          Find answers and get support for Univyrse.
        </p>

        <div className="space-y-6">
          {HELP_ITEMS.map((item) => (
            <section
              key={item.title}
              className="rounded-2xl border border-black/8 bg-white p-6 shadow-md shadow-black/5"
            >
              <h2 className="mb-3 text-xl font-semibold text-[#000]">
                {item.title}
              </h2>
              <p className="text-[#000] opacity-90 leading-relaxed">
                {item.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-black/8 bg-violet-50/50 p-6 shadow-lg shadow-black/5">
          <h2 className="mb-2 text-lg font-semibold text-[#000]">
            Still need help?
          </h2>
          <p className="mb-4 text-sm text-[#000] opacity-90">
            Reach out and we will get back to you as soon as we can.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-medium text-violet-600 underline decoration-violet-600/50 underline-offset-2 hover:decoration-violet-600"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
