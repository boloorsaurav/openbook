"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function factorial(n: number): number {
  if (n < 0) return NaN;
  if (n > 20) return Infinity;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function fmt(v: number): string {
  if (!isFinite(v)) return "(too big)";
  if (isNaN(v)) return "—";
  return v.toLocaleString();
}

export default function FactorialCalculator() {
  const [n, setN] = useState(5);
  const [r, setR] = useState(3);

  const valid = r >= 0 && r <= n && n >= 0 && n <= 20;
  const nFact = factorial(n);
  const rFact = factorial(r);
  const nmrFact = factorial(n - r);
  const nPr = valid ? nFact / nmrFact : NaN;
  const nCr = valid ? nFact / (rFact * nmrFact) : NaN;

  return (
    <WidgetShell label="Factorial, nPr, nCr" badge="counting calculator">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick n (total items) and r (how many to arrange or select). See n!, the permutation count
        (order matters) and the combination count (order doesn&apos;t).
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
            n (total items, max 20)
          </label>
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full"
          />
          <input
            type="number"
            min={0}
            max={20}
            value={n}
            onChange={(e) => setN(Math.max(0, Math.min(20, Number(e.target.value) || 0)))}
            className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
            r (how many)
          </label>
          <input
            type="range"
            min={0}
            max={n}
            step={1}
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full"
          />
          <input
            type="number"
            min={0}
            max={n}
            value={r}
            onChange={(e) => setR(Math.max(0, Math.min(n, Number(e.target.value) || 0)))}
            className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Factorial — n!
          </p>
          <p className="text-base font-mono font-bold" style={{ color: "var(--text)" }}>
            {n}! = {fmt(nFact)}
          </p>
        </div>

        <div
          className="rounded-lg p-3"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Permutations — nPr = n! / (n−r)!  &nbsp;(order matters)
          </p>
          <p className="text-base font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            {n}P{r} = {fmt(nFact)} / {fmt(nmrFact)} = {fmt(nPr)}
          </p>
        </div>

        <div
          className="rounded-lg p-3"
          style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
            Combinations — nCr = n! / (r! · (n−r)!)  &nbsp;(order doesn&apos;t matter)
          </p>
          <p className="text-base font-mono font-bold" style={{ color: "var(--yellow)" }}>
            {n}C{r} = {fmt(nFact)} / ({fmt(rFact)} · {fmt(nmrFact)}) = {fmt(nCr)}
          </p>
        </div>

        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}
        >
          <p className="text-[10px] font-mono" style={{ color: "var(--text)" }}>
            nPr ÷ r! = nCr &nbsp; — every selection of r becomes r! arrangements
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
