"use client";
import { useState, useRef } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Pt = { x: number; y: number };

const W = 360;
const H = 280;
const PAD = 24;

function dist(a: Pt, b: Pt) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// interior angle at vertex b, with neighbours a and c
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

export default function DraggableQuadrilateral() {
  const [a, setA] = useState<Pt>({ x: 60, y: 210 });
  const [b, setB] = useState<Pt>({ x: 110, y: 70 });
  const [c, setC] = useState<Pt>({ x: 290, y: 80 });
  const [drag, setDrag] = useState<"a" | "b" | "c" | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Parallelogram constraint: D = A + (C - B)
  const d: Pt = { x: a.x + c.x - b.x, y: a.y + c.y - b.y };

  const sideAB = dist(a, b);
  const sideBC = dist(b, c);
  const sideCD = dist(c, d);
  const sideDA = dist(d, a);
  const diagAC = dist(a, c);
  const diagBD = dist(b, d);
  const angA = angleAt(d, a, b);
  const angB = angleAt(a, b, c);
  const angC = angleAt(b, c, d);
  const angD = angleAt(c, d, a);
  const M = { x: (a.x + c.x) / 2, y: (a.y + c.y) / 2 };

  // pixel scale: ~30 px = 1 unit feels natural; we'll just show raw pixels rounded
  const px = (v: number) => v.toFixed(0);

  const setPoint = (k: "a" | "b" | "c", p: Pt) => {
    const clamped = {
      x: Math.max(PAD, Math.min(W - PAD, p.x)),
      y: Math.max(PAD, Math.min(H - PAD, p.y)),
    };
    if (k === "a") setA(clamped);
    if (k === "b") setB(clamped);
    if (k === "c") setC(clamped);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    // map clientX/Y back into the viewBox coordinate system
    const x = ((e.clientX - rect.left) / rect.width) * W;
    const y = ((e.clientY - rect.top) / rect.height) * H;
    setPoint(drag, { x, y });
  };

  const stopDrag = () => setDrag(null);

  const vertices: Array<{ p: Pt; label: string; k: "a" | "b" | "c" | "d"; draggable: boolean }> = [
    { p: a, label: "A", k: "a", draggable: true },
    { p: b, label: "B", k: "b", draggable: true },
    { p: c, label: "C", k: "c", draggable: true },
    { p: d, label: "D", k: "d", draggable: false },
  ];

  return (
    <WidgetShell label="Interactive · Parallelogram Lab" badge="drag any vertex">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Drag <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>. Vertex <strong>D</strong> moves
        automatically to keep ABCD a parallelogram. Watch what stays equal.
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
          points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`}
          fill="var(--accent-light)"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        {/* Diagonals */}
        <line x1={a.x} y1={a.y} x2={c.x} y2={c.y} stroke="var(--green)" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1={b.x} y1={b.y} x2={d.x} y2={d.y} stroke="var(--green)" strokeWidth="1.5" strokeDasharray="5,3" />
        {/* Midpoint M */}
        <circle cx={M.x} cy={M.y} r="5" fill="var(--green)" />
        <text
          x={M.x + 8}
          y={M.y + 4}
          fontSize="11"
          fill="var(--green-dark)"
          fontFamily="sans-serif"
          fontWeight="bold"
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          M
        </text>

        {/* Vertices */}
        {vertices.map(({ p, label, k, draggable }) => (
          <g key={k}>
            <circle
              cx={p.x}
              cy={p.y}
              r="11"
              fill={draggable ? "var(--accent)" : "var(--text-light)"}
              stroke="var(--bg-card)"
              strokeWidth="2"
              style={{ cursor: draggable ? "grab" : "not-allowed" }}
              onPointerDown={(e) => {
                if (!draggable) return;
                (e.target as SVGElement).setPointerCapture?.(e.pointerId);
                setDrag(k as "a" | "b" | "c");
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
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Opposite sides stay equal
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            AB = {px(sideAB)} <strong>=</strong> CD = {px(sideCD)}
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            BC = {px(sideBC)} <strong>=</strong> DA = {px(sideDA)}
          </p>
        </div>
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Opposite angles stay equal
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            ∠A = {angA.toFixed(0)}° <strong>=</strong> ∠C = {angC.toFixed(0)}°
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            ∠B = {angB.toFixed(0)}° <strong>=</strong> ∠D = {angD.toFixed(0)}°
          </p>
        </div>
        <div
          className="rounded-lg p-3 sm:col-span-2"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Diagonals bisect each other at <span style={{ color: "var(--green-dark)" }}>M</span>
          </p>
          <p style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            AC = {px(diagAC)} · BD = {px(diagBD)} · they cross at the midpoint of both, even when AC ≠ BD
          </p>
        </div>
      </div>

      {/* Insight */}
      <div
        className="mt-3 rounded-lg px-4 py-2"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
      >
        <p className="text-[11px]" style={{ color: "var(--text)" }}>
          <strong style={{ color: "var(--yellow)" }}>Drag and watch.</strong> No matter how you shape it, opposite
          sides stay equal, opposite angles stay equal, and the diagonals always meet at their shared midpoint. These
          aren't lucky coincidences — they're <em>forced</em> by the parallelogram definition.
        </p>
      </div>
    </WidgetShell>
  );
}
