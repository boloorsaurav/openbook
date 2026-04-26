"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const BASES = [
  { n: 2, label: "Base 2", note: "binary" },
  { n: 5, label: "Base 5", note: "five fingers" },
  { n: 10, label: "Base 10", note: "Egyptian / Hindu" },
  { n: 60, label: "Base 60", note: "Babylonian" },
];

function decompose(num: number, base: number): number[] {
  if (num === 0) return [0];
  const digits: number[] = [];
  let n = num;
  while (n > 0) {
    digits.push(n % base);
    n = Math.floor(n / base);
  }
  return digits; // least significant first
}

export default function BaseNExplorer() {
  const [base, setBase] = useState(10);
  const [num, setNum] = useState(324);
  const digits = decompose(num, base);
  const reversed = digits.slice().reverse(); // most significant first

  return (
    <WidgetShell label="Interactive · Base-N Explorer" badge="any number, any base">
      {/* Base picker */}
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Choose a base
        </p>
        <div className="flex gap-2 flex-wrap">
          {BASES.map((b) => {
            const active = base === b.n;
            return (
              <button
                key={b.n}
                onClick={() => setBase(b.n)}
                className="text-xs font-bold px-3 py-2 rounded-lg border transition-all"
                style={{
                  background: active ? "var(--accent)" : "var(--bg-card)",
                  color: active ? "var(--bg-card)" : "var(--text)",
                  borderColor: active ? "var(--accent)" : "var(--border-strong)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {b.label}
                <span
                  className="block text-[9px] font-normal mt-0.5"
                  style={{ color: active ? "var(--bg-sidebar)" : "var(--text-muted)" }}
                >
                  {b.note}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Number input */}
      <div className="mb-5">
        <label className="flex items-center gap-3">
          <span className="text-xs font-bold w-16 shrink-0" style={{ color: "var(--text-muted)" }}>
            Number
          </span>
          <input
            type="range"
            min={1}
            max={9999}
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
            className="flex-1"
          />
          <input
            type="number"
            min={1}
            max={9999}
            value={num}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v >= 1 && v <= 9999) setNum(v);
            }}
            className="w-20 text-center text-sm font-bold border rounded px-1 py-0.5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text)", background: "transparent" }}
          />
        </label>
      </div>

      {/* Decomposition equation */}
      <div
        className="mb-5 rounded-lg px-4 py-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--green-dark)" }}>
          {num} written in base {base}
        </p>
        <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)", lineHeight: 1.5 }}>
          {reversed.map((d, i) => {
            const power = reversed.length - 1 - i;
            return (
              <span key={i}>
                {i > 0 && <span style={{ color: "var(--text-muted)" }}> + </span>}
                <span style={{ opacity: d === 0 ? 0.35 : 1 }}>
                  {d}×{base}
                  <sup>{power}</sup>
                </span>
              </span>
            );
          })}
        </p>
      </div>

      {/* Visual breakdown — one row per landmark power */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          How many of each landmark
        </p>
        <div className="space-y-1.5">
          {reversed.map((d, i) => {
            const power = reversed.length - 1 - i;
            const landmark = Math.pow(base, power);
            const dotsToRender = Math.min(d, 60);
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}
              >
                <span
                  className="text-[11px] font-mono font-bold w-20 shrink-0"
                  style={{ color: "var(--text)" }}
                >
                  {base}
                  <sup>{power}</sup> = {landmark}
                </span>
                <span className="text-[11px] w-8 shrink-0 text-center" style={{ color: "var(--text-muted)" }}>
                  ×{d}
                </span>
                <div className="flex-1 flex flex-wrap gap-1 items-center">
                  {Array.from({ length: dotsToRender }).map((_, j) => (
                    <span
                      key={j}
                      className="inline-block rounded-sm"
                      style={{ width: 10, height: 10, background: d === 0 ? "var(--border)" : "var(--accent)" }}
                    />
                  ))}
                  {d > 60 && (
                    <span className="text-[10px] ml-1" style={{ color: "var(--text-muted)" }}>
                      …{d}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insight */}
      <div
        className="mt-4 rounded-lg px-4 py-3"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
      >
        <p className="text-[11px]" style={{ color: "var(--text)" }}>
          <strong style={{ color: "var(--yellow)" }}>Why a base matters:</strong> every landmark is a power of {base}.
          Multiply two landmarks — you get another landmark. That single fact makes arithmetic clean. The Roman system
          breaks this rule: V × L = CCL has no single symbol.
        </p>
      </div>
    </WidgetShell>
  );
}
