"use client";

import {
  Target,
  BarChart3,
  Globe,
  MessageSquare,
  Zap,
  FileCheck,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const BENEFITS = [
  {
    icon: Target,
    title: "Actionable feedback",
    description: "Step-by-step suggestions you can apply right away to strengthen your essay.",
  },
  {
    icon: BarChart3,
    title: "Rubric clarity",
    description: "See how you perform across 6 dimensions with clear scores and breakdowns.",
  },
  {
    icon: Globe,
    title: "Region modes",
    description: "Tailored for US, UK, AU, CA, HK, and SG so feedback matches what readers expect.",
  },
  {
    icon: MessageSquare,
    title: "Inline comments",
    description: "Feedback tied to specific sentences, not generic advice.",
  },
  {
    icon: Zap,
    title: "One-click review",
    description: "Paste your draft and get results in minutes, no setup required.",
  },
  {
    icon: FileCheck,
    title: "Keep your voice",
    description: "We review and suggest; we don't rewrite. Your story stays yours.",
  },
];

const TAGS = ["US / UK / AU / CA / HK / SG", "Score + rubric", "Inline comments"];

export function WhyUseUnivyrse() {
  return (
    <section className="relative overflow-hidden border-t border-black/5 bg-gradient-to-b from-white to-slate-50/50 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6 text-center">
          <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-[#000] shadow-sm">
            Why Univyrse
          </span>
        </Reveal>
        <Reveal className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-[#000] md:text-4xl">
            Built for applicants who want real feedback
          </h2>
        </Reveal>
        <Reveal className="mb-12 text-center">
          <p className="mx-auto max-w-2xl text-lg text-[#000] opacity-90">
            Clear scores, inline comments, and region-specific insights so you know exactly what to fix next.
          </p>
        </Reveal>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <StaggerGroup className="flex flex-wrap justify-center gap-2" staggerChildren={0.08} delayChildren={0.1}>
            {TAGS.map((t) => (
              <StaggerItem key={t}>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#000] shadow-md ring-1 ring-black/5">
                  {t}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.12} delayChildren={0.15}>
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group rounded-2xl border border-black/8 bg-white p-6 shadow-lg shadow-black/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f172a]/10 text-[#0f172a] transition-colors group-hover:bg-[#0f172a]/15">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-[#000]">{b.title}</h3>
                <p className="text-sm text-[#000] opacity-90 leading-relaxed">{b.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
