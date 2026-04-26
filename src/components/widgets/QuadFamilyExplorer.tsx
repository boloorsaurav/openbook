"use client";
import { useState, useRef, useEffect } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Pt = { x: number; y: number };
type Mode = "free" | "parallelogram" | "rhombus" | "kite" | "trapezium" | "rectangle" | "square";

const W = 360;
const H = 280;
const PAD = 28;
const EPS = 1.5; // pixel tolerance for "equal"
const ANGLE_EPS = 1.5; // degree tolerance for "perpendicular"

const MODES: { id: Mode; label: string }[] = [
  { id: "free", label: "Free" },
  { id: "parallelogram", label: "Parallelogram" },
  { id: "rhombus", label: "Rhombus" },
  { id: "kite", label: "Kite" },
  { id: "trapezium", label: "Trapezium" },
  { id: "rectangle", label: "Rectangle" },
  { id: "square", label: "Square" },
];

/* ───── geometry helpers ───── */

const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

function angleAt(a: Pt, b: Pt, c: Pt) {
  const v1x = a.x - b.x, v1y = a.y - b.y;
  const v2x = c.x - b.x, v2y = c.y - b.y;
  const dot = v1x * v2x + v1y * v2y;
  const m1 = Math.hypot(v1x, v1y);
  const m2 = Math.hypot(v2x, v2y);
  if (!m1 || !m2) return 0;
  const cos = Math.max(-1, Math.min(1, dot / (m1 * m2)));
  return (Math.acos(cos) * 180) / Math.PI;
}

function clampPt(p: Pt): Pt {
  return { x: Math.max(PAD, Math.min(W - PAD, p.x)), y: Math.max(PAD, Math.min(H - PAD, p.y)) };
}

/** Reflect point p across the line through a and b. */
function reflectAcrossLine(p: Pt, a: Pt, b: Pt): Pt {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len2 = dx * dx + dy * dy || 1;
  const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2;
  const fx = a.x + t * dx, fy = a.y + t * dy;
  return { x: 2 * fx - p.x, y: 2 * fy - p.y };
}

/** Component of (p - origin) along the direction (cos θ, sin θ) where θ is the direction of v. */
function projectOnto(p: Pt, origin: Pt, dir: Pt): Pt {
  const len2 = dir.x * dir.x + dir.y * dir.y || 1;
  const t = ((p.x - origin.x) * dir.x + (p.y - origin.y) * dir.y) / len2;
  return { x: origin.x + t * dir.x, y: origin.y + t * dir.y };
}

/* ───── canonical default shapes ───── */

function canonical(mode: Mode): { A: Pt; B: Pt; C: Pt; D: Pt } {
  switch (mode) {
    case "free":
      return { A: { x: 60, y: 220 }, B: { x: 110, y: 70 }, C: { x: 290, y: 80 }, D: { x: 280, y: 220 } };
    case "parallelogram":
      return { A: { x: 60, y: 220 }, B: { x: 110, y: 70 }, C: { x: 290, y: 80 }, D: { x: 240, y: 230 } };
    case "rhombus":
      return { A: { x: 60, y: 140 }, B: { x: 180, y: 50 }, C: { x: 300, y: 140 }, D: { x: 180, y: 230 } };
    case "kite":
      return { A: { x: 180, y: 50 }, B: { x: 280, y: 150 }, C: { x: 180, y: 240 }, D: { x: 80, y: 150 } };
    case "trapezium":
      return { A: { x: 100, y: 70 }, B: { x: 240, y: 70 }, C: { x: 290, y: 220 }, D: { x: 60, y: 220 } };
    case "rectangle":
      return { A: { x: 80, y: 70 }, B: { x: 280, y: 70 }, C: { x: 280, y: 220 }, D: { x: 80, y: 220 } };
    case "square":
      return { A: { x: 110, y: 70 }, B: { x: 250, y: 70 }, C: { x: 250, y: 210 }, D: { x: 110, y: 210 } };
  }
}

/* ───── per-mode projection: after a drag, snap the four vertices to satisfy the mode ───── */

