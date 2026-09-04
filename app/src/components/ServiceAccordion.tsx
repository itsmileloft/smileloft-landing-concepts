"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceAccordionItem = {
  serviceTitle: string;
  price: string;
  shortDescription: string;
};

/**
 * Silenus's "service-accordion" component: a click-to-expand row (real
 * useState toggle, not hover/CSS-only) showing a service title + price
 * always visible, with a short description that expands/collapses below.
 * `defaultOpenIndex` mirrors the source template's default-closed /
 * default-open row variants (pass the index of the row that should start
 * expanded, or -1 for all-closed).
 */
export function ServiceAccordion({
  items,
  defaultOpenIndex = 0,
  className,
}: {
  items: ServiceAccordionItem[];
  defaultOpenIndex?: number;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);
  const reduce = useReducedMotion();

  return (
    <div className={cn("flex flex-col divide-y divide-[#bb9d81]/15 border-y border-[#bb9d81]/15", className)}>
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={item.serviceTitle}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${i}`}
              id={`service-trigger-${i}`}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="sl-h24">{item.serviceTitle}</span>
              <span className="flex shrink-0 items-center gap-4">
                <span className="sl-p16 whitespace-nowrap">{item.price}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#bb9d81]/40 text-[#bb9d81]"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`service-panel-${i}`}
                  role="region"
                  aria-labelledby={`service-trigger-${i}`}
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="sl-p18 pb-6 max-w-xl">{item.shortDescription}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
