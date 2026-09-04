"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Marquee({
  items,
  className,
  itemClassName,
  speed = 28,
  renderItem,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  speed?: number;
  renderItem?: (item: string) => ReactNode;
}) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        reduce && "overflow-x-auto",
        className
      )}
    >
      <div
        className={cn("flex w-max gap-10", !reduce && "animate-marquee")}
        style={!reduce ? { animationDuration: `${speed}s` } : undefined}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn("flex shrink-0 items-center gap-2 whitespace-nowrap", itemClassName)}
          >
            {renderItem ? renderItem(item) : item}
          </span>
        ))}
      </div>
    </div>
  );
}
