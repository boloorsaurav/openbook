"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Kind = "circle" | "parabola" | "ellipse" | "hyperbola";

const W = 360;
const H = 280;
const CX = W / 2;
const CY = H / 2;
const UNIT = 18;

function toPx(x: number, y: number) { return { px: CX + x * UNIT, py: CY - y * UNIT }; }

function fmt(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(2).replace(/\.?0+$/, "");
}

export default function ConicGallery() {
  const [kind, setKind] = useState<Kind>("ellipse");
  const [r, setR] = useState(4);
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);
  const [pa, setPa] = useState(2); // parabola "a"

  // Build curve points
  const points: { x: number; y: number }[] = [];
  if (kind === "circle") {
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * 2 * Math.PI;
      points.push({ x: r * Math.cos(t), y: r * Math.sin(t) });
    }
  } else if (kind === "ellipse") {
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * 2 * Math.PI;
      points.push({ x: a * Math.cos(t), y: b * Math.sin(t) });
    }
  } else if (kind === "parabola") {
    // y² = 4ax, opens right
    for (let i = 0; i <= 100; i++) {
      const y = -6 + (i / 100) * 12;
      const x = (y * y) / (4 * pa);
      if (x <= 9) points.push({ x, y });
    }
  } else {
    // hyperbola x²/a² − y²/b² = 1, two branches
    for (let i = 0; i <= 100; i++) {
      const t = -2 + (i / 100) * 4;
      const x = a * Math.cosh(t);
      const y = b * Math.sinh(t);
      if (Math.abs(x) < 10 && Math.abs(y) < 8) points.push({ x, y });
    }
    // mark a break to start second branch
    points.push({ x: NaN, y: NaN });
    for (let i = 0; i <= 100; i++) {
      const t = -2 + (i / 100) * 4;
      const x = -a * Math.cosh(t);
      const y = b * Math.sinh(t);
      if (Math.abs(x) < 10 && Math.abs(y) < 8) points.push({ x, y });
    }
  }

  // Build SVG path with breaks
  const path = points
    .map((p, i) => {
      if (!isFinite(p.x)) return null;
      const { px, py } = toPx(p.x, p.y);
      const prevBad = i === 0 || !isFinite(points[i - 1].x);
      return `${prevBad ? "M" : "L"} ${px.toFixed(1)} ${py.toFixed(1)}`;
    })
    .filter(Boolean)
    .join(" ");

  // Foci, vertices, directrix
  let markers: { label: string; x: number; y: number; color: string }[] = [];
  let lineMarkers: { x1: number; y1: number; x2: number; y2: number; color: string }[] = [];
  let equation = "";

  if (kind === "circle") {
    markers.push({ label: "C", x: 0, y: 0, color: "var(--accent)" });
    equation = `x² + y² = ${fmt(r * r)}`;
  } else if (kind === "ellipse") {
    const c = Math.sqrt(Math.max(a * a - b * b, 0));
    markers.push({ label: "F₁", x: -c, y: 0, color: "var(--green-dark)" });
    markers.push({ label: "F₂", x: c, y: 0, color: "var(--green-dark)" });
    markers.push({ label: "V", x: a, y: 0, color: "var(--accent)" });
    markers.push({ label: "V'", x: -a, y: 0, color: "var(--accent)" });
    equation = `x²/${a * a} + y²/${b * b} = 1   (e = ${fmt(c / a)})`;
  } else if (kind === "parabola") {
    markers.push({ label: "F", x: pa, y: 0, color: "var(--green-dark)" });
    lineMarkers.push({ x1: -pa, y1: -6, x2: -pa, y2: 6, color: "var(--yellow)" });
    equation = `y² = ${4 * pa}x   (focus at (${pa}, 0), directrix x = ${-pa})`;
  } else {
    const c = Math.sqrt(a * a + b * b);
    markers.push({ label: "F₁", x: -c, y: 0, color: "var(--green-dark)" });
    markers.push({ label: "F₂", x: c, y: 0, color: "var(--green-dark)" });
    markers.push({ label: "V", x: a, y: 0, color: "var(--accent)" });
    markers.push({ label: "V'", x: -a, y: 0, color: "var(--accent)" });
    equation = `x²/${a * a} − y²/${b * b} = 1   (e = ${fmt(c / a)})`;
  }

  return (
    <WidgetShell label="Conic Sections" badge="4 curves, one widget">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick a conic. Move the sliders. The graph shows the curve along with its key features —
        foci, vertices, and directrix where applicable.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {(["circle", "parabola", "ellipse", "hyperbola"] as Kind[]).map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className="text-xs font-bold px-2 py-2 rounded border transition-all"
            style={{
              background: kind === k ? "var(--accent)" : "var(--bg-card)",
              color: kind === k ? "var(--bg-card)" : "var(--text)",
              borderColor: kind === k ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {k.charAt(0).toUpperCase() + k.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        {kind === "circle" && (
          <div className="col-span-2">
            <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>Radius r = {r}</label>
            <input type="range" min={1} max={8} step={0.5} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full" />
          </div>
        )}
        {(kind === "ellipse" || kind === "hyperbola") && (
          <>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>a = {a}</label><input type="range" min={1} max={8} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full" /></div>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>b = {b}</label><input type="range" min={0.5} max={6} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full" /></div>
          </>
        )}
        {kind === "parabola" && (
          <div className="col-span-2">
            <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>a = {pa} (focal distance)</label>
            <input type="range" min={0.5} max={4} step={0.25} value={pa} onChange={(e) => setPa(Number(e.target.value))} className="w-full" />
          </div>
        )}
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 300 }}>
          {/* Grid */}
          {Array.from({ length: 21 }, (_, i) => i - 10).filter((v) => v !== 0).map((v) => (
            <g key={"g" + v}>
              <line x1={CX + v * UNIT} y1={10} x2={CX + v * UNIT} y2={H - 10} stroke="var(--border)" strokeWidth={0.5} />
              <line x1={10} y1={CY - v * UNIT} x2={W - 10} y2={CY - v * UNIT} stroke="var(--border)" strokeWidth={0.5} />
            </g>
          ))}
          {/* Axes */}
          <line x1={10} y1={CY} x2={W - 10} y2={CY} stroke="var(--text-muted)" strokeWidth={1.2} />
          <line x1={CX} y1={10} x2={CX} y2={H - 10} stroke="var(--text-muted)" strokeWidth={1.2} />
          {/* Directrix or other lines */}
          {lineMarkers.map((l, i) => {
            const p1 = toPx(l.x1, l.y1);
            const p2 = toPx(l.x2, l.y2);
            return <line key={"lm" + i} x1={p1.px} y1={p1.py} x2={p2.px} y2={p2.py} stroke={l.color} strokeWidth={1.5} strokeDasharray="4 3" />;
          })}
          {/* Curve */}
          <path d={path} fill="none" stroke="var(--accent)" strokeWidth={2.5} />
          {/* Markers */}
          {markers.map((m, i) => {
            const { px, py } = toPx(m.x, m.y);
            return (
              <g key={"m" + i}>
                <circle cx={px} cy={py} r={5} fill={m.color} />
                <text x={px + 6} y={py - 6} fontSize={10} fontWeight={700} fill={m.color} fontFamily="var(--font-display)">
                  {m.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div
        className="rounded-lg p-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Equation
        </p>
        <p className="text-sm font-mono font-bold" style={{ color: "var(--green-dark)" }}>
          {equation}
        </p>
      </div>
    </WidgetShell>
  );
}
