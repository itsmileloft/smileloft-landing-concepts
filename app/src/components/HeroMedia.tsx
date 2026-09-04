"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { unsplashUrl } from "@/lib/stock-photos";

export type HeroPhoto = {
  id: string;
  alt: string;
};

/**
 * Full-bleed Ken Burns-style hero background: crossfades between a handful
 * of stock photos with a slow continuous zoom. Built with real images +
 * framer-motion (no third-party video hotlinking). Freezes on the first
 * frame when prefers-reduced-motion is set.
 */
export function HeroMedia({
  photos,
  overlayClassName,
  className,
  intervalMs = 6000,
  quality = 80,
}: {
  photos: HeroPhoto[];
  overlayClassName?: string;
  className?: string;
  intervalMs?: number;
  quality?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || photos.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduce, photos.length, intervalMs]);

  const active = photos[reduce ? 0 : index];

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
      <AnimatePresence initial={false}>
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? undefined : { scale: 1 }}
            animate={reduce ? undefined : { scale: 1.12 }}
            transition={
              reduce
                ? undefined
                : { duration: (intervalMs / 1000) * photos.length, ease: "linear" }
            }
          >
            <Image
              src={unsplashUrl(active.id, 1920, quality)}
              alt={active.alt}
              fill
              sizes="100vw"
              quality={quality}
              preload={index === 0}
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
