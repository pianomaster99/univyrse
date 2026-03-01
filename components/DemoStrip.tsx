"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import {
  BROWN_ESSAY,
  DEMO_HIGHLIGHTS,
  DEMO_SCORE,
  DEMO_TOP_PRIORITIES,
  DEMO_INLINE_COMMENTS,
} from "@/lib/essay-demo";

/** Renders essay body with highlighted phrases */
function EssayWithHighlights() {
  let text = BROWN_ESSAY.body;
  const parts: { text: string; highlight: boolean }[] = [];
  for (const phrase of DEMO_HIGHLIGHTS) {
    const i = text.indexOf(phrase);
    if (i === -1) continue;
    if (i > 0) parts.push({ text: text.slice(0, i), highlight: false });
    parts.push({ text: phrase, highlight: true });
    text = text.slice(i + phrase.length);
  }
  if (text) parts.push({ text, highlight: false });

  return (
    <p className="text-xs text-[#000] leading-relaxed">
      {parts.map((p, i) =>
        p.highlight ? (
          <motion.span
            key={i}
            initial={{ opacity: 0.6, backgroundColor: "rgba(253, 224, 71, 0)" }}
            whileInView={{ opacity: 1, backgroundColor: "rgba(253, 224, 71, 0.4)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="rounded px-0.5"
          >
            {p.text}
          </motion.span>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </p>
  );
}

const STEPS = [
  { num: 1, label: "Paste essay" },
  { num: 2, label: "AI highlights issues" },
  { num: 3, label: "You revise with priorities" },
];

export function DemoStrip() {
  return (
    <section className="border-t border-black/5 bg-slate-50/50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-[#000] md:text-3xl">
            What you get back
          </h2>
          <p className="mt-2 text-[#000] opacity-90">
            Same essay, clear score, priorities, and inline comments.
          </p>
        </Reveal>

        {/* Step indicator */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center gap-2">
              <span className="rounded-full bg-[#0f172a] px-3 py-1.5 text-xs font-medium text-white">
                {step.num}. {step.label}
              </span>
              {i < STEPS.length - 1 && (
                <span className="hidden text-slate-400 sm:inline">→</span>
              )}
            </div>
          ))}
        </Reveal>

        <StaggerGroup
          className="grid gap-8 lg:grid-cols-[1fr,340px] lg:gap-10 lg:items-start"
          staggerChildren={0.12}
          delayChildren={0.05}
        >
          {/* Left: mini essay card with highlights */}
          <StaggerItem>
            <motion.div
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="mb-2 text-xs font-medium text-[#000] opacity-80">
                Brown Supplemental:
              </p>
              <p className="mb-3 text-xs text-[#000] leading-relaxed opacity-90">
                {BROWN_ESSAY.prompt}
              </p>
              <EssayWithHighlights />
            </motion.div>
          </StaggerItem>

          {/* Right: feedback panel */}
          <StaggerItem>
            <motion.div
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-xl space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#000] opacity-80">Overall</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-lg font-bold text-emerald-800">
                  {DEMO_SCORE}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
                <motion.div
                  className="h-full rounded-full bg-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${DEMO_SCORE}%` }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                />
              </div>

              <div>
                <p className="mb-2 text-xs font-medium text-[#000] opacity-80">Top 3 priorities</p>
                <ul className="space-y-1.5">
                  {DEMO_TOP_PRIORITIES.map((p, i) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[#000]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0f172a]/10 text-xs font-semibold text-[#0f172a]">
                        {i + 1}
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-black/5 pt-3">
                <p className="mb-2 text-xs font-medium text-[#000] opacity-80">Inline comments</p>
                <ul className="space-y-2">
                  {DEMO_INLINE_COMMENTS.map((c, i) => (
                    <motion.li
                      key={c.tag}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="rounded-lg border-l-4 border-[#1e293b] bg-slate-50/80 p-2.5"
                    >
                      <p className="text-xs font-medium text-[#0f172a]">{c.tag}</p>
                      <p className="text-xs text-[#000] opacity-90">&ldquo;{c.text}&rdquo;</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
