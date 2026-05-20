"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Preset = {
  label: string;
  A: string[];
  B: string[];
};

const PRESETS: Preset[] = [
  { label: "{a, b} × {1, 2}", A: ["a", "b"], B: ["1", "2"] },
  { label: "{x, y, z} × {1, 2}", A: ["x", "y", "z"], B: ["1", "2"] },
  { label: "{1, 2, 3} × {1, 2, 3}", A: ["1", "2", "3"], B: ["1", "2", "3"] },
  { label: "{red, blue} × {S, M, L}", A: ["red", "blue"], B: ["S", "M", "L"] },
];

export default function CartesianProductGrid() {
  const [idx, setIdx] = useState(0);
  const [swap, setSwap] = useState(false);
  const p = PRESETS[idx];
  const A = swap ? p.B : p.A;
  const B = swap ? p.A : p.B;

  return (
    <WidgetShell label="Cartesian Product" badge="A × B as a grid">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick two sets. The grid below shows every ordered pair (a, b) where a is from the first set
        and b is from the second. Notice the count is exactly n(A) × n(B).
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {PRESETS.map((preset, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: idx === i ? "var(--accent)" : "var(--bg-card)",
              color: idx === i ? "var(--bg-card)" : "var(--text)",
              borderColor: idx === i ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <button onClick={() => setSwap(!swap)} className="btn-ghost">
          ⇄ Swap to {swap ? "A × B" : "B × A"}
        </button>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <table className="mx-auto" style={{ borderCollapse: "separate", borderSpacing: 4 }}>
          <thead>
            <tr>
              <th></th>
              {B.map((b) => (
                <th
                  key={b}
                  className="text-xs font-bold px-2 py-1 rounded"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {b}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {A.map((a) => (
              <tr key={a}>
                <th
                  className="text-xs font-bold px-2 py-1 rounded"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {a}
                </th>
                {B.map((b) => (
                  <td
                    key={a + b}
                    className="px-2 py-1 rounded text-xs font-mono text-center"
                    style={{
                      background: "var(--green-light)",
                      color: "var(--green-dark)",
                      border: "1px solid var(--green-border)",
                      minWidth: 56,
                    }}
                  >
                    ({a}, {b})
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="mt-4 rounded-lg p-3 text-center"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p
          className="text-[10px] font-bold uppercase tracking-wider mb-1"
          style={{ color: "var(--text-muted)" }}
        >
          Cardinality check
        </p>
        <p
          className="text-lg font-extrabold"
          style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}
        >
          n({swap ? "B" : "A"}) × n({swap ? "A" : "B"}) = {A.length} × {B.length} = {A.length * B.length}
        </p>
      </div>
    </WidgetShell>
  );
}
