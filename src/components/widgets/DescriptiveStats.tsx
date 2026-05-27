"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function parse(input: string): number[] {
  return input
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => Number(s))
    .filter((n) => Number.isFinite(n));
}

function fmt(v: number): string {
  if (!isFinite(v)) return "—";
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(3).replace(/\.?0+$/, "");
}

function median(xs: number[]): number {
  if (xs.length === 0) return NaN;
  const sorted = [...xs].sort((a, b) => a - b);
  const n = sorted.length;
  if (n % 2 === 1) return sorted[(n - 1) / 2];
  return (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
}

const PRESETS = [
  { label: "Cricket A (volatile)", data: "0, 5, 0, 100, 8, 117, 6" },
  { label: "Cricket B (steady)", data: "50, 55, 60, 52, 48, 46, 58" },
  { label: "Test scores", data: "82, 75, 90, 68, 88, 79, 85, 73" },
];

export default function DescriptiveStats() {
  const [input, setInput] = useState(PRESETS[0].data);
  const xs = parse(input);
  const n = xs.length;
  const sum = xs.reduce((s, x) => s + x, 0);
  const mean = n === 0 ? NaN : sum / n;
  const med = median(xs);
  const min = n === 0 ? NaN : Math.min(...xs);
  const max = n === 0 ? NaN : Math.max(...xs);
  const range = max - min;
  const md = n === 0 ? NaN : xs.reduce((s, x) => s + Math.abs(x - mean), 0) / n;
  const variance = n === 0 ? NaN : xs.reduce((s, x) => s + (x - mean) * (x - mean), 0) / n;
  const sd = Math.sqrt(variance);

  return (
    <WidgetShell label="Descriptive Statistics" badge="enter your own data">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Type numbers separated by commas or spaces. The widget computes every measure of central
        tendency and dispersion from this chapter — all from one dataset.
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {PRESETS.map((p, i) => (
          <button
            key={i}
            onClick={() => setInput(p.data)}
            className="text-[10px] font-bold px-2 py-1 rounded border"
            style={{ background: "var(--bg-card)", color: "var(--text)", borderColor: "var(--border-strong)", fontFamily: "var(--font-display)" }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={2}
        className="w-full px-3 py-2 rounded border text-sm font-mono mb-4"
        style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {[
          { label: "n (count)", value: n, color: "accent" },
          { label: "Mean (x̄)", value: mean, color: "green" },
          { label: "Median", value: med, color: "green" },
          { label: "Range", value: range, color: "yellow" },
          { label: "Mean Deviation", value: md, color: "yellow" },
          { label: "Variance (σ²)", value: variance, color: "accent" },
          { label: "Std Deviation (σ)", value: sd, color: "accent" },
          { label: "Min", value: min, color: "accent" },
          { label: "Max", value: max, color: "accent" },
        ].map((row) => (
          <div
            key={row.label}
            className="rounded p-2"
            style={{
              background:
                row.color === "green" ? "var(--green-light)" : row.color === "yellow" ? "var(--yellow-light)" : "var(--accent-light)",
              border: `1px solid ${
                row.color === "green" ? "var(--green-border)" : row.color === "yellow" ? "var(--yellow-border)" : "var(--accent-border)"
              }`,
            }}
          >
            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              {row.label}
            </p>
            <p
              className="text-base font-mono font-bold"
              style={{
                color:
                  row.color === "green" ? "var(--green-dark)" : row.color === "yellow" ? "var(--yellow)" : "var(--accent)",
              }}
            >
              {fmt(row.value)}
            </p>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
