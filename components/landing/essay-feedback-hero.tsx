"use client";

import { EssayFeedbackCard } from "./essay-feedback-card";

const METRICS = [
  { name: "uniqueness", score: 85, variant: "green" as const },
  { name: "hook", score: 90, variant: "green" as const },
  { name: "voice", score: 92, variant: "green" as const },
  { name: "flow", score: 88, variant: "green" as const },
  { name: "authenticity", score: 95, variant: "green" as const },
  { name: "conciseness", score: 78, variant: "yellow" as const },
];

export function EssayFeedbackHero() {
  return (
    <EssayFeedbackCard
      overallScore={87}
      metrics={METRICS}
      improvementSuggestion="Your essay shows strong personal growth and leadership experience, with a clear voice and authenticity. Consider tighter editing to enhance conciseness and impact."
      onRefresh={() => {}}
      onClose={() => {}}
    />
  );
}
