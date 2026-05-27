"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const W = 280;
const H = 220;
const CX = W / 2;
const CY = H / 2;
const R = 80;

function fmt(v: number): string {
  if (!isFinite(v)) return "—";
  if (Math.abs(v) < 0.001) return "0";
  return v.toFixed(2).replace(/\.?0+$/, "");
}

export default function SlopeRelationship() {
  const [m1, setM1] = useState(1);
  const [m2, setM2] = useState(-1);

  // Verdict
  const parallel = Math.abs(m1 - m2) < 0.001;
  const perp = Math.abs(m1 * m2 + 1) < 0.001;
  const product = m1 * m2;

  let angleDeg: number;
  if (parallel) angleDeg = 0;
  else if (perp) angleDeg = 90;
  else {
    const tanA = Math.abs((m2 - m1) / (1 + m1 * m2));
    angleDeg = (Math.atan(tanA) * 180) / Math.PI;
  }

  const a1 = Math.atan(m1);
  const a2 = Math.atan(m2);

  return (
    <WidgetShell label="Slope Relationship" badge="parallel · perpendicular · angle">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Two lines with slopes m₁ and m₂. They are <strong>parallel</strong> if m₁ = m₂, and
        <strong> perpendicular</strong> if m₁·m₂ = −1. Otherwise the acute angle θ between them
        satisfies tan θ = |(m₂ − m₁)/(1 + m₁m₂)|.
      </p>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>m₁</label>
          <input type="range" min={-4} max={4} step={0.25} value={m1} onChange={(e) => setM1(Number(e.target.value))} className="w-full" />
          <span className="text-xs font-mono" style={{ color: "var(--text)" }}>{m1}</span>
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>m₂</label>
          <input type="range" min={-4} max={4} step={0.25} value={m2} onChange={(e) => setM2(Number(e.target.value))} className="w-full" />
          <span className="text-xs font-mono" style={{ color: "var(--text)" }}>{m2}</span>
        </div>
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: H }}>
          <line x1={10} y1={CY} x2={W - 10} y2={CY} stroke="var(--border)" strokeWidth={0.8} />
          <line x1={CX} y1={10} x2={CX} y2={H - 10} stroke="var(--border)" strokeWidth={0.8} />
          {/* Line 1 */}
          <line
            x1={CX - R * Math.cos(a1)}
            y1={CY + R * Math.sin(a1)}
            x2={CX + R * Math.cos(a1)}
            y2={CY - R * Math.sin(a1)}
            stroke="var(--accent)"
            strokeWidth={2.5}
          />
          {/* Line 2 */}
          <line
            x1={CX - R * Math.cos(a2)}
            y1={CY + R * Math.sin(a2)}
            x2={CX + R * Math.cos(a2)}
            y2={CY - R * Math.sin(a2)}
            stroke="var(--green-dark)"
            strokeWidth={2.5}
          />
          <text x={CX + R * Math.cos(a1) + 6} y={CY - R * Math.sin(a1) + 4} fontSize={10} fontWeight={700} fill="var(--accent)" fontFamily="var(--font-display)">L₁</text>
          <text x={CX + R * Math.cos(a2) + 6} y={CY - R * Math.sin(a2) + 4} fontSize={10} fontWeight={700} fill="var(--green-dark)" fontFamily="var(--font-display)">L₂</text>
        </svg>
      </div>

      <div
        className="rounded-lg p-3"
        style={{
          background: parallel ? "var(--accent-light)" : perp ? "var(--green-light)" : "var(--yellow-light)",
          border: `1.5px solid ${parallel ? "var(--accent-border)" : perp ? "var(--green-border)" : "var(--yellow-border)"}`,
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
          Verdict
        </p>
        <p className="text-base font-extrabold" style={{ color: parallel ? "var(--accent)" : perp ? "var(--green-dark)" : "var(--yellow)", fontFamily: "var(--font-display)" }}>
          {parallel ? "Parallel (same slope)" : perp ? "Perpendicular (m₁·m₂ = −1)" : `Intersect at angle θ ≈ ${fmt(angleDeg)}°`}
        </p>
        <p className="text-[11px] font-mono mt-1" style={{ color: "var(--text-muted)" }}>
          m₁ · m₂ = {fmt(product)}
        </p>
      </div>
    </WidgetShell>
  );
}
