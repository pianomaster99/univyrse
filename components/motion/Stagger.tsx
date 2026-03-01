"use client";

import { motion } from "framer-motion";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child in seconds. Default 0.12 */
  staggerChildren?: number;
  /** Delay before first child. Default 0.05 */
  delayChildren?: number;
}

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/** Same as Reveal: opacity 0->1, y 18->0, duration 0.55, easeOut */
const childVariantsNoBlur = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const childVariantsWithBlur = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function Stagger({
  children,
  className,
  staggerChildren = 0.12,
  delayChildren = 0.05,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        ...parentVariants,
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  /** If true, use blur-in like Reveal blur */
  blur?: boolean;
}

export function StaggerItem({ children, className, blur = true }: StaggerItemProps) {
  return (
    <motion.div
      variants={blur ? childVariantsWithBlur : childVariantsNoBlur}
      className={className}
    >
      {children}
    </motion.div>
  );
}
