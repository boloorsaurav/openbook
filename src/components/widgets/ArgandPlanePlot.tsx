"use client";
import { useRef, useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const SIZE = 320;
const CX = SIZE / 2;
const CY = SIZE / 2;
const UNIT = 30; // pixels per unit

function toPx(a: number, b: number) {
  return { x: CX + a * UNIT, y: CY - b * UNIT };
}

function fromPx(x: number, y: number) {
  return { a: (x - CX) / UNIT, b: (CY - y) / UNIT };
}

export default function ArgandPlanePlot() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);
  const svgRef = useRef<SVGSVGElement>(null);

  const handle = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scale = SIZE / rect.width;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;
    const { a: na, b: nb } = fromPx(x, y);
    setA(Math.round(na * 2) / 2);
    setB(Math.round(nb * 2) / 2);
  };

  const z = toPx(a, b);
  const zBar = toPx(a, -b);
  const modulus = Math.sqrt(a * a + b * b);
  const negZ = toPx(-a, -b);

  // Grid lines
  const gridLines = [];
  for (let i = -5; i <= 5; i++) {
    if (i === 0) continue;
    gridLines.push(
      <line key={"v" + i} x1={CX + i * UNIT} y1={20} x2={CX + i * UNIT} y2={SIZE - 20} stroke="var(--border)" strokeWidth={0.5} />,
      <line key={"h" + i} x1={20} y1={CY - i * UNIT} x2={SIZE - 20} y2={CY - i * UNIT} stroke="var(--border)" strokeWidth={0.5} />,
    );
  }

  return (
    <WidgetShell label="Argand Plane" badge="click to plot">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Click anywhere on the plane to place a complex number z. See its modulus (distance from
        origin), conjugate (mirror across the real axis), and additive inverse.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full md:w-auto touch-none cursor-crosshair"
          style={{ maxWidth: SIZE, maxHeight: SIZE, background: "var(--bg-card)", borderRadius: 8, border: "1.5px solid var(--border)" }}
          onPointerDown={handle}
          onPointerMove={(e) => {
            if (e.buttons === 1) handle(e);
          }}
        >
          {gridLines}
          {/* Real axis */}
          <line x1={20} y1={CY} x2={SIZE - 20} y2={CY} stroke="var(--text-muted)" strokeWidth={1.5} />
          {/* Imaginary axis */}
          <line x1={CX} y1={20} x2={CX} y2={SIZE - 20} stroke="var(--text-muted)" strokeWidth={1.5} />
          {/* Axis labels */}
          <text x={SIZE - 22} y={CY + 14} fontSize={9} fill="var(--text-muted)" fontWeight={700}>Re</text>
          <text x={CX + 6} y={26} fontSize={9} fill="var(--text-muted)" fontWeight={700}>Im</text>

          {/* Modulus line */}
          <line x1={CX} y1={CY} x2={z.x} y2={z.y} stroke="var(--green-dark)" strokeWidth={2} />
          {/* Mirror line z to zBar */}
          <line x1={z.x} y1={z.y} x2={zBar.x} y2={zBar.y} stroke="var(--yellow)" strokeDasharray="3 3" strokeWidth={1.5} />

          {/* z */}
          <circle cx={z.x} cy={z.y} r={6} fill="var(--accent)" />
          <text x={z.x + 8} y={z.y - 6} fontSize={11} fontWeight={700} fill="var(--accent)" fontFamily="var(--font-display)">z</text>

          {/* z bar */}
          <circle cx={zBar.x} cy={zBar.y} r={5} fill="var(--yellow)" opacity={0.8} />
          <text x={zBar.x + 8} y={zBar.y + 4} fontSize={10} fontWeight={700} fill="var(--yellow)" fontFamily="var(--font-display)">z̄</text>

          {/* -z */}
          <circle cx={negZ.x} cy={negZ.y} r={5} fill="var(--text-light)" />
          <text x={negZ.x + 8} y={negZ.y + 4} fontSize={10} fontWeight={700} fill="var(--text-light)" fontFamily="var(--font-display)">−z</text>

          {/* Origin */}
          <circle cx={CX} cy={CY} r={2.5} fill="var(--text-muted)" />
        </svg>

        <div className="flex-1 w-full space-y-2">
          <div className="rounded p-2" style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)" }}>
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>z</p>
            <p className="text-sm font-mono font-bold" style={{ color: "var(--accent)" }}>
              {a} {b >= 0 ? "+" : "−"} {Math.abs(b)}i
            </p>
          </div>
          <div className="rounded p-2" style={{ background: "var(--yellow-light)", border: "1px solid var(--yellow-border)" }}>
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--yellow)" }}>Conjugate z̄</p>
            <p className="text-sm font-mono font-bold" style={{ color: "var(--yellow)" }}>
              {a} {-b >= 0 ? "+" : "−"} {Math.abs(b)}i
            </p>
          </div>
          <div className="rounded p-2" style={{ background: "var(--green-light)", border: "1px solid var(--green-border)" }}>
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--green-dark)" }}>Modulus |z|</p>
            <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
              √({a}² + {b}²) = {modulus.toFixed(4)}
            </p>
          </div>
          <div className="rounded p-2" style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}>
            <p className="text-[9px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Multiplicative inverse</p>
            <p className="text-sm font-mono font-bold" style={{ color: "var(--text)" }}>
              {modulus === 0
                ? "undefined"
                : `${(a / (a * a + b * b)).toFixed(3)} ${
                    -b >= 0 ? "+" : "−"
                  } ${Math.abs(-b / (a * a + b * b)).toFixed(3)}i`}
            </p>
            <p className="text-[9px]" style={{ color: "var(--text-muted)" }}>z̄ / |z|²</p>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}
