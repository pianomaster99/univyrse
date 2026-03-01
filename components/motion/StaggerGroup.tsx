"use client";

import { motion } from "framer-motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

const childVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function StaggerGroup({
  children,
  className,
  staggerChildren = 0.12,
  delayChildren = 0.06,
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: { staggerChildren, delayChildren },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
}
