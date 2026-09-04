"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky bottom CTA bar that fades/slides in after the user
 * scrolls past the hero. Desktop relies on the sticky header CTA instead
 * (see Header's `sm:sticky`), so this stays hidden at `md:` and above to
 * avoid two competing sticky bars.
 */
export function StickyCtaBar({
  label = "Book My Free Exam & X-Ray",
  targetId = "lead-form",
  className,
  showAfter = 500,
}: {
  label?: string;
  targetId?: string;
  className?: string;
  showAfter?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > showAfter);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-[130%]"
      )}
    >
      <a
        href={`#${targetId}`}
        className={cn(
          "w-full max-w-[420px] rounded-full py-3.5 text-center text-sm font-bold text-white shadow-2xl",
          className
        )}
      >
        {label}
      </a>
    </div>
  );
}
