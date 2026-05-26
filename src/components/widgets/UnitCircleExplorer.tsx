"use client";
import { useRef, useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const SIZE = 280;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 100;

const QUADRANT_INFO = [
  { name: "QI", range: "0 to π/2", positive: "All positive" },
  { name: "QII", range: "π/2 to π", positive: "sin, csc positive" },
  { name: "QIII", range: "π to 3π/2", positive: "tan, cot positive" },
  { name: "QIV", range: "3π/2 to 2π", positive: "cos, sec positive" },
];

function getQuadrant(rad: number): number {
  let r = rad % (2 * Math.PI);
  if (r < 0) r += 2 * Math.PI;
  if (r < Math.PI / 2) return 0;
  if (r < Math.PI) return 1;
  if (r < (3 * Math.PI) / 2) return 2;
  return 3;
}

function fmt(v: number): string {
  if (!isFinite(v)) return "undefined";
  if (Math.abs(v) < 0.001) return "0";
  if (Math.abs(v) > 99) return v > 0 ? "→ ∞" : "→ −∞";
  return v.toFixed(3);
}

export default function UnitCircleExplorer() {
  const [angle, setAngle] = useState(Math.PI / 3); // 60°
  const svgRef = useRef<SVGSVGElement>(null);

  const handlePointer = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scale = SIZE / rect.width;
    const x = (e.clientX - rect.left) * scale - CX;
    const y = CY - (e.clientY - rect.top) * scale;
    let a = Math.atan2(y, x);
    if (a < 0) a += 2 * Math.PI;
    setAngle(a);
  };

  const px = CX + R * Math.cos(angle);
  const py = CY - R * Math.sin(angle);

  const sinV = Math.sin(angle);
  const cosV = Math.cos(angle);
  const tanV = Math.abs(cosV) < 0.001 ? (sinV > 0 ? Infinity : -Infinity) : sinV / cosV;
  const cscV = Math.abs(sinV) < 0.001 ? (cosV > 0 ? Infinity : -Infinity) : 1 / sinV;
  const secV = Math.abs(cosV) < 0.001 ? (sinV > 0 ? Infinity : -Infinity) : 1 / cosV;
  const cotV = Math.abs(sinV) < 0.001 ? (cosV > 0 ? Infinity : -Infinity) : cosV / sinV;

  const q = getQuadrant(angle);
  const deg = (angle * 180) / Math.PI;

  return (
    <WidgetShell label="Unit Circle" badge="drag the point">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Drag the dot around the unit circle. cos x and sin x are the x- and y-coordinates of that
        point. The other four functions are derived from them.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full md:w-auto touch-none cursor-pointer"
          style={{ maxWidth: SIZE, maxHeight: SIZE }}
          onPointerDown={handlePointer}
          onPointerMove={(e) => {
            if (e.buttons === 1) handlePointer(e);
          }}
        >
          {/* Quadrant labels */}
          <text x={CX + 60} y={CY - 60} fontSize={9} fill="var(--text-light)" fontWeight={700}>QI</text>
          <text x={CX - 70} y={CY - 60} fontSize={9} fill="var(--text-light)" fontWeight={700}>QII</text>
          <text x={CX - 70} y={CY + 70} fontSize={9} fill="var(--text-light)" fontWeight={700}>QIII</text>
          <text x={CX + 60} y={CY + 70} fontSize={9} fill="var(--text-light)" fontWeight={700}>QIV</text>
          {/* Axes */}
          <line x1={10} y1={CY} x2={SIZE - 10} y2={CY} stroke="var(--border-strong)" strokeWidth={1} />
          <line x1={CX} y1={10} x2={CX} y2={SIZE - 10} stroke="var(--border-strong)" strokeWidth={1} />
          {/* Unit circle */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--accent)" strokeWidth={1.5} />
          {/* Vertical projection (sin) */}
          <line x1={px} y1={py} x2={px} y2={CY} stroke="var(--green-dark)" strokeWidth={2} strokeDasharray="4 3" />
          {/* Horizontal projection (cos) */}
          <line x1={px} y1={CY} x2={CX} y2={CY} stroke="var(--yellow)" strokeWidth={2} strokeDasharray="4 3" />
          {/* Radius */}
          <line x1={CX} y1={CY} x2={px} y2={py} stroke="var(--accent)" strokeWidth={2} />
          {/* Point */}
          <circle cx={px} cy={py} r={7} fill="var(--accent)" stroke="var(--bg-card)" strokeWidth={2} />
          {/* sin label */}
          <text x={px + 4} y={(py + CY) / 2} fontSize={10} fill="var(--green-dark)" fontWeight={700}>
            sin
          </text>
          {/* cos label */}
          <text x={(px + CX) / 2 - 8} y={CY + 14} fontSize={10} fill="var(--yellow)" fontWeight={700}>
            cos
          </text>
        </svg>

        <div className="flex-1 w-full grid grid-cols-2 gap-1.5">
          <div className="rounded p-1.5" style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}>
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Angle</p>
            <p className="text-xs font-mono font-bold" style={{ color: "var(--text)" }}>{deg.toFixed(1)}°</p>
            <p className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>{angle.toFixed(3)} rad</p>
          </div>
          <div className="rounded p-1.5" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Quadrant</p>
            <p className="text-xs font-bold" style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>{QUADRANT_INFO[q].name}</p>
            <p className="text-[9px]" style={{ color: "var(--text-muted)" }}>{QUADRANT_INFO[q].positive}</p>
          </div>
          {[
            { name: "sin", val: sinV, color: "green" },
            { name: "cos", val: cosV, color: "yellow" },
            { name: "tan", val: tanV, color: "accent" },
            { name: "csc", val: cscV, color: "green" },
            { name: "sec", val: secV, color: "yellow" },
            { name: "cot", val: cotV, color: "accent" },
          ].map((row) => (
            <div
              key={row.name}
              className="rounded p-1.5"
              style={{
                background:
                  row.color === "green"
                    ? "var(--green-light)"
                    : row.color === "yellow"
                    ? "var(--yellow-light)"
                    : "var(--accent-light)",
                border: `1px solid ${
                  row.color === "green"
                    ? "var(--green-border)"
                    : row.color === "yellow"
                    ? "var(--yellow-border)"
                    : "var(--accent-border)"
                }`,
              }}
            >
              <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>
                {row.name}
              </p>
              <p className="text-xs font-mono font-bold" style={{ color: "var(--text)" }}>
                {fmt(row.val)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map((d) => (
          <button
            key={d}
            onClick={() => setAngle((d * Math.PI) / 180)}
            className="text-[10px] font-bold px-2 py-1 rounded border"
            style={{
              background: "var(--bg-card)",
              color: "var(--text)",
              borderColor: "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {d}°
          </button>
        ))}
      </div>
    </WidgetShell>
  );
}
