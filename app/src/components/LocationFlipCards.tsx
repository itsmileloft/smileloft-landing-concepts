"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { Clock, Phone } from "lucide-react";
import type { LocationDetail } from "@/lib/locations";
import { cn } from "@/lib/utils";

/**
 * A horizontally-scrollable row of location cards. Each card flips (true
 * 3D rotateY, not a cross-fade) on click to reveal the address, hours,
 * and phone on its back face. The row deliberately shows a partial
 * next-card peek and a scroll-progress bar so the "this scrolls" affordance
 * is obvious without relying on a hover-only cue (mobile has no hover), and
 * supports mouse click-and-drag scrolling (native browsers only support
 * touch/trackpad swipe on overflow-x containers, not mouse drag).
 */
export function LocationFlipCards({
  locations,
  className,
  cardBgClassName = "bg-white",
  frontTextClassName = "text-[#48120e]",
  backBgClassName = "bg-[#48120e]",
  backTextClassName = "text-white",
  accentClassName = "text-[#8a7a63]",
  progressBarClassName = "bg-[#8a7a63]",
  ctaClassName = "bg-white text-[#48120e]",
  renderPhoto,
}: {
  locations: LocationDetail[];
  className?: string;
  cardBgClassName?: string;
  frontTextClassName?: string;
  backBgClassName?: string;
  backTextClassName?: string;
  accentClassName?: string;
  progressBarClassName?: string;
  ctaClassName?: string;
  renderPhoto?: (loc: LocationDetail, index: number) => ReactNode;
}) {
  const reduce = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Click-and-drag scrolling state. `dragged` distinguishes a drag from a
  // click so dragging past a card doesn't also flip it.
  const drag = useRef({ active: false, startX: 0, startScroll: 0, dragged: false });

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }

  // Drag listeners are attached to `window` for the duration of the drag
  // (not just the scroller element) so fast mouse movement that momentarily
  // passes over a child card button — which would otherwise swallow the
  // bubbling mousemove — doesn't interrupt the drag. `scroll-snap-type` is
  // toggled off for the duration too: browsers silently reject a
  // non-gesture `scrollLeft` assignment on a snap container, reverting it
  // right back to the current snap point, so scroll-snap has to be
  // suspended while we're driving the scroll position manually.
  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = scrollerRef.current;
      if (!el || !drag.current.active) return;
      const dx = e.clientX - drag.current.startX;
      if (Math.abs(dx) > 4) drag.current.dragged = true;
      el.scrollLeft = drag.current.startScroll - dx;
    }
    function onUp() {
      drag.current.active = false;
      const el = scrollerRef.current;
      if (el) el.style.scrollSnapType = "";
      setIsDragging(false);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  function onPointerDown(e: ReactMouseEvent) {
    const el = scrollerRef.current;
    if (!el) return;
    el.style.scrollSnapType = "none";
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, dragged: false };
    setIsDragging(true);
  }

  function toggle(i: number) {
    if (drag.current.dragged) return;
    setFlippedIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        onMouseDown={onPointerDown}
        className={cn(
          "flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden",
          isDragging ? "snap-none" : "snap-x snap-mandatory"
        )}
        style={{ WebkitOverflowScrolling: "touch", cursor: "grab" }}
      >
        {locations.map((loc, i) => {
          const isFlipped = flippedIndex === i;
          return (
            <div
              key={loc.name}
              className="shrink-0 snap-start [perspective:1200px]"
              style={{ width: "min(78vw, 300px)" }}
            >
              <motion.button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isFlipped}
                aria-label={
                  isFlipped
                    ? `${loc.fullName} details — tap to go back`
                    : `${loc.fullName} — tap to see details`
                }
                className="relative h-[420px] w-full text-left [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.6, ease: "easeInOut" }}
              >
                {/* Front face */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col overflow-hidden rounded-3xl shadow-sm [backface-visibility:hidden]",
                    cardBgClassName
                  )}
                >
                  <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                    {renderPhoto ? (
                      renderPhoto(loc, i)
                    ) : (
                      <div className="h-full w-full bg-black/10" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className={cn("text-xs font-bold uppercase tracking-wide", accentClassName)}>
                        Smile Loft
                      </p>
                      <h3 className={cn("mt-1 text-lg font-bold", frontTextClassName)}>{loc.name}</h3>
                      <p className={cn("mt-1 text-sm opacity-70", frontTextClassName)}>
                        {loc.city}, {loc.state}
                      </p>
                    </div>
                    <span className={cn("mt-4 text-xs font-bold uppercase tracking-wide", accentClassName)}>
                      Tap for details →
                    </span>
                  </div>
                </div>

                {/* Back face */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]",
                    backBgClassName
                  )}
                >
                  <div>
                    <p className={cn("text-xs font-bold uppercase tracking-wide opacity-70", backTextClassName)}>
                      Smile Loft
                    </p>
                    <h3 className={cn("mt-1 text-xl font-bold", backTextClassName)}>{loc.name}</h3>
                    <p className={cn("mt-3 text-sm leading-relaxed", backTextClassName)}>
                      {loc.address}
                      <br />
                      {loc.city}, {loc.state}
                    </p>

                    <div className={cn("mt-4 flex items-start gap-2 text-sm", backTextClassName)}>
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                      <div className="leading-relaxed opacity-90">
                        {loc.hours.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`tel:${loc.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className={cn("mt-3 flex items-center gap-2 text-sm font-semibold hover:underline", backTextClassName)}
                    >
                      <Phone className="h-4 w-4 shrink-0 opacity-70" />
                      {loc.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${loc.fullName} ${loc.address} ${loc.city} ${loc.state}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-center text-sm font-semibold",
                        ctaClassName
                      )}
                    >
                      Get Directions
                    </a>
                    <span className={cn("text-center text-xs font-bold uppercase tracking-wide opacity-70", backTextClassName)}>
                      ← Tap to go back
                    </span>
                  </div>
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Scroll progress bar — makes the horizontal-scroll affordance explicit */}
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-black/10">
        <div
          className={cn("h-full rounded-full transition-[width]", progressBarClassName)}
          style={{ width: `${Math.max(12, progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
