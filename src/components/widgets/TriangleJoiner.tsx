"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type TriType = "equilateral" | "isosceles" | "scalene";
type JoinSide = "base" | "equal" | "any";

const TRI_OPTIONS: { id: TriType; label: string; sub: string }[] = [
  { id: "equilateral", label: "Equilateral", sub: "all 3 sides equal" },
  { id: "isosceles", label: "Isosceles", sub: "2 sides equal" },
  { id: "scalene", label: "Scalene", sub: "all 3 sides different" },
];

function joinChoicesFor(tri: TriType): { id: JoinSide; label: string }[] {
  switch (tri) {
    case "equilateral":
      return [{ id: "any", label: "Any side" }];
    case "isosceles":
      return [
        { id: "base", label: "Base" },
        { id: "equal", label: "Equal side" },
      ];
    case "scalene":
      return [{ id: "any", label: "Any side" }];
  }
}

type Result = { name: string; bgVar: string; borderVar: string; fgVar: string; reason: string };

function resultFor(tri: TriType, side: JoinSide): Result {
  if (tri === "equilateral") {
    return {
      name: "Rhombus",
      bgVar: "var(--green-light)",
      borderVar: "var(--green-border)",
      fgVar: "var(--green-dark)",
      reason: "All four sides of the quadrilateral are sides of the original equilateral triangles — and they're all equal.",
    };
  }
  if (tri === "isosceles" && side === "base") {
    return {
      name: "Kite",
      bgVar: "var(--yellow-light)",
      borderVar: "var(--yellow-border)",
      fgVar: "var(--yellow)",
      reason: "Joining along the base gives a quadrilateral with two pairs of adjacent equal sides — the equal sides of each isosceles triangle.",
    };
  }
  if (tri === "isosceles" && side === "equal") {
    return {
      name: "Parallelogram",
      bgVar: "var(--accent-light)",
      borderVar: "var(--border-strong)",
      fgVar: "var(--text)",
      reason: "Joining along an equal side and rotating 180° produces a quadrilateral with both pairs of opposite sides equal.",
    };
  }
  // scalene + any side
  return {
    name: "Parallelogram",
    bgVar: "var(--accent-light)",
    borderVar: "var(--border-strong)",
    fgVar: "var(--text)",
    reason: "Joining any congruent triangles via 180° rotation always produces a parallelogram — opposite sides match by construction.",
  };
}

type Pt = { x: number; y: number };
type ShapeData = {
  tri1: [Pt, Pt, Pt];
  tri2: [Pt, Pt, Pt];
  quad: Pt[];
};

/** Pre-computed vertex sets for each (triType, joinSide) combination. */
function shapeFor(tri: TriType, side: JoinSide): ShapeData {
  if (tri === "equilateral") {
    // Equilateral side = 90; rhombus
    return {
      tri1: [
        { x: 0, y: -52 },
        { x: -45, y: 26 },
        { x: 45, y: 26 },
      ],
      tri2: [
        { x: -45, y: 26 },
        { x: 45, y: 26 },
        { x: 0, y: 104 },
      ],
      quad: [
        { x: 0, y: -52 },
        { x: 45, y: 26 },
        { x: 0, y: 104 },
        { x: -45, y: 26 },
      ],
    };
  }
  if (tri === "isosceles" && side === "base") {
    // Isosceles, base = 50, equal-side ≈ 75. Joined base-to-base → kite-shaped rhombus.
    return {
      tri1: [
        { x: 0, y: -70 },
        { x: -25, y: 0 },
        { x: 25, y: 0 },
      ],
      tri2: [
        { x: -25, y: 0 },
        { x: 25, y: 0 },
        { x: 0, y: 70 },
      ],
      quad: [
        { x: 0, y: -70 },
        { x: 25, y: 0 },
        { x: 0, y: 70 },
        { x: -25, y: 0 },
      ],
    };
  }
  if (tri === "isosceles" && side === "equal") {
    // Isosceles, equal-side = 90 (joined), base = 50. Rotated 180° → parallelogram.
    return {
      tri1: [
        { x: -45, y: -45 },
        { x: 45, y: -45 },
        { x: -10, y: 30 },
      ],
      tri2: [
        { x: 45, y: -45 },
        { x: -45, y: -45 },
        { x: 10, y: -120 },
      ],
      quad: [
        { x: 10, y: -120 },
        { x: 45, y: -45 },
        { x: -10, y: 30 },
        { x: -45, y: -45 },
      ],
    };
  }
  // scalene + any
  return {
    tri1: [
      { x: -50, y: 30 },
      { x: 50, y: 30 },
      { x: 25, y: -45 },
    ],
    tri2: [
      { x: 50, y: 30 },
      { x: -50, y: 30 },
      { x: -25, y: 105 },
    ],
    quad: [
      { x: 25, y: -45 },
      { x: 50, y: 30 },
      { x: -25, y: 105 },
      { x: -50, y: 30 },
    ],
  };
}