function project(
  mode: Mode,
  v: { A: Pt; B: Pt; C: Pt; D: Pt },
  dragged: "A" | "B" | "C" | "D",
): { A: Pt; B: Pt; C: Pt; D: Pt } {
  const { A, B, C, D } = v;
  switch (mode) {
    case "free":
      return v;

    case "parallelogram": {
      // D = A + C - B; if user dragged D, recompute as if they moved C by the same delta
      if (dragged === "D") {
        // D is dependent; treat D-drag as moving C: new C = D + B - A
        const newC = clampPt({ x: D.x + B.x - A.x, y: D.y + B.y - A.y });
        return { A, B, C: newC, D: { x: A.x + newC.x - B.x, y: A.y + newC.y - B.y } };
      }
      return { A, B, C, D: { x: A.x + C.x - B.x, y: A.y + C.y - B.y } };
    }

    case "rhombus": {
      // Use AC as the long diagonal axis. B is at perpendicular distance h on one side; D mirrors.
      // After any drag, recompute B and D from the perpendicular bisector + half-distance.
      const mid: Pt = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
      const ac = { x: C.x - A.x, y: C.y - A.y };
      const perp = { x: -ac.y, y: ac.x };
      const perpLen = Math.hypot(perp.x, perp.y) || 1;
      const perpUnit = { x: perp.x / perpLen, y: perp.y / perpLen };

      let h: number;
      if (dragged === "B") {
        // signed distance from B to line AC
        h = (B.x - mid.x) * perpUnit.x + (B.y - mid.y) * perpUnit.y;
      } else if (dragged === "D") {
        h = -((D.x - mid.x) * perpUnit.x + (D.y - mid.y) * perpUnit.y);
      } else {
        // dragged A or C — keep previous h magnitude using the existing B's perpendicular distance
        h = (B.x - mid.x) * perpUnit.x + (B.y - mid.y) * perpUnit.y;
        if (Math.abs(h) < 8) h = 60; // avoid degenerate flat case
      }

      const newB = clampPt({ x: mid.x + h * perpUnit.x, y: mid.y + h * perpUnit.y });
      const newD = clampPt({ x: mid.x - h * perpUnit.x, y: mid.y - h * perpUnit.y });
      return { A, B: newB, C, D: newD };
    }

    case "kite": {
      // Axis is line AC. B is one side; D = reflection of B across AC.
      let bSrc = B;
      if (dragged === "D") bSrc = reflectAcrossLine(D, A, C);
      const newD = clampPt(reflectAcrossLine(bSrc, A, C));
      return { A, B: dragged === "D" ? clampPt(bSrc) : B, C, D: newD };
    }

    case "trapezium": {
      // DC ∥ AB. Snap D to the line through C in direction (B - A).
      const dir = { x: B.x - A.x, y: B.y - A.y };
      // current "shift" of D from C in direction `dir`
      let shift: number;
      if (dragged === "D") {
        // user wants D somewhere; keep the perpendicular-to-AB position of D the same as C's,
        // but allow them to slide D along the AB-parallel direction.
        const len2 = dir.x * dir.x + dir.y * dir.y || 1;
        shift = ((D.x - C.x) * dir.x + (D.y - C.y) * dir.y) / len2;
      } else {
        // for non-D drags, preserve the previous shift ratio
        const len2 = dir.x * dir.x + dir.y * dir.y || 1;
        shift = ((D.x - C.x) * dir.x + (D.y - C.y) * dir.y) / len2;
        // ensure shift is meaningful (not 0); keep at least -0.5 so trapezium is visible
        if (Math.abs(shift) < 0.05) shift = -0.5;
      }
      const newD = clampPt({ x: C.x + shift * dir.x, y: C.y + shift * dir.y });
      return { A, B, C, D: newD };
    }

    case "rectangle": {
      // AB is one side. Perpendicular direction defines height. C = B + perp*h, D = A + perp*h.
      const ab = { x: B.x - A.x, y: B.y - A.y };
      const abLen = Math.hypot(ab.x, ab.y) || 1;
      const perp = { x: -ab.y / abLen, y: ab.x / abLen };

      let h: number;
      if (dragged === "C") {
        h = (C.x - B.x) * perp.x + (C.y - B.y) * perp.y;
      } else if (dragged === "D") {
        h = (D.x - A.x) * perp.x + (D.y - A.y) * perp.y;
      } else {
        h = (D.x - A.x) * perp.x + (D.y - A.y) * perp.y;
        if (Math.abs(h) < 12) h = 100;
      }

      const newC = clampPt({ x: B.x + h * perp.x, y: B.y + h * perp.y });
      const newD = clampPt({ x: A.x + h * perp.x, y: A.y + h * perp.y });
      return { A, B, C: newC, D: newD };
    }

    case "square": {
      // Side = |AB|. Compute perpendicular height = |AB| × sign of current orientation.
      const ab = { x: B.x - A.x, y: B.y - A.y };
      const abLen = Math.hypot(ab.x, ab.y) || 1;
      const perp = { x: -ab.y / abLen, y: ab.x / abLen };

      // sign: which side is D currently on?
      const prevSide = (D.x - A.x) * perp.x + (D.y - A.y) * perp.y;
      const sign = prevSide >= 0 ? 1 : -1;
      const h = abLen * sign;

      const newC = clampPt({ x: B.x + h * perp.x, y: B.y + h * perp.y });
      const newD = clampPt({ x: A.x + h * perp.x, y: A.y + h * perp.y });
      return { A, B, C: newC, D: newD };
    }
  }
}

