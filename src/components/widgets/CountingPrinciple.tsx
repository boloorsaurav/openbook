"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const PRESETS = [
  { label: "Meal: soup × main × dessert", stages: [3, 5, 2], repeat: false, names: ["soup", "main", "dessert"] },
  { label: "PIN: 4 digits, repeat allowed", stages: [10, 10, 10, 10], repeat: true, names: ["d1", "d2", "d3", "d4"] },
  { label: "PIN: 4 digits, no repeat", stages: [10, 9, 8, 7], repeat: false, names: ["d1", "d2", "d3", "d4"] },
  { label: "ROSE — 4 letters, no repeat", stages: [4, 3, 2, 1], repeat: false, names: ["L1", "L2", "L3", "L4"] },
  { label: "ROSE — 4 letters, repeat", stages: [4, 4, 4, 4], repeat: true, names: ["L1", "L2", "L3", "L4"] },
];

export default function CountingPrinciple() {
  const [idx, setIdx] = useState(0);
  const p = PRESETS[idx];
  const total = p.stages.reduce((a, b) => a * b, 1);

  return (
    <WidgetShell label="Fundamental Counting" badge="m × n × p">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        If you fill several stages independently, the total ways multiply. Notice the difference
        between &quot;repetition allowed&quot; (each stage has the same options) and &quot;no repetition&quot; (one fewer
        option each time).
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((preset, i) => (
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
            {preset.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center mb-4">
        {p.stages.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="rounded-lg px-3 py-2 text-center"
              style={{
                background: "var(--green-light)",
                border: "1.5px solid var(--green-border)",
                minWidth: 64,
              }}
            >
              <p className="text-[9px] font-bold uppercase" style={{ color: "var(--green-dark)" }}>
                {p.names[i]}
              </p>
              <p className="text-xl font-extrabold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
                {s}
              </p>
              <p className="text-[9px]" style={{ color: "var(--text-muted)" }}>
                ways
              </p>
            </div>
            {i < p.stages.length - 1 && (
              <span className="text-2xl font-bold" style={{ color: "var(--text-muted)" }}>
                ×
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        className="rounded-lg p-3 text-center"
        style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
          Total arrangements ({p.repeat ? "repetition allowed" : "no repetition"})
        </p>
        <p className="text-2xl font-extrabold" style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>
          {total.toLocaleString()}
        </p>
        <p className="text-[10px] font-mono mt-1" style={{ color: "var(--text-muted)" }}>
          {p.stages.join(" × ")} = {total}
        </p>
      </div>
    </WidgetShell>
  );
}
