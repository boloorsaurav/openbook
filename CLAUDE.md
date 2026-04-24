@AGENTS.md

# Openbook — Project Context

Interactive NCERT textbook reader. Each chapter is a Next.js page with prose, callout cards, interactive widgets, and a quiz. Live at **openbook-ncert.vercel.app**.

**Stack:** Next.js (App Router, static export) · Tailwind CSS v4 · Framer Motion · KaTeX

---

## Design System

### Fonts

Two fonts loaded via `next/font/google` in `src/app/layout.tsx`:

| Variable | Font | Used for |
|---|---|---|
| `--font-display` | **Outfit** (wght 400–900) | All headings (h1–h6), section numbers, brand name, buttons |
| `--font-body` | **Inter** (wght 400–700) | All body text, prose, UI labels |

Headings automatically get Outfit via globals.css:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display), 'Outfit', system-ui, sans-serif;
  letter-spacing: -0.02em;
}
```

### Color Tokens (`src/app/globals.css`)

```css
/* Surfaces */
--bg:              #FAFAF8;   /* page background */
--bg-card:         #FFFFFF;   /* card/widget background */
--bg-sidebar:      #F2F2F0;   /* sidebar + widget headers */

/* UI accent — near-black. Used for: sidebar active, buttons, dots, brand */
--accent:          #1C1C1A;
--accent-light:    #F2F2F0;   /* active background tint */
--accent-border:   #C4C4BF;
--accent-dark:     #000000;
--accent-shadow:   #000000;   /* 3D button shadow */

/* Semantic green — ONLY for interactive content outcomes */
/* Use for: open lockers, correct quiz answers, completion states */
--green:           #5F8A6A;
--green-light:     #EFF5F1;
--green-border:    #A8CAB0;
--green-dark:      #2A4E33;

/* Semantic yellow — in-progress / being-toggled states */
--yellow:          #D97706;
--yellow-light:    #FEF3C7;
--yellow-border:   #FCD34D;

/* Semantic red — wrong answers, errors */
--red:             #DC2626;
--red-light:       #FEF2F2;
--red-border:      #FECACA;
--red-dark:        #991B1B;

/* Typography */
--text:            #1C1C1A;   /* headings, strong text */
--text-muted:      #8F8F8A;   /* body prose */
--text-light:      #C4C4BF;   /* labels, disabled, secondary */

/* Structure */
--border:          #E6E6E2;
--border-strong:   #C4C4BF;
--shadow:          0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
```

**Color rules:**
- `--accent` = near-black. UI chrome only (buttons, sidebar border, brand).
- `--green` = sage green. Semantic only — correct/complete/open states in widgets and quiz.
- Never use `--accent` where you mean "correct answer" — use `--green`.
- Never use `--green` for generic UI elements — use `--accent`.

### Global Button Classes

Defined in `globals.css`. Use these classes directly on `<button>` elements — no inline styles needed.

```tsx
// Primary: near-black with 3D press shadow
<button className="btn-primary">▶ Run</button>

// Ghost: white with grey shadow
<button className="btn-ghost">Reset</button>
```

Both buttons use Outfit 700 at 13px and have `translateY(2px)` on `:active` for the press feel.

---

## Component Library

All components are in `src/components/`.

### `<Navbar title="..." />`

Sticky top bar. Shows "Openbook" brand (Outfit, `--accent`) + a divider + the page title.

```tsx
import Navbar from "@/components/layout/Navbar";
<Navbar title="Class 8 Math · Playing with Numbers" />
```

### `<Sidebar chapters={CHAPTERS} activeChapter={N} />`

Left rail showing all chapters in the grade. Active chapter gets a black left border + bold text. Unavailable chapters are grayed out.

```tsx
import Sidebar, { Chapter } from "@/components/layout/Sidebar";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Playing with Numbers", href: "/read/ch2", available: true },
  { number: 3, title: "Understanding Quadrilaterals", available: false },
  // ... all 7 chapters always listed
];

