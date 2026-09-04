"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Plumfix's signature hero treatment: a massive, very faint background
 * wordmark sitting behind the readable H1 — purely decorative, not meant to
 * be read line-by-line. Uses the `pf-h1b` type scale (455px desktop / 280px
 * tablet / 126px phone Bebas Neue, defined in globals.css). A slow, subtle
 * opacity breathe is applied on top of the base low opacity; disabled under
 * prefers-reduced-motion, where it simply renders static.
 */
export function GiantWatermark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={cn(
        "pf-h1b pointer-events-none select-none whitespace-nowrap text-white",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: reduce ? 0.2 : [0.16, 0.22, 0.16] }}
      transition={
        reduce
          ? { duration: 0.6 }
          : { opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" } }
      }
    >
      {children}
    </motion.div>
  );
}
