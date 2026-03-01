"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="border-t border-black/5 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 md:p-14 shadow-2xl shadow-black/20">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to improve your essay?
              </h2>
              <p className="mt-3 text-lg text-white/90">
                Get AI-powered feedback in minutes. Start your free review today.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0f172a] shadow-lg shadow-black/10 transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  Start free review
                </Link>
              </div>
              <p className="mt-6 text-sm font-medium text-white/80">
                We review, we don&apos;t write.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