<Sidebar chapters={CHAPTERS} activeChapter={2} />
```

**Always list all 7 chapters.** Set `available: true` only for chapters that have a page. Set `href` only when available. When a new chapter page is built, flip its `available` and add `href`.

### `<CalloutCard title="Key Idea">` 

Highlighted info box. Light gray background with near-black text. Use for key rules, definitions worth emphasising, puzzle statements.

```tsx
import CalloutCard from "@/components/layout/CalloutCard";

<CalloutCard title="Units Digit Rule">
  A perfect square can only end in <strong>0, 1, 4, 5, 6, or 9</strong>.
</CalloutCard>
```

### `<WidgetShell label="..." badge="...">`

Wrapper for all interactive widgets. Provides the labeled header bar + card shell. Individual widgets use this internally — you don't need to wrap them manually.

### `<Quiz pool={QUESTIONS} count={10} />`

Renders a 10-question quiz randomly sampled from a pool. Shows progress bar, hint-on-demand, correct/wrong highlighting (green/red), explanation after answering, and a score screen at the end.

```tsx
import Quiz from "@/components/widgets/Quiz";
import { CH2_QUESTIONS } from "@/data/ch2-questions";

<Quiz pool={CH2_QUESTIONS} />
// count defaults to 10. Override: <Quiz pool={CH2_QUESTIONS} count={5} />
```

**Question format** (`src/data/chN-questions.ts`):
```typescript
import { QuizQuestion } from "@/components/widgets/Quiz";

export const CH2_QUESTIONS: QuizQuestion[] = [
  {
    question: "Which of the following is divisible by 9?",
    options: ["123", "252", "315", "412"],
    answer: 2,        // 0-indexed — "315" is correct
    hint: "Sum the digits and check if the total is divisible by 9.",
    explanation: "3+1+5 = 9, which is divisible by 9. So 315 is divisible by 9.",
  },
  // ... aim for 20–30 questions in the pool
];
```

---

## Page Structure

Every chapter page lives at `src/app/read/chN/page.tsx`. Copy this structure exactly.

### Chapter Header Block

```tsx
<section id="intro" className="scroll-mt-16">
  {/* Eyebrow: Chapter N · Book · Grade */}
  <p className="text-[10px] font-bold uppercase mb-2"
    style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
    Chapter 2 · Ganita Prakash · Grade 8
  </p>

  {/* Chapter title — h1, Outfit via CSS */}
  <h1 className="text-3xl font-extrabold mb-4 tracking-tight"
    style={{ color: "var(--text)" }}>
    Playing with Numbers
  </h1>

  {/* Metadata pills */}
  <div className="flex gap-2 flex-wrap mb-8">
    {["20 min", "2 interactive", "10-question quiz"].map((pill) => (
      <span key={pill} className="text-[11px] font-semibold px-3 py-1 rounded-full border"
        style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)", borderWidth: "1.5px" }}>
        {pill}
      </span>
    ))}
  </div>

  <hr className="mt-2 mb-8" style={{ borderColor: "var(--border)" }} />

  {/* First section header immediately follows */}
</section>
```

### Section Header (use for every section)

Each section gets a large Outfit 900 number + small eyebrow label + h2 title + a rule line.

```tsx
{/* Section N header */}
<div className="flex items-center gap-3 mb-3">
  <span className="leading-none shrink-0"
    style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>
    1
  </span>
  <div>
    <p className="mb-0.5"
      style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase",
               letterSpacing: "0.1em", color: "var(--text-muted)" }}>
      Introduction          {/* short eyebrow: "Introduction", "Section 2.1", "Patterns", etc. */}
    </p>
    <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
      Section Title Here
    </h2>
  </div>
