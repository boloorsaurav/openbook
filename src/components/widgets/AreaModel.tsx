"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

export default function AreaModel() {
  const [a, setA] = useState(4);
  const [b, setB] = useState(3);

  const total = a + b;
  const a2 = a * a;
  const ab = a * b;
  const b2 = b * b;
  const total2 = total * total;

  // Grid proportions (percent of width/height)
  const aPct = (a / total) * 100;
  const bPct = (b / total) * 100;

  return (
    <WidgetShell label="Area Model" badge="(a + b)² Identity">
      {/* Sliders */}
      <div className="space-y-3 mb-5">
        {[
          { label: "a", value: a, setter: setA, color: "var(--green)" },
          { label: "b", value: b, setter: setB, color: "var(--accent-border)" },
        ].map(({ label, value, setter, color }) => (
          <label key={label} className="flex items-center gap-3">
            <span
              className="text-sm font-extrabold w-5 text-center shrink-0"
              style={{ color, fontFamily: "var(--font-display)" }}
            >
              {label}
            </span>
            <input
              type="range"
              min={1}
              max={10}
              value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="flex-1"
              style={{ accentColor: color }}
            />
            <span
              className="w-6 text-right text-sm font-extrabold shrink-0"
              style={{ color, fontFamily: "var(--font-display)" }}
            >
              {value}
            </span>
          </label>
        ))}
      </div>

      {/* Visual area model */}
      <div className="mb-5">
        <p
          className="text-[10px] font-bold uppercase tracking-wider mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          Square of side (a + b) = {total}
        </p>
        <div
          className="w-full rounded-lg overflow-hidden border"
          style={{ borderColor: "var(--border-strong)", aspectRatio: "1" }}
        >
          {/* Top row: a² | ab */}
          <div className="flex" style={{ height: `${aPct}%` }}>
            {/* a² */}
            <div
              className="flex items-center justify-center text-xs font-bold"
              style={{
                width: `${aPct}%`,
                background: "var(--green-light)",
                border: "1.5px solid var(--green-border)",
                color: "var(--green-dark)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)" }}>a²={a2}</span>
            </div>
            {/* ab (top right) */}
            <div
              className="flex items-center justify-center text-xs font-bold flex-1"
              style={{
                background: "var(--yellow-light)",
                border: "1.5px solid var(--yellow-border)",
                color: "var(--yellow)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)" }}>ab={ab}</span>
            </div>
          </div>
          {/* Bottom row: ab | b² */}
          <div className="flex flex-1" style={{ height: `${bPct}%` }}>
            {/* ab (bottom left) */}
            <div
              className="flex items-center justify-center text-xs font-bold"
              style={{
                width: `${aPct}%`,
                background: "var(--yellow-light)",
                border: "1.5px solid var(--yellow-border)",
                color: "var(--yellow)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)" }}>ab={ab}</span>
            </div>
            {/* b² */}
            <div
              className="flex items-center justify-center text-xs font-bold flex-1"
              style={{
                background: "var(--accent-light)",
                border: "1.5px solid var(--border-strong)",
                color: "var(--text)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)" }}>b²={b2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Identity equation */}
      <div
        className="rounded-lg px-4 py-3 text-center mb-4"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Identity 1A
        </p>
        <p className="text-lg font-extrabold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
          (a + b)² = a² + 2ab + b²
        </p>
        <p className="text-sm font-bold mt-1" style={{ color: "var(--green-dark)" }}>
          ({a} + {b})² = {a2} + {2 * ab} + {b2} = {total2}
        </p>
      </div>

      {/* Parts table */}
      <div className="rounded-lg border overflow-hidden" style={{ borderColor: "var(--border)" }}>
        <div
          className="grid grid-cols-3 px-3 py-2 text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "var(--bg-sidebar)",
            color: "var(--text-muted)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span>Region</span>
          <span>Expression</span>
          <span>Value</span>
        </div>
        {[
          { region: "a²", expr: `${a} × ${a}`, val: a2, color: "var(--green-dark)" },
          { region: "ab (×2)", expr: `2 × ${a} × ${b}`, val: 2 * ab, color: "var(--yellow)" },
          { region: "b²", expr: `${b} × ${b}`, val: b2, color: "var(--text-muted)" },
          { region: "Total", expr: `(${a}+${b})²`, val: total2, color: "var(--text)" },
        ].map(({ region, expr, val, color }) => (
          <div
            key={region}
            className="grid grid-cols-3 px-3 py-2 text-xs border-b last:border-b-0"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="font-bold" style={{ color }}>{region}</span>
            <span style={{ color: "var(--text-muted)" }}>{expr}</span>
            <span className="font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
