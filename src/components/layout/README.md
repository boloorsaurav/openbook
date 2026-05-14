# `src/components/layout/` — page chrome

The reusable parts that wrap and frame every chapter page. Nothing in here is interactive content (no widgets, no quizzes) — these are the structural pieces that every page composes together.

## What lives here

| File | What it is | Where it's used |
|---|---|---|
| [Navbar.tsx](Navbar.tsx) | Sticky top bar with brand + page title | Top of every chapter page |
| [Sidebar.tsx](Sidebar.tsx) | Left rail listing all 7 chapters with the active one highlighted | Left of every chapter page |
| [CalloutCard.tsx](CalloutCard.tsx) | Green-tinted "this matters" highlight box | Inline within a chapter section |
| [WidgetShell.tsx](WidgetShell.tsx) | Card-with-header wrapper for interactive widgets | Used internally by every widget in `../widgets/` |

## How a chapter page uses these

```
Navbar            ← top
├── Sidebar       ← left rail
└── <main>        ← chapter content
    ├── section 1 prose
    ├── CalloutCard (when something needs to stand out)
    ├── <SomeWidget /> (which internally uses WidgetShell)
    └── Quiz (which also uses WidgetShell)
```

The full template is in the project's `CLAUDE.md` under "Full Page Template".

## What NOT to put here

- **No interactive widgets.** Those go in `../widgets/`. The rule of thumb: if it has its own state and the user can poke at it, it's a widget.
- **No chapter-specific code.** Anything in here gets used by every page. If it's only for one chapter, it doesn't belong here.
- **No data.** Quiz questions and chapter briefs live in `../data/`.

## When changes here matter

Editing any file in this folder affects every chapter page. Always check at least one chapter page after a change here. The widest-blast-radius file is `WidgetShell.tsx` — a change there reshapes every widget on every page.
