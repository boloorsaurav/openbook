"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function fmt(v: number): string {
  if (!isFinite(v)) return "(∞)";
  if (Math.abs(v) > 1e9) return v.toExponential(3);
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(4).replace(/\.?0+$/, "");
}

export default function GeometricProgression() {
  const [a, setA] = useState(2);
  const [r, setR] = useState(0.5);
  const [n, setN] = useState(6);

  const terms = Array.from({ length: n }, (_, i) => a * Math.pow(r, i));
  let sumN: number;
  if (r === 1) sumN = a * n;
  else sumN = (a * (1 - Math.pow(r, n))) / (1 - r);
  const sumInf = Math.abs(r) < 1 ? a / (1 - r) : Infinity;

  return (
    <WidgetShell label="Geometric Progression" badge="a, ar, ar², …">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        A geometric progression multiplies each term by a fixed ratio r. Set the first term a, the
        ratio r, and how many terms you want.
      </p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>First term a</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value) || 0)}
            step={0.5}
            className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>Ratio r</label>
          <input
            type="number"
            value={r}
            onChange={(e) => setR(Number(e.target.value) || 0)}
            step={0.1}
            className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>Terms n</label>
          <input
            type="number"
            value={n}
            onChange={(e) => setN(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
            min={1}
            max={20}
            className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
          />
        </div>
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          The terms a, ar, ar², …
        </p>
        <div className="flex flex-wrap gap-1.5">
          {terms.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded text-xs font-mono font-bold"
              style={{
                background: "var(--bg-card)",
                color: "var(--text)",
                border: "1px solid var(--border-strong)",
              }}
            >
              {fmt(t)}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Sum to n terms — Sₙ
          </p>
          <p className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
            {r === 1 ? "n · a" : "a(1 − rⁿ) / (1 − r)"}
          </p>
          <p className="text-base font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            S{n} = {fmt(sumN)}
          </p>
        </div>
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
            Sum to infinity — S∞
          </p>
          <p className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
            converges only when |r| &lt; 1
          </p>
          <p className="text-base font-mono font-bold" style={{ color: "var(--yellow)" }}>
            {Math.abs(r) < 1 ? `a / (1 − r) = ${fmt(sumInf)}` : "diverges"}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
