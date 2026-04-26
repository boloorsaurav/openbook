"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const ORIG_W = 60;
const ORIG_H = 40;

export default function PhotoScaler() {
  const [w, setW] = useState(60);
  const [h, setH] = useState(40);

  const wFactor = w / ORIG_W;
  const hFactor = h / ORIG_H;
  const isProportional = Math.abs(wFactor - hFactor) < 0.05;
  const origRatio = ORIG_W / ORIG_H;
  const newRatio = w / h;

  // Display sizing — fit within canvas
  const canvasW = 240;
  const canvasH = 180;
  const scale = Math.min(canvasW / 130, canvasH / 90);
  const dispW = w * scale;
  const dispH = h * scale;

  return (
    <WidgetShell label="Interactive · Photo Scaler" badge="when does it stretch">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Original photo is <strong>{ORIG_W} × {ORIG_H}</strong>. Move both sliders by the same factor — uniform scaling, looks fine. Move just one — distortion.
      </p>

      <div
        className="flex justify-center mb-4 p-3 rounded-lg"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", minHeight: 200 }}
      >
        <svg viewBox={`0 0 ${canvasW} ${canvasH}`} width="100%" style={{ maxWidth: 320 }}>
          {/* Original outline (dashed reference) */}
          <rect
            x={(canvasW - ORIG_W * scale) / 2}
            y={(canvasH - ORIG_H * scale) / 2}
            width={ORIG_W * scale}
            height={ORIG_H * scale}
            fill="none"
            stroke="var(--text-light)"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          {/* Current photo */}
          <g transform={`translate(${(canvasW - dispW) / 2}, ${(canvasH - dispH) / 2})`}>
            <rect
              width={dispW}
              height={dispH}
              fill="var(--bg-card)"
              stroke={isProportional ? "var(--green)" : "var(--red)"}
              strokeWidth="2"
              rx="6"
            />
            {/* Stretched face — drawn in 100×100 then scaled to fill the rectangle so distortion shows */}
            <g transform={`translate(${dispW * 0.1}, ${dispH * 0.1}) scale(${dispW * 0.8 / 100}, ${dispH * 0.8 / 100})`}>
              <circle cx="50" cy="50" r="42" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
              <circle cx="36" cy="42" r="5" fill="var(--accent)" />
              <circle cx="64" cy="42" r="5" fill="var(--accent)" />
              <path d="M 36 64 Q 50 76 64 64" stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>

      {/* Sliders + steppers */}
      <div className="space-y-3 mb-4">
        <label className="flex items-center gap-3">
          <span className="text-xs font-bold w-16 shrink-0" style={{ color: "var(--text-muted)" }}>
            Width
          </span>
          <input type="range" min={20} max={120} value={w} onChange={(e) => setW(Number(e.target.value))} className="flex-1" />
          <input
            type="number"
            min={20}
            max={120}
            step={1}
            value={w}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!isNaN(v) && v >= 20 && v <= 120) setW(v);
            }}
            className="w-16 text-center text-sm font-extrabold border rounded px-1 py-0.5"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--text)",
              background: "transparent",
              fontFamily: "var(--font-display)",
            }}
          />
        </label>
        <label className="flex items-center gap-3">
          <span className="text-xs font-bold w-16 shrink-0" style={{ color: "var(--text-muted)" }}>
            Height
          </span>
          <input type="range" min={15} max={80} value={h} onChange={(e) => setH(Number(e.target.value))} className="flex-1" />
          <input
            type="number"
            min={15}
            max={80}
            step={1}
            value={h}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!isNaN(v) && v >= 15 && v <= 80) setH(v);
            }}
            className="w-16 text-center text-sm font-extrabold border rounded px-1 py-0.5"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--text)",
              background: "transparent",
              fontFamily: "var(--font-display)",
            }}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs mb-3">
        <div className="rounded-lg p-3" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
          <p className="text-[10px] font-bold uppercase mb-1" style={{ color: "var(--text-muted)" }}>
            Width factor
          </p>
          <p className="text-base font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            ×{wFactor.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg p-3" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
          <p className="text-[10px] font-bold uppercase mb-1" style={{ color: "var(--text-muted)" }}>
            Height factor
          </p>
          <p className="text-base font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            ×{hFactor.toFixed(2)}
          </p>
        </div>
      </div>

      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{
          background: isProportional ? "var(--green-light)" : "var(--red-light)",
          border: `1.5px solid ${isProportional ? "var(--green-border)" : "var(--red-border)"}`,
        }}
      >
        <p
          className="text-sm font-bold"
          style={{ color: isProportional ? "var(--green-dark)" : "var(--red-dark)" }}
        >
          {isProportional
            ? "✓ Proportional — both factors match. Face stays itself."
            : "✗ Distorted — factors differ. Face stretches."}
        </p>
        <p className="text-[11px] mt-1" style={{ color: isProportional ? "var(--green-dark)" : "var(--red-dark)" }}>
          Original ratio {origRatio.toFixed(2)} · Current {newRatio.toFixed(2)}
        </p>
      </div>
    </WidgetShell>
  );
}
