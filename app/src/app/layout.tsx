import type { Metadata } from "next";
import { Inter, Fraunces, Rethink_Sans, Bebas_Neue, Bayon, Montserrat, Mona_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  display: "swap",
});

// Used only by /concept-2 (Salonix port) — scoped via the
// `font-rethink` class on that page's root wrapper so it doesn't affect
// the other concept pages, which keep Inter as their body font.
const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  display: "swap",
});

// Used only by /concept-4 (Plumfix port) — scoped via the `.plumfix`
// class on that page's root wrapper for its condensed display headings.
// Bebas Neue is available in next/font/google, so no fallback substitution
// was needed.
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Used only by /concept-5 (Silenus port) — scoped via the `.silenus` class
// on that page's root wrapper for its bold condensed display headings.
// Bayon is available in next/font/google (weight 400 only, which is its
// native bold-condensed cut), so no fallback substitution was needed.
const bayon = Bayon({
  variable: "--font-bayon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Used only by /concept-6 (MedDocX port) — scoped via the `.meddocx` class
// on that page's root wrapper. MedDocX's source uses Montserrat for both
// headings and body copy, unlike the other concepts which keep Inter as
// their body font.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Used only by /concept-7 (Medilea port) — scoped via the `.medilea` class
// on that page's root wrapper for its body/heading font. Mona Sans is
// available in next/font/google (variable weight, includes an italic
// style), so no fallback substitution was needed.
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

// Used only by /concept-7 (Medilea port) — scoped via the `.medilea` class,
// for its italic Playfair accent headings (H2-Playfair / Text-Span-90px /
// Text-Span-60px). Only the italic style + weight 500 are loaded since
// that's the only cut Medilea's design actually uses.
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Dental Exam & X-Ray | Smile Loft Dental",
  description:
    "Book a free comprehensive dental exam and digital HD X-ray at Smile Loft Dental. No cost, no obligation, takes about 60 seconds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${rethinkSans.variable} ${bebasNeue.variable} ${bayon.variable} ${montserrat.variable} ${monaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
