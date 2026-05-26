"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Op = "<" | "≤" | ">" | "≥";

const OPS: { op: Op; label: string; help: string }[] = [
  { op: "<", label: "x < a", help: "strict — open circle, ray to the left" },
  { op: "≤", label: "x ≤ a", help: "slack — closed circle, ray to the left" },
  { op: ">", label: "x > a", help: "strict — open circle, ray to the right" },
  { op: "≥", label: "x ≥ a", help: "slack — closed circle, ray to the right" },
];

const W = 360;
const H = 80;
const PAD = 30;
const X_MIN = -10;
const X_MAX = 10;

function toPx(v: number) {
  return PAD + ((v - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD);
}

export default function NumberLineBuilder() {
  const [op, setOp] = useState<Op>("≤");
  const [a, setA] = useState(3);

  const showRight = op === ">" || op === "≥";
  const closed = op === "≤" || op === "≥";
  const aPx = toPx(a);

  // Interval notation
  const xStr = a.toString();
  const leftBracket = op === "≥" ? "[" : "(";
  const rightBracket = op === "≤" ? "]" : ")";
  const intervalLeft = showRight ? xStr : "−∞";
  const intervalRight = !showRight ? xStr : "∞";

  return (
    <WidgetShell label="Number Line Graph" badge="visualize x op a">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick the inequality type and slide the threshold. Notice the rule: <strong>strict</strong>
        &nbsp;inequalities (&lt; and &gt;) use <em>open</em> circles, <strong>slack</strong>
        &nbsp;inequalities (≤ and ≥) use <em>filled</em> circles.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {OPS.map((o) => (
          <button
            key={o.op}
            onClick={() => setOp(o.op)}
            className="text-xs font-bold px-2 py-2 rounded border transition-all"
            style={{
              background: op === o.op ? "var(--accent)" : "var(--bg-card)",
              color: op === o.op ? "var(--bg-card)" : "var(--text)",
              borderColor: op === o.op ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="mb-3">
        <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
          Threshold a = {a}
        </label>
        <input
          type="range"
          min={-9}
          max={9}
          step={1}
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: H }}>
          {/* Highlight ray */}
          <line
            x1={showRight ? aPx : PAD}
            y1={H / 2}
            x2={showRight ? W - PAD : aPx}
            y2={H / 2}
            stroke="var(--green-dark)"
            strokeWidth={5}
          />
          {/* Arrow caps */}
          {!showRight && (
            <polygon
              points={`${PAD - 6},${H / 2} ${PAD + 2},${H / 2 - 5} ${PAD + 2},${H / 2 + 5}`}
              fill="var(--green-dark)"
            />
          )}
          {showRight && (
            <polygon
              points={`${W - PAD + 6},${H / 2} ${W - PAD - 2},${H / 2 - 5} ${W - PAD - 2},${H / 2 + 5}`}
              fill="var(--green-dark)"
            />
          )}
          {/* Base line */}
          <line x1={PAD - 6} y1={H / 2} x2={W - PAD + 6} y2={H / 2} stroke="var(--text-muted)" strokeWidth={1} />
          {/* Ticks */}
          {Array.from({ length: 21 }, (_, i) => i - 10).map((v) => (
            <g key={v}>
              <line
                x1={toPx(v)}
                y1={H / 2 - (v % 5 === 0 ? 6 : 3)}
                x2={toPx(v)}
                y2={H / 2 + (v % 5 === 0 ? 6 : 3)}
                stroke="var(--text-muted)"
                strokeWidth={v % 5 === 0 ? 1.5 : 0.8}
              />
              {v % 5 === 0 && (
                <text x={toPx(v)} y={H / 2 + 20} fontSize={10} fill="var(--text-muted)" textAnchor="middle">
                  {v}
                </text>
              )}
            </g>
          ))}
          {/* Threshold circle */}
          <circle
            cx={aPx}
            cy={H / 2}
            r={8}
            fill={closed ? "var(--accent)" : "var(--bg-card)"}
            stroke="var(--accent)"
            strokeWidth={2.5}
          />
          <text x={aPx} y={H / 2 - 14} fontSize={11} fontWeight={700} fill="var(--accent)" textAnchor="middle" fontFamily="var(--font-display)">
            {a}
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Inequality
          </p>
          <p className="text-base font-extrabold font-mono" style={{ color: "var(--green-dark)" }}>
            x {op} {a}
          </p>
        </div>
        <div
          className="rounded-lg p-2 text-center"
          style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
            Interval notation
          </p>
          <p className="text-base font-extrabold font-mono" style={{ color: "var(--yellow)" }}>
            {leftBracket}
            {intervalLeft}, {intervalRight}
            {rightBracket}
          </p>
        </div>
      </div>

      <p className="text-[11px] mt-3" style={{ color: "var(--text-muted)" }}>
        {OPS.find((o) => o.op === op)?.help}
      </p>
    </WidgetShell>
  );
}
