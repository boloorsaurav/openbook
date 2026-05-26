"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Op = "+" | "−" | "×" | "÷";

function formatComplex(a: number, b: number): string {
  const ar = Number(a.toFixed(4));
  const br = Number(b.toFixed(4));
  if (br === 0) return `${ar}`;
  if (ar === 0) return `${br}i`;
  return `${ar} ${br >= 0 ? "+" : "−"} ${Math.abs(br)}i`;
}

export default function ComplexArithmetic() {
  const [a1, setA1] = useState("2");
  const [b1, setB1] = useState("3");
  const [a2, setA2] = useState("1");
  const [b2, setB2] = useState("-2");
  const [op, setOp] = useState<Op>("+");

  const A = Number(a1) || 0;
  const B = Number(b1) || 0;
  const C = Number(a2) || 0;
  const D = Number(b2) || 0;

  let resA = 0,
    resB = 0,
    formula = "",
    step = "";

  if (op === "+") {
    resA = A + C;
    resB = B + D;
    formula = "(a + ib) + (c + id) = (a + c) + i(b + d)";
    step = `(${A} + ${C}) + i(${B} + ${D})`;
  } else if (op === "−") {
    resA = A - C;
    resB = B - D;
    formula = "(a + ib) − (c + id) = (a − c) + i(b − d)";
    step = `(${A} − ${C}) + i(${B} − ${D})`;
  } else if (op === "×") {
    resA = A * C - B * D;
    resB = A * D + B * C;
    formula = "(a + ib)(c + id) = (ac − bd) + i(ad + bc)";
    step = `(${A}·${C} − ${B}·${D}) + i(${A}·${D} + ${B}·${C})`;
  } else {
    const denom = C * C + D * D;
    if (denom === 0) {
      formula = "Division by zero — z₂ must be non-zero";
      step = "—";
    } else {
      resA = (A * C + B * D) / denom;
      resB = (B * C - A * D) / denom;
      formula = "(a + ib) / (c + id) = [(ac + bd) + i(bc − ad)] / (c² + d²)";
      step = `[(${A}·${C} + ${B}·${D}) + i(${B}·${C} − ${A}·${D})] / (${C}² + ${D}²)`;
    }
  }

  const inputCls = "w-16 px-2 py-1 rounded border text-sm font-mono";
  const inputStyle = { borderColor: "var(--border-strong)", background: "var(--bg-card)" };

  return (
    <WidgetShell label="Complex Arithmetic" badge="z₁ ⊕ z₂">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Enter two complex numbers and pick an operation. See the rule applied step by step.
      </p>

      <div className="space-y-3">
        {/* z1 */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold w-8" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            z₁ =
          </span>
          <input type="number" value={a1} onChange={(e) => setA1(e.target.value)} className={inputCls} style={inputStyle} />
          <span style={{ color: "var(--text)" }}>+</span>
          <input type="number" value={b1} onChange={(e) => setB1(e.target.value)} className={inputCls} style={inputStyle} />
          <span style={{ color: "var(--text)" }}>i</span>
        </div>

        {/* z2 */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold w-8" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            z₂ =
          </span>
          <input type="number" value={a2} onChange={(e) => setA2(e.target.value)} className={inputCls} style={inputStyle} />
          <span style={{ color: "var(--text)" }}>+</span>
          <input type="number" value={b2} onChange={(e) => setB2(e.target.value)} className={inputCls} style={inputStyle} />
          <span style={{ color: "var(--text)" }}>i</span>
        </div>

        {/* Op */}
        <div className="flex flex-wrap gap-2">
          {(["+", "−", "×", "÷"] as Op[]).map((o) => (
            <button
              key={o}
              onClick={() => setOp(o)}
              className="text-sm font-bold w-9 h-9 rounded border transition-all"
              style={{
                background: op === o ? "var(--accent)" : "var(--bg-card)",
                color: op === o ? "var(--bg-card)" : "var(--text)",
                borderColor: op === o ? "var(--accent)" : "var(--border-strong)",
                fontFamily: "var(--font-display)",
              }}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="mt-4 space-y-2">
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Rule
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text)" }}>{formula}</p>
        </div>
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
            Substitute
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text)" }}>{step}</p>
        </div>
        <div
          className="rounded-lg p-3 text-center"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            z₁ {op} z₂
          </p>
          <p className="text-base font-extrabold font-mono" style={{ color: "var(--green-dark)" }}>
            {op === "÷" && C * C + D * D === 0 ? "undefined" : formatComplex(resA, resB)}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
