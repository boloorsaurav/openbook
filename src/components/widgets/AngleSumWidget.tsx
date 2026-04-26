"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

// sBC is the side BC as a fraction of the base AB (which is fixed at 1 unit).
// Rectangle and Parallelogram get a 16:9 ratio (sBC = 9/16). Square and Rhombus
// have all-equal sides by definition, so sBC = 1. Trapezium and Custom use a
// neutral 0.6 ratio.
const QUAD_TYPES = [
  { label: "Rectangle",     angles: [90, 90, 90, 90],   locked: true,  constraint: "rect" as const,   sBC: 9 / 16 },
  { label: "Square",        angles: [90, 90, 90, 90],   locked: true,  constraint: "rect" as const,   sBC: 1     },
  { label: "Parallelogram", angles: [60, 120, 60, 120], locked: false, constraint: "para" as const,   sBC: 9 / 16 },
  { label: "Rhombus",       angles: [70, 110, 70, 110], locked: false, constraint: "para" as const,   sBC: 1     },
  { label: "Trapezium",     angles: [110, 110, 70, 70], locked: false, constraint: "trap" as const,   sBC: 0.6   },
  { label: "Custom",        angles: [80, 100, 95, 85],  locked: false, constraint: "custom" as const, sBC: 0.6   },
];

const LABELS = ["∠A", "∠B", "∠C", "∠D"];
const COLORS = ["var(--green)", "var(--yellow)", "var(--red)", "var(--accent-border)"];

const DEG = Math.PI / 180;

/* ───── Solve quadrilateral vertices from angles ─────
 * Walk perimeter starting at A=(0,0) heading east.
 * Fix s_AB = 1 (the base) and s_BC = sBC (per-shape ratio).
 * Solve s_CD and s_DA from the closure equations.
 * Returns 4 vertex positions in math coordinates (y up), or null if degenerate.
 */
function solveQuad(
  angles: number[],
  sBC: number,
): { pts: { x: number; y: number }[]; valid: boolean } | null {
  const [/*α*/, β, γ, δ] = angles;
  const sAB = 1;

  const θ1 = (180 - β) * DEG;
  const θ2 = (360 - β - γ) * DEG;
  const θ3 = (540 - β - γ - δ) * DEG;

  // Solve linear system for s_CD, s_DA:
  // [cos θ2  cos θ3] [s_CD]   [-sAB - sBC cos θ1]
  // [sin θ2  sin θ3] [s_DA] = [-sBC sin θ1]
  const a = Math.cos(θ2), b = Math.cos(θ3);
  const c = Math.sin(θ2), d = Math.sin(θ3);
  const det = a * d - b * c;
  if (Math.abs(det) < 1e-6) return null;

  const rhsX = -sAB - sBC * Math.cos(θ1);
  const rhsY = -sBC * Math.sin(θ1);

  const sCD = (rhsX * d - b * rhsY) / det;
  const sDA = (a * rhsY - rhsX * c) / det;

  // Walk from A — math coordinates (y up)
  const A = { x: 0, y: 0 };
  const B = { x: A.x + sAB, y: A.y };
  const C = { x: B.x + sBC * Math.cos(θ1), y: B.y + sBC * Math.sin(θ1) };
  const D = { x: C.x + sCD * Math.cos(θ2), y: C.y + sCD * Math.sin(θ2) };

  const closeX = D.x + sDA * Math.cos(θ3);
  const closeY = D.y + sDA * Math.sin(θ3);
  const closeErr = Math.hypot(closeX - A.x, closeY - A.y);

  // Valid iff all side lengths positive (no self-intersection) and walk closes.
  const valid = sCD > 0.05 && sDA > 0.05 && closeErr < 0.05;

  return { pts: [A, B, C, D], valid };
}

/* Translate math-coordinate points to SVG (y down), centered on the canvas at a fixed scale.
 * Base side AB is always rendered at exactly `scale` pixels — independent of angles. */
function toSvg(
  pts: { x: number; y: number }[],
  W: number,
  H: number,
  scale: number,
): { x: number; y: number }[] {
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const mx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const my = (Math.min(...ys) + Math.max(...ys)) / 2;
  return pts.map((p) => ({
    x: W / 2 + (p.x - mx) * scale,
    y: H / 2 - (p.y - my) * scale, // flip y for SVG
  }));
}

