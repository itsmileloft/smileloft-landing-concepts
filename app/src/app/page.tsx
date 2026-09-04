import Link from "next/link";

const CONCEPTS = [
  { href: "/concept-1", label: "Concept 1" },
  { href: "/concept-2", label: "Concept 2" },
  { href: "/concept-3", label: "Concept 3" },
  { href: "/concept-4", label: "Concept 4" },
  { href: "/concept-5", label: "Concept 5" },
  { href: "/concept-6", label: "Concept 6" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-1 flex-col justify-center px-6 py-16">
      <h1 className="mb-6 text-2xl font-bold">Smile Loft Dental — Landing Page Concepts</h1>
      <ul className="flex flex-col gap-3">
        {CONCEPTS.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className="text-lg underline underline-offset-4 hover:opacity-70">
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
