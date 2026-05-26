"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function powerOfI(n: number): { real: number; imag: number; label: string } {
  // i^n cycles: i, -1, -i, 1
  const r = ((n % 4) + 4) % 4;
  if (r === 0) return { real: 1, imag: 0, label: "1" };
  if (r === 1) return { real: 0, imag: 1, label: "i" };
  if (r === 2) return { real: -1, imag: 0, label: "−1" };
  return { real: 0, imag: -1, label: "−i" };
}

const CX = 130;
const CY = 130;
const R = 80;
const SIZE = 260;

const POSITIONS = [
  { value: "1", x: CX + R, y: CY, angle: 0 },
  { value: "i", x: CX, y: CY - R, angle: Math.PI / 2 },
  { value: "−1", x: CX - R, y: CY, angle: Math.PI },
  { value: "−i", x: CX, y: CY + R, angle: (3 * Math.PI) / 2 },
];

export default function PowersOfI() {
  const [n, setN] = useState(7);
  const result = powerOfI(n);
  const r = ((n % 4) + 4) % 4;
  const quot = Math.floor(n / 4);
  const rem = ((n % 4) + 4) % 4;

  return (
    <WidgetShell label="Powers of i" badge="iⁿ cycle">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Since i² = −1, the powers of i cycle through just four values: i, −1, −i, 1. The exponent
        only matters mod 4.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full md:w-auto" style={{ maxWidth: SIZE, maxHeight: SIZE }}>
          {/* Axes */}
          <line x1={20} y1={CY} x2={SIZE - 20} y2={CY} stroke="var(--border-strong)" strokeWidth={1} />
          <line x1={CX} y1={20} x2={CX} y2={SIZE - 20} stroke="var(--border-strong)" strokeWidth={1} />
          {/* Dotted cycle path */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--border)" strokeDasharray="3 3" strokeWidth={1} />
          {/* Position labels */}
          {POSITIONS.map((p, i) => {
            const active = i === rem;
            return (
              <g key={p.value}>
                <circle cx={p.x} cy={p.y} r={active ? 18 : 12} fill={active ? "var(--accent)" : "var(--bg-card)"} stroke={active ? "var(--accent)" : "var(--border-strong)"} strokeWidth={1.5} />
                <text
                  x={p.x}
                  y={p.y + (active ? 6 : 4)}
                  textAnchor="middle"
                  fontSize={active ? 14 : 11}
                  fontWeight={700}
                  fill={active ? "var(--bg-card)" : "var(--text)"}
                  fontFamily="var(--font-display)"
                >
                  {p.value}
                </text>
              </g>
            );
          })}
          {/* Arrows showing cycle direction */}
          {[0, 1, 2, 3].map((i) => {
            const a1 = (i * Math.PI) / 2 + 0.2;
            const a2 = ((i + 1) * Math.PI) / 2 - 0.2;
            const x1 = CX + R * Math.cos(a1);
            const y1 = CY - R * Math.sin(a1);
            const x2 = CX + R * Math.cos(a2);
            const y2 = CY - R * Math.sin(a2);
            return (
              <path
                key={"arc" + i}
                d={`M ${x1} ${y1} A ${R} ${R} 0 0 0 ${x2} ${y2}`}
                fill="none"
                stroke="var(--text-light)"
                strokeWidth={1.5}
                markerEnd="url(#arrow-i)"
              />
            );
          })}
          <defs>
            <marker id="arrow-i" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--text-light)" />
            </marker>
          </defs>
        </svg>

        <div className="flex-1 w-full space-y-3">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: "var(--text-muted)" }}>
              Exponent n (in iⁿ)
            </label>
            <input
              type="range"
              min={-12}
              max={20}
              step={1}
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              value={n}
              onChange={(e) => setN(Number(e.target.value) || 0)}
              className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
              style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
            />
          </div>

          <div
            className="rounded-lg p-2"
            style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              n = 4 · k + r
            </p>
            <p className="text-xs font-mono" style={{ color: "var(--text)" }}>
              {n} = 4 · ({quot}) + {rem}
            </p>
          </div>

          <div
            className="rounded-lg p-3 text-center"
            style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
              i to the power {n}
            </p>
            <p className="text-2xl font-extrabold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
              {result.label}
            </p>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}
