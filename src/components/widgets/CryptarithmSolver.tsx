"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Puzzle = {
  description: string;
  letters: string[];
  formula: string;
  hint: string;
  check: (m: Record<string, number>) => { lhs: number; rhs: number; ok: boolean };
};

const PUZZLES: Puzzle[] = [
  {
    description: "PQ × 8 = RS — find the digits.",
    letters: ["P", "Q", "R", "S"],
    formula: "PQ × 8 = RS",
    hint: "PQ is two-digit (so PQ ≥ 10) and PQ × 8 must stay two-digit (so PQ ≤ 12). That leaves three candidates.",
    check: (m) => {
      const PQ = m.P * 10 + m.Q;
      const RS = m.R * 10 + m.S;
      return { lhs: PQ * 8, rhs: RS, ok: PQ * 8 === RS && PQ >= 10 && RS >= 10 };
    },
  },
  {
    description: "AB + BA = 99 — find A and B.",
    letters: ["A", "B"],
    formula: "AB + BA = 99",
    hint: "AB + BA = (10A+B) + (10B+A) = 11(A+B). So A + B must equal 9.",
    check: (m) => {
      const AB = m.A * 10 + m.B;
      const BA = m.B * 10 + m.A;
      return { lhs: AB + BA, rhs: 99, ok: AB + BA === 99 && AB >= 10 && BA >= 10 };
    },
  },
  {
    description: "AB × 3 = CAB — find A, B, and C.",
    letters: ["A", "B", "C"],
    formula: "AB × 3 = CAB",
    hint: "Expand: 3(10A + B) = 100C + 10A + B. Simplify to 20A + 2B = 100C, i.e. 10A + B = 50C. So AB = 50 × C. The only way AB is a two-digit multiple of 50 with distinct digits is AB = 50, giving C = 1.",
    check: (m) => {
      const AB = m.A * 10 + m.B;
      const CAB = m.C * 100 + m.A * 10 + m.B;
      return {
        lhs: AB * 3,
        rhs: CAB,
        ok: AB * 3 === CAB && AB >= 10 && CAB >= 100 && m.A > 0 && m.C > 0,
      };
    },
  },
];

export default function CryptarithmSolver() {
  const [pIdx, setPIdx] = useState(0);
  const p = PUZZLES[pIdx];
  const [digits, setDigits] = useState<Record<string, number | null>>(() =>
    Object.fromEntries(p.letters.map((l) => [l, null]))
  );
  const [showHint, setShowHint] = useState(false);

  const allFilled = p.letters.every((l) => digits[l] !== null);
  const filledVals = p.letters.map((l) => digits[l]).filter((v): v is number => v !== null);
  const allUnique = new Set(filledVals).size === filledVals.length;

  let res: { lhs: number; rhs: number; ok: boolean } | null = null;
  if (allFilled && allUnique) {
    res = p.check(digits as Record<string, number>);
  }

  const setLetter = (l: string, v: number | null) => setDigits({ ...digits, [l]: v });

  const reset = (i: number) => {
    setPIdx(i);
    setDigits(Object.fromEntries(PUZZLES[i].letters.map((l) => [l, null])));
    setShowHint(false);
  };

  // For the AA×6=BBB puzzle (which has no solution), we let user explore but won't false-positive.

  return (
    <WidgetShell label="Interactive · Cryptarithm Solver" badge="digits in disguise">
      <div className="flex gap-2 mb-3 flex-wrap">
        {PUZZLES.map((_, i) => (
          <button
            key={i}
            onClick={() => reset(i)}
            className="text-[11px] font-bold px-3 py-1.5 rounded-full border"
            style={{
              background: pIdx === i ? "var(--accent)" : "transparent",
              color: pIdx === i ? "var(--bg-card)" : "var(--text-muted)",
              borderColor: pIdx === i ? "var(--accent)" : "var(--border-strong)",
            }}
          >
            Puzzle {i + 1}
          </button>
        ))}
      </div>

      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        {p.description} Each letter is a unique digit (0–9). Leading digit can't be 0.
      </p>

      <div
        className="rounded-lg p-4 mb-4 text-center"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-2xl font-extrabold tracking-widest" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
          {p.formula}
        </p>
      </div>

      <div className="flex gap-3 mb-3 flex-wrap justify-center">
        {p.letters.map((l) => (
          <div key={l} className="flex flex-col items-center">
            <p className="text-[10px] font-bold uppercase mb-1" style={{ color: "var(--text-muted)" }}>
              {l} =
            </p>
            <select
              value={digits[l] ?? ""}
              onChange={(e) => setLetter(l, e.target.value === "" ? null : Number(e.target.value))}
              className="w-16 text-center text-lg font-extrabold border-2 rounded-lg py-1"
              style={{
                borderColor: "var(--accent)",
                color: "var(--text)",
                background: "var(--bg-card)",
                fontFamily: "var(--font-display)",
              }}
            >
              <option value="">?</option>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {!allUnique && filledVals.length > 1 && (
        <div
          className="rounded-lg p-3 mb-3"
          style={{ background: "var(--red-light)", border: "1.5px solid var(--red-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--red-dark)" }}>
            ⚠ Each letter must stand for a <strong>different</strong> digit.
          </p>
        </div>
      )}

      {res && (
        <div
          className="rounded-lg p-3 mb-3"
          style={{
            background: res.ok ? "var(--green-light)" : "var(--yellow-light)",
            border: `1.5px solid ${res.ok ? "var(--green-border)" : "var(--yellow-border)"}`,
          }}
        >
          <p className="text-sm font-bold" style={{ color: res.ok ? "var(--green-dark)" : "var(--yellow)" }}>
            {res.ok
              ? "✓ Solved!"
              : `✗ Your values give ${res.lhs}, but we need ${res.rhs}.`}
          </p>
        </div>
      )}

      <div className="flex gap-2">
        <button onClick={() => setShowHint(!showHint)} className="btn-ghost flex-1">
          {showHint ? "Hide hint" : "Show hint"}
        </button>
        <button onClick={() => reset(pIdx)} className="btn-ghost flex-1">
          Reset
        </button>
      </div>
      {showHint && (
        <p className="text-[11px] mt-2 italic px-1" style={{ color: "var(--text-muted)" }}>
          {p.hint}
        </p>
      )}
    </WidgetShell>
  );
}
