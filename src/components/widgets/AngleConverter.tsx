"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const R = 80;
const CX = 110;
const CY = 110;
const SIZE = 220;

function formatRad(deg: number): string {
  // Snap to common fractions of π
  const r = (deg * Math.PI) / 180;
  const ratio = r / Math.PI;
  const denoms = [1, 2, 3, 4, 6, 8, 12];
  for (const d of denoms) {
    const num = ratio * d;
    if (Math.abs(num - Math.round(num)) < 0.005) {
      const n = Math.round(num);
      if (n === 0) return "0";
      if (d === 1) return n === 1 ? "π" : n === -1 ? "−π" : `${n}π`;
      const np = n === 1 ? "π" : n === -1 ? "−π" : `${n}π`;
      return `${np}/${d}`;
    }
  }
  return `${r.toFixed(3)} rad`;
}

export default function AngleConverter() {
  const [deg, setDeg] = useState(60);
  const rad = (deg * Math.PI) / 180;
  const px = CX + R * Math.cos(-rad + 0); // standard math: anticlockwise from +x
  const py = CY - R * Math.sin(rad);

  // Arc path from (CX+R, CY) sweeping to terminal side
  const startX = CX + R;
  const startY = CY;
  const endX = CX + R * Math.cos(rad);
  const endY = CY - R * Math.sin(rad);
  const largeArc = Math.abs(deg) > 180 ? 1 : 0;
  const sweepFlag = deg >= 0 ? 0 : 1;
  const arcRadius = 30;
  const arcStartX = CX + arcRadius;
  const arcStartY = CY;
  const arcEndX = CX + arcRadius * Math.cos(rad);
  const arcEndY = CY - arcRadius * Math.sin(rad);

  return (
    <WidgetShell label="Angle Converter" badge="degrees ↔ radians">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Drag the slider. The terminal side rotates anticlockwise from the positive x-axis. Watch
        both the degree and radian readout, plus the arc length on a unit circle.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full md:w-auto" style={{ maxWidth: SIZE, maxHeight: SIZE }}>
          {/* Unit circle */}
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="var(--bg-card)"
            stroke="var(--border-strong)"
            strokeWidth={1.5}
          />
          {/* Axes */}
          <line x1={10} y1={CY} x2={SIZE - 10} y2={CY} stroke="var(--border)" strokeWidth={1} />
          <line x1={CX} y1={10} x2={CX} y2={SIZE - 10} stroke="var(--border)" strokeWidth={1} />
          {/* Arc (angle indicator) */}
          {Math.abs(deg) > 0.5 && (
            <path
              d={`M ${arcStartX} ${arcStartY} A ${arcRadius} ${arcRadius} 0 ${largeArc} ${sweepFlag} ${arcEndX} ${arcEndY}`}
              fill="none"
              stroke="var(--green-dark)"
              strokeWidth={2}
            />
          )}
          {/* Initial side */}
          <line
            x1={CX}
            y1={CY}
            x2={CX + R}
            y2={CY}
            stroke="var(--text-muted)"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />
          {/* Terminal side */}
          <line x1={CX} y1={CY} x2={endX} y2={endY} stroke="var(--accent)" strokeWidth={2.5} />
          {/* Point on circle */}
          <circle cx={endX} cy={endY} r={5} fill="var(--accent)" />
          {/* Label */}
          <text x={CX + arcRadius + 4} y={CY - 4} fontSize={10} fill="var(--green-dark)" fontWeight={700}>
            θ
          </text>
        </svg>

        <div className="flex-1 w-full space-y-3">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
              Angle (degrees)
            </label>
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={deg}
              onChange={(e) => setDeg(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              min={0}
              max={360}
              value={deg}
              onChange={(e) => setDeg(Math.max(0, Math.min(360, Number(e.target.value))))}
              className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
              style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
            />
          </div>

          <div
            className="rounded-lg p-2 text-center"
            style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--green-dark)" }}>
              Radian measure
            </p>
            <p className="text-base font-extrabold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
              {formatRad(deg)}
            </p>
            <p className="text-[11px] font-mono" style={{ color: "var(--green-dark)" }}>
              ≈ {rad.toFixed(4)}
            </p>
          </div>

          <div
            className="rounded-lg p-2 text-center"
            style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--yellow)" }}>
              Arc length on unit circle
            </p>
            <p className="text-base font-extrabold" style={{ color: "var(--yellow)", fontFamily: "var(--font-display)" }}>
              {rad.toFixed(4)} units
            </p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              ℓ = r · θ with r = 1
            </p>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}
