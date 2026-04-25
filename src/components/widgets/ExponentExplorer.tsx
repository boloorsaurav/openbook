"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Law = "product" | "power" | "quotient" | "negative";

const LAWS: { key: Law; label: string; formula: string; desc: string }[] = [
  { key: "product",  label: "Product",       formula: "nᵃ × nᵇ = nᵃ⁺ᵇ", desc: "Multiplying same base → add exponents" },
  { key: "power",    label: "Power²",        formula: "(nᵃ)ᵇ = nᵃˣᵇ",  desc: "Raising a power to a power → multiply exponents" },
  { key: "quotient", label: "Quotient",      formula: "nᵃ ÷ nᵇ = nᵃ⁻ᵇ", desc: "Dividing same base → subtract exponents" },
  { key: "negative", label: "Negative exp.", formula: "n⁻ᵃ = 1 ÷ nᵃ",  desc: "Negative exponent = reciprocal" },
];

/** Running-product chain: circles showing 2→4→8 for 2³ */
function Chain({
  base, steps, color, strikeFrom, startVal = 1,
}: {
  base: number; steps: number; color: string; strikeFrom?: number; startVal?: number;
}) {
  const values: number[] = [];
  let v = startVal;
  for (let i = 0; i < steps; i++) {
    v *= base;
    values.push(v);
  }
  if (values.length === 0) return null;

  function fmt(n: number) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 10_000)    return `${(n / 1_000).toFixed(0)}K`;
    return String(n);
  }

  return (
    <div className="flex items-center flex-wrap gap-1">
      {values.map((val, i) => {
        const isLast = i === values.length - 1;
        const struck = strikeFrom !== undefined && i >= strikeFrom;
        return (
          <div key={i} className="flex items-center gap-1">
            {i > 0 && (
              <span className="text-[10px] font-bold"
                style={{ color: struck ? "var(--red)" : "var(--text-muted)" }}>
                ×{base}
              </span>
            )}
            <div
              className="flex items-center justify-center rounded-full text-[11px] font-bold shrink-0"
              style={{
                width: 36, height: 36,
                background: struck
                  ? "var(--red-light)"
                  : isLast && !struck
                  ? color
                  : "var(--bg-sidebar)",
                border: `2px solid ${struck ? "var(--red-border)" : isLast && !struck ? color : "var(--border-strong)"}`,
                color: struck ? "var(--red)" : isLast && !struck ? "#fff" : "var(--text)",
                textDecoration: struck ? "line-through" : "none",
                fontFamily: "var(--font-display)",
              }}
            >
              {fmt(val)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChainLabel({ label, color }: { label: string; color: string }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5"
      style={{ color }}>
      {label}
    </p>
  );
}

export default function ExponentExplorer() {
  const [law, setLaw] = useState<Law>("product");
  const [base, setBase] = useState(2);
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const showB = law !== "negative";
  const maxA = law === "power" ? 3 : 6;
  const maxB = law === "power" ? 3 : 6;

  return (
    <WidgetShell label="Exponent Explorer" badge="Laws of Exponents">
      {/* Law tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {LAWS.map((l) => {
          const active = law === l.key;
          return (
            <button key={l.key} onClick={() => setLaw(l.key)}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all"
              style={{
                borderColor: active ? "var(--accent)" : "var(--border-strong)",
                background: active ? "var(--accent)" : "transparent",
                color: active ? "#fff" : "var(--text-muted)",
              }}>
              {l.label}
            </button>
          );
        })}
      </div>

      {/* Rule banner */}
      <div className="rounded-lg px-4 py-3 mb-5 text-center"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
        <p className="font-bold text-base mb-0.5" style={{ color: "var(--text)" }}>
          {LAWS.find((l) => l.key === law)?.formula}
        </p>
        <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
          {LAWS.find((l) => l.key === law)?.desc}
        </p>
      </div>

      {/* Sliders */}
      <div className="space-y-3 mb-6">
        {[
          { id: "base", label: "Base (n)", val: base, set: setBase, min: 2, max: 5 },
          { id: "a", label: law === "negative" ? "Power (a)" : "Power a", val: a, set: setA, min: 1, max: maxA },
          ...(showB ? [{ id: "b", label: "Power b", val: b, set: setB, min: 1, max: maxB }] : []),
        ].map(({ id, label, val, set, min, max }) => (
          <label key={id} className="flex items-center gap-3">
            <span className="text-[11px] font-bold w-20 shrink-0" style={{ color: "var(--text-muted)" }}>{label}</span>
            <input type="range" min={min} max={max} value={val}
              onChange={(e) => set(Number(e.target.value))} className="flex-1" />
            <span className="w-5 text-center text-sm font-extrabold"
              style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>{val}</span>
          </label>
        ))}
      </div>

      {/* Chain visualisation */}
      <div className="rounded-lg px-4 py-4 space-y-4"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}>

        {law === "product" && (
          <>
            <div>
              <ChainLabel label={`n^a — ${base}^${a} (${a} multiplications)`} color="var(--yellow)" />
              <Chain base={base} steps={a} color="var(--yellow)" />
            </div>
            <div>
              <ChainLabel label={`n^b — ${base}^${b} (${b} more)`} color="var(--green)" />
              <Chain base={base} steps={b} color="var(--green)" startVal={Math.pow(base, a)} />
            </div>
            <div className="pt-1" style={{ borderTop: "1px dashed var(--yellow-border)" }}>
              <ChainLabel label={`n^(a+b) — ${base}^${a + b} = ${Math.pow(base, a + b)} (chains joined)`} color="var(--accent)" />
              <Chain base={base} steps={a + b} color="var(--accent)" />
            </div>
          </>
        )}

        {law === "power" && (
          <>
            <div>
              <ChainLabel label={`n^a = ${base}^${a} — one row of ${a} steps`} color="var(--yellow)" />
              <Chain base={base} steps={a} color="var(--yellow)" />
            </div>
            {Array.from({ length: b - 1 }).map((_, i) => (
              <div key={i}>
                <ChainLabel label={`Row ${i + 2} of ${b}`} color="var(--yellow)" />
                <Chain base={base} steps={a} color="var(--yellow)" startVal={Math.pow(base, a * (i + 1))} />
              </div>
            ))}
            <div className="pt-1" style={{ borderTop: "1px dashed var(--yellow-border)" }}>
              <ChainLabel
                label={`(n^a)^b = ${base}^${a * b} = ${Math.pow(base, a * b)} — ${b} rows of ${a} = ${a * b} total steps`}
                color="var(--accent)" />
              <Chain base={base} steps={a * b} color="var(--accent)" />
            </div>
          </>
        )}

        {law === "quotient" && (
          <>
            <div>
              <ChainLabel label={`n^a — ${base}^${a} = ${Math.pow(base, a)} (${a} steps)`} color="var(--yellow)" />
              <Chain base={base} steps={a} color="var(--yellow)"
                strikeFrom={a > b ? a - b : 0} />
            </div>
            <div>
              <p className="text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>
                ÷ {base}^{b} cancels the last {b} step{b !== 1 ? "s" : ""} (shown struck through above)
              </p>
            </div>
            {a > b ? (
              <div className="pt-1" style={{ borderTop: "1px dashed var(--yellow-border)" }}>
                <ChainLabel
                  label={`n^(a−b) = ${base}^${a - b} = ${Math.pow(base, a - b)} (${a - b} steps remain)`}
                  color="var(--accent)" />
                <Chain base={base} steps={a - b} color="var(--accent)" />
              </div>
            ) : (
              <div className="pt-1" style={{ borderTop: "1px dashed var(--yellow-border)" }}>
                <p className="text-sm font-bold" style={{ color: "var(--accent)" }}>
                  All {a} steps cancelled → {base}^{a - b} = 1/{Math.pow(base, b - a)}
                </p>
              </div>
            )}
          </>
        )}

        {law === "negative" && (
          <>
            <div>
              <ChainLabel label={`${base}^${a} in the numerator — ${a} steps`} color="var(--yellow)" />
              <Chain base={base} steps={a} color="var(--yellow)" />
            </div>
            <div className="pt-1" style={{ borderTop: "1px dashed var(--yellow-border)" }}>
              <ChainLabel label={`${base}^−${a} flips it to the denominator`} color="var(--accent)" />
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold" style={{ color: "var(--text)" }}>1</span>
                <div>
                  <div className="border-b-2 pb-1 mb-1" style={{ borderColor: "var(--accent)" }}>
                    <Chain base={base} steps={a} color="var(--accent)" />
                  </div>
                  <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                    = 1 ÷ {Math.pow(base, a)} = {(1 / Math.pow(base, a)).toFixed(6).replace(/0+$/, "")}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </WidgetShell>
  );
}
