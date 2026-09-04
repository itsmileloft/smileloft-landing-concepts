"use client";

import Image from "next/image";
import Link from "next/link";
import { cn, withBasePath } from "@/lib/utils";

export function Header({
  className,
  logoChipClassName = "bg-[#0f2e33]",
  ctaClassName = "bg-primary text-primary-foreground",
  ctaLabel = "Book Free Exam",
  formTargetId = "lead-form",
  sticky = true,
}: {
  className?: string;
  logoChipClassName?: string;
  ctaClassName?: string;
  ctaLabel?: string;
  formTargetId?: string;
  sticky?: boolean;
}) {
  return (
    <header
      className={cn(
        "z-50 w-full",
        sticky && "sm:sticky sm:top-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex h-9 items-center rounded-[10px] px-3 py-1.5",
              logoChipClassName
            )}
          >
            <Image
              src={withBasePath("/smileloft-logo.png")}
              alt="Smile Loft Dental"
              width={110}
              height={38}
              className="h-6 w-auto"
              preload
            />
          </span>
        </Link>
        <a
          href={`#${formTargetId}`}
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5",
            ctaClassName
          )}
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
