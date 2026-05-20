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

---

## How to ask Claude for a change

This section is for **you**, the human running this project. It's a short playbook of phrasings that work well — each one tells Claude exactly which files to look at, so it spends less time guessing.

**Build a new chapter page** (preferred — uses the 2-stage pipeline so Claude doesn't read raw PDFs)
> "Use the create-chapter skill to build Grade 11 Chapter 3."

The skill lives at `.claude/skills/create-chapter/SKILL.md`. It runs Stage 1 (DeepSeek extracts a brief from the PDF, cheap) then Stage 2 (Claude implements the page, widgets, quiz from the brief) and opens a PR. Requires `DEEPSEEK_API_KEY` in your shell env, one-time.

**Add a new interactive widget**
> "Add a widget for [concept] under `src/components/widgets/`. Wrap it in `<WidgetShell>`. Follow the existing widget pattern (e.g. see `LockerSimulation.tsx`). Don't add it to a chapter page yet — show me the widget first."

**Tweak the look of every page**
> "Change [thing] in `src/components/layout/[Navbar|Sidebar|CalloutCard|WidgetShell].tsx`. This affects every chapter — check at least one chapter page after the change."

**Edit just one chapter's content**
> "Edit `src/app/read/ch2/page.tsx` only. Don't touch any shared components. The change is just to the prose/sections in that one file."

**Add or change quiz questions**
> "Edit `src/data/ch2-questions.ts`. Keep the existing `QuizQuestion` shape. Aim for 20–30 questions in the pool."

**Verify a change you made**
> "Start the preview server and load chapter 2. Check the [thing] looks right. Show me a screenshot."

### Tips

- **Name the file.** Saying `ch2/page.tsx` beats saying "the chapter 2 page" — Claude doesn't have to search.
- **Ask Claude to stop before doing big things.** "Show me the plan first" or "tell me before you build a new widget" prevents over-eager building.
- **If something looks wrong, ask for a screenshot before fixing.** Claude can run the dev server and show you what it sees.
- **One thing at a time.** Two unrelated changes in one prompt makes it harder to undo if one of them is wrong.
