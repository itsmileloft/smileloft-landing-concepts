import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

const CONCEPTS = [
  { href: "/concept-5", label: "Concept 5 — Free Exam & X-Ray", thumb: "concept-5" },
  { href: "/concept-5-invisalign", label: "Concept 5 — Invisalign Consult", thumb: "concept-5-invisalign" },
  { href: "/concept-5-implants", label: "Concept 5 — Implants Consult", thumb: "concept-5-implants" },
  { href: "/concept-2", label: "Concept 2 — Free Exam & X-Ray", thumb: "concept-2" },
  { href: "/concept-2-invisalign", label: "Concept 2 — Invisalign Consult", thumb: "concept-2-invisalign" },
  { href: "/concept-2-implants", label: "Concept 2 — Implants Consult", thumb: "concept-2-implants" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col px-6 py-6 sm:px-10 sm:py-8 lg:h-screen lg:overflow-hidden">
      <h1 className="mb-4 shrink-0 text-xl font-bold sm:text-2xl">
        Smile Loft Dental — Landing Page Concepts
      </h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:min-h-0 lg:flex-1 lg:grid-cols-3">
        {CONCEPTS.map((c, i) => (
          <li key={c.href} className="lg:min-h-0">
            <Link
              href={c.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[1920/1000] min-h-0 overflow-hidden bg-neutral-100 lg:aspect-auto lg:flex-1">
                <Image
                  src={withBasePath(`/thumbnails/${c.thumb}.jpg`)}
                  alt={`${c.label} preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority={i < 3}
                />
              </div>
              <div className="shrink-0 px-4 py-3">
                <span className="text-sm font-semibold underline-offset-4 group-hover:underline sm:text-base">
                  {c.label}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
