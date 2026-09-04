"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function BorderBeam({
  children,
  className,
  color = "var(--accent-1)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative rounded-[inherit]", className)}>
      {children}
      {!reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[-2px] rounded-[inherit] animate-[beam-rotate_4s_linear_infinite]"
          style={{
            padding: 2,
            background: `conic-gradient(from var(--beam-angle, 0deg), transparent 0%, ${color} 15%, transparent 30%)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}
    </div>
  );
}
