"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const W = 320;
const H = 240;
const PAD = 20;
const X_MIN = -1;
const X_MAX = 4;
const Y_MIN = -1;
const Y_MAX = 9;

function xToPx(x: number) { return PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD); }
function yToPx(y: number) { return H - PAD - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * (H - 2 * PAD); }

export default function SecantToTangent() {
  const [a, setA] = useState(2); // base point
  const [h, setH] = useState(1); // step

  // f(x) = x²
  const f = (x: number) => x * x;
  const fPrime = (x: number) => 2 * x;

  const slope = (f(a + h) - f(a)) / h;
  const exactSlope = fPrime(a);

  // Curve
  const N = 100;
  let path = "";
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    const y = f(x);
    if (y < Y_MIN || y > Y_MAX) continue;
    path += `${path ? "L" : "M"} ${xToPx(x).toFixed(1)} ${yToPx(y).toFixed(1)} `;
  }

  // Secant line: through (a, f(a)) and (a+h, f(a+h))
  const x1 = a, y1 = f(a);
  const x2 = a + h, y2 = f(a + h);
  // Extend the line to plot bounds
  const secLeft = { x: X_MIN, y: y1 + slope * (X_MIN - x1) };
  const secRight = { x: X_MAX, y: y1 + slope * (X_MAX - x1) };

  // Tangent line
  const tanLeft = { x: X_MIN, y: y1 + exactSlope * (X_MIN - x1) };
  const tanRight = { x: X_MAX, y: y1 + exactSlope * (X_MAX - x1) };

  return (
    <WidgetShell label="Secant → Tangent" badge="f(x) = x²">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        The slope of the secant line through (a, f(a)) and (a+h, f(a+h)) is the average rate of
        change. As h shrinks toward 0, the secant becomes the <strong>tangent</strong>, and its
        slope is f&apos;(a) — the derivative.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>Base point a = {a}</label>
          <input type="range" min={0.5} max={3} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>Step h = {h.toFixed(3)}</label>
          <input type="range" min={0.01} max={2} step={0.01} value={h} onChange={(e) => setH(Number(e.target.value))} className="w-full" />
        </div>
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 260 }}>
          {/* Grid */}
          {[-1, 0, 1, 2, 3, 4].map((g) => (
            <line key={"vg" + g} x1={xToPx(g)} y1={PAD} x2={xToPx(g)} y2={H - PAD} stroke="var(--border)" strokeWidth={0.5} />
          ))}
          {[0, 2, 4, 6, 8].map((g) => (
            <line key={"hg" + g} x1={PAD} y1={yToPx(g)} x2={W - PAD} y2={yToPx(g)} stroke="var(--border)" strokeWidth={0.5} />
          ))}
          {/* Axes */}
          <line x1={PAD} y1={yToPx(0)} x2={W - PAD} y2={yToPx(0)} stroke="var(--text-muted)" strokeWidth={1.2} />
          <line x1={xToPx(0)} y1={PAD} x2={xToPx(0)} y2={H - PAD} stroke="var(--text-muted)" strokeWidth={1.2} />
          {/* Tangent line (faint) */}
          <line x1={xToPx(tanLeft.x)} y1={yToPx(tanLeft.y)} x2={xToPx(tanRight.x)} y2={yToPx(tanRight.y)} stroke="var(--green-dark)" strokeWidth={1.5} strokeDasharray="4 4" />
          {/* Secant line */}
          <line x1={xToPx(secLeft.x)} y1={yToPx(secLeft.y)} x2={xToPx(secRight.x)} y2={yToPx(secRight.y)} stroke="var(--yellow)" strokeWidth={2} />
          {/* Curve */}
          <path d={path} fill="none" stroke="var(--accent)" strokeWidth={2.5} />
          {/* Two points on curve */}
          <circle cx={xToPx(x1)} cy={yToPx(y1)} r={5} fill="var(--accent)" />
          <circle cx={xToPx(x2)} cy={yToPx(y2)} r={5} fill="var(--yellow)" />
          {/* Labels */}
          <text x={xToPx(x1) + 6} y={yToPx(y1) - 6} fontSize={10} fontWeight={700} fill="var(--accent)" fontFamily="var(--font-display)">(a, a²)</text>
          <text x={xToPx(x2) + 6} y={yToPx(y2) - 6} fontSize={10} fontWeight={700} fill="var(--yellow)" fontFamily="var(--font-display)">(a+h, ·)</text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg p-2" style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--yellow)" }}>Secant slope (h = {h.toFixed(3)})</p>
          <p className="text-xs font-mono font-bold" style={{ color: "var(--yellow)" }}>
            (f(a+h) − f(a))/h = {slope.toFixed(4)}
          </p>
        </div>
        <div className="rounded-lg p-2" style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--green-dark)" }}>Exact derivative</p>
          <p className="text-xs font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            f&apos;(a) = 2a = {exactSlope}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
