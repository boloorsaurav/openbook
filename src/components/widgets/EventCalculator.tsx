"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function fmt(v: number): string {
  if (!isFinite(v)) return "—";
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(3).replace(/\.?0+$/, "");
}

const W = 300;
const H = 160;

export default function EventCalculator() {
  const [pa, setPa] = useState(0.5);
  const [pb, setPb] = useState(0.4);
  const [pab, setPab] = useState(0.15);

  // Validity check
  const maxAB = Math.min(pa, pb);
  const minAB = Math.max(0, pa + pb - 1);
  const valid = pab >= minAB - 0.001 && pab <= maxAB + 0.001;

  const pUnion = pa + pb - pab;
  const pNotA = 1 - pa;
  const pAonly = pa - pab;
  const pBonly = pb - pab;
  const pNeither = 1 - pUnion;

  // Venn sizes for visualization
  const rA = 50;
  const rB = 50;
  // Centre A at 100, B at 200; offset based on intersection magnitude
  const overlap = pab > 0 ? Math.min(60, 80 * (pab / Math.min(pa, pb))) : 0;
  const cxA = W / 2 - (rA + rB - overlap) / 2;
  const cxB = W / 2 + (rA + rB - overlap) / 2;

  return (
    <WidgetShell label="Event Calculator" badge="P(A), P(B), P(A∩B)">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Set the probability of A, B, and their intersection. The widget computes the union,
        complement, and disjoint pieces — and flags impossible combinations.
      </p>

      <div className="space-y-3 mb-3">
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>P(A) = {fmt(pa)}</label>
          <input type="range" min={0} max={1} step={0.05} value={pa} onChange={(e) => setPa(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>P(B) = {fmt(pb)}</label>
          <input type="range" min={0} max={1} step={0.05} value={pb} onChange={(e) => setPb(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>P(A ∩ B) = {fmt(pab)}</label>
          <input type="range" min={0} max={1} step={0.05} value={pab} onChange={(e) => setPab(Number(e.target.value))} className="w-full" />
          <p className="text-[10px]" style={{ color: valid ? "var(--text-muted)" : "var(--red-dark)" }}>
            Valid range: [{fmt(minAB)}, {fmt(maxAB)}]
          </p>
        </div>
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: H }}>
          <circle cx={cxA} cy={H / 2} r={rA} fill="var(--accent-light)" stroke="var(--accent)" strokeWidth={2} opacity={0.7} />
          <circle cx={cxB} cy={H / 2} r={rB} fill="var(--green-light)" stroke="var(--green-dark)" strokeWidth={2} opacity={0.7} />
          <text x={cxA - 30} y={H / 2 + 4} fontSize={14} fontWeight={700} fill="var(--accent)" fontFamily="var(--font-display)">A</text>
          <text x={cxB + 22} y={H / 2 + 4} fontSize={14} fontWeight={700} fill="var(--green-dark)" fontFamily="var(--font-display)">B</text>
        </svg>
      </div>

      {!valid && (
        <div className="rounded-lg p-2 mb-3" style={{ background: "var(--red-light)", border: "1.5px solid var(--red-border)" }}>
          <p className="text-xs font-bold" style={{ color: "var(--red-dark)" }}>
            ⚠ Impossible: P(A ∩ B) must be at most min(P(A), P(B)) and at least P(A)+P(B)−1.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "P(A ∪ B)", val: pUnion, formula: "P(A)+P(B)−P(A∩B)", color: "green" },
          { label: "P(A′) = 1 − P(A)", val: pNotA, formula: "complement of A", color: "yellow" },
          { label: "P(A only)", val: pAonly, formula: "P(A) − P(A∩B)", color: "accent" },
          { label: "P(B only)", val: pBonly, formula: "P(B) − P(A∩B)", color: "accent" },
          { label: "P(neither)", val: pNeither, formula: "1 − P(A∪B)", color: "accent" },
        ].map((r) => (
          <div
            key={r.label}
            className="rounded p-2"
            style={{
              background: r.color === "green" ? "var(--green-light)" : r.color === "yellow" ? "var(--yellow-light)" : "var(--accent-light)",
              border: `1px solid ${r.color === "green" ? "var(--green-border)" : r.color === "yellow" ? "var(--yellow-border)" : "var(--accent-border)"}`,
            }}
          >
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>{r.label}</p>
            <p className="text-sm font-mono font-bold" style={{ color: r.color === "green" ? "var(--green-dark)" : r.color === "yellow" ? "var(--yellow)" : "var(--accent)" }}>
              {fmt(r.val)}
            </p>
            <p className="text-[9px] font-mono" style={{ color: "var(--text-muted)" }}>{r.formula}</p>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