</div>
<hr className="mb-6" style={{ borderColor: "var(--border)" }} />
```

Number sections sequentially (1, 2, 3 …) within the chapter. The quiz section does NOT get a number — use a plain h2 instead.

### Prose Paragraphs

```tsx
<p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
  Body text here. Use <strong>bold</strong> for key terms, <em>italic</em> for emphasis.
</p>
```

### Inline Code / Formula Block

```tsx
<p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
  style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
  expression here
</p>
```

### Quiz Section (always last)

```tsx
<section id="quiz" className="scroll-mt-16 mt-16">
  <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
    Check Your Understanding
  </h2>
  <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
    10 questions from the chapter. Take your time.
  </p>
  <Quiz pool={CH2_QUESTIONS} />
</section>
```

### Footer (always last)

```tsx
<div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
  <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 2 of 7</span>
</div>
```

---

## Full Page Template

```tsx
"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import Quiz from "@/components/widgets/Quiz";
import { CH2_QUESTIONS } from "@/data/ch2-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Playing with Numbers", href: "/read/ch2", available: true },
  { number: 3, title: "Understanding Quadrilaterals", available: false },
  { number: 4, title: "Data Handling and Graphing", available: false },
  { number: 5, title: "Introduction to Graphs", available: false },
  { number: 6, title: "Visualising Solid Shapes", available: false },
  { number: 7, title: "Algebraic Expressions and Identities", available: false },
];

export default function Chapter2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · Playing with Numbers" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={2} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 2 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Playing with Numbers
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["20 min", "2 interactive", "10-question quiz"].map((pill) => (
                <span key={pill} className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)", borderWidth: "1.5px" }}>
                  {pill}
                </span>
              ))}
            </div>
            <hr className="mt-2 mb-8" style={{ borderColor: "var(--border)" }} />

            {/* ── SECTION 1 ── */}
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>1</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Introduction</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Section One Title</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Prose goes here.
            </p>

            <CalloutCard title="Key Idea">
              Highlighted insight here.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 2.1</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Section Two Title</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Prose goes here.
            </p>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions from the chapter. Take your time.
            </p>
            <Quiz pool={CH2_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 2 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
```

---

## Existing Widgets

These widgets are already built and live in `src/components/widgets/`. Use them in new chapters where the concept fits, or build new ones following the same pattern (wrap in `<WidgetShell>`).

| Widget | Import | What it does |
|---|---|---|
| `<LockerSimulation />` | `@/components/widgets/LockerSimulation` | Animates 100 lockers being toggled. Demonstrates perfect squares. |
| `<OddSumBuilder />` | `@/components/widgets/OddSumBuilder` | Builds a square grid by adding L-shaped odd-number rings. |
| `<SquareRootEstimator />` | `@/components/widgets/SquareRootEstimator` | Number slider that estimates √n by locating it between known squares. |
| `<CubeBuilder />` | `@/components/widgets/CubeBuilder` | 3D cube built from unit cubes. Slider controls side length n. |
| `<Quiz pool={...} />` | `@/components/widgets/Quiz` | 10-question random quiz with hints, explanations, score screen. |

---

## NCERT Class 8 Chapters (Ganita Prakash)

| # | Title | Route | Status |
|---|---|---|---|
| 1 | A Square and A Cube | `/read/ch1` | ✅ Done |
| 2 | Playing with Numbers | `/read/ch2` | — |
| 3 | Understanding Quadrilaterals | `/read/ch3` | — |
| 4 | Data Handling and Graphing | `/read/ch4` | — |
| 5 | Introduction to Graphs | `/read/ch5` | — |
| 6 | Visualising Solid Shapes | `/read/ch6` | — |
| 7 | Algebraic Expressions and Identities | `/read/ch7` | — |

Source PDFs: `NCERT-Math-8th/hegp101.pdf` through `hegp107.pdf`

---

## Build & Deploy

```bash
npm run build          # verify clean compile before deploying
npx vercel --prod --yes  # deploy to openbook-ncert.vercel.app
```

No env vars needed. App is fully static — no server, no auth, no database.
