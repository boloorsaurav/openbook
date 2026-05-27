"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Sample = { fn: (x: number) => number | null; label: string; a: number; limit: string; exists: boolean; note: string };

const SAMPLES: Sample[] = [
  {
    label: "f(x) = x²,  x → 2",
    fn: (x) => x * x,
    a: 2,
    limit: "4",
    exists: true,
    note: "Continuous polynomial — limit equals f(a) = 4.",
  },
  {
    label: "f(x) = (x² − 4)/(x − 2),  x → 2",
    fn: (x) => (Math.abs(x - 2) < 1e-9 ? null : (x * x - 4) / (x - 2)),
    a: 2,
    limit: "4",
    exists: true,
    note: "Function undefined at x = 2, but the limit still exists — it's 4 from both sides.",
  },
  {
    label: "Piecewise: 1 if x ≤ 0, 2 if x > 0,  x → 0",
    fn: (x) => (x <= 0 ? 1 : 2),
    a: 0,
    limit: "does not exist",
    exists: false,
    note: "Left limit is 1, right limit is 2. Different, so the limit doesn't exist.",
  },
  {
    label: "f(x) = |x|,  x → 0",
    fn: (x) => Math.abs(x),
    a: 0,
    limit: "0",
    exists: true,
    note: "Both sides approach 0. Limit exists even though the graph has a corner.",
  },
];

export default function LimitExplorer() {
  const [idx, setIdx] = useState(0);
  const s = SAMPLES[idx];

  const hs = [0.5, 0.1, 0.01, 0.001];
  const rows = hs.map((h) => {
    const leftX = s.a - h;
    const rightX = s.a + h;
    return { h, leftX, rightX, leftY: s.fn(leftX), rightY: s.fn(rightX) };
  });

  function fmt(v: number | null): string {
    if (v === null) return "undef";
    if (Math.abs(v) > 1e6) return v.toExponential(2);
    if (Number.isInteger(v)) return v.toString();
    return v.toFixed(5).replace(/\.?0+$/, "");
  }

  return (
    <WidgetShell label="Limit Approaches" badge="left vs right side">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        A limit exists at x = a if the function approaches the <em>same</em> value from both sides.
        Pick a function. Watch as h shrinks toward 0 — do the two columns agree?
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {SAMPLES.map((sample, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all text-left"
            style={{
              background: idx === i ? "var(--accent)" : "var(--bg-card)",
              color: idx === i ? "var(--bg-card)" : "var(--text)",
              borderColor: idx === i ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {sample.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg p-3 mb-3 overflow-x-auto" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
        <table className="w-full text-[11px]" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-strong)" }}>
              <th className="px-2 py-1 text-left" style={{ color: "var(--text-muted)" }}>h</th>
              <th className="px-2 py-1 text-right" style={{ color: "var(--text-muted)" }}>x = a − h</th>
              <th className="px-2 py-1 text-right font-bold" style={{ color: "var(--accent)" }}>f(a − h)</th>
              <th className="px-2 py-1 text-right" style={{ color: "var(--text-muted)" }}>x = a + h</th>
              <th className="px-2 py-1 text-right font-bold" style={{ color: "var(--green-dark)" }}>f(a + h)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none" }}>
                <td className="px-2 py-1 font-mono" style={{ color: "var(--text-muted)" }}>{r.h}</td>
                <td className="px-2 py-1 font-mono text-right" style={{ color: "var(--text-muted)" }}>{fmt(r.leftX)}</td>
                <td className="px-2 py-1 font-mono font-bold text-right" style={{ color: "var(--accent)" }}>{fmt(r.leftY)}</td>
                <td className="px-2 py-1 font-mono text-right" style={{ color: "var(--text-muted)" }}>{fmt(r.rightX)}</td>
                <td className="px-2 py-1 font-mono font-bold text-right" style={{ color: "var(--green-dark)" }}>{fmt(r.rightY)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="rounded-lg p-3 text-center"
        style={{
          background: s.exists ? "var(--green-light)" : "var(--red-light)",
          border: `1.5px solid ${s.exists ? "var(--green-border)" : "var(--red-border)"}`,
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: s.exists ? "var(--green-dark)" : "var(--red-dark)" }}>
          Limit
        </p>
        <p className="text-base font-extrabold" style={{ color: s.exists ? "var(--green-dark)" : "var(--red-dark)", fontFamily: "var(--font-display)" }}>
          lim x→{s.a} f(x) = {s.limit}
        </p>
        <p className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>{s.note}</p>
      </div>
    </WidgetShell>
  );
}
