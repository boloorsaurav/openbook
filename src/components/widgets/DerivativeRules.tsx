"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const FUNCTIONS = [
  { label: "f(x) = c (constant)", fp: "0", note: "Constant doesn't change — derivative is 0." },
  { label: "f(x) = x", fp: "1", note: "Slope of the line y = x is exactly 1 everywhere." },
  { label: "f(x) = xⁿ", fp: "n · x^(n−1)", note: "The power rule — drop the exponent in front, subtract 1." },
  { label: "f(x) = x²", fp: "2x", note: "Power rule with n = 2." },
  { label: "f(x) = x³", fp: "3x²", note: "Power rule with n = 3." },
  { label: "f(x) = 1/x = x⁻¹", fp: "−1/x²", note: "Power rule with n = −1 gives −x⁻², which is −1/x²." },
  { label: "f(x) = √x = x^(1/2)", fp: "1 / (2√x)", note: "Power rule with n = 1/2 gives (1/2) x^(−1/2)." },
  { label: "f(x) = sin x", fp: "cos x", note: "Foundational trig derivative." },
  { label: "f(x) = cos x", fp: "−sin x", note: "Note the minus sign — easy to forget." },
  { label: "f(x) = tan x", fp: "sec²x", note: "Use quotient rule on sin/cos to derive this." },
];

const RULES = [
  { label: "Sum", lhs: "(f + g)′", rhs: "f′ + g′" },
  { label: "Difference", lhs: "(f − g)′", rhs: "f′ − g′" },
  { label: "Constant multiple", lhs: "(c · f)′", rhs: "c · f′" },
  { label: "Product", lhs: "(f · g)′", rhs: "f′·g + f·g′" },
  { label: "Quotient", lhs: "(f / g)′", rhs: "(f′·g − f·g′) / g²" },
];

export default function DerivativeRules() {
  const [idx, setIdx] = useState(2);
  const f = FUNCTIONS[idx];

  return (
    <WidgetShell label="Derivative Rules" badge="standard functions">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        These ten standard derivatives plus five combination rules cover almost everything you&apos;ll
        differentiate in Class 11. Pick a function:
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {FUNCTIONS.map((fn, i) => (
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
            {fn.label}
          </button>
        ))}
      </div>

      <div
        className="rounded-lg p-3 mb-4 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Derivative
        </p>
        <p className="text-lg font-mono font-bold" style={{ color: "var(--green-dark)" }}>
          f′(x) = {f.fp}
        </p>
        <p className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>{f.note}</p>
      </div>

      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
        Combination rules
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {RULES.map((r, i) => (
          <div
            key={i}
            className="rounded-lg p-2"
            style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
          >
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>{r.label}</p>
            <p className="text-xs font-mono" style={{ color: "var(--text)" }}>{r.lhs} = {r.rhs}</p>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
