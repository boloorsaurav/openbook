"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const QUAD_TYPES = [
  { label: "Rectangle",     angles: [90, 90, 90, 90],   locked: true  },
  { label: "Square",        angles: [90, 90, 90, 90],   locked: true  },
  { label: "Parallelogram", angles: [60, 120, 60, 120], locked: false },
  { label: "Rhombus",       angles: [70, 110, 70, 110], locked: false },
  { label: "Trapezium",     angles: [80, 100, 80, 100], locked: false },
  { label: "Custom",        angles: [80, 100, 95, 85],  locked: false },
];

const LABELS = ["∠A", "∠B", "∠C", "∠D"];
const COLORS = ["var(--green)", "var(--yellow)", "var(--red)", "var(--accent-border)"];

export default function AngleSumWidget() {
  const [typeIdx, setTypeIdx] = useState(2);
  const [angles, setAngles] = useState([...QUAD_TYPES[2].angles]);

  function selectType(i: number) {
    setTypeIdx(i);
    setAngles([...QUAD_TYPES[i].angles]);
  }

  function setAngle(i: number, val: number) {
    if (QUAD_TYPES[typeIdx].locked) return;
    const next = [...angles];
    // For parallelogram/rhombus: keep opposite angles equal
    if (typeIdx === 2 || typeIdx === 3) {
      next[i] = val;
      next[(i + 2) % 4] = val;
      const pair = i % 2 === 0 ? 1 : 0;
      next[pair] = 180 - val;
      next[pair + 2] = 180 - val;
    } else {
      next[i] = val;
    }
    setAngles(next);
  }

  const total = angles.reduce((a, b) => a + b, 0);
  const isExact360 = total === 360;

  return (
    <WidgetShell label="Angle Sum Explorer" badge="Quadrilaterals">
      {/* Type selector */}
      <div className="flex flex-wrap gap-2 mb-5">
        {QUAD_TYPES.map((qt, i) => (
          <button key={i} onClick={() => selectType(i)}
            className="text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{
              borderColor: typeIdx === i ? "var(--accent)" : "var(--border-strong)",
              background: typeIdx === i ? "var(--accent)" : "transparent",
              color: typeIdx === i ? "#fff" : "var(--text-muted)",
            }}>
            {qt.label}
          </button>
        ))}
      </div>

      {/* Angle sliders */}
      <div className="space-y-3 mb-5">
        {angles.map((a, i) => (
          <label key={i} className="flex items-center gap-3">
            <span className="text-xs font-bold w-8 text-center shrink-0"
              style={{ color: COLORS[i] }}>{LABELS[i]}</span>
            <input type="range" min={1} max={179} value={a}
              disabled={QUAD_TYPES[typeIdx].locked}
              onChange={(e) => setAngle(i, Number(e.target.value))}
              className="flex-1" style={{ accentColor: COLORS[i] }} />
            <span className="w-10 text-right text-sm font-extrabold"
              style={{ color: COLORS[i], fontFamily: "var(--font-display)" }}>
              {a}°
            </span>
          </label>
        ))}
      </div>

      {/* Visual angle arcs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {angles.map((a, i) => {
          const pct = (a / 360) * 100;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="relative w-12 h-12 rounded-full"
                style={{ background: "var(--border)" }}>
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(${COLORS[i]} ${pct}%, transparent ${pct}%)`,
                  }} />
                <div className="absolute inset-1 rounded-full"
                  style={{ background: "var(--bg-card)" }} />
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
                  style={{ color: COLORS[i] }}>{a}°</span>
              </div>
              <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{LABELS[i]}</span>
            </div>
          );
        })}
        {/* Total */}
        <div className="flex flex-col items-center gap-1 ml-2 justify-center">
          <span className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Total</span>
          <span className="text-xl font-extrabold"
            style={{ color: isExact360 ? "var(--green-dark)" : "var(--red)", fontFamily: "var(--font-display)" }}>
            {total}°
          </span>
        </div>
      </div>

      <div className="rounded-lg px-4 py-3 text-center"
        style={{
          background: isExact360 ? "var(--green-light)" : "var(--red-light)",
          border: `1.5px solid ${isExact360 ? "var(--green-border)" : "var(--red-border)"}`,
        }}>
        <p className="text-sm font-bold"
          style={{ color: isExact360 ? "var(--green-dark)" : "var(--red-dark)" }}>
          {isExact360
            ? "✓ Angles sum to exactly 360° — true for every quadrilateral!"
            : `⚠ Sum is ${total}°. In a valid quadrilateral, all four angles must total 360°.`}
        </p>
      </div>
    </WidgetShell>
  );
}
