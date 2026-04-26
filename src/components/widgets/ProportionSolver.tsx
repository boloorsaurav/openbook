"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function gcd(x: number, y: number): number {
  return y === 0 ? x : gcd(y, x % y);
}

function simplify(p: number, q: number): string {
  if (!q || !isFinite(p) || !isFinite(q)) return "—";
  const g = gcd(Math.abs(Math.round(p)), Math.abs(Math.round(q)));
  if (g === 0) return `${Math.round(p)} : ${Math.round(q)}`;
  return `${Math.round(p / g)} : ${Math.round(q / g)}`;
}

export default function ProportionSolver() {
  const [a, setA] = useState("6");
  const [b, setB] = useState("10");
  const [c, setC] = useState("18");

  const na = parseFloat(a) || 0;
  const nb = parseFloat(b) || 0;
  const nc = parseFloat(c) || 0;

  const d = na && nb && nc ? (nb * nc) / na : null;
  const isValid = d !== null && isFinite(d) && d > 0;

  const simplifiedAB = simplify(na, nb);
  const simplifiedCD = isValid ? simplify(nc, d!) : "—";

  const steps = isValid
    ? [
        "Proportion: a : b  ::  c : d",
        "Cross-multiplication rule: a × d = b × c",
        `${na} × d = ${nb} × ${nc} = ${nb * nc}`,
        `d = ${nb * nc} ÷ ${na} = ${d!.toFixed(d! % 1 === 0 ? 0 : 2)}`,
      ]
    : ["Enter values for a, b, and c to find d."];

  return (
    <WidgetShell label="Proportion Solver" badge="Cross Multiplication">
      {/* Proportion display: a : b :: c : ? */}
      <div className="flex items-center justify-center gap-1 mb-5 flex-wrap">
        {[
          { key: "a", val: a, setter: setA, color: "var(--green)" },
          { key: ":", val: null, setter: null, color: "" },
          { key: "b", val: b, setter: setB, color: "var(--accent-border)" },
          { key: "::", val: null, setter: null, color: "" },
          { key: "c", val: c, setter: setC, color: "var(--yellow)" },
          { key: ":", val: null, setter: null, color: "" },
          { key: "d", val: null, setter: null, color: "" },
        ].map((item) => {
          if (item.val === null && item.key !== "d") {
            return (
              <span key={item.key} className="text-lg font-bold" style={{ color: "var(--text-muted)" }}>
                {item.key}
              </span>
            );
          }
          if (item.key === "d") {
            return (
              <div
                key="d"
                className="w-14 h-10 rounded-lg flex items-center justify-center text-sm font-extrabold border-2"
                style={{
                  borderColor: isValid ? "var(--green-border)" : "var(--border-strong)",
                  background: isValid ? "var(--green-light)" : "var(--bg-sidebar)",
                  color: isValid ? "var(--green-dark)" : "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {isValid ? d!.toFixed(d! % 1 === 0 ? 0 : 2) : "?"}
              </div>
            );
          }
          return (
            <input
              key={item.key}
              type="number"
              min={1}
              step={1}
              value={item.val as string}
              onChange={(e) => item.setter!(e.target.value)}
              className="w-14 h-10 text-center text-sm font-extrabold border-2 rounded-lg"
              style={{
                borderColor: item.color,
                color: item.color,
                background: "transparent",
                fontFamily: "var(--font-display)",
              }}
            />
          );
        })}
      </div>

      {/* Equivalent ratios — shows BOTH simplified forms to teach what proportion means */}
      {isValid && (
        <div className="mb-5 rounded-lg px-4 py-3"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--green-dark)" }}>
            Both ratios simplify to the same fraction
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>a : b</p>
              <p className="text-sm font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                {simplifiedAB}
              </p>
            </div>
            <span className="text-lg font-bold" style={{ color: "var(--green-dark)" }}>=</span>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>c : d</p>
              <p className="text-sm font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                {simplifiedCD}
              </p>
            </div>
          </div>
          <p className="text-[11px] text-center mt-2" style={{ color: "var(--green-dark)" }}>
            d is calculated so the ratios are in proportion.
          </p>
        </div>
      )}

      {/* Steps */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Finding d
        </p>
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex items-start gap-2 px-3 py-2 rounded-lg"
            style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}
          >
            <span className="text-[10px] font-bold w-4 shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>
              {i + 1}
            </span>
            <span className="text-xs font-mono" style={{ color: "var(--text)" }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Rule of Three callout */}
      <div className="mt-5 rounded-lg px-4 py-3"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}>
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
          Rule of Three (Trairasika)
        </p>
        <p className="text-xs" style={{ color: "var(--text)" }}>
          Given pramāṇa (a), phala (b), and ichchhā (c), the ichchhāphala is{" "}
          <strong>d = (b × c) ÷ a</strong>. Ancient Indian mathematicians used this to
          solve proportion problems in commerce and astronomy.
        </p>
      </div>
    </WidgetShell>
  );
}
