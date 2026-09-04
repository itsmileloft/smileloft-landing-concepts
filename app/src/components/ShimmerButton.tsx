"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

export function ShimmerButton({
  children,
  onClick,
  className,
  type = "button",
  shimmer = true,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit";
  shimmer?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold whitespace-nowrap shadow-lg transition-shadow",
        className
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {shimmer && !reduce && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[-60%] w-[40%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/55 to-transparent animate-[shimmer-sweep_3.2s_ease-in-out_infinite]"
        />
      )}
    </motion.button>
  );
}
