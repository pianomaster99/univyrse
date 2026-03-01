"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-white"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shadow-md transition-transform group-hover:scale-105 border border-white/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold">Univyrse</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 sm:inline-block">
              US / UK / AU / CA / HK / SG
            </span>
            <Link
              href="/login"
              className="rounded-xl border-2 border-white/40 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/60"
            >
              See example
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0f172a] shadow-lg transition-all hover:bg-white/95"
            >
              Start review
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
