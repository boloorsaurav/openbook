"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type FnSpec = {
  key: string;
  label: string;
  fn: (x: number) => number;
  period: string;
  range: string;
  domain: string;
  // asymptote test: returns true if x is at a vertical asymptote
  isAsymptote?: (x: number) => boolean;
};

const FUNCTIONS: FnSpec[] = [
  {
    key: "sin",
    label: "sin x",
    fn: Math.sin,
    period: "2π",
    range: "[−1, 1]",
    domain: "ℝ",
  },
  {
    key: "cos",
    label: "cos x",
    fn: Math.cos,
    period: "2π",
    range: "[−1, 1]",
    domain: "ℝ",
  },
  {
    key: "tan",
    label: "tan x",
    fn: Math.tan,
    period: "π",
    range: "ℝ",
    domain: "x ≠ (2n+1)π/2",
    isAsymptote: (x) => Math.abs(Math.cos(x)) < 0.05,
  },
  {
    key: "csc",
    label: "csc x",
    fn: (x) => 1 / Math.sin(x),
    period: "2π",
    range: "(−∞, −1] ∪ [1, ∞)",
    domain: "x ≠ nπ",
    isAsymptote: (x) => Math.abs(Math.sin(x)) < 0.05,
  },
  {
    key: "sec",
    label: "sec x",
    fn: (x) => 1 / Math.cos(x),
    period: "2π",
    range: "(−∞, −1] ∪ [1, ∞)",
    domain: "x ≠ (2n+1)π/2",
    isAsymptote: (x) => Math.abs(Math.cos(x)) < 0.05,
  },
  {
    key: "cot",
    label: "cot x",
    fn: (x) => Math.cos(x) / Math.sin(x),
    period: "π",
    range: "ℝ",
    domain: "x ≠ nπ",
    isAsymptote: (x) => Math.abs(Math.sin(x)) < 0.05,
  },
];

const X_MIN = -2 * Math.PI;
const X_MAX = 2 * Math.PI;
const Y_MIN = -4;
const Y_MAX = 4;
const W = 360;
const H = 240;
const PAD = 24;

function xToPx(x: number) {
  return PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD);
}
function yToPx(y: number) {
  return H - PAD - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * (H - 2 * PAD);
}

export default function TrigGraphExplorer() {
  const [idx, setIdx] = useState(0);
  const f = FUNCTIONS[idx];

  // Sample
  const N = 600;
  const segments: string[] = [];
  let current = "";
  let prevValid = false;
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    if (f.isAsymptote && f.isAsymptote(x)) {
      if (current) segments.push(current);
      current = "";
      prevValid = false;
      continue;
    }
    const y = f.fn(x);
    if (!isFinite(y) || y < Y_MIN - 2 || y > Y_MAX + 2) {
      if (current) segments.push(current);
      current = "";
      prevValid = false;
      continue;
    }
    const px = xToPx(x);
    const py = yToPx(Math.max(Y_MIN, Math.min(Y_MAX, y)));
    current += prevValid ? ` L ${px.toFixed(1)} ${py.toFixed(1)}` : `M ${px.toFixed(1)} ${py.toFixed(1)}`;
    prevValid = true;
  }
  if (current) segments.push(current);

  // Asymptote vertical lines (for tan, sec, csc, cot)
  const asymptotes: number[] = [];
  if (f.isAsymptote) {
    if (f.key === "tan" || f.key === "sec") {
      for (let k = -3; k <= 3; k++) asymptotes.push(((2 * k + 1) * Math.PI) / 2);
    } else if (f.key === "csc" || f.key === "cot") {
      for (let k = -2; k <= 2; k++) asymptotes.push(k * Math.PI);
    }
  }

  const xTicks = [-2, -1, 1, 2].map((k) => ({ x: k * Math.PI, label: k === 1 ? "π" : k === -1 ? "−π" : `${k}π` }));

  return (
    <WidgetShell label="Trig Graphs" badge="six functions">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick a function. Notice the period (how often it repeats), the asymptotes (vertical dashed
        lines where the function is undefined), and the range.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {FUNCTIONS.map((fn, i) => (
          <button
            key={fn.key}
            onClick={() => setIdx(i)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: idx === i ? "var(--accent)" : "var(--bg-card)",
              color: idx === i ? "var(--bg-card)" : "var(--text)",
              borderColor: idx === i ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {fn.label}
          </button>
        ))}
      </div>

      <div
        className="rounded-lg p-3 mb-4"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 280 }}>
          {/* Horizontal grid at ±1 */}
          {[-1, 1].map((y) => (
            <line
              key={"hg" + y}
              x1={PAD}
              y1={yToPx(y)}
              x2={W - PAD}
              y2={yToPx(y)}
              stroke="var(--border)"
              strokeDasharray="3 3"
              strokeWidth={0.8}
            />
          ))}
          {/* Asymptotes */}
          {asymptotes.map((a, i) => (
            <line
              key={"a" + i}
              x1={xToPx(a)}
              y1={PAD}
              x2={xToPx(a)}
              y2={H - PAD}
              stroke="var(--red-border)"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
          ))}
          {/* Axes */}
          <line x1={PAD} y1={yToPx(0)} x2={W - PAD} y2={yToPx(0)} stroke="var(--text-muted)" strokeWidth={1.5} />
          <line x1={xToPx(0)} y1={PAD} x2={xToPx(0)} y2={H - PAD} stroke="var(--text-muted)" strokeWidth={1.5} />
          {/* X ticks */}
          {xTicks.map((t, i) => (
            <text key={i} x={xToPx(t.x)} y={yToPx(0) + 14} fontSize={10} fill="var(--text-muted)" textAnchor="middle">
              {t.label}
            </text>
          ))}
          {/* Y labels */}
          {[-1, 1].map((y) => (
            <text key={"y" + y} x={xToPx(0) - 6} y={yToPx(y) + 3} fontSize={9} fill="var(--text-muted)" textAnchor="end">
              {y}
            </text>
          ))}
          {/* Function path */}
          {segments.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="var(--accent)" strokeWidth={2.2} strokeLinejoin="round" />
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Period
          </p>
          <p className="text-sm font-mono font-bold" style={{ color: "var(--text)" }}>
            {f.period}
          </p>
        </div>
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Domain
          </p>
          <p className="text-[11px] font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            {f.domain}
          </p>
        </div>
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
            Range
          </p>
          <p className="text-[11px] font-mono font-bold" style={{ color: "var(--yellow)" }}>
            {f.range}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
