"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { unsplashUrl } from "@/lib/stock-photos";
import { cn } from "@/lib/utils";

const SPRING = { type: "spring" as const, stiffness: 400, damping: 48, mass: 1 };

export type FlipRevealCardProps = {
  step: string;
  icon: ComponentType<{ className?: string }>;
  problemTitle: string;
  problemBody: string;
  solutionTitle: string;
  solutionBody: string;
  photoId: string;
  photoAlt: string;
  className?: string;
};

/**
 * Salonix's signature "Problem + Solution Card": a 371x400 white card that
 * flips between a closed "problem" face (icon + faint step-number watermark
 * + copy) and an opened "solution" face (photo + solution copy) on click.
 * Uses an explicit spring transition (stiffness 400, damping 48, mass 1)
 * matching the measured Salonix spec. Click/tap-triggered, not hover.
 */
export function FlipRevealCard({
  step,
  icon: Icon,
  problemTitle,
  problemBody,
  solutionTitle,
  solutionBody,
  photoId,
  photoAlt,
  className,
}: FlipRevealCardProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      aria-label={open ? `${solutionTitle} — tap to collapse` : `${problemTitle} — tap to reveal solution`}
      className={cn(
        "group relative flex h-[400px] w-full max-w-[371px] flex-col overflow-hidden rounded-3xl border border-[#48120e]/10 bg-white p-6 text-left shadow-sm outline-none transition-shadow focus-visible:ring-4 focus-visible:ring-[#8a7a63]/25",
        className
      )}
    >
      {/* Step-number watermark */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 select-none text-[120px] font-bold leading-none text-[#48120e]"
        animate={{ opacity: open ? 0.4 : 0.055 }}
        transition={reduce ? { duration: 0 } : SPRING}
      >
        {step}
      </motion.span>

      {/* Icon (closed-state indicator, top-left) */}
      <motion.div
        className="relative z-10 mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#48120e]/[0.06] text-[#8a7a63]"
        animate={{ opacity: open ? 0 : 1 }}
        transition={reduce ? { duration: 0 } : SPRING}
      >
        <Icon className="h-5 w-5" />
      </motion.div>

      {/* Photo (opened-state, fades in to full reveal) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl"
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : SPRING}
      >
        <Image
          src={unsplashUrl(photoId, 800)}
          alt={photoAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#48120e]/90 via-[#48120e]/35 to-[#48120e]/10" />
      </motion.div>

      {/* Problem face */}
      <motion.div
        className="relative z-10 mt-auto"
        animate={{ opacity: open ? 0 : 1 }}
        transition={reduce ? { duration: 0 } : SPRING}
      >
        <h3 className="sx-h6 text-[19px] leading-snug">{problemTitle}</h3>
        <p className="sx-body-sm mt-2 text-[#48120e]/70">{problemBody}</p>
      </motion.div>

      {/* Solution face */}
      <motion.div
        className="relative z-10 mt-auto overflow-hidden"
        initial={false}
        animate={
          open
            ? { height: "auto", opacity: 1 }
            : { height: 1, opacity: 0 }
        }
        transition={reduce ? { duration: 0 } : SPRING}
      >
        <p className="sx-eyebrow mb-1 text-white/90" style={{ color: "rgba(255,255,255,0.85)" }}>
          Solution
        </p>
        <h3 className="text-[19px] font-bold uppercase leading-snug text-white">{solutionTitle}</h3>
        <p className="sx-body-sm mt-2 text-white/85">{solutionBody}</p>
      </motion.div>

      <span className="sr-only">{open ? "Tap to view the concern" : "Tap to view how we solve it"}</span>

      <AnimatePresence>
        {!open && (
          <motion.span
            aria-hidden
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            className="absolute bottom-6 right-6 z-10 text-[11px] font-bold uppercase tracking-wide text-[#8a7a63]"
          >
            Tap for solution →
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
