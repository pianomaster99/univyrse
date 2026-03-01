"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "How is Univyrse different from other essay review tools?",
    answer:
      "Univyrse focuses on reviewing and improving your existing work, not writing essays for you. We give region-specific feedback across 6 dimensions with actionable, inline comments. Our AI is trained for college admissions essays.",
  },
  {
    id: "faq2",
    question: "Is my essay kept private and secure?",
    answer:
      "Yes. Your essays are encrypted and stored securely. We never share your content with third parties or use it for training. You can delete your essays anytime.",
  },
  {
    id: "faq3",
    question: "What essay types can I review?",
    answer:
      "We support Common App personal statements, UC PIQs, supplemental essays, scholarship essays, and more. You pick your essay type for targeted feedback.",
  },
  {
    id: "faq4",
    question: "How long does a review take?",
    answer:
      "Most reviews finish in under 2 minutes. You get rubric scores, inline comments, and priorities right after processing.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <section className="border-t border-black/5 bg-gradient-to-b from-white to-slate-50/20 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-6 text-center">
          <span className="inline-block rounded-full border border-black/10 bg-black/[0.02] px-4 py-1.5 text-sm font-medium text-[#000]">
            FAQ
          </span>
        </Reveal>
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#000] md:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            {ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-md shadow-black/5"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-black/[0.02]"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-medium text-[#000] pr-4">{item.question}</h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-[#000] opacity-70 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black/5 px-5 pb-5 pt-2">
                          <p className="text-sm text-[#000] opacity-90 leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
