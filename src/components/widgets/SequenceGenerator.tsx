"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Mode = "formula" | "recurrence";

const FORMULAS = [
  { label: "aₙ = 2n + 1 (odd numbers)", fn: (n: number) => 2 * n + 1 },
  { label: "aₙ = n²", fn: (n: number) => n * n },
  { label: "aₙ = 2ⁿ", fn: (n: number) => Math.pow(2, n) },
  { label: "aₙ = n(n+1)/2 (triangular)", fn: (n: number) => (n * (n + 1)) / 2 },
  { label: "aₙ = (-1)ⁿ · n", fn: (n: number) => Math.pow(-1, n) * n },
];

const RECURRENCES = [
  { label: "Fibonacci: a₁=1, a₂=1, aₙ=aₙ₋₁+aₙ₋₂", seed: [1, 1], step: (prev: number[]) => prev[prev.length - 1] + prev[prev.length - 2] },
  { label: "Doubling: a₁=1, aₙ=2·aₙ₋₁", seed: [1], step: (prev: number[]) => prev[prev.length - 1] * 2 },
  { label: "Collatz from 6: aₙ even → aₙ/2, odd → 3aₙ+1", seed: [6], step: (prev: number[]) => { const x = prev[prev.length - 1]; return x % 2 === 0 ? x / 2 : 3 * x + 1; } },
];

export default function SequenceGenerator() {
  const [mode, setMode] = useState<Mode>("formula");
  const [fIdx, setFIdx] = useState(0);
  const [rIdx, setRIdx] = useState(0);
  const [n, setN] = useState(8);

  let terms: number[] = [];
  if (mode === "formula") {
    const f = FORMULAS[fIdx];
    terms = Array.from({ length: n }, (_, i) => f.fn(i + 1));
  } else {
    const rec = RECURRENCES[rIdx];
    terms = [...rec.seed];
    while (terms.length < n) terms.push(rec.step(terms));
    terms = terms.slice(0, n);
  }

  return (
    <WidgetShell label="Sequence Generator" badge="formula or recurrence">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        A sequence is just an ordered list. Some have an explicit formula (plug in n, get aₙ);
        others are defined by a recurrence (each term depends on previous ones).
      </p>

      <div className="flex gap-2 mb-4">
        {(["formula", "recurrence"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: mode === m ? "var(--accent)" : "var(--bg-card)",
              color: mode === m ? "var(--bg-card)" : "var(--text)",
              borderColor: mode === m ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {m === "formula" ? "Explicit formula" : "Recurrence"}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {(mode === "formula" ? FORMULAS : RECURRENCES).map((p, i) => {
          const active = mode === "formula" ? fIdx === i : rIdx === i;
          return (
            <button
              key={i}
              onClick={() => (mode === "formula" ? setFIdx(i) : setRIdx(i))}
              className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all text-left"
              style={{
                background: active ? "var(--accent)" : "var(--bg-card)",
                color: active ? "var(--bg-card)" : "var(--text)",
                borderColor: active ? "var(--accent)" : "var(--border-strong)",
                fontFamily: "var(--font-display)",
              }}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <div className="mb-3">
        <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
          Show first n = {n} terms
        </label>
        <input type="range" min={3} max={15} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full" />
      </div>

      <div
        className="rounded-lg p-3"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--green-dark)" }}>
          First {n} terms
        </p>
        <div className="flex flex-wrap gap-1.5">
          {terms.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded text-xs font-mono font-bold"
              style={{
                background: "var(--bg-card)",
                color: "var(--green-dark)",
                border: "1px solid var(--green-border)",
              }}
            >
              {Number.isFinite(t) ? (Math.abs(t) > 1e9 ? t.toExponential(2) : t.toString()) : "—"}
            </span>
          ))}
        </div>
      </div>
    </WidgetShell>
  );
}
