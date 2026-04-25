"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const THICKNESS_CM = 0.001;

const MILESTONES: { folds: number; label: string; emoji: string }[] = [
  { folds: 7,  label: "Taller than you",          emoji: "🧍" },
  { folds: 10, label: "About 10 cm — a ruler",    emoji: "📏" },
  { folds: 17, label: "Taller than a building",   emoji: "🏢" },
  { folds: 20, label: "Higher than Burj Khalifa", emoji: "🏙️" },
  { folds: 27, label: "Into the stratosphere",    emoji: "✈️" },
  { folds: 34, label: "Past the ISS",             emoji: "🛰️" },
  { folds: 42, label: "Halfway to the Moon",      emoji: "🌗" },
  { folds: 46, label: "Reached the Moon!",        emoji: "🌕" },
];

function formatThickness(cm: number): string {
  if (cm < 0.1)              return `${(cm * 10).toFixed(3)} mm`;
  if (cm < 100)              return `${cm.toFixed(2)} cm`;
  if (cm < 100_000)          return `${(cm / 100).toFixed(1)} m`;
  if (cm < 100_000_000)      return `${(cm / 100_000).toFixed(0)} km`;
  return `${(cm / 100_000).toExponential(1)} km`;
}

const BAR_H = 120; // chart height px
const MAX_BARS = 20;

export default function FoldingSimulation() {
  const [folds, setFolds] = useState(4);
  const MAX = 46;

  const values = Array.from({ length: folds + 1 }, (_, i) => THICKNESS_CM * Math.pow(2, i));
  const maxVal = values[values.length - 1];

  // show last MAX_BARS bars
  const visible = values.length > MAX_BARS ? values.slice(-MAX_BARS) : values;
  const startFold = values.length > MAX_BARS ? folds - MAX_BARS + 1 : 0;

  const currentMilestone = [...MILESTONES].reverse().find((m) => folds >= m.folds);
  const nextMilestone = MILESTONES.find((m) => folds < m.folds);

  return (
    <WidgetShell label="Paper Folding" badge="Exponential Growth">
      {/* Top: current value */}
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
            style={{ color: "var(--text-muted)" }}>Thickness after fold {folds}</p>
          <p className="text-3xl font-extrabold"
            style={{ color: "var(--text)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
            {formatThickness(maxVal)}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            = 0.001 cm × 2<sup>{folds}</sup>
          </p>
        </div>
        {currentMilestone && (
          <div className="text-right">
            <span className="text-2xl">{currentMilestone.emoji}</span>
            <p className="text-[11px] font-semibold mt-0.5" style={{ color: "var(--green-dark)" }}>
              {currentMilestone.label}
            </p>
          </div>
        )}
      </div>

      {/* Bar chart */}
      <div className="mb-4">
        <div
          className="flex items-end gap-px rounded-lg overflow-hidden px-2 pt-2"
          style={{ height: BAR_H + 24, background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          {visible.map((v, i) => {
            const fold = startFold + i;
            const isLast = i === visible.length - 1;
            const heightPct = maxVal === 0 ? 0 : (v / maxVal);
            const barH = Math.max(2, Math.round(heightPct * BAR_H));
            return (
              <div key={fold} className="flex flex-col items-center flex-1 min-w-0">
                <div
                  className="w-full rounded-t-sm transition-all duration-300"
                  style={{
                    height: barH,
                    background: isLast ? "var(--green)" : "var(--accent-border)",
                    opacity: isLast ? 1 : Math.max(0.25, heightPct),
                  }}
                />
                {/* label only for first and last */}
                <span className="text-[8px] mt-1 leading-none"
                  style={{ color: isLast ? "var(--green-dark)" : "var(--text-muted)" }}>
                  {fold === 0 || isLast ? fold : ""}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-[10px] text-center mt-1" style={{ color: "var(--text-muted)" }}>
          fold number →
        </p>
      </div>

      {/* Increment / decrement */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <button className="btn-ghost" onClick={() => setFolds((f) => Math.max(0, f - 1))}
          disabled={folds === 0}>
          ← Unfold
        </button>
        <span className="text-sm font-bold w-16 text-center"
          style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
          Fold {folds}
        </span>
        <button className="btn-primary" onClick={() => setFolds((f) => Math.min(MAX, f + 1))}
          disabled={folds >= MAX}>
          Fold →
        </button>
      </div>

      {/* Next milestone nudge */}
      {nextMilestone && (
        <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
          {nextMilestone.folds - folds} more fold{nextMilestone.folds - folds !== 1 ? "s" : ""} →{" "}
          <strong style={{ color: "var(--text)" }}>{nextMilestone.emoji} {nextMilestone.label}</strong>
        </p>
      )}
      {folds >= 46 && (
        <p className="text-center text-sm font-bold" style={{ color: "var(--green-dark)" }}>
          🌕 You reached the Moon in 46 folds!
        </p>
      )}
    </WidgetShell>
  );
}
