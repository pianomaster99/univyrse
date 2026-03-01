"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxLiteProps {
  children: React.ReactNode;
  className?: string;
  /** Max vertical shift in px. Default 12. Desktop only. */
  offset?: number;
}

export function ParallaxLite({ children, className, offset = 12 }: ParallaxLiteProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, offset, 0]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
