# Openbook Wiki

A self-contained HTML wiki documenting how the Openbook codebase fits together.

## Two style variants

You're looking at two parallel mini-wikis with the **same content**, different presentation. Open each one and pick which feels better:

- **Variant A — `variant-a-openbook/index.html`**
  Matches the Openbook site's visual style (Outfit + Inter fonts, sage/cream colors). Each page has a sticky left sidebar. Technical details are tucked into expandable "Deep dive" boxes so PMs can skim and engineers can drill down.

- **Variant B — `variant-b-generic/index.html`**
  Cleaner, more clinical docs-site look (system fonts, white background). Top horizontal nav. Each page has a "For PMs / For engineers" toggle at the top — flip between two complete tracks of writing pitched at different audiences.

## How to open

Just double-click the `index.html` file inside either folder. Everything works offline — plain HTML + vanilla JS, no build step, no server needed.

## Pages

Both variants include the same six pages:

1. **Index** — what Openbook is, the tech stack at a glance, the top-level repo map.
2. **Architecture** — the three-layer model (layout / widgets / pages), request flow, data flow.
3. **Design System** — fonts, color tokens, buttons, WidgetShell anatomy.
4. **Widgets** — the widget pattern, full catalogue, case studies.
5. **Chapter Pipeline** — how a new NCERT chapter goes from PDF to a shipped page via the 2-stage DeepSeek → Claude pipeline.
6. **File Tour** — annotated walkthrough of the ten files that matter most.

## What's NOT in the wiki this round

Deploy / GitHub / Vercel workflow has its own conventions — that's a separate addition for later. The wiki currently focuses on the **code** (frontend + chapter-building skill).