/* ───── family classification ───── */

function classify(A: Pt, B: Pt, C: Pt, D: Pt) {
  const sAB = dist(A, B), sBC = dist(B, C), sCD = dist(C, D), sDA = dist(D, A);
  const angA = angleAt(D, A, B);
  const angB = angleAt(A, B, C);
  const angC = angleAt(B, C, D);
  const angD = angleAt(C, D, A);

  const eq = (x: number, y: number) => Math.abs(x - y) < EPS;
  const eqAng = (x: number, y: number) => Math.abs(x - y) < ANGLE_EPS;

  // Parallelogram: opposite sides equal
  const isParallelogram = eq(sAB, sCD) && eq(sBC, sDA);
  // Rhombus: all four sides equal
  const isRhombus = eq(sAB, sBC) && eq(sBC, sCD) && eq(sCD, sDA);
  // Rectangle: parallelogram + at least one 90° angle
  const isRectangle = isParallelogram && eqAng(angA, 90);
  // Square: rectangle + all sides equal
  const isSquare = isRectangle && isRhombus;
  // Kite: two distinct pairs of adjacent sides equal (AB=AD and CB=CD), but not all four equal
  const isKite =
    ((eq(sAB, sDA) && eq(sBC, sCD) && !eq(sAB, sBC)) ||
      (eq(sAB, sBC) && eq(sCD, sDA) && !eq(sAB, sCD)));
  // Trapezium: at least one pair of opposite sides parallel.
  // Use angle test: AB ∥ DC iff angA + angD ≈ 180°. BC ∥ AD iff angB + angA ≈ 180° (no, that's the same vertex).
  // Correct: AB ∥ DC iff angle(AB, DC) ≈ 0 or 180. We can test via cross product of direction vectors.
  const cross = (u: Pt, v: Pt) => Math.abs(u.x * v.y - u.y * v.x);
  const ab = { x: B.x - A.x, y: B.y - A.y };
  const dc = { x: C.x - D.x, y: C.y - D.y };
  const ad = { x: D.x - A.x, y: D.y - A.y };
  const bc = { x: C.x - B.x, y: C.y - B.y };
  const par1 = cross(ab, dc) < 80; // tolerant since cross scales with vector magnitude
  const par2 = cross(ad, bc) < 80;
  const isTrapezium = par1 || par2;

  return { isParallelogram, isRhombus, isRectangle, isSquare, isKite, isTrapezium };
}

/* ───── main component ───── */

