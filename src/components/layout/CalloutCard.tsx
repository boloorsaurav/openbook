/**
 * CalloutCard — a green-tinted highlight box for "this matters" content.
 *
 * Use it for key rules, definitions worth emphasising, or puzzle statements
 * that should stand out from the surrounding prose.
 *
 * Props:
 *   title    — small uppercase label above the content. Defaults to "Key Idea".
 *   children — the content of the box. Plain text or JSX.
 *
 * Used by: chapter pages, inline within a section's prose.
 *
 * Gotchas:
 *   - Uses --green tokens (semantic "important" colour). Don't restyle to
 *     --accent — that breaks the colour rule in CLAUDE.md.
 *   - Has its own vertical margin (my-5); don't wrap it in another spacing div.
 */
interface CalloutCardProps {
  title?: string;
  children: React.ReactNode;
}

export default function CalloutCard({ title = "Key Idea", children }: CalloutCardProps) {
  return (
    <div className="rounded-lg px-5 py-4 my-5 border"
      style={{
        background: "var(--green-light)",
        borderColor: "var(--green-border)",
      }}>
      <p className="text-[10px] font-bold uppercase tracking-wider mb-2"
        style={{ color: "var(--green-dark)" }}>
        {title}
      </p>
      <div className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
        {children}
      </div>
    </div>
  );
}
