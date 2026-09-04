"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function AnimatedGradientText({
  children,
  className,
  from = "var(--accent-1)",
  via = "var(--accent-2)",
  to = "var(--accent-1)",
}: {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}) {
  return (
    <span
      className={cn("gradient-text", className)}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${via}, ${to})`,
      }}
    >
      {children}
    </span>
  );
}
