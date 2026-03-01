"use client";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const REGION_CHIPS = [
  { code: "US", label: "US" },
  { code: "UK", label: "UK" },
  { code: "AU", label: "AU" },
  { code: "CA", label: "CA" },
  { code: "HK", label: "HK" },
  { code: "SG", label: "SG" },
];

const REGIONS = [
  {
    flag: "🇺🇸",
    name: "United States",
    code: "US",
    badge: "Most common",
    bullets: [
      "Personal insight, voice, and narrative",
      "Authentic fit for school",
      "Common App, UC PIQs, Coalition & supplementals",
    ],
    borderClass: "border-slate-200",
    bgClass: "from-slate-50/60 to-white",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    code: "UK",
    badge: null,
    bullets: [
      "Subject fit and academic motivation",
      "Evidence and intellectual curiosity",
      "UCAS personal statements & subject essays",
    ],
    borderClass: "border-slate-200",
    bgClass: "from-slate-50/40 to-white",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    code: "AU",
    badge: null,
    bullets: [
      "Clear motivation and fit",
      "Direct structure",
      "Personal statements & scholarship apps",
    ],
    borderClass: "border-slate-200",
    bgClass: "from-slate-50/40 to-white",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    code: "CA",
    badge: null,
    bullets: [
      "Balanced personal story and clarity",
      "Fit (similar to US, slightly more direct)",
      "Provincial and university-specific prompts",
    ],
    borderClass: "border-slate-200",
    bgClass: "from-slate-50/40 to-white",
  },
  {
    flag: "🇭🇰",
    name: "Hong Kong",
    code: "HK",
    badge: null,
    bullets: [
      "Concise; achievement and impact clarity",
      "Structured (avoid overly flowery)",
      "Local and international applications",
    ],
    borderClass: "border-slate-200",
    bgClass: "from-slate-50/40 to-white",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    code: "SG",
    badge: null,
    bullets: [
      "Clear goals and impact",
      "Structured reflection, concise",
      "Local unis and scholarship essays",
    ],
    borderClass: "border-slate-200",
    bgClass: "from-slate-50/40 to-white",
  },
];

export function RegionModes() {
  return (
    <section className="border-t border-black/5 bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6 text-center">
          <span className="inline-block rounded-full border border-black/10 bg-black/[0.02] px-4 py-1.5 text-sm font-medium text-[#000]">
            Tailored for your region
          </span>
        </Reveal>
        <Reveal className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#000] md:text-4xl">
            Region-specific insights
          </h2>
          <p className="mt-3 text-lg text-[#000] opacity-90">
            US, UK, AU, Canada, Hong Kong, Singapore.
          </p>
        </Reveal>

        {/* Region chips row */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {REGION_CHIPS.map((c) => (
            <span
              key={c.code}
              className="rounded-full border border-[#0f172a]/20 bg-[#0f172a]/5 px-4 py-2 text-sm font-medium text-[#0f172a]"
            >
              {c.label}
            </span>
          ))}
        </Reveal>

        <StaggerGroup
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.1}
          delayChildren={0.06}
        >
          {REGIONS.map((r) => (
            <StaggerItem key={r.code}>
              <div
                className={`group rounded-2xl border-2 ${r.borderClass} bg-gradient-to-br ${r.bgClass} p-6 shadow-lg shadow-black/5 transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-3xl">{r.flag}</span>
                  <h3 className="font-semibold text-[#000]">{r.name}</h3>
                  {r.badge && (
                    <span className="rounded-full bg-[#0f172a]/10 px-2.5 py-0.5 text-xs font-medium text-[#0f172a]">
                      {r.badge}
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-[#000] opacity-90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f172a]/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
