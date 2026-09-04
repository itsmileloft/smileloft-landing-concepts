import { ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

/**
 * Salonix-style testimonial set: white cards on cream background with a
 * "01 / 06"-style numbered position indicator in the Red accent color.
 */
export function TestimonialGrid({ items, className }: { items: Testimonial[]; className?: string }) {
  const total = String(items.length).padStart(2, "0");
  return (
    <ScrollRevealGroup className={className ?? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
      {items.map((t, i) => (
        <RevealItem key={t.name}>
          <div className="flex h-full flex-col rounded-2xl border border-[#48120e]/10 bg-white p-7">
            <span className="sx-eyebrow">
              {String(i + 1).padStart(2, "0")} / {total}
            </span>
            <p className="sx-body mt-5 flex-1 text-[#48120e]/85">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 border-t border-[#48120e]/10 pt-4">
              <p className="text-base font-bold text-[#48120e]">{t.name}</p>
              <p className="sx-body-sm mt-0.5 text-[#48120e]/60">{t.role}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </ScrollRevealGroup>
  );
}
