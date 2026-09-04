import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

const CONCEPTS = [
  { href: "/concept-1", label: "Concept 1" },
  { href: "/concept-2", label: "Concept 2" },
  { href: "/concept-3", label: "Concept 3" },
  { href: "/concept-4", label: "Concept 4" },
  { href: "/concept-5", label: "Concept 5" },
  { href: "/concept-6", label: "Concept 6" },
  { href: "/concept-7", label: "Concept 7" },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full px-8 py-16 sm:px-16">
      <h1 className="mb-12 text-3xl font-bold">Smile Loft Dental — Landing Page Concepts</h1>
      <ul className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:gap-16">
        {CONCEPTS.map((c, i) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[1920/1000] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={withBasePath(`/thumbnails/concept-${i + 1}.jpg`)}
                  alt={`${c.label} preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority={i < 2}
                />
              </div>
              <div className="px-5 py-4">
                <span className="text-lg font-semibold underline-offset-4 group-hover:underline">
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
