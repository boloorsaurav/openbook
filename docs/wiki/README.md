# Openbook Wiki

A self-contained HTML wiki documenting how the Openbook codebase fits together.

## How to open

Just double-click `index.html`. Everything works offline — plain HTML + vanilla JS, no build
step, no server needed.

## What's here

A **single-page docs site** with side navigation. Sidebar clicks jump to anchored sections
within the same page (no reload). A **For PMs / For engineers** toggle in the sidebar flips
between two depth levels of writing; your choice persists across visits via `localStorage`.

## Sections

1. **Overview** — what Openbook is, the tech stack at a glance, the top-level repo map.
2. **Architecture** — the three-layer model (layout / widgets / pages), request flow, data flow.
3. **Design System** — fonts, color tokens, buttons, WidgetShell anatomy.
4. **Widgets** — the widget pattern, full catalogue, three case studies.
5. **Chapter Pipeline** — how a new NCERT chapter goes from PDF to a shipped page via the
   2-stage DeepSeek → Claude pipeline.
6. **File Tour** — annotated walkthrough of the ten files that matter most.

## Adding a new section

Everything lives in `index.html`. Two steps:

1. Append a new `<section id="my-new-section">…</section>` block to the `<main>` element.
2. Add one `<li><a href="#my-new-section">Link Label</a></li>` to the sidebar `<nav>` list at
   the top of the same file.

That's it. The scroll-spy in `wiki.js` will highlight the link as the user scrolls into the
section, and clicking the link will smooth-scroll there.

## Files

```
docs/wiki/
├── README.md       (this file)
├── index.html      everything — one big scrollable doc
├── styles.css      look and feel
└── wiki.js         scroll-spy + PM/Eng toggle
```

## What's NOT in the wiki yet

Deploy / GitHub / Vercel workflow. That's a separate addition for later — happy to add it as a
7th section when you want.
