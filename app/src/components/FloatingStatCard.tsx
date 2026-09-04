"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Plumfix's floating white "Happy Customer"-style card: a compact card
 * (304px measured width) that overlaps/anchors near the hero photo, on an
 * off-white surface. Given a gentle continuous float so it reads as an
 * anchored, alive UI element rather than static decoration — disabled
 * under prefers-reduced-motion.
 */
export function FloatingStatCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={
        reduce
          ? { duration: 0.5 }
          : { y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }
      }
      className={cn(
        "w-[260px] rounded-2xl bg-[#f5f1ec] p-5 shadow-2xl sm:w-[304px]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
