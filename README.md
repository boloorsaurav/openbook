# Openbook

Interactive textbooks for self-learners. Live at **[openbook-ncert.vercel.app](https://openbook-ncert.vercel.app)**.

## What's available today

- **NCERT Class 8 Math** (Ganita Prakash) — all 7 chapters, with interactive widgets, callout cards, and a quiz at the end of each chapter.

## Stack

- Next.js 16 (App Router, static export)
- React 19
- Tailwind CSS v4
- Framer Motion, KaTeX

No backend. No accounts. No tracking.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

Pushes to `main` auto-deploy to production via Vercel. Pull requests get their own preview URL automatically.
