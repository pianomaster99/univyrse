"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: RevealOnScrollProps) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          timeoutId = setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return React.createElement(Component, {
    ref,
    className: cn(
      "transition-all duration-700 ease-out",
      visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6",
      className
    ),
    children,
  });
}
