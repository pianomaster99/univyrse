"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { BROWN_ESSAY } from "@/lib/essay-demo";

const METRICS_LEFT = [
  { label: "uniqueness", score: 87 },
  { label: "voice", score: 90 },
  { label: "authenticity", score: 86 },
];
const METRICS_RIGHT = [
  { label: "hook", score: 89 },
  { label: "flow", score: 88 },
  { label: "conciseness", score: 82 },
];

function AnimatedBar({
  score,
  variant = "green",
  delay = 0,
}: {
  score: number;
  variant?: "green" | "yellow";
  delay?: number;
}) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5">
      <motion.div
        className={`h-full rounded-full ${variant === "green" ? "bg-emerald-500" : "bg-amber-500"}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      />
    </div>
  );
}

function TestimonialAvatar() {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-slate-200 to-slate-300 shadow-md ring-2 ring-white">
      {!imgError ? (
        <Image
          src="/memoji.png"
          alt="Student"
          width={56}
          height={56}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-lg font-semibold text-slate-700">MM</span>
      )}
    </div>
  );
}

export function HeroKolly() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left: Product mockup */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end min-h-[420px] lg:min-h-[500px]">
            <Reveal className="relative w-full max-w-lg" blur>
              {/* Back: essay document card */}
              <div
                className="absolute inset-0 rounded-2xl border border-black/8 bg-white p-6 shadow-xl"
                style={{
                  transform: "rotate(-1.5deg)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
              >
                <p className="mb-3 text-xs font-medium text-[#000] opacity-80">
                  Brown Supplemental:
                </p>
                <p className="mb-4 text-xs text-[#000] leading-relaxed opacity-90">
                  {BROWN_ESSAY.prompt}
                </p>
                <p className="text-sm text-[#000] leading-relaxed opacity-95">
                  {BROWN_ESSAY.body}
                </p>
              </div>

              {/* Front: Essay Feedback floating card */}
              <motion.div
                className="absolute right-0 bottom-0 w-[92%] max-w-sm rounded-2xl border border-black/8 bg-white p-5 shadow-2xl lg:right-4 lg:bottom-6"
                style={{
                  transform: "rotate(1deg)",
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#000]">Essay Feedback</h3>
                </div>
                <div className="mb-4">
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-[#000] opacity-90">Overall:</span>
                    <span className="font-semibold text-[#000]">88</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
                    <motion.div
                      className="h-full rounded-full bg-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                  <div className="space-y-2">
                    {METRICS_LEFT.map((m, i) => (
                      <div key={m.label}>
                        <div className="flex justify-between text-xs">
                          <span className="text-[#000] opacity-80">{m.label}</span>
                          <span className="font-medium text-[#000]">{m.score}</span>
                        </div>
                        <AnimatedBar score={m.score} delay={0.3 + i * 0.05} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {METRICS_RIGHT.map((m, i) => (
                      <div key={m.label}>
                        <div className="flex justify-between text-xs">
                          <span className="text-[#000] opacity-80">{m.label}</span>
                          <span className="font-medium text-[#000]">{m.score}</span>
                        </div>
                        <AnimatedBar
                          score={m.score}
                          variant={m.label === "conciseness" ? "yellow" : "green"}
                          delay={0.35 + i * 0.05}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#000] leading-relaxed opacity-90 border-t border-black/5 pt-3">
                  Really strong hook and voice. Try trimming a sentence or two in the middle so the flow feels a bit snappier. You’ll keep the punch without losing the ideas.
                </p>
              </motion.div>
            </Reveal>
          </div>

          {/* Right: Marketing copy */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <StaggerGroup staggerChildren={0.12} delayChildren={0.06}>
              <StaggerItem>
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                  AI Essay Feedback
                </span>
              </StaggerItem>
              <StaggerItem className="mt-6">
                <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[2.75rem]">
                  One-click, high-quality essay feedback
                </h1>
              </StaggerItem>
              <StaggerItem className="mt-5">
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  Paste your draft and get a clear score, rubric breakdown, and inline
                  feedback, so you know exactly what to fix next.
                </p>
              </StaggerItem>
              <StaggerItem className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" size="lg" asChild className="bg-white text-[#0f172a] hover:bg-white/95 shadow-lg shadow-black/20">
                  <Link href="/signup">Start free review</Link>
                </Button>
                <Button variant="outlineDark" size="lg" asChild>
                  <Link href="/login">See an example</Link>
                </Button>
              </StaggerItem>
              <StaggerItem className="mt-10">
                <div className="rounded-2xl border border-white/10 bg-white/95 backdrop-blur p-5 shadow-xl max-w-md">
                  <div className="flex gap-4">
                    <TestimonialAvatar />
                    <div>
                      <p className="text-sm text-[#000] leading-relaxed italic opacity-95">
                        &ldquo;It&apos;s super convenient to keep my drafts in one place and get feedback instantly.&rdquo;
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#000]">Matei M, Student</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
