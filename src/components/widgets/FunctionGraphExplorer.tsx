"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type FnSpec = {
  key: string;
  label: string;
  formula: string;
  domain: string;
  range: string;
  evaluate: (x: number) => number | null; // null = undefined at x
  // Whether to draw as continuous line (true) or discrete steps (greatest-int)
  step?: boolean;
  // For signum, draw discrete dots at x=0
  dotAtZero?: number;
};

const FUNCTIONS: FnSpec[] = [
  {
    key: "identity",
    label: "Identity",
    formula: "f(x) = x",
    domain: "ℝ",
    range: "ℝ",
    evaluate: (x) => x,
  },
  {
    key: "constant",
    label: "Constant",
    formula: "f(x) = 2",
    domain: "ℝ",
    range: "{2}",
    evaluate: () => 2,
  },
  {
    key: "square",
    label: "Square (x²)",
    formula: "f(x) = x²",
    domain: "ℝ",
    range: "[0, ∞)",
    evaluate: (x) => x * x,
  },
  {
    key: "cube",
    label: "Cube (x³)",
    formula: "f(x) = x³",
    domain: "ℝ",
    range: "ℝ",
    evaluate: (x) => x * x * x,
  },
  {
    key: "reciprocal",
    label: "Reciprocal (1/x)",
    formula: "f(x) = 1/x",
    domain: "ℝ \\ {0}",
    range: "ℝ \\ {0}",
    evaluate: (x) => (Math.abs(x) < 0.05 ? null : 1 / x),
  },
  {
    key: "modulus",
    label: "Modulus |x|",
    formula: "f(x) = |x|",
    domain: "ℝ",
    range: "[0, ∞)",
    evaluate: (x) => Math.abs(x),
  },
  {
    key: "signum",
    label: "Signum",
    formula: "f(x) = sgn(x)",
    domain: "ℝ",
    range: "{−1, 0, 1}",
    evaluate: (x) => (x > 0 ? 1 : x < 0 ? -1 : 0),
  },
  {
    key: "floor",
    label: "Greatest Integer [x]",
    formula: "f(x) = ⌊x⌋",
    domain: "ℝ",
    range: "ℤ",
    evaluate: (x) => Math.floor(x),
    step: true,
  },
];

// Plot bounds
const X_MIN = -5;
const X_MAX = 5;
const Y_MIN = -5;
const Y_MAX = 5;
const W = 320;
const H = 280;
const PAD = 20;

function xToPx(x: number) {
  return PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD);
}
function yToPx(y: number) {
  return H - PAD - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * (H - 2 * PAD);
}

export default function FunctionGraphExplorer() {
  const [idx, setIdx] = useState(0);
  const f = FUNCTIONS[idx];

  // Sample
  const samples: { x: number; y: number | null }[] = [];
  const N = 200;
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    samples.push({ x, y: f.evaluate(x) });
  }

  // Build path segments — break on null or step boundaries
  const segments: string[] = [];
  if (f.step) {
    // Greatest integer: horizontal segments per integer interval
    for (let k = X_MIN; k < X_MAX; k++) {
      const y = k;
      if (y < Y_MIN || y > Y_MAX) continue;
      segments.push(`M ${xToPx(k)} ${yToPx(y)} L ${xToPx(k + 1) - 1} ${yToPx(y)}`);
    }
  } else if (f.key === "signum") {
    // Three flat segments
    segments.push(`M ${xToPx(X_MIN)} ${yToPx(-1)} L ${xToPx(-0.05)} ${yToPx(-1)}`);
    segments.push(`M ${xToPx(0.05)} ${yToPx(1)} L ${xToPx(X_MAX)} ${yToPx(1)}`);
  } else {
    let current = "";
    let prevValid = false;
    for (const { x, y } of samples) {
      if (y === null || y < Y_MIN - 1 || y > Y_MAX + 1) {
        if (current) segments.push(current);
        current = "";
        prevValid = false;
        continue;
      }
      const px = xToPx(x);
      const py = yToPx(Math.max(Y_MIN - 1, Math.min(Y_MAX + 1, y)));
      current += prevValid ? ` L ${px} ${py}` : `M ${px} ${py}`;
      prevValid = true;
    }
    if (current) segments.push(current);
  }

  return (
    <WidgetShell label="Function Graphs" badge="select a function">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        These are the eight functions you'll meet most often in this chapter. Pick one to see its
        graph, domain, and range.
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
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 320 }}>
          {/* Grid lines */}
          {[-4, -3, -2, -1, 1, 2, 3, 4].map((g) => (
            <g key={"gx" + g}>
              <line
                x1={xToPx(g)}
                y1={PAD}
                x2={xToPx(g)}
                y2={H - PAD}
                stroke="var(--border)"
                strokeWidth={0.5}
              />
              <line
                x1={PAD}
                y1={yToPx(g)}
                x2={W - PAD}
                y2={yToPx(g)}
                stroke="var(--border)"
                strokeWidth={0.5}
              />
            </g>
          ))}
          {/* Axes */}
          <line
            x1={PAD}
            y1={yToPx(0)}
            x2={W - PAD}
            y2={yToPx(0)}
            stroke="var(--text-muted)"
            strokeWidth={1.5}
          />
          <line
            x1={xToPx(0)}
            y1={PAD}
            x2={xToPx(0)}
            y2={H - PAD}
            stroke="var(--text-muted)"
            strokeWidth={1.5}
          />
          {/* Tick labels */}
          {[-4, -2, 2, 4].map((t) => (
            <g key={"t" + t}>
              <text
                x={xToPx(t)}
                y={yToPx(0) + 12}
                textAnchor="middle"
                fontSize={9}
                fill="var(--text-muted)"
              >
                {t}
              </text>
              <text
                x={xToPx(0) - 6}
                y={yToPx(t) + 3}
                textAnchor="end"
                fontSize={9}
                fill="var(--text-muted)"
              >
                {t}
              </text>
            </g>
          ))}
          {/* Function path */}
          {segments.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
          {/* Signum dot at origin */}
          {f.key === "signum" && (
            <circle cx={xToPx(0)} cy={yToPx(0)} r={4} fill="var(--accent)" />
          )}
          {/* Floor: filled dots at left of each step */}
          {f.step &&
            [-4, -3, -2, -1, 0, 1, 2, 3, 4].map((k) => (
              <circle
                key={"dot" + k}
                cx={xToPx(k)}
                cy={yToPx(k)}
                r={3}
                fill="var(--accent)"
              />
            ))}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Formula
          </p>
          <p className="text-sm font-mono font-bold" style={{ color: "var(--text)" }}>
            {f.formula}
          </p>
        </div>
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Domain
          </p>
          <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
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
          <p className="text-sm font-mono font-bold" style={{ color: "var(--yellow)" }}>
            {f.range}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
