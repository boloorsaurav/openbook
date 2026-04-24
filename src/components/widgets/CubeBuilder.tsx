"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const MAX_N = 5;

export default function CubeBuilder() {
  const [n, setN] = useState(3);
  const total = n * n * n;

  // Render n layers of n×n grids with CSS 3D perspective
  const layers = Array.from({ length: n }, (_, i) => i);

  return (
    <WidgetShell label="Interactive · Cube Builder" badge="drag slider">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-sm font-medium" style={{ color: "var(--text)" }}>n =</span>
        <input
          type="range" min={1} max={MAX_N} value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="flex-1"
          style={{ accentColor: "var(--accent)" }}
        />
        <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{n}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* 3D cube visualisation */}
        <div style={{ perspective: "600px", perspectiveOrigin: "50% 40%" }}>
          <div style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(20deg) rotateY(-30deg)",
            width: n * 44,
            height: n * 44,
            position: "relative",
          }}>
            {layers.map((layer) => (
              <div
                key={layer}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${layer * 44}px)`,
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  gridTemplateColumns: `repeat(${n}, 40px)`,
                  gap: "4px",
                }}
              >
                {Array.from({ length: n * n }).map((_, j) => (
                  <div
                    key={j}
                    style={{
                      width: 40, height: 40,
                      background: `hsla(${143 - layer * 8}, ${42 + layer * 4}%, ${48 + layer * 4}%, 0.9)`,
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      borderRadius: 4,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Explanation */}
        <div className="flex-1 space-y-3">
          <div className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
            {n}³ = {total}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            A cube with side {n} is made of{" "}
            <strong style={{ color: "var(--text)" }}>{n} layers</strong>, each a{" "}
            {n}×{n} grid of unit cubes.
          </p>
          <div className="space-y-1">
            {layers.map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="w-4 h-4 rounded flex-shrink-0"
                  style={{ background: `hsla(${152 - i * 12}, ${50 + i * 5}%, ${45 + i * 4}%, 0.9)` }} />
                <span style={{ color: "var(--text)" }}>
                  Layer {i + 1}: {n}×{n} = {n * n} cubes
                </span>
              </div>
            ))}
          </div>
          <div className="text-sm pt-1" style={{ color: "var(--text-muted)" }}>
            Total = {n} × {n * n} = <strong style={{ color: "var(--accent)" }}>{total}</strong>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}