export default function AngleSumWidget() {
  const [typeIdx, setTypeIdx] = useState(2);
  const [angles, setAngles] = useState([...QUAD_TYPES[2].angles]);

  function selectType(i: number) {
    setTypeIdx(i);
    setAngles([...QUAD_TYPES[i].angles]);
  }

  /** Adjust angles per the active mode's constraint, keeping sum at 360° automatically. */
  function setAngle(i: number, val: number) {
    const t = QUAD_TYPES[typeIdx];
    if (t.locked) return;
    const next = [...angles];
    const v = Math.max(1, Math.min(179, val));

    if (t.constraint === "para") {
      // Opposite angles equal; adjacent angles supplementary.
      next[i] = v;
      next[(i + 2) % 4] = v;
      const pair = i % 2 === 0 ? 1 : 0;
      next[pair] = 180 - v;
      next[pair + 2] = 180 - v;
    } else if (t.constraint === "trap") {
      // Trapezium with AB ∥ DC: ∠A + ∠D = 180, ∠B + ∠C = 180.
      // ∠A pairs with ∠D (indices 0 ↔ 3), ∠B pairs with ∠C (indices 1 ↔ 2).
      const pair = i === 0 ? 3 : i === 3 ? 0 : i === 1 ? 2 : 1;
      next[i] = v;
      next[pair] = 180 - v;
    } else {
      // Custom: adjust the OPPOSITE angle by negative delta to keep sum = 360°.
      const delta = v - angles[i];
      const opp = (i + 2) % 4;
      let oppNew = angles[opp] - delta;
      if (oppNew < 1 || oppNew > 179) {
        // Spill the remainder onto the two adjacent angles.
        oppNew = Math.max(1, Math.min(179, oppNew));
        const remainingDelta = (angles[opp] - oppNew) - delta; // signed leftover
        next[i] = v;
        next[opp] = oppNew;
        // distribute remainder evenly to the other two
        const adj1 = (i + 1) % 4;
        const adj2 = (i + 3) % 4;
        next[adj1] = Math.max(1, Math.min(179, angles[adj1] + remainingDelta / 2));
        next[adj2] = Math.max(1, Math.min(179, angles[adj2] + remainingDelta / 2));
      } else {
        next[i] = v;
        next[opp] = oppNew;
      }
    }
    setAngles(next);
  }

  const total = Math.round(angles.reduce((a, b) => a + b, 0));
  const isExact360 = total === 360;

  // Compute quadrilateral vertices for the visualizer.
  // Fixed scale so base AB always renders at the same pixel length, regardless of angles.
  const W = 280, H = 200, SCALE = 110;
  const solved = solveQuad(angles, QUAD_TYPES[typeIdx].sBC);
  const verts = solved ? toSvg(solved.pts, W, H, SCALE) : null;

  return (
    <WidgetShell label="Angle Sum Explorer" badge="Quadrilaterals">
      {/* Type selector */}
      <div className="flex flex-wrap gap-2 mb-5">
        {QUAD_TYPES.map((qt, i) => (
          <button
            key={i}
            onClick={() => selectType(i)}
            className="text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{
              borderColor: typeIdx === i ? "var(--accent)" : "var(--border-strong)",
              background: typeIdx === i ? "var(--accent)" : "transparent",
              color: typeIdx === i ? "#fff" : "var(--text-muted)",
            }}
          >
            {qt.label}
          </button>
        ))}
      </div>

      {/* Quadrilateral visualizer */}
      <div
        className="rounded-lg p-3 mb-5 flex flex-col items-center"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Quadrilateral with these angles
        </p>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 280, display: "block" }}>
          {verts && solved?.valid ? (
            <>
              <polygon
                points={verts.map((p) => `${p.x},${p.y}`).join(" ")}
                fill="var(--accent-light)"
                stroke="var(--accent)"
                strokeWidth="2"
              />
              {verts.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="4" fill={COLORS[i]} />
                  <text
                    x={p.x + 7}
                    y={p.y - 5}
                    fontSize="11"
                    fontWeight="bold"
                    fill={COLORS[i]}
                    fontFamily="sans-serif"
                  >
                    {String.fromCharCode(65 + i)}
                  </text>
                </g>
              ))}
            </>
          ) : (
            <text
              x={W / 2}
              y={H / 2}
              fontSize="11"
              textAnchor="middle"
              fill="var(--red-dark)"
              fontFamily="sans-serif"
            >
              These angles can&apos;t form a valid quadrilateral.
            </text>
          )}
        </svg>
      </div>

      {/* Angle sliders */}
      <div className="space-y-3 mb-5">
        {angles.map((a, i) => (
          <label key={i} className="flex items-center gap-3">
            <span className="text-xs font-bold w-8 text-center shrink-0" style={{ color: COLORS[i] }}>
              {LABELS[i]}
            </span>
            <input
              type="range"
              min={1}
              max={179}
              value={Math.round(a)}
              disabled={QUAD_TYPES[typeIdx].locked}
              onChange={(e) => setAngle(i, Number(e.target.value))}
              className="flex-1"
              style={{ accentColor: COLORS[i] }}
            />
            <span
              className="w-10 text-right text-sm font-extrabold"
              style={{ color: COLORS[i], fontFamily: "var(--font-display)" }}
            >
              {Math.round(a)}°
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
              <div className="relative w-12 h-12 rounded-full" style={{ background: "var(--border)" }}>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(${COLORS[i]} ${pct}%, transparent ${pct}%)`,
                  }}
                />
                <div className="absolute inset-1 rounded-full" style={{ background: "var(--bg-card)" }} />
                <span
                  className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
                  style={{ color: COLORS[i] }}
                >
                  {Math.round(a)}°
                </span>
              </div>
              <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                {LABELS[i]}
              </span>
            </div>
          );
        })}
        {/* Total */}
        <div className="flex flex-col items-center gap-1 ml-2 justify-center">
          <span className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>
            Total
          </span>
          <span
            className="text-xl font-extrabold"
            style={{
              color: isExact360 ? "var(--green-dark)" : "var(--red)",
              fontFamily: "var(--font-display)",
            }}
          >
            {total}°
          </span>
        </div>
      </div>

      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{
          background: isExact360 ? "var(--green-light)" : "var(--red-light)",
          border: `1.5px solid ${isExact360 ? "var(--green-border)" : "var(--red-border)"}`,
        }}
      >
        <p
          className="text-sm font-bold"
          style={{ color: isExact360 ? "var(--green-dark)" : "var(--red-dark)" }}
        >
          {isExact360
            ? "✓ Angles sum to exactly 360° — true for every quadrilateral!"
            : `⚠ Sum is ${total}°. In a valid quadrilateral, all four angles must total 360°.`}
        </p>
      </div>
    </WidgetShell>
  );
}
