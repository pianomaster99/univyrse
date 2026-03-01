"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const BENEFITS = [
  {
    title: "Clear score & rubric",
    description: "See how your essay stacks up across key dimensions so you know where to focus.",
  },
  {
    title: "Inline feedback",
    description: "Get suggestions tied to specific sentences, not generic advice.",
  },
  {
    title: "One place for drafts",
    description: "Keep all your essays and feedback in one spot. No more scattered docs.",
  },
];

export function BenefitsRow() {
  return (
    <section className="border-t border-gray-100 bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Why use Univyrse
          </h2>
          <p className="mt-2 text-gray-600">
            Built for applicants who want real feedback, fast.
          </p>
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-3" staggerChildren={0.12} delayChildren={0.1}>
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title} blur={false}>
              <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
