"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Medilea's signature decorative background text: a giant uppercase
 * word/phrase sitting behind the hero's readable content. Unlike
 * GiantWatermark (single-color, always centered — Plumfix's treatment),
 * Medilea's source uses two distinct giant-text styles that can appear
 * together: a large green right-aligned "Text/Span-160px" and a smaller
 * navy left-aligned "Text/Span-120px" — hence a dedicated component rather
 * than overloading GiantWatermark with alignment/color props it was never
 * designed for.
 *
 * `variant="160"` renders the ml-span-160 scale (green, right-aligned);
 * `variant="120"` renders ml-span-120 (navy, left-aligned). Both use the
 * same slow opacity breathe as GiantWatermark, disabled under
 * prefers-reduced-motion.
 */
export function GiantSpanText({
  children,
  variant = "160",
  className,
}: {
  children: React.ReactNode;
  variant?: "160" | "120";
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={cn(
        variant === "160" ? "ml-span-160" : "ml-span-120",
        "pointer-events-none select-none",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: reduce ? 0.12 : [0.08, 0.14, 0.08] }}
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
