"use client";
import { useState, useMemo } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function floorSqrt(n: number): number {
  if (n <= 0) return 0;
  return Math.floor(Math.sqrt(n));
}

function isPerfect(n: number): boolean {
  const s = Math.round(Math.sqrt(n));
  return s * s === n;
}

export default function SquareRootEstimator() {
  const [input, setInput] = useState("250");

  const n = useMemo(() => {
    const v = parseInt(input, 10);
    return isNaN(v) || v < 1 ? 1 : Math.min(v, 10000);
  }, [input]);

  const lo = floorSqrt(n);
  const hi = lo + 1;
  const exact = isPerfect(n);
  const approx = Math.sqrt(n).toFixed(2);

  // Steps shown (halving + digit analysis)
  const steps: string[] = [];
  if (exact) {
    steps.push(`${n} = ${lo}², so √${n} = ${lo} exactly.`);
  } else {
    steps.push(`${lo}² = ${lo * lo} and ${hi}² = ${hi * hi}`);
    steps.push(`So ${lo} < √${n} < ${hi}`);
    const mid = lo + Math.floor((hi - lo) / 2);
    if (mid !== lo && mid !== hi) {
      const midSq = mid * mid;
      steps.push(`Try ${mid}²=${midSq}: ${midSq > n ? `too big → ${lo}–${mid}` : `too small → ${mid}–${hi}`}`);
    }
    steps.push(`√${n} ≈ ${approx}`);
  }

  // Track position as fraction from lo² to hi²
  const loSq = lo * lo;
  const hiSq = hi * hi;
  const pct = hiSq === loSq ? 0 : ((n - loSq) / (hiSq - loSq)) * 100;

  return (
    <WidgetShell label="Interactive · Square Root Estimator" badge="type a number">
      <div className="flex items-center gap-3 mb-5">
        <label className="text-sm font-medium" style={{ color: "var(--text)" }}>Number:</label>
        <input
          type="number" min={1} max={10000} value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 rounded-lg px-3 py-1.5 text-base font-bold w-28 outline-none"
          style={{
            borderColor: "var(--border-strong)",
            color: "var(--text)",
            background: "var(--bg)",
          }}
        />
      </div>

      {/* Number line */}
      <div className="mb-5">
        <div className="flex justify-between text-xs mb-1" style={{ color: "var(--text-muted)" }}>
          <span>{lo}² = {loSq}</span>
          <span>{hi}² = {hiSq}</span>
        </div>
        <div className="relative h-5 rounded-full" style={{ background: "var(--border)" }}>
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
            style={{ width: `${pct}%`, background: "var(--accent)" }}
          />
          {/* Marker */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white transition-all duration-300"
            style={{ left: `${pct}%`, background: "var(--accent)" }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1" style={{ color: "var(--text-muted)" }}>
          <span>{lo}</span>
          <span className="font-bold" style={{ color: "var(--accent)" }}>≈ {approx}</span>
          <span>{hi}</span>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-1">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
              style={{ background: "var(--accent)" }}>
              {i + 1}
            </span>
            <span style={{ color: "var(--text)" }}>{s}</span>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
