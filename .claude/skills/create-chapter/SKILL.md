---
name: create-chapter
description: Build a new NCERT chapter page from a source PDF using the 2-stage pipeline — DeepSeek extracts a concise brief from the PDF (cheap), then Claude implements the page, widgets, and quiz from the brief (token-efficient). Always opens a PR. Use whenever the user says "build chapter X" or "add the next chapter" or hands you an NCERT PDF.
---

# Create Chapter

## When to invoke this skill

The user says any of:
- "Build Grade 11 Chapter 3" (or any other chapter)
- "Add the next Class 8 chapter"
- "Make a page from `NCERT-Math-11th/kemh103.pdf`"
- "Use the create-chapter skill to ..."

If the user just says "build a chapter" without specifying which one, **ask** which PDF / grade / chapter number before doing anything else.

## Prerequisites — check BEFORE starting Stage 1

Run all of these. If any fail, stop and ask the user to fix.

```bash
which pdftotext || echo "MISSING: brew install poppler"
which jq        || echo "MISSING: brew install jq"
[ -n "$DEEPSEEK_API_KEY" ] && echo "OK: DEEPSEEK_API_KEY set" || echo "MISSING: export DEEPSEEK_API_KEY=sk-..."
```

`DEEPSEEK_API_KEY` is one-time setup. If the user doesn't have one, tell them to make a key at <https://platform.deepseek.com/api_keys> and add it to their shell rc file (`~/.zshrc`).

## Inputs you need from the user (ask if missing)

1. **PDF path** (e.g., `NCERT-Math-11th/kemh103.pdf`)
2. **Slug** for the brief + data files (e.g., `grade-11-ch3`). Pattern: `<grade>-<chapter>`.
3. **Route** for the new page (e.g., `/read/grade-11/ch3`). Pattern: `/read/<grade>/<chapter>`.
4. **Sidebar position** (chapter number, 1-indexed).

If the user only said "Chapter 3 of Class 11," you can infer all four from context — confirm with the user before proceeding.

---

## Stage 1 — Generate the brief (DeepSeek, ~10 seconds, ~$0.02)

Run the helper script:

```bash
bash .claude/skills/create-chapter/scripts/make-brief.sh \
  <pdf-path> \
  <slug>
```

Example:
```bash
bash .claude/skills/create-chapter/scripts/make-brief.sh \
  NCERT-Math-11th/kemh103.pdf \
  grade-11-ch3
```

