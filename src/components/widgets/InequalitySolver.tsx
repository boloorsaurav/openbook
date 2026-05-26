"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Op = "<" | "≤" | ">" | "≥";

function flip(op: Op): Op {
  return op === "<" ? ">" : op === ">" ? "<" : op === "≤" ? "≥" : "≤";
}

type Step = { text: string; left: string; op: Op; right: string };

function solve(a: number, b: number, op: Op, c: number, d: number): { steps: Step[]; solution: string; threshold: number; finalOp: Op } {
  const steps: Step[] = [];
  steps.push({ text: "Start", left: `${a}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)}`, op, right: `${c}x ${d >= 0 ? "+" : "−"} ${Math.abs(d)}` });

  // Move cx to left: (a-c)x + b op d
  const A = a - c;
  steps.push({
    text: `Subtract ${c}x from both sides`,
    left: `${A}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)}`,
    op,
    right: `${d}`,
  });

  // Move b to right: Ax op d - b
  const R = d - b;
  steps.push({
    text: `Subtract ${b} from both sides`,
    left: `${A}x`,
    op,
    right: `${R}`,
  });

  // Divide by A
  if (A === 0) {
    return {
      steps,
      solution: R === 0 ? "All real numbers (any x works)" : R > 0 ? (op === "<" || op === "≤" ? "All real numbers" : "No solution") : op === ">" || op === "≥" ? "All real numbers" : "No solution",
      threshold: 0,
      finalOp: op,
    };
  }

  let finalOp = op;
  if (A < 0) finalOp = flip(op);
  const x = R / A;
  steps.push({
    text: A < 0 ? `Divide both sides by ${A} (sign flips — negative divisor!)` : `Divide both sides by ${A}`,
    left: "x",
    op: finalOp,
    right: x.toFixed(4).replace(/\.?0+$/, ""),
  });

  const xStr = x.toFixed(4).replace(/\.?0+$/, "");
  const intervalLeft = finalOp === ">" || finalOp === "≥" ? `${xStr}` : "−∞";
  const intervalRight = finalOp === "<" || finalOp === "≤" ? `${xStr}` : "∞";
  const leftBracket = finalOp === "≥" ? "[" : "(";
  const rightBracket = finalOp === "≤" ? "]" : ")";

  return {
    steps,
    solution: `x ∈ ${leftBracket}${intervalLeft}, ${intervalRight}${rightBracket}`,
    threshold: x,
    finalOp,
  };
}

const PRESETS: Array<{ label: string; a: number; b: number; op: Op; c: number; d: number }> = [
  { label: "5x − 3 < 3x + 1", a: 5, b: -3, op: "<", c: 3, d: 1 },
  { label: "4x + 3 < 6x + 7", a: 4, b: 3, op: "<", c: 6, d: 7 },
  { label: "7x + 3 < 5x + 9", a: 7, b: 3, op: "<", c: 5, d: 9 },
  { label: "3x − 7 > 5x − 1", a: 3, b: -7, op: ">", c: 5, d: -1 },
  { label: "2x + 6 ≥ 4x − 2", a: 2, b: 6, op: "≥", c: 4, d: -2 },
];

const W = 320;
const NL_H = 60;
const NL_PAD = 30;

export default function InequalitySolver() {
  const [idx, setIdx] = useState(0);
  const p = PRESETS[idx];
  const result = solve(p.a, p.b, p.op, p.c, p.d);

  // Number line range
  const t = result.threshold;
  const lo = Math.min(t - 5, -5);
  const hi = Math.max(t + 5, 5);
  const xPx = (v: number) => NL_PAD + ((v - lo) / (hi - lo)) * (W - 2 * NL_PAD);
  const tPx = xPx(t);

  const ticks: number[] = [];
  const span = hi - lo;
  const stride = span > 30 ? 5 : span > 10 ? 2 : 1;
  for (let v = Math.ceil(lo); v <= hi; v += stride) ticks.push(v);

  const showRight = result.finalOp === ">" || result.finalOp === "≥";
  const closed = result.finalOp === "≤" || result.finalOp === "≥";

  return (
    <WidgetShell label="Inequality Solver" badge="step-by-step + number line">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick an inequality. Walk through each step to see how it&apos;s solved, then read the
        solution set both algebraically and on the number line.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
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

      <div className="space-y-1.5 mb-4">
        {result.steps.map((s, i) => (
          <div
            key={i}
            className="rounded-lg p-2 flex items-baseline gap-2"
            style={{ background: i === result.steps.length - 1 ? "var(--green-light)" : "var(--bg-sidebar)", border: `1.5px solid ${i === result.steps.length - 1 ? "var(--green-border)" : "var(--border)"}` }}
          >
            <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)", minWidth: 18 }}>
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>{s.text}</p>
              <p className="text-sm font-mono font-bold" style={{ color: "var(--text)" }}>
                {s.left} {s.op} {s.right}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg p-3 mb-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Solution set
        </p>
        <p className="text-base font-extrabold font-mono" style={{ color: "var(--green-dark)" }}>
          {result.solution}
        </p>
      </div>

      <div
        className="rounded-lg p-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Number line
        </p>
        <svg viewBox={`0 0 ${W} ${NL_H}`} className="w-full" style={{ maxHeight: NL_H }}>
          {/* Highlight ray */}
          <line
            x1={showRight ? tPx : NL_PAD}
            y1={NL_H / 2}
            x2={showRight ? W - NL_PAD : tPx}
            y2={NL_H / 2}
            stroke="var(--accent)"
            strokeWidth={4}
          />
          {/* Base line */}
          <line x1={NL_PAD} y1={NL_H / 2} x2={W - NL_PAD} y2={NL_H / 2} stroke="var(--text-muted)" strokeWidth={1} />
          {/* Ticks */}
          {ticks.map((v) => (
            <g key={v}>
              <line x1={xPx(v)} y1={NL_H / 2 - 4} x2={xPx(v)} y2={NL_H / 2 + 4} stroke="var(--text-muted)" strokeWidth={1} />
              <text x={xPx(v)} y={NL_H / 2 + 16} fontSize={9} fill="var(--text-muted)" textAnchor="middle">{v}</text>
            </g>
          ))}
          {/* Threshold circle */}
          <circle cx={tPx} cy={NL_H / 2} r={6} fill={closed ? "var(--accent)" : "var(--bg-card)"} stroke="var(--accent)" strokeWidth={2} />
          <text x={tPx} y={NL_H / 2 - 12} fontSize={10} fontWeight={700} fill="var(--accent)" textAnchor="middle" fontFamily="var(--font-display)">
            {t.toFixed(2).replace(/\.?0+$/, "")}
          </text>
        </svg>
      </div>
    </WidgetShell>
  );
}
