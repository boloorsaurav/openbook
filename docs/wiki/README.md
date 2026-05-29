# Openbook Wiki

A self-contained HTML wiki documenting how the Openbook codebase fits together.

## How to open

Just double-click `index.html`. Everything works offline — plain HTML + vanilla JS, no build
step, no server needed.

## What's here

A side-nav docs site with a **For PMs / For engineers** toggle in the sidebar. Flip between the
two tracks to read the same topic at different technical depths. Your choice persists across
pages via `localStorage`.

## Pages

1. **Overview** — what Openbook is, the tech stack at a glance, the top-level repo map.
2. **Architecture** — the three-layer model (layout / widgets / pages), request flow, data flow.
3. **Design System** — fonts, color tokens, buttons, WidgetShell anatomy.
4. **Widgets** — the widget pattern, full catalogue, three case studies.
5. **Chapter Pipeline** — how a new NCERT chapter goes from PDF to a shipped page via the
   2-stage DeepSeek → Claude pipeline.
6. **File Tour** — annotated walkthrough of the ten files that matter most.

## Adding a new page

1. Create `docs/wiki/new-page.html`. Copy the structure of an existing page (`architecture.html`
   is a good template).
2. Add one `<li><a href="new-page.html">New Page</a></li>` to the sidebar `<nav>` in **every**
   existing HTML file so the new page shows up in the nav from all of them.
3. That's it. No build step, no config file, no rebuilds.

## What's NOT in the wiki yet

Deploy / GitHub / Vercel workflow. That's a separate addition for later — happy to add it as a
7th page when you want.
