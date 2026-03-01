"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Optional premium blur-in: blur(6px) -> blur(0px) */
  blur?: boolean;
  /** Delay in seconds */
  delay?: number;
  as?: "div" | "section" | "article";
}

const transition = {
  duration: 0.55,
  ease: "easeOut" as const,
};

const MotionTag = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
};

export function Reveal({
  children,
  className,
  blur = false,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionComponent = MotionTag[as];
  return (
    <MotionComponent
      initial={{
        opacity: 0,
        y: 18,
        ...(blur ? { filter: "blur(6px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