This writes `src/data/briefs/<slug>-brief.md`. Open it and skim to confirm:
- All chapter sections are represented (compare to the PDF's table of contents)
- A `## Quiz Questions` block with 25 JSON objects exists at the end
- No raw LaTeX or PDF artifacts leaked through

If the brief looks malformed, regenerate with a slight prompt tweak in `scripts/brief-prompt.txt`. Don't try to manually fix the brief — fix the prompt and rerun.

---

## Stage 2 — Build the chapter (Claude reads brief ONLY, never the PDF)

### 2a. Branch
```bash
git checkout main && git pull
git checkout -b feat/<slug>
```

### 2b. Quiz data file
Create `src/data/<slug>-questions.ts`. Convert the brief's JSON quiz block into TypeScript using the `QuizQuestion` type from `@/components/widgets/Quiz`. Export as `<UPPER_SLUG>_QUESTIONS`.

Example:
```ts
import { QuizQuestion } from "@/components/widgets/Quiz";
export const GRADE_11_CH3_QUESTIONS: QuizQuestion[] = [ ... ];
```

### 2c. Widgets
For each `**Widget idea:**` in the brief:
1. Check the widget table in `CLAUDE.md`. If an existing widget fits the concept, **reuse it** — don't rebuild.
2. Otherwise create a new file at `src/components/widgets/<Name>.tsx`:
   - Wrap in `<WidgetShell label="..." badge="..." />`
   - Use ONLY design tokens from `globals.css` (no hardcoded colors)
   - Use `btn-primary` / `btn-ghost` for buttons
   - Match the interaction quality of `LockerSimulation`, `CubeBuilder`, `VennDiagramExplorer` — these are the gold-standard references

### 2d. Chapter page
Create `src/app/read/<grade>/<chapter>/page.tsx` following the **Full Page Template** in `CLAUDE.md`. Copy the structure exactly. Key parts:
- `CHAPTERS` array for the sidebar — list ALL chapters in the grade, mark only the available ones with `href`
- Chapter header block (eyebrow, h1, metadata pills)
- One `<section>` per brief section, numbered sequentially starting at 1
- `<CalloutCard>` for every callout in the brief
- Widgets placed AFTER the relevant prose, never before
- Quiz section last (no number, just an h2)
- Footer: `Chapter N of M`

### 2e. Sync sidebars
If this chapter being added changes the available-chapter list for the grade, update the `CHAPTERS` arrays in **every** other chapter page of the same grade. Easy way: search for the sidebar array pattern and update them all.

### 2f. Homepage flip (only if this is the FIRST chapter of a grade)
If this is the first available chapter for that grade, edit `src/app/page.tsx`:
```ts
{ name: "Grade <N>", href: "/read/grade-<N>/ch1" },
```

### 2g. Verify the build
```bash
npm run build
```
Must complete with **0 errors**, and the new route must appear in the static-page list. If TypeScript errors, fix them — never silence with `any`.

---

## Stage 3 — Open the PR

```bash
git add -A
git status --short     # double-check the diff
git commit -m "feat: add <Grade> Chapter <N> (<Title>)

- Chapter page at /read/<grade>/ch<N>
- N new widgets: <list>
- 25-question quiz pool
- Homepage: <grade> flipped to Available (if applicable)"

git push -u origin feat/<slug>

gh pr create --title "feat: <Grade> Chapter <N> (<Title>)" \
  --body "$(cat <<'EOF'
## Summary
- <one-line: what was added and where>
- <one-line: which widgets are new vs reused>

## How to preview
The Vercel preview link will appear as a comment below within ~1 minute.

## Test plan
- [ ] /read/<grade>/ch<N> loads
- [ ] All widgets are interactive (no static placeholders)
- [ ] Quiz runs 10 questions and shows score at end
- [ ] Sidebar nav from this page to other available chapters works
- [ ] Existing chapters (e.g. /read/ch1) still work unchanged
EOF
)"
```

Return the PR URL to the user.

---

## Quality checklist (run this before opening the PR)

Be honest — if you can't tick all of these, fix it first or flag the gap in the PR description.

- [ ] **Every concept** from the brief is in the page (sections, callouts, or widget content).
- [ ] Prose density: ≤ 2 paragraphs before a visual break (widget, callout, or table).
- [ ] All widgets are **genuinely interactive** — sliders/buttons/inputs that change something visible. No static SVGs masquerading as widgets.
- [ ] Quiz file imports without errors. All `answer` indices are valid for their `options` array.
- [ ] No hardcoded colors. Every color is `var(--something)`.
- [ ] No exercises copied from the PDF. The brief should have stripped these — if any slipped through, remove them.
- [ ] Sidebar CHAPTERS arrays match across all chapters in the grade (no drift).
- [ ] Homepage Grade-X href matches the chapter route.

---

## What you do NOT do

- **Don't read the raw PDF.** That defeats the whole point of Stage 1. The brief is the only input for Stage 2.
- **Don't push to main directly.** Always a feature branch + PR.
- **Don't skip the brief** because "this chapter is well-known." NCERT framing, Indian mathematicians, specific worked examples matter — generic knowledge of the topic will miss them.
- **Don't ship a chapter without the quiz file** populated. The quiz is part of the chapter.

---

## Cost reference

| Stage | Tokens / API | Approx cost per chapter |
|---|---|---|
| Stage 1 (DeepSeek) | ~50K input, ~3K output via deepseek-chat | $0.01 – $0.03 |
| Stage 2 (Claude) | ~3K brief + page generation | (already part of this session) |

If Claude read the raw PDF directly instead of using the brief, Stage 2 alone would cost ~$2-3 in input tokens for a typical NCERT chapter. The pipeline is **~100× cheaper**.
