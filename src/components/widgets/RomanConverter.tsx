"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const ROMAN_MAP: [number, string][] = [
  [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],
  [90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],
  [5,"V"],[4,"IV"],[1,"I"],
];

function toRoman(n: number): { numeral: string; steps: string[] } {
  if (n <= 0 || n > 3999) return { numeral: "—", steps: [] };
  let result = "";
  const steps: string[] = [];
  let remaining = n;
  for (const [val, sym] of ROMAN_MAP) {
    while (remaining >= val) {
      result += sym;
      steps.push(`${remaining} ≥ ${val} → write ${sym} (remaining: ${remaining - val})`);
      remaining -= val;
    }
  }
  return { numeral: result, steps };
}

export default function RomanConverter() {
  const [input, setInput] = useState(2367);
  const { numeral, steps } = toRoman(input);

  return (
    <WidgetShell label="Roman Numeral Converter" badge="Number Systems">
      <div className="mb-5">
        <label className="flex items-center gap-3">
          <span className="text-xs font-bold w-24 shrink-0" style={{ color: "var(--text-muted)" }}>
            Number (1–3999)
          </span>
          <input
            type="range" min={1} max={3999} value={input}
            onChange={(e) => setInput(Number(e.target.value))}
            className="flex-1"
          />
          <input
            type="number" min={1} max={3999} value={input}
            onChange={(e) => { const v = Number(e.target.value); if (v >= 1 && v <= 3999) setInput(v); }}
            className="w-16 text-center text-sm font-bold border rounded px-1 py-0.5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text)", background: "transparent" }}
          />
        </label>
      </div>

      {/* Result */}
      <div className="text-center py-4 mb-5 rounded-lg"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1"
          style={{ color: "var(--green-dark)" }}>{input} in Roman numerals</p>
        <p className="text-3xl font-extrabold tracking-widest"
          style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>{numeral}</p>
      </div>

      {/* Step breakdown */}
      {steps.length > 0 && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2"
            style={{ color: "var(--text-muted)" }}>How it's built</p>
          <div className="space-y-1.5 overflow-y-auto" style={{ maxHeight: "12rem" }}>
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded"
                style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}>
                <span className="text-[10px] font-bold w-4 text-center"
                  style={{ color: "var(--text-muted)" }}>{i + 1}</span>
                <span className="text-xs" style={{ color: "var(--text)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Landmark reference */}
      <div className="mt-5 flex flex-wrap gap-2">
        {[["I","1"],["V","5"],["X","10"],["L","50"],["C","100"],["D","500"],["M","1000"]].map(([sym, val]) => (
          <div key={sym} className="flex flex-col items-center px-2 py-1.5 rounded border"
            style={{ borderColor: "var(--border)", background: "var(--bg-sidebar)" }}>
            <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{sym}</span>
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{val}</span>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
