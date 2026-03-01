"use client";

import { RotateCw, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EssayFeedbackMetric {
  name: string;
  score: number;
  variant?: "green" | "yellow";
}

export interface EssayFeedbackCardProps {
  overallScore: number;
  metrics: EssayFeedbackMetric[];
  improvementSuggestion: string;
  onRefresh?: () => void;
  onClose?: () => void;
  className?: string;
}

const barColor = (variant: "green" | "yellow" = "green") =>
  variant === "green" ? "bg-green-500" : "bg-amber-500";

export function EssayFeedbackCard({
  overallScore,
  metrics,
  improvementSuggestion,
  onRefresh,
  onClose,
  className,
}: EssayFeedbackCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl",
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-bold text-gray-900">Essay Feedback</h3>
        <div className="flex items-center gap-1">
          {onRefresh && (
            <button
              type="button"
              onClick={onRefresh}
              className="rounded-full p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Refresh feedback"
            >
              <RotateCw className="h-5 w-5" />
            </button>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Overall:</span>
          <span className="text-sm font-semibold text-gray-900">{overallScore}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className={cn("h-full rounded-full", barColor("green"))}
            style={{ width: `${Math.min(100, overallScore)}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {metrics.map((m) => (
          <div key={m.name}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-gray-700">{m.name}</span>
              <span className="text-sm font-medium text-gray-900">{m.score}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className={cn("h-full rounded-full", barColor(m.variant))}
                style={{ width: `${Math.min(100, m.score)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
          Improvement suggestion:
        </p>
        <p className="text-sm leading-relaxed text-gray-800">
          {improvementSuggestion}
        </p>
      </div>
    </div>
  );
}
