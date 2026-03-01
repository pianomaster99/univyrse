"use client";

import * as React from "react";
import { Upload, Sparkles, Edit } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const STEPS = [
  {
    num: 1,
    icon: Upload,
    title: "Paste your essay",
    description: "Copy your draft, pick your region (US, UK, AU, CA, HK, or SG), and choose your essay type. Takes under a minute.",
  },
  {
    num: 2,
    icon: Sparkles,
    title: "AI analyzes your work",
    description: "We review across 6 dimensions: Insight, Specificity, Structure, Voice, Clarity, and Fit.",
  },
  {
    num: 3,
    icon: Edit,
    title: "Revise & save",
    description: "Read your feedback, make changes, and keep version history for future reference.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-[#0f172a] to-[#1e293b] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            How it works
          </span>
        </Reveal>
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Three steps to better feedback
          </h2>
          <p className="mt-3 text-lg text-white/90">
            No setup. Paste, review, improve.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:grid-flow-col lg:items-center lg:gap-6">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.num}>
              <StaggerGroup staggerChildren={0.15} delayChildren={0.1}>
                <StaggerItem>
                  <div className="rounded-2xl border border-white/20 bg-white p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-2xl font-bold text-white shadow-md">
                      {step.num}
                    </div>
                    <div className="mb-3 flex items-center gap-2">
                      <step.icon className="h-5 w-5 text-[#0f172a]" />
                      <h3 className="font-semibold text-[#000]">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#000] opacity-90 leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              </StaggerGroup>
              {index < STEPS.length - 1 && (
                <div className="hidden items-center justify-center lg:flex" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/40">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
