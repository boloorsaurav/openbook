"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;
  let v = 1;
  for (let i = 0; i < r; i++) v = (v * (n - i)) / (i + 1);
  return Math.round(v);
}

export default function PascalsTriangle() {
  const [rows, setRows] = useState(8);
  const [sel, setSel] = useState<{ n: number; r: number } | null>({ n: 5, r: 2 });

  return (
    <WidgetShell label="Pascal's Triangle" badge="click any cell">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Each row of Pascal&apos;s triangle gives the binomial coefficients for (a + b)ⁿ. Each interior
        number is the sum of the two above it. Every cell is also nCr — click to see.
      </p>

      <div className="mb-3">
        <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
          Show rows 0 through {rows}
        </label>
        <input
          type="range"
          min={3}
          max={12}
          step={1}
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div
        className="rounded-lg p-3 mb-3 overflow-x-auto"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <div className="flex flex-col items-center gap-1">
          {Array.from({ length: rows + 1 }, (_, n) => (
            <div key={n} className="flex gap-1">
              {Array.from({ length: n + 1 }, (_, r) => {
                const v = nCr(n, r);
                const active = sel?.n === n && sel?.r === r;
                return (
                  <button
                    key={r}
                    onClick={() => setSel({ n, r })}
                    className="rounded font-mono font-bold transition-all"
                    style={{
                      background: active ? "var(--accent)" : "var(--bg-card)",
                      color: active ? "var(--bg-card)" : "var(--text)",
                      border: `1.5px solid ${active ? "var(--accent)" : "var(--border-strong)"}`,
                      width: 38,
                      height: 28,
                      fontSize: v >= 1000 ? 10 : 12,
                    }}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {sel && (
        <div
          className="rounded-lg p-3 text-center"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Selected cell — row {sel.n}, position {sel.r}
          </p>
          <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            {sel.n}C{sel.r} = {sel.n}! / ({sel.r}! · {sel.n - sel.r}!) = {nCr(sel.n, sel.r)}
          </p>
          <p className="text-[10px] mt-1" style={{ color: "var(--text-muted)" }}>
            Coefficient of a^{sel.n - sel.r} b^{sel.r} in (a + b)^{sel.n}
          </p>
        </div>
      )}
    </WidgetShell>
  );
}
