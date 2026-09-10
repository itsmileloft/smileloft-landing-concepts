"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Doctor = {
  name: string;
  jobTitle: string;
  photo: string;
  bio: string;
};

/**
 * A row of doctor cards that starts as equal-width panels; hovering (or
 * focusing, for keyboard users) one grows it to span most of the row and
 * reveals the bio, while the others collapse to a narrow strip. Growth is
 * driven by a CSS transition on `flex-grow` (not Framer Motion's `animate`,
 * which was settling the tween in a fraction of the declared duration).
 */
export function DoctorExpandCards({
  doctors,
  className,
  cardBgClassName = "bg-white/5",
  overlayGradientClassName = "bg-gradient-to-t from-[#141414] via-[#141414]/25 to-transparent",
  nameClassName = "text-[#bb9d81]",
  jobTitleClassName = "text-white",
  bioClassName = "text-white/85",
}: {
  doctors: Doctor[];
  className?: string;
  cardBgClassName?: string;
  overlayGradientClassName?: string;
  nameClassName?: string;
  jobTitleClassName?: string;
  bioClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );
  const reduce = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const listener = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const growFor = (i: number) => {
    if (activeIndex === null) return 1;
    if (activeIndex === i) return 2.2;
    return 1;
  };

  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-stretch", className)}>
      {doctors.map((doctor, i) => {
        const isActive = activeIndex === i;

        return (
          <div
            key={doctor.name}
            className={cn(
              "group relative min-h-[420px] basis-0 cursor-pointer overflow-hidden rounded-3xl sm:min-h-[520px]",
              cardBgClassName,
              !reduce && "transition-[flex-grow] duration-700 ease-in-out"
            )}
            onMouseEnter={() => !isCoarsePointer && setActiveIndex(i)}
            onMouseLeave={() => !isCoarsePointer && setActiveIndex(null)}
            onFocus={() => !isCoarsePointer && setActiveIndex(i)}
            onBlur={() => !isCoarsePointer && setActiveIndex(null)}
            onClick={() => isCoarsePointer && setActiveIndex((current) => (current === i ? null : i))}
            tabIndex={0}
            style={{ flexGrow: growFor(i) }}
          >
            <div
              className={cn(
                "absolute inset-0",
                !reduce && "transition-transform duration-700 ease-in-out",
                isActive && "scale-105"
              )}
            >
              <Image
                src={doctor.photo}
                alt={doctor.name}
                fill
                sizes="(min-width: 640px) 45vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="brightness-[0.75]"
              />
            </div>
            <div className={cn("absolute inset-0", overlayGradientClassName)} />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className={cn("font-sans text-xl font-bold sm:text-2xl", nameClassName)}>{doctor.name}</h3>
              <p className={cn("mt-1 font-sans text-sm", jobTitleClassName)}>{doctor.jobTitle}</p>

              <motion.div
                className="grid"
                animate={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                transition={reduce ? { duration: 0 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="overflow-hidden">
                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -6 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn("mt-3 max-w-xl font-sans text-sm leading-relaxed sm:text-base", bioClassName)}
                  >
                    {doctor.bio}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
