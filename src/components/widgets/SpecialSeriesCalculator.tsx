"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Kind = "n" | "n2" | "n3";

const SPECS: Record<Kind, { label: string; formula: string; expand: (k: number) => string; compute: (n: number) => number; closed: (n: number) => string }> = {
  n: {
    label: "Σ k = 1 + 2 + 3 + …",
    formula: "n(n + 1) / 2",
    expand: (k) => `${k}`,
    compute: (n) => (n * (n + 1)) / 2,
    closed: (n) => `${n}·${n + 1}/2 = ${(n * (n + 1)) / 2}`,
  },
  n2: {
    label: "Σ k² = 1² + 2² + 3² + …",
    formula: "n(n + 1)(2n + 1) / 6",
    expand: (k) => `${k}²`,
    compute: (n) => (n * (n + 1) * (2 * n + 1)) / 6,
    closed: (n) => `${n}·${n + 1}·${2 * n + 1}/6 = ${(n * (n + 1) * (2 * n + 1)) / 6}`,
  },
  n3: {
    label: "Σ k³ = 1³ + 2³ + 3³ + …",
    formula: "[ n(n + 1) / 2 ]²",
    expand: (k) => `${k}³`,
    compute: (n) => {
      const t = (n * (n + 1)) / 2;
      return t * t;
    },
    closed: (n) => {
      const t = (n * (n + 1)) / 2;
      return `[${n}·${n + 1}/2]² = ${t}² = ${t * t}`;
    },
  },
};

export default function SpecialSeriesCalculator() {
  const [kind, setKind] = useState<Kind>("n2");
  const [n, setN] = useState(5);
  const spec = SPECS[kind];

  const sum = spec.compute(n);
  const terms = Array.from({ length: n }, (_, i) => spec.expand(i + 1));

  return (
    <WidgetShell label="Special Series" badge="Σn, Σn², Σn³">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Three classic series have clean closed-form sums. Pick which one — and see the formula
        applied for any n.
      </p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {(Object.keys(SPECS) as Kind[]).map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className="text-xs font-bold px-2 py-2 rounded border transition-all"
            style={{
              background: kind === k ? "var(--accent)" : "var(--bg-card)",
              color: kind === k ? "var(--bg-card)" : "var(--text)",
              borderColor: kind === k ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            Σ{k === "n" ? "k" : k === "n2" ? "k²" : "k³"}
          </button>
        ))}
      </div>

      <div className="mb-3">
        <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
          Number of terms n = {n}
        </label>
        <input
          type="range"
          min={1}
          max={20}
          step={1}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Direct expansion
        </p>
        <p className="text-xs font-mono" style={{ color: "var(--text)" }}>
          {terms.join(" + ")} = {sum.toLocaleString()}
        </p>
      </div>

      <div
        className="rounded-lg p-3"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Closed-form formula
        </p>
        <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
          {spec.label.split(" = ")[0]} = {spec.formula}
        </p>
        <p className="text-xs font-mono mt-1" style={{ color: "var(--green-dark)" }}>
          n = {n}: {spec.closed(n)}
        </p>
      </div>
    </WidgetShell>
  );
}
