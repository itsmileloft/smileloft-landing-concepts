"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Genuine scroll-position-linked motion (not just a viewport-triggered
 * fade): tracks this element's progress through the viewport with
 * useScroll + useTransform and maps it to a translateY / scale, so the
 * element visibly moves as the user scrolls rather than animating once.
 */
export function Parallax({
  children,
  className,
  yRange = [60, -60],
  scaleRange,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  /** [start, end] px offset applied across the scroll range. */
  yRange?: [number, number];
  /** Optional [start, end] scale applied across the scroll range. */
  scaleRange?: [number, number];
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : yRange);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : scaleRange ?? [1, 1]
  );

  const MotionComponent = motion[Component];

  return (
    <MotionComponent ref={ref} className={className} style={{ y, scale }}>
      {children}
    </MotionComponent>
  );
}

/**
 * Hero-specific parallax: shifts hero content at a different rate than the
 * hero background image sitting behind it, creating a depth effect as the
 * user scrolls past the hero. Returns a tuple (not an object) so the ref is
 * used directly as `ref={heroRef}` rather than accessed off an intermediate
 * object, per the react-hooks/refs rule.
 */
export function useHeroParallax(distance = 120) {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, distance]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.6]);
  return [heroRef, { y, opacity }] as const;
}
