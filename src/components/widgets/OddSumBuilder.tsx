"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetShell from "@/components/layout/WidgetShell";

const MAX_N = 10;
const CELL = 36; // px per unit cell

// Returns the SVG path for the L-shape at ring k (1-indexed)
// The L-shape fills row k and column k of the k×k square
function getLShapeCells(k: number): { x: number; y: number }[] {
  if (k === 1) return [{ x: 0, y: 0 }];
  const cells: { x: number; y: number }[] = [];
  // Top row of the k×k square (y = k-1 from top, i.e. row index k-1)
  for (let x = 0; x < k; x++) cells.push({ x, y: k - 1 });
  // Right column (x = k-1), excluding corner already added
  for (let y = 0; y < k - 1; y++) cells.push({ x: k - 1, y });
  return cells;
}

// Dusty sage opacity steps: full opacity (ring 1) → pale (ring 10)
const LAYER_OPACITIES = [1.0, 0.82, 0.66, 0.52, 0.40, 0.30, 0.22, 0.16, 0.11, 0.07];
const SAGE_BASE = "95, 138, 106"; // #5F8A6A in RGB
const LAYER_COLORS = LAYER_OPACITIES.map((o) => `rgba(${SAGE_BASE}, ${o})`);

export default function OddSumBuilder() {
  const [n, setN] = useState(4);

  const sum = n * n;
  const gridSize = n * CELL;

  return (
    <WidgetShell label="Interactive · Odd Number Sum" badge="drag slider">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-sm font-medium w-4 text-right" style={{ color: "var(--text)" }}>n =</span>
        <input
          type="range" min={1} max={MAX_N} value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="flex-1"
          style={{ accentColor: "var(--accent)" }}
        />
        <span className="text-sm font-bold w-4" style={{ color: "var(--accent)" }}>{n}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* SVG grid */}
        <div className="flex-shrink-0">
          <svg width={gridSize} height={gridSize}
            style={{ display: "block", maxWidth: "100%" }}>
            <AnimatePresence>
              {Array.from({ length: n }, (_, i) => i + 1).map((k) => {
                const cells = getLShapeCells(k);
                return cells.map(({ x, y }) => (
                  <motion.rect
                    key={`${k}-${x}-${y}`}
                    x={x * CELL + 1}
                    y={(n - 1 - y) * CELL + 1}  // flip y: row 0 = top
                    width={CELL - 2}
                    height={CELL - 2}
                    rx={3}
                    fill={LAYER_COLORS[k - 1]}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ delay: (k - 1) * 0.06, duration: 0.2 }}
                  />
                ));
              })}
            </AnimatePresence>
          </svg>
        </div>

        {/* Equation breakdown */}
        <div className="flex-1">
          <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
            Sum of first {n} odd numbers
          </p>
          <div className="space-y-1">
            {Array.from({ length: n }, (_, i) => i + 1).map((k) => (
              <div key={k} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: LAYER_COLORS[k - 1] }} />
                <span className="text-sm" style={{ color: "var(--text)" }}>
                  {2 * k - 1}
                </span>
                {k < n && (
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>+</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-lg font-bold" style={{ color: "var(--accent)" }}>
              = {sum} = {n}²
            </span>
          </div>
          <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Each L-shaped ring adds the next odd number. The total always equals n².
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
