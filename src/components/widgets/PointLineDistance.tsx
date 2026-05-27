"use client";
import { useRef, useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const W = 320;
const H = 260;
const UNIT = 22;
const CX = W / 2;
const CY = H / 2;

function toPx(x: number, y: number) { return { px: CX + x * UNIT, py: CY - y * UNIT }; }
function fromPx(px: number, py: number) { return { x: (px - CX) / UNIT, y: (CY - py) / UNIT }; }

function fmt(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(3).replace(/\.?0+$/, "");
}

export default function PointLineDistance() {
  // Line: Ax + By + C = 0, default 3x − 4y − 6 = 0
  const [A, setA] = useState(3);
  const [B, setB] = useState(-4);
  const [C, setC] = useState(-6);
  const [px, setPxV] = useState(2);
  const [py, setPyV] = useState(3);

  const svgRef = useRef<SVGSVGElement>(null);

  const handle = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scale = W / rect.width;
    const sx = (e.clientX - rect.left) * scale;
    const sy = (e.clientY - rect.top) * scale;
    const { x, y } = fromPx(sx, sy);
    setPxV(Math.round(x));
    setPyV(Math.round(y));
  };

  const denom = Math.sqrt(A * A + B * B);
  const signedDist = denom === 0 ? 0 : (A * px + B * py + C) / denom;
  const dist = Math.abs(signedDist);

  // Foot of perpendicular
  const t = denom === 0 ? 0 : (A * px + B * py + C) / (A * A + B * B);
  const footX = px - A * t;
  const footY = py - B * t;

  // Two points on line for drawing
  // Use two x-values and solve y = -(A x + C)/B; or if B == 0 vertical
  let p1: { x: number; y: number }, p2: { x: number; y: number };
  if (B !== 0) {
    p1 = { x: -10, y: -(A * -10 + C) / B };
    p2 = { x: 10, y: -(A * 10 + C) / B };
  } else if (A !== 0) {
    const xL = -C / A;
    p1 = { x: xL, y: -6 };
    p2 = { x: xL, y: 6 };
  } else {
    p1 = { x: -10, y: 0 };
    p2 = { x: 10, y: 0 };
  }
  const px1 = toPx(p1.x, p1.y);
  const px2 = toPx(p2.x, p2.y);
  const pP = toPx(px, py);
  const pF = toPx(footX, footY);

  return (
    <WidgetShell label="Distance Point ↔ Line" badge="click to move point">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        For a line Ax + By + C = 0 and a point (x₁, y₁), the perpendicular distance is
        <strong> |Ax₁ + By₁ + C| / √(A² + B²)</strong>. Click anywhere to move the point.
      </p>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>A</label><input type="number" value={A} step={1} onChange={(e) => setA(Number(e.target.value) || 0)} className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono" style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }} /></div>
        <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>B</label><input type="number" value={B} step={1} onChange={(e) => setB(Number(e.target.value) || 0)} className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono" style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }} /></div>
        <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>C</label><input type="number" value={C} step={1} onChange={(e) => setC(Number(e.target.value) || 0)} className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono" style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }} /></div>
      </div>

      <div className="mb-3">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none cursor-crosshair"
          style={{ maxHeight: H, background: "var(--bg-card)", borderRadius: 8, border: "1.5px solid var(--border)" }}
          onPointerDown={handle}
          onPointerMove={(e) => { if (e.buttons === 1) handle(e); }}
        >
          {/* Grid */}
          {Array.from({ length: 13 }, (_, i) => i - 6).map((v) => (
            <g key={"g" + v}>
              <line x1={CX + v * UNIT} y1={10} x2={CX + v * UNIT} y2={H - 10} stroke="var(--border)" strokeWidth={0.5} />
              <line x1={10} y1={CY - v * UNIT} x2={W - 10} y2={CY - v * UNIT} stroke="var(--border)" strokeWidth={0.5} />
            </g>
          ))}
          {/* Axes */}
          <line x1={10} y1={CY} x2={W - 10} y2={CY} stroke="var(--text-muted)" strokeWidth={1.5} />
          <line x1={CX} y1={10} x2={CX} y2={H - 10} stroke="var(--text-muted)" strokeWidth={1.5} />
          {/* Line */}
          <line x1={px1.px} y1={px1.py} x2={px2.px} y2={px2.py} stroke="var(--accent)" strokeWidth={2.5} />
          {/* Perpendicular */}
          <line x1={pP.px} y1={pP.py} x2={pF.px} y2={pF.py} stroke="var(--green-dark)" strokeWidth={2} strokeDasharray="3 3" />
          {/* Foot */}
          <circle cx={pF.px} cy={pF.py} r={4} fill="var(--green-dark)" />
          {/* Point */}
          <circle cx={pP.px} cy={pP.py} r={7} fill="var(--accent)" stroke="var(--bg-card)" strokeWidth={2} />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div
          className="rounded-lg p-2"
          style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}
        >
          <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Point</p>
          <p className="text-sm font-mono font-bold" style={{ color: "var(--accent)" }}>({px}, {py})</p>
        </div>
        <div
          className="rounded-lg p-2"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[9px] font-bold uppercase" style={{ color: "var(--green-dark)" }}>Distance</p>
          <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            d = {fmt(dist)}
          </p>
          <p className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
            |{A}·{px}+{B}·{py}+{C}|/√({A * A + B * B})
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