function ptsToString(pts: Pt[], dx: number, dy: number) {
  return pts.map((p) => `${p.x + dx},${p.y + dy}`).join(" ");
}

export default function TriangleJoiner() {
  const [tri, setTri] = useState<TriType>("equilateral");
  const [side, setSide] = useState<JoinSide>("any");
  const [showSeparated, setShowSeparated] = useState(false);

  const choices = joinChoicesFor(tri);
  const result = resultFor(tri, side);
  const shape = shapeFor(tri, side);

  // Canvas: 320×260, origin at center
  const cx = 160;
  const cy = 130;
  // When separated, slide tri1 up-left and tri2 down-right
  const offset = showSeparated ? 35 : 0;

  const onChangeTri = (t: TriType) => {
    setTri(t);
    const newChoices = joinChoicesFor(t);
    if (!newChoices.some((c) => c.id === side)) setSide(newChoices[0].id);
  };

  return (
    <WidgetShell label="Interactive · Triangle Joiner" badge="join two, get a shape">
      <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
        Join two congruent triangles along a shared side. The resulting quadrilateral depends on the triangle type
        and which side you join.
      </p>

      {/* Triangle type picker */}
      <div className="mb-3">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Triangle type
        </p>
        <div className="grid grid-cols-3 gap-2">
          {TRI_OPTIONS.map((opt) => {
            const active = tri === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onChangeTri(opt.id)}
                className="text-xs font-bold px-2 py-2 rounded-lg border transition-all"
                style={{
                  background: active ? "var(--accent)" : "var(--bg-card)",
                  color: active ? "var(--bg-card)" : "var(--text)",
                  borderColor: active ? "var(--accent)" : "var(--border-strong)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {opt.label}
                <span
                  className="block text-[9px] font-normal mt-0.5"
                  style={{ color: active ? "var(--bg-sidebar)" : "var(--text-muted)" }}
                >
                  {opt.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Join side picker */}
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Join along
        </p>
        <div className="flex gap-2 flex-wrap">
          {choices.map((opt) => {
            const active = side === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSide(opt.id)}
                className="text-[11px] font-bold px-3 py-1.5 rounded-full border"
                style={{
                  background: active ? "var(--accent)" : "transparent",
                  color: active ? "var(--bg-card)" : "var(--text-muted)",
                  borderColor: active ? "var(--accent)" : "var(--border-strong)",
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Canvas */}
      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox="0 0 320 260" width="100%" style={{ display: "block", maxHeight: 260 }}>
          {/* Triangle 1 */}
          <polygon
            points={ptsToString(shape.tri1, cx - offset, cy - offset)}
            fill="var(--green-light)"
            stroke="var(--green-dark)"
            strokeWidth="2"
            style={{ transition: "all 300ms ease" }}
          />
          {/* Triangle 2 */}
          <polygon
            points={ptsToString(shape.tri2, cx + offset, cy + offset)}
            fill="var(--yellow-light)"
            stroke="var(--yellow)"
            strokeWidth="2"
            style={{ transition: "all 300ms ease" }}
          />
          {/* Quadrilateral outline (only when joined, drawn on top to highlight result) */}
          {!showSeparated && (
            <polygon
              points={ptsToString(shape.quad, cx, cy)}
              fill="none"
              stroke={result.fgVar}
              strokeWidth="2.5"
              strokeDasharray="6,3"
              style={{ pointerEvents: "none" }}
            />
          )}
        </svg>
      </div>

      <button onClick={() => setShowSeparated((s) => !s)} className="btn-ghost w-full mb-3">
        {showSeparated ? "Snap together →" : "← Show as two separate triangles"}
      </button>

      {/* Result */}
      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{ background: result.bgVar, border: `1.5px solid ${result.borderVar}` }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: result.fgVar }}>
          Result
        </p>
        <p className="text-xl font-extrabold mb-1" style={{ color: result.fgVar, fontFamily: "var(--font-display)" }}>
          {result.name}
        </p>
        <p className="text-[11px]" style={{ color: result.fgVar }}>
          {result.reason}
        </p>
      </div>
    </WidgetShell>
  );
}