export default function QuadFamilyExplorer() {
  const [mode, setMode] = useState<Mode>("parallelogram");
  const [verts, setVerts] = useState(canonical("parallelogram"));
  const [drag, setDrag] = useState<"A" | "B" | "C" | "D" | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Snap to canonical shape on mode change
  useEffect(() => {
    setVerts(canonical(mode));
  }, [mode]);

  const { A, B, C, D } = verts;

  const sAB = dist(A, B), sBC = dist(B, C), sCD = dist(C, D), sDA = dist(D, A);
  const angA = angleAt(D, A, B);
  const angB = angleAt(A, B, C);
  const angC = angleAt(B, C, D);
  const angD = angleAt(C, D, A);
  const diagAC = dist(A, C);
  const diagBD = dist(B, D);
  const Mac: Pt = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
  const Mbd: Pt = { x: (B.x + D.x) / 2, y: (B.y + D.y) / 2 };
  const midpointsCoincide = dist(Mac, Mbd) < EPS;

  const fam = classify(A, B, C, D);

  const setVertex = (k: "A" | "B" | "C" | "D", p: Pt) => {
    const next = { ...verts, [k]: clampPt(p) };
    setVerts(project(mode, next, k));
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    const y = ((e.clientY - rect.top) / rect.height) * H;
    setVertex(drag, { x, y });
  };

  const stopDrag = () => setDrag(null);

  const isVertexDraggable = (k: "A" | "B" | "C" | "D") => {
    // In some modes, certain vertices are dependent. We still allow dragging them
    // and re-project — the projection handles it.
    return true;
  };

  const px = (v: number) => v.toFixed(0);

  return (
    <WidgetShell label="Interactive · Quadrilateral Family" badge="all shapes, one widget">
      {/* Mode pills */}
      <div className="flex gap-1.5 mb-4 flex-wrap">
        {MODES.map((m) => {
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "var(--bg-card)" : "var(--text-muted)",
                borderColor: active ? "var(--accent)" : "var(--border-strong)",
                fontFamily: "var(--font-display)",
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Drag any vertex. Constraints for the selected mode are enforced live — watch which family
        pills below light up as you reshape.
      </p>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{
          background: "var(--bg-sidebar)",
          borderRadius: 8,
          border: "1.5px solid var(--border)",
          touchAction: "none",
          display: "block",
        }}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerLeave={stopDrag}
        onPointerCancel={stopDrag}
      >
        {/* Quadrilateral fill + outline */}
        <polygon
          points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
          fill="var(--accent-light)"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        {/* Diagonals */}
        <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="var(--green)" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="var(--green)" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* Midpoints — single dot if they coincide */}
        {midpointsCoincide ? (
          <>
            <circle cx={Mac.x} cy={Mac.y} r="5" fill="var(--green)" />
            <text
              x={Mac.x + 8}
              y={Mac.y + 4}
              fontSize="11"
              fill="var(--green-dark)"
              fontFamily="sans-serif"
              fontWeight="bold"
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              M
            </text>
          </>
        ) : (
          <>
            <circle cx={Mac.x} cy={Mac.y} r="4" fill="var(--green)" opacity="0.6" />
            <circle cx={Mbd.x} cy={Mbd.y} r="4" fill="var(--yellow)" opacity="0.6" />
          </>
        )}

        {/* Vertices */}
        {[
          { p: A, label: "A", k: "A" as const },
          { p: B, label: "B", k: "B" as const },
          { p: C, label: "C", k: "C" as const },
          { p: D, label: "D", k: "D" as const },
        ].map(({ p, label, k }) => (
          <g key={k}>
            <circle
              cx={p.x}
              cy={p.y}
              r="11"
              fill="var(--accent)"
              stroke="var(--bg-card)"
              strokeWidth="2"
              style={{ cursor: "grab" }}
              onPointerDown={(e) => {
                if (!isVertexDraggable(k)) return;
                (e.target as SVGElement).setPointerCapture?.(e.pointerId);
                setDrag(k);
              }}
            />
            <text
              x={p.x}
              y={p.y + 4}
              fontSize="11"
              fontWeight="bold"
              fill="var(--bg-card)"
              textAnchor="middle"
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {label}
            </text>
          </g>
        ))}
      </svg>

      {/* Live readouts */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Sides
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            AB = {px(sAB)} · BC = {px(sBC)}
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            CD = {px(sCD)} · DA = {px(sDA)}
          </p>
        </div>
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Angles
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            ∠A = {angA.toFixed(0)}° · ∠B = {angB.toFixed(0)}°
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            ∠C = {angC.toFixed(0)}° · ∠D = {angD.toFixed(0)}°
          </p>
        </div>
        <div
          className="rounded-lg p-3 sm:col-span-2"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Diagonals
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            AC = {px(diagAC)} · BD = {px(diagBD)} · {midpointsCoincide ? "✓ they bisect each other at M" : "✗ they do not bisect each other"}
          </p>
        </div>
      </div>

      {/* Family pills */}
      <div className="mt-4">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          This shape is also a…
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {[
            { label: "Parallelogram", on: fam.isParallelogram },
            { label: "Rhombus", on: fam.isRhombus },
            { label: "Rectangle", on: fam.isRectangle },
            { label: "Square", on: fam.isSquare },
            { label: "Kite", on: fam.isKite },
            { label: "Trapezium", on: fam.isTrapezium },
          ].map((p) => (
            <span
              key={p.label}
              className="text-[11px] font-bold px-3 py-1 rounded-full border transition-all"
              style={{
                background: p.on ? "var(--green-light)" : "transparent",
                color: p.on ? "var(--green-dark)" : "var(--text-light)",
                borderColor: p.on ? "var(--green-border)" : "var(--border)",
                fontFamily: "var(--font-display)",
              }}
            >
              {p.on ? "✓" : "○"} {p.label}
            </span>
          ))}
        </div>
      </div>
    </WidgetShell>
  );
}
