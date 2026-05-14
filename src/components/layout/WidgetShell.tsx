/**
 * WidgetShell — the rounded card-with-header that wraps every interactive widget.
 *
 * Provides consistent chrome (label bar on top, optional badge on the right,
 * padded body below). Every widget in src/components/widgets/ uses this so
 * all widgets look the same from the outside.
 *
 * Props:
 *   label    — short uppercase text in the header bar. Example: "Interactive · Locker Simulation".
 *   badge    — optional. A small pill on the right for status or count. Example: "1 of 10".
 *   children — the widget's actual content (controls, visualization, etc.).
 *
 * Used by: every widget in src/components/widgets/. NOT used directly by chapter pages —
 *          the widget already wraps itself, so pages just render <SomeWidget />.
 */
interface WidgetShellProps {
  label: string;
  badge?: string;
  children: React.ReactNode;
}

export default function WidgetShell({ label, badge, children }: WidgetShellProps) {
  return (
    <div className="rounded-xl border-2 bg-white my-6 overflow-hidden"
      style={{
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}>
        <span className="text-[10px] font-bold uppercase tracking-wider"
          style={{ color: "var(--accent)" }}>
          {label}
        </span>
        {badge && (
          <span className="text-[10px] border rounded px-2 py-0.5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
