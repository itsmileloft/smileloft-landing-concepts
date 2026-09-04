# Concept build notes

Reference this file when building a new concept from a Framer link instead of
re-reading every existing concept page. Update it whenever a new
reusable pattern, fix, or convention is established.

## Workflow for a new concept from a Framer link

1. Connect: `npx @framer/agent@latest session new "<url>"`.
2. Pull real data only (do not guess): color/text tokens via
   `getDescendantReferencesOfTypes` on `ColorStyleTokenNode`/`TextStylePresetNode`,
   top-level section list via `getNode` on the page's desktop breakpoint,
   hero structure via `serializeNodes` with `attributeFilter` on layout attrs
   (`width,height,maxWidth,padding,gap,layout,stackDirection,stackDistribution,$rect,fill,opacity,appearEffect`),
   and controls for any distinctive interactive component via `readComponentControls`.
3. Dispatch the actual page build as a background Agent with the full measured
   spec inline in the prompt — don't make the agent re-derive conventions,
   give it the "Established conventions" section below verbatim.
4. Verify independently after the agent reports back: `tsc --noEmit`,
   `npm run build` (check route count), `npm run lint`, spot-read the hero
   code for the claimed distinctive elements, curl the local dev server.
5. If the user hasn't asked to push, do NOT run any git command (not even
   `git status`) until they explicitly say to commit/push.
6. Update this file: bump the concept count, add the new concept's palette/
   font/component-scope name to the list below, note anything new learned.

## Established conventions (apply to every new concept without re-deriving)

- **Route naming**: `/concept-N` (plain sequential number), folder
  `src/app/concept-N/page.tsx`. Root `src/app/page.tsx` `CONCEPTS` array gets
  `{ href: "/concept-N", label: "Concept N" }` — no descriptive subtitle.
- **Scoped theme tokens**: each Framer-sourced concept gets its own isolated
  CSS class scope in `globals.css` (e.g. `.salonix`, `.plumfix`, `.silenus`,
  `.meddocx`, `.medilea`) with its own color variables and type-scale utility
  classes (breakpoints matching the real measured Framer breakpoints, usually
  ~768-810px and ~1200-1380px). Never edit another concept's scope block.
- **Fonts**: any concept-specific font goes in `src/app/layout.tsx` via
  `next/font/google`, as its own `--font-x` CSS variable, applied only inside
  that concept's scope class — never changes the site default (Inter).
  Always verify the font is actually available via
  `node_modules/next/dist/compiled/@next/font/dist/google/font-data.json`
  before assuming a fallback is needed.
- **Asset paths — `withBasePath()`**: the site deploys to GitHub Pages under
  a repo subpath. `next/link` hrefs auto-prefix; raw `<img>`/`<video>` src
  strings and `next/image` sources do NOT. Any reference to a `/public`
  asset (logo, `/bannerVideo.mp4`) MUST use `withBasePath()` from
  `src/lib/utils.ts`. `Header` already handles the logo internally — just
  pass theme props. This was a real live-site bug (logo/video 404s) fixed
  once and must not be reintroduced.
- **Logo chip color**: the Smile Loft logo file is a white-only wordmark. The
  `Header`'s `logoChipClassName` MUST be a genuinely dark color, not
  near-white — this caused an actual invisible-logo bug on Concept 6.
- **Hero height**: never use bare `min-h-screen` combined with large extra
  top padding — the sticky `Header` (~68px real height) stacks on top and
  pushes content below the fold. Use `min-h-[calc(100vh-68px)]` (or
  `min-h-[max(<floor>px,calc(100vh-68px))]` when a taller floor is needed)
  and drop redundant top padding. This was a recurring bug fixed across
  concepts 1, 3, 4, 5, 6.
- **"X-Ray" line-break**: at large hero type scales the hyphen in "X-Ray"
  can become a break point, splitting the word. Wrap it in
  `<span className="whitespace-nowrap">X-Ray</span>` inside the headline
  markup from the start.
- **Mobile sticky CTA**: every concept includes `<StickyCtaBar />` at the end
  (shared component, `md:hidden`, appears after scrolling past the hero),
  themed via its `className` prop to the concept's own accent color. The
  sticky `Header` itself is `sm:sticky` (desktop/tablet only) so it does not
  double up with the bottom bar on mobile.
- **FAQ**: always reuse the shared `FaqAccordion` component (real
  click-to-expand state), reskinned via `className`/`triggerClassName` props
  to the concept's palette — never build a duplicate accordion
  implementation when the section is a simple Q&A list.
- **Shared component library** (in `src/components/`, reuse before building
  new): `Header`, `Footer`, `LeadForm`, `ScrollReveal`/`ScrollRevealGroup`/
  `RevealItem`, `Marquee`, `SpotlightCard`, `AnimatedGradientText`,
  `ShimmerButton`, `BorderBeam`, `CountUp`, `FaqAccordion`, `HeroVideo`,
  `HeroMedia`, `Parallax`, `FlipRevealCard`, `ServicesTabs`,
  `TestimonialGrid`, `GiantWatermark`, `FloatingStatCard`,
  `ServiceAccordion`, `StickyCtaBar`.
- **Core dental offer content** (reuse verbatim across concepts for
  consistency): comprehensive exam ($250 value) + digital HD X-rays +
  personalized treatment plan + dedicated Q&A. No cost, no obligation,
  ~60 seconds to book. New + returning patients. 10 Maryland locations
  (`src/lib/locations.ts`). Same 5 FAQs across every concept. Nancy Foster's
  testimonial quote reused verbatim where a testimonial section exists.
  Footer: "© 2026 Smile Loft Dental LLC · Maryland".
- **Photography**: reuse the verified roster in `src/lib/stock-photos.ts`
  first; only add new IDs (curl -I verified 200) when genuinely needed, and
  avoid reusing the exact same portrait/team photos across concepts that
  both have a "team" section.
- **Team member entries**: each concept with a team/doctors section should
  write fresh names (not duplicate another concept's exact array).
- **Blog-style sections** from a source template: these don't map to a
  lead-gen landing page — skip entirely or make a very lightweight 2-3 card
  teaser, never a full blog with pagination.
- **Reduced motion**: every new animated component must branch on
  `useReducedMotion()` (framer-motion), matching the pattern already used
  throughout the shared component library.

## Concepts built so far

| # | Source template | Palette scope class | Distinctive element |
|---|---|---|---|
| 1 | (original) | — | glassmorphism, split hero |
| 2 | Salonix | `.salonix` | click-to-flip problem/solution cards |
| 3 | (original, dark) | — | full-bleed dark hero |
| 4 | Plumfix | `.plumfix` | giant faint watermark + red circle hero |
| 5 | Silenus | `.silenus` | bottom-anchored cinematic video hero |
| 6 | MedDocX | `.meddocx` | 3-column radial-gradient hero |
| 7 | Medilea | `.medilea` | giant background text + measured spring-physics entrance animation |

Update this table after every new concept.
