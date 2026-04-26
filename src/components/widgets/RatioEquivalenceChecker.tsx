"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function gcd(x: number, y: number): number {
  return y === 0 ? x : gcd(y, x % y);
}

/** Hoisted to module scope so React preserves focus across re-renders. */
function RatioField({
  label,
  x,
  y,
  sx,
  sy,
  color,
}: {
  label: string;
  x: number;
  y: number;
  sx: (n: number) => void;
  sy: (n: number) => void;
  color: string;
}) {
  const handle = (setter: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (v === "") {
      setter(0); // allow transient empty while typing
      return;
    }
    const n = parseInt(v, 10);
    if (!isNaN(n) && n >= 0 && n <= 999) setter(n);
  };

  return (
    <div
      className="rounded-lg p-3"
      style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
    >
      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color }}>
        {label}
      </p>
      <div className="flex items-center justify-center gap-1">
        <input
          type="number"
          min={0}
          max={999}
          step={1}
          value={x === 0 ? "" : x}
          onChange={handle(sx)}
          className="w-14 text-center text-base font-bold border-2 rounded-lg px-1 py-1"
          style={{
            borderColor: color,
            color,
            background: "transparent",
            fontFamily: "var(--font-display)",
          }}
        />
        <span className="text-base font-bold" style={{ color: "var(--text-muted)" }}>
          :
        </span>
        <input
          type="number"
          min={0}
          max={999}
          step={1}
          value={y === 0 ? "" : y}
          onChange={handle(sy)}
          className="w-14 text-center text-base font-bold border-2 rounded-lg px-1 py-1"
          style={{
            borderColor: color,
            color,
            background: "transparent",
            fontFamily: "var(--font-display)",
          }}
        />
      </div>
    </div>
  );
}

export default function RatioEquivalenceChecker() {
  const [a, setA] = useState(60);
  const [b, setB] = useState(40);
  const [c, setC] = useState(90);
  const [d, setD] = useState(60);

  // For math, treat 0 as 1 (transient empty during typing)
  const safe = (n: number) => Math.max(1, Math.min(999, Math.round(n) || 1));
  const aS = safe(a), bS = safe(b), cS = safe(c), dS = safe(d);

  const g1 = gcd(aS, bS);
  const g2 = gcd(cS, dS);
  const sa = aS / g1, sb = bS / g1;
  const sc = cS / g2, sd = dS / g2;
  const equiv = sa === sc && sb === sd;
  const cross1 = aS * dS;
  const cross2 = bS * cS;

  return (
    <WidgetShell label="Interactive · Ratio Equivalence" badge="are they proportional">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Two ratios are <strong>proportional</strong> when both reduce to the same simplest form. Try{" "}
        <strong>60:40</strong> against <strong>90:60</strong>, then change one and see what breaks.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <RatioField label="Ratio 1" x={a} y={b} sx={setA} sy={setB} color="var(--green)" />
        <RatioField label="Ratio 2" x={c} y={d} sx={setC} sy={setD} color="var(--yellow)" />
      </div>

      {/* Simplification trace */}
      <div className="rounded-lg p-3 mb-3" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Reduce by HCF
        </p>
        <p className="text-sm font-mono" style={{ color: "var(--text)" }}>
          {aS} : {bS} ÷ {g1} ={" "}
          <strong style={{ color: "var(--green)", fontFamily: "var(--font-display)" }}>
            {sa} : {sb}
          </strong>
        </p>
        <p className="text-sm font-mono mt-1" style={{ color: "var(--text)" }}>
          {cS} : {dS} ÷ {g2} ={" "}
          <strong style={{ color: "var(--yellow)", fontFamily: "var(--font-display)" }}>
            {sc} : {sd}
          </strong>
        </p>
      </div>

      {/* Verdict */}
      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{
          background: equiv ? "var(--green-light)" : "var(--red-light)",
          border: `1.5px solid ${equiv ? "var(--green-border)" : "var(--red-border)"}`,
        }}
      >
        <p className="text-sm font-bold" style={{ color: equiv ? "var(--green-dark)" : "var(--red-dark)" }}>
          {equiv
            ? `✓ Proportional — ${aS}:${bS} :: ${cS}:${dS}`
            : `✗ Not proportional — different simplest forms`}
        </p>
        <p className="text-[11px] mt-1" style={{ color: equiv ? "var(--green-dark)" : "var(--red-dark)" }}>
          Cross-product check: {aS}×{dS} = {cross1} {cross1 === cross2 ? "=" : "≠"} {bS}×{cS} = {cross2}
        </p>
      </div>
    </WidgetShell>
  );
}
