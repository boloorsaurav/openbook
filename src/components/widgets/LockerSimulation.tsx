/**
 * LockerSimulation — animates the classic "100 lockers, 100 people" puzzle to show
 * that only perfect-square lockers end up open.
 *
 * 100 lockers laid out in a 10×10 grid. Person N toggles every Nth locker. Watch
 * the animation, scrub with the slider, or jump to the end. At the end, only the
 * perfect-square lockers (1, 4, 9, 16, …) are green/open, with an explanation
 * underneath. Yellow tint shows lockers being touched on the current pass.
 *
 * Props: none. It's fully self-contained (constants for total/speed are at the top of the file).
 *
 * Used by: chapter 1 (A Square and A Cube). Could be reused anywhere perfect squares
 *          or factor counts are introduced.
 *
 * Gotchas:
 *   - Pure simulation — `computeState(step)` recomputes the whole locker array from
 *     scratch each render. Cheap at 100 lockers, but don't blindly raise TOTAL.
 *   - The interval cleanup in the useEffect depends on `running`. Pausing/resuming
 *     resets the cadence cleanly; don't add new effect deps without understanding this.
 */
"use client";
import { useState, useRef, useEffect } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const TOTAL = 100;
const SPEED_MS = 60;

function computeState(step: number): boolean[] {
  const open = new Array(TOTAL).fill(false);
  for (let person = 1; person <= step; person++) {
    for (let locker = person; locker <= TOTAL; locker += person) {
      open[locker - 1] = !open[locker - 1];
    }
  }
  return open;
}

function isPerfectSquare(n: number) { return Math.sqrt(n) % 1 === 0; }

// Lockers touched by the current person's pass (for yellow "being toggled" state)
function getToggledByPerson(person: number): Set<number> {
  const s = new Set<number>();
  for (let locker = person; locker <= TOTAL; locker += person) s.add(locker);
  return s;
}

export default function LockerSimulation() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const lockers = computeState(step);
  const openCount = lockers.filter(Boolean).length;
  // Yellow highlight: show which lockers person `step` is currently toggling
  const currentlyToggled = running && step > 0 ? getToggledByPerson(step) : new Set<number>();

  function start() {
    if (step >= TOTAL) reset();
    setRunning(true);
  }
  function pause() { setRunning(false); }
  function reset() { setRunning(false); setStep(0); }

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setStep((s) => {
          if (s >= TOTAL) { setRunning(false); return TOTAL; }
          return s + 1;
        });
      }, SPEED_MS);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  return (
    <WidgetShell label="Interactive · Locker Simulation" badge="drag or animate">
      {/* Legend */}
      <div className="flex items-center gap-4 mb-3 flex-wrap">
        <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--text-muted)" }}>
          <div className="w-3 h-3 rounded-sm border" style={{ background: "var(--bg)", borderColor: "var(--border)" }} />
          Closed
        </div>
        <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--yellow)" }}>
          <div className="w-3 h-3 rounded-sm" style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }} />
          Being toggled
        </div>
        <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--green-dark)" }}>
          <div className="w-3 h-3 rounded-sm" style={{ background: "var(--green)" }} />
          Open (perfect square)
        </div>
      </div>

      <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
        Person <strong style={{ color: "var(--text)" }}>{step}</strong> of 100 has gone.{" "}
        {step === TOTAL && (
          <span style={{ color: "var(--green)", fontWeight: 600 }}>
            {openCount} lockers open — all perfect squares!
          </span>
        )}
      </p>

      {/* Controls */}
      <div className="flex items-center gap-3 mb-4">
        <input
          type="range" min={0} max={TOTAL} value={step}
          onChange={(e) => { setRunning(false); setStep(Number(e.target.value)); }}
          className="flex-1"
          style={{ accentColor: "var(--accent)" }}
        />
        <button
          onClick={running ? pause : start}
          className={running ? "btn-ghost" : "btn-primary"}
        >
          {running ? "⏸ Pause" : step >= TOTAL ? "↺ Replay" : "▶ Run All 100"}
        </button>
        <button onClick={reset} className="btn-ghost">
          Reset
        </button>
      </div>

      {/* 10×10 locker grid */}
      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(10, 1fr)" }}>
        {lockers.map((isOpen, i) => {
          const n = i + 1;
          const isBeingToggled = currentlyToggled.has(n);
          const isSquare = isPerfectSquare(n);

          let bg = "var(--bg)";
          let borderColor = "var(--border)";
          let color = "var(--text-light)";
          let scale = "scale(1)";

          if (isBeingToggled && !isOpen) {
            // Yellow: currently being touched this pass (closed→open transition)
            bg = "var(--yellow-light)";
            borderColor = "var(--yellow-border)";
            color = "var(--yellow)";
          } else if (isOpen && isSquare) {
            // Green: final perfect square (open)
            bg = "var(--green)";
            borderColor = "var(--green-dark)";
            color = "#fff";
            scale = "scale(1.05)";
          } else if (isOpen) {
            // Light green: open but not a perfect square (mid-animation)
            bg = "var(--green-light)";
            borderColor = "var(--green-border)";
            color = "var(--green-dark)";
          }

          return (
            <div
              key={n}
              title={`Locker ${n}`}
              className="aspect-square rounded flex items-center justify-center text-[9px] font-bold transition-all duration-150"
              style={{ background: bg, border: `1.5px solid ${borderColor}`, color, transform: scale }}
            >
              {n}
            </div>
          );
        })}
      </div>

      {step === TOTAL && (
        <p className="text-xs mt-3 p-3 rounded-lg"
          style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
          <strong>Why?</strong> A locker is toggled once per factor. Only perfect squares have an{" "}
          <em>odd</em> number of factors — so only they end up open.{" "}
          Open lockers: {lockers.map((o, i) => o ? i + 1 : null).filter(Boolean).join(", ")}.
        </p>
      )}
    </WidgetShell>
  );
}
