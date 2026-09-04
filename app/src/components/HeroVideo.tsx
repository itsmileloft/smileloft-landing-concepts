"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Full-bleed looping background video for a hero section, with a static
 * poster-frame fallback for prefers-reduced-motion (avoids autoplaying
 * motion for users who've asked not to see it).
 */
export function HeroVideo({
  src,
  poster,
  overlayClassName,
  className,
  /**
   * CSS object-position for the video/poster. Defaults to centered.
   * Use "right center" (etc.) when the video is landscape but the
   * container is portrait, so the crop favors one side instead of
   * cutting evenly off both edges.
   */
  focus = "center",
}: {
  src: string;
  poster?: string;
  overlayClassName?: string;
  className?: string;
  focus?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)} aria-hidden>
      {reduce ? (
        poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" className="h-full w-full object-cover" style={{ objectPosition: focus }} />
        ) : (
          <div className="h-full w-full bg-black" />
        )
      ) : (
        <video
          className="h-full w-full object-cover"
          style={{ objectPosition: focus }}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
