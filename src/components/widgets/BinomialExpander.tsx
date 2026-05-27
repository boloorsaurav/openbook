"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;
  let v = 1;
  for (let i = 0; i < r; i++) v = (v * (n - i)) / (i + 1);
  return Math.round(v);
}

function fmtCoeff(c: number, first: boolean): string {
  if (c === 0) return "";
  const sign = c < 0 ? " − " : first ? "" : " + ";
  const abs = Math.abs(c);
  return abs === 1 ? `${sign}` : `${sign}${abs}`;
}

function fmtTerm(prefix: string, av: string, ap: number, bv: string, bp: number): string {
  const aPart = ap === 0 ? "" : ap === 1 ? av : `${av}^${ap}`;
  const bPart = bp === 0 ? "" : bp === 1 ? bv : `${bv}^${bp}`;
  const body = `${aPart}${aPart && bPart ? " " : ""}${bPart}`;
  if (!body) return `${prefix}${1}`;
  if (prefix === "" || prefix === " + " || prefix === " − ") return `${prefix}${body === "" ? "1" : ""}${body || "1"}`;
  return `${prefix}${body}`;
}

const PRESETS = [
  { label: "(a + b)^4", aCoef: 1, aVar: "a", bCoef: 1, bVar: "b", n: 4 },
  { label: "(x + 2)^6", aCoef: 1, aVar: "x", bCoef: 2, bVar: "", n: 6 },
  { label: "(2x + 3y)^5", aCoef: 2, aVar: "x", bCoef: 3, bVar: "y", n: 5 },
  { label: "(x − 2y)^5", aCoef: 1, aVar: "x", bCoef: -2, bVar: "y", n: 5 },
  { label: "(1 + x)^7", aCoef: 1, aVar: "", bCoef: 1, bVar: "x", n: 7 },
];

export default function BinomialExpander() {
  const [idx, setIdx] = useState(0);
  const p = PRESETS[idx];

  // Expansion: (aCoef·aVar + bCoef·bVar)^n
  const terms: { coef: number; av: string; ap: number; bv: string; bp: number }[] = [];
  for (let r = 0; r <= p.n; r++) {
    const c = nCr(p.n, r);
    const ap = p.n - r;
    const bp = r;
    const aMul = Math.pow(p.aCoef, ap);
    const bMul = Math.pow(p.bCoef, bp);
    const coef = c * aMul * bMul;
    terms.push({ coef, av: p.aVar, ap, bv: p.bVar, bp });
  }

  return (
    <WidgetShell label="Binomial Expansion" badge="(a + b)ⁿ">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick a binomial. Each term comes from one row of Pascal&apos;s triangle, with the powers of
        the two variables decreasing and increasing in lockstep.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((preset, i) => (
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
            {preset.label}
          </button>
        ))}
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Term-by-term expansion
        </p>
        <div className="space-y-1.5">
          {terms.map((t, i) => {
            const aPart = t.ap === 0 ? "" : t.ap === 1 ? t.av : `${t.av}^${t.ap}`;
            const bPart = t.bp === 0 ? "" : t.bp === 1 ? t.bv : `${t.bv}^${t.bp}`;
            const body = `${aPart}${aPart && bPart ? "·" : ""}${bPart}`;
            const coefStr = body ? (t.coef === 1 ? "" : t.coef === -1 ? "−" : t.coef.toString()) : t.coef.toString();
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-xs font-mono"
                style={{ color: "var(--text)" }}
              >
                <span className="text-[10px]" style={{ color: "var(--text-muted)", minWidth: 20 }}>
                  T{i + 1}
                </span>
                <span style={{ color: "var(--text-muted)", minWidth: 60 }}>
                  {p.n}C{i} · ({p.aCoef === 1 && p.aVar ? p.aVar : p.aCoef === 1 ? "1" : p.aVar ? `${p.aCoef}${p.aVar}` : p.aCoef})^{t.ap} · ({p.bCoef >= 0 ? "" : ""}{p.bCoef === 1 && p.bVar ? p.bVar : p.bCoef === 1 ? "1" : p.bVar ? `${p.bCoef}${p.bVar}` : p.bCoef})^{t.bp}
                </span>
                <span className="font-bold" style={{ color: "var(--accent)" }}>
                  = {coefStr}{body || (t.coef === 1 || t.coef === -1 ? "1" : "")}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="rounded-lg p-3"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Final expansion ({terms.length} terms)
        </p>
        <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)", wordBreak: "break-word" }}>
          {terms
            .map((t, i) => {
              const aPart = t.ap === 0 ? "" : t.ap === 1 ? t.av : `${t.av}^${t.ap}`;
              const bPart = t.bp === 0 ? "" : t.bp === 1 ? t.bv : `${t.bv}^${t.bp}`;
              const body = `${aPart}${aPart && bPart ? "·" : ""}${bPart}`;
              const isFirst = i === 0;
              const sign = t.coef < 0 ? (isFirst ? "−" : " − ") : isFirst ? "" : " + ";
              const abs = Math.abs(t.coef);
              const coefStr = body ? (abs === 1 ? "" : abs.toString()) : abs.toString();
              return `${sign}${coefStr}${body || (abs === 1 ? "1" : "")}`;
            })
            .join("")}
        </p>
      </div>
    </WidgetShell>
  );
}
