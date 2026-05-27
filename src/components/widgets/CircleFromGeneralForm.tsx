"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function fmt(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(3).replace(/\.?0+$/, "");
}

const PRESETS = [
  { label: "x² + y² + 8x + 10y − 8 = 0", D: 8, E: 10, F: -8 },
  { label: "x² + y² − 6x + 4y + 9 = 0", D: -6, E: 4, F: 9 },
  { label: "x² + y² + 2x − 4y − 4 = 0", D: 2, E: -4, F: -4 },
  { label: "x² + y² − 8x = 0", D: -8, E: 0, F: 0 },
];

export default function CircleFromGeneralForm() {
  const [idx, setIdx] = useState(0);
  const p = PRESETS[idx];
  const D = p.D, E = p.E, F = p.F;

  // x² + y² + Dx + Ey + F = 0
  // Complete the square: (x + D/2)² + (y + E/2)² = (D/2)² + (E/2)² − F
  const h = -D / 2;
  const k = -E / 2;
  const rSquared = (D * D) / 4 + (E * E) / 4 - F;
  const r = rSquared >= 0 ? Math.sqrt(rSquared) : NaN;
  const isReal = rSquared > 0;

  return (
    <WidgetShell label="Complete the Square" badge="general → centre & radius">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Any equation of the form x² + y² + Dx + Ey + F = 0 represents a circle (or a point, or
        nothing). To find centre and radius, group x and y terms separately and complete the square.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((preset, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all text-left"
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

      <div className="space-y-2">
        <div className="rounded-lg p-2" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Step 1 — group x and y</p>
          <p className="text-xs font-mono" style={{ color: "var(--text)" }}>
            (x² {D >= 0 ? "+" : "−"} {Math.abs(D)}x) + (y² {E >= 0 ? "+" : "−"} {Math.abs(E)}y) = {-F}
          </p>
        </div>
        <div className="rounded-lg p-2" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Step 2 — add (D/2)² and (E/2)² to both sides</p>
          <p className="text-xs font-mono" style={{ color: "var(--text)" }}>
            (x {D / 2 >= 0 ? "+" : "−"} {Math.abs(D / 2)})² + (y {E / 2 >= 0 ? "+" : "−"} {Math.abs(E / 2)})² = {-F} + {fmt((D * D) / 4)} + {fmt((E * E) / 4)}
          </p>
        </div>
        <div className="rounded-lg p-2" style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--yellow)" }}>Step 3 — read off</p>
          <p className="text-xs font-mono font-bold" style={{ color: "var(--yellow)" }}>
            (x − ({fmt(h)}))² + (y − ({fmt(k)}))² = {fmt(rSquared)}
          </p>
        </div>
        <div className="rounded-lg p-3" style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Centre and radius
          </p>
          {isReal ? (
            <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
              Centre = ({fmt(h)}, {fmt(k)})  ·  Radius = √{fmt(rSquared)} ≈ {fmt(r)}
            </p>
          ) : rSquared === 0 ? (
            <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
              Degenerate: a single point at ({fmt(h)}, {fmt(k)})
            </p>
          ) : (
            <p className="text-sm font-mono font-bold" style={{ color: "var(--red-dark)" }}>
              No real circle — right side is negative
            </p>
          )}
        </div>
      </div>
    </WidgetShell>
  );
}
