"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ServiceTabItem = {
  num: string;
  title: string;
  body: string;
};

/**
 * Salonix's numbered services tab selector ("01"-"05"): click a numbered
 * tab, the panel content crossfades. Custom lightweight implementation
 * (no headless-UI tabs primitive in this project) using framer-motion.
 */
export function ServicesTabs({
  items,
  className,
  activeTextClassName = "text-[#f6efe5]",
  activeBgClassName = "bg-[#48120e]",
  inactiveTextClassName = "text-[#48120e]",
  inactiveBorderClassName = "border-[#48120e]/12 hover:border-[#48120e]/30",
  numberClassName = "text-[#8a7a63]",
  numberActiveClassName = "text-[#f6efe5]/70",
  panelBorderClassName = "border-[#48120e]/10",
  eyebrowClassName = "text-xs font-bold uppercase tracking-[0.1em] text-[#8a7a63]",
  titleClassName = "mt-3 text-lg font-bold uppercase tracking-tight text-[#48120e]",
  bodyClassName = "mt-4 text-sm text-[#48120e]/75",
}: {
  items: ServiceTabItem[];
  className?: string;
  activeTextClassName?: string;
  activeBgClassName?: string;
  inactiveTextClassName?: string;
  inactiveBorderClassName?: string;
  numberClassName?: string;
  numberActiveClassName?: string;
  panelBorderClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = items[active];

  return (
    <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,340px)_1fr]", className)}>
      <div role="tablist" aria-label="Services" className="flex flex-col gap-1">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.num}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`service-panel-${item.num}`}
              id={`service-tab-${item.num}`}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors",
                isActive
                  ? cn("border-transparent", activeBgClassName, activeTextClassName)
                  : cn("bg-white", inactiveTextClassName, inactiveBorderClassName)
              )}
            >
              <span className={cn("text-sm font-bold tabular-nums", isActive ? numberActiveClassName : numberClassName)}>
                {item.num}
              </span>
              <span className="text-base font-bold uppercase tracking-tight">{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className={cn("relative min-h-[220px] overflow-hidden rounded-2xl border bg-white p-8 sm:p-10", panelBorderClassName)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.num}
            id={`service-panel-${current.num}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${current.num}`}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={eyebrowClassName}>{current.num} / {String(items.length).padStart(2, "0")}</span>
            <h3 className={titleClassName}>{current.title}</h3>
            <p className={bodyClassName}>{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
