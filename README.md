# Smile Loft Dental — Landing Page Concepts

Five landing-page design concepts for Smile Loft Dental's "Free Exam & X-Ray" offer, built for internal review and stakeholder sign-off before a full site rebuild.

Built with Next.js 16, React 19, Tailwind CSS v4, and framer-motion. Deployed as a static export via GitHub Pages.

## Concepts

| # | Route | Direction |
|---|-------|-----------|
| 1 | `/concept-1` | Light, airy, glassmorphism-inspired |
| 2 | `/concept-2` | Warm cream/brown palette, click-to-reveal problem/solution cards |
| 3 | `/concept-3` | Dark, bold, gradient accents |
| 4 | `/concept-4` | Editorial dark hero with giant typographic watermark |
| 5 | `/concept-5` | Cinematic video hero, bottom-anchored asymmetric layout |

## Local development

```bash
cd app
npm install
npm run dev
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds a static export and publishes it to GitHub Pages.
