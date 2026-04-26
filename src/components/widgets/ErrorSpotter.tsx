"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Problem = {
  expr: string;
  wrong: string;
  missing: string;
  options: string[];
  ans: number;
  explain: string;
  verifyX: number;
  wrongValue: number;
  correctValue: number;
};

const PROBLEMS: Problem[] = [
  {
    expr: "(2x + 3)²",
    wrong: "4x² + 9",
    missing: "+12x",
    options: ["+6x", "+12x", "+5x", "+12x²"],
    ans: 1,
    explain: "(a + b)² = a² + 2ab + b². Here a=2x, b=3, so 2ab = 2 × 2x × 3 = 12x. Forgetting this term is the most common algebra mistake.",
    verifyX: 1,
    wrongValue: 13, // 4 + 9
    correctValue: 25, // (2+3)² = 25
  },
  {
    expr: "(x + 5)²",
    wrong: "x² + 25",
    missing: "+10x",
    options: ["+5x", "+10x", "+25x", "+10"],
    ans: 1,
    explain: "(a + b)² = a² + 2ab + b². Here a=x, b=5, so 2ab = 2 × x × 5 = 10x.",
    verifyX: 2,
    wrongValue: 29, // 4 + 25
    correctValue: 49, // (2+5)² = 49
  },
  {
    expr: "(3y − 2)²",
    wrong: "9y² + 4",
    missing: "−12y",
    options: ["−6y", "−12y", "+12y", "−4y"],
    ans: 1,
    explain: "(a − b)² = a² − 2ab + b². Here a=3y, b=2, so −2ab = −2 × 3y × 2 = −12y.",
    verifyX: 2,
    wrongValue: 40, // 36 + 4
    correctValue: 16, // (6-2)² = 16
  },
];

export default function ErrorSpotter() {
  const [pIdx, setPIdx] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const p = PROBLEMS[pIdx];
  const correct = pick === p.ans;

  const next = () => {
    setPIdx((pIdx + 1) % PROBLEMS.length);
    setPick(null);
  };

  return (
    <WidgetShell label="Interactive · Error Spotter" badge="find the missing term">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        A student wrote this expansion. Something's missing. Find what should fill the blank.
      </p>

      <div
        className="rounded-lg p-4 mb-4 text-center"
        style={{ background: "var(--red-light)", border: "1.5px solid var(--red-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--red-dark)" }}>
          Student's wrong answer
        </p>
        <p
          className="text-lg font-bold flex items-center justify-center gap-2 flex-wrap"
          style={{ color: "var(--red-dark)", fontFamily: "var(--font-display)" }}
        >
          <span>{p.expr} =</span>
          <span>{p.wrong}</span>
          <span
            style={{
              background: "var(--bg-card)",
              padding: "2px 12px",
              borderRadius: 6,
              color: "var(--text-muted)",
              border: "1.5px dashed var(--border-strong)",
            }}
          >
            ?
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {p.options.map((opt, i) => {
          const picked = pick === i;
          const isAnswer = i === p.ans;
          let bg = "var(--bg-card)";
          let color = "var(--text)";
          let border = "var(--border-strong)";
          if (pick !== null) {
            if (isAnswer) {
              bg = "var(--green-light)";
              color = "var(--green-dark)";
              border = "var(--green-border)";
            } else if (picked) {
              bg = "var(--red-light)";
              color = "var(--red-dark)";
              border = "var(--red-border)";
            }
          }
          return (
            <button
              key={i}
              onClick={() => pick === null && setPick(i)}
              disabled={pick !== null}
              className="text-base font-bold py-2 rounded-lg border-2 transition-all"
              style={{
                background: bg,
                color,
                borderColor: border,
                fontFamily: "var(--font-display)",
                cursor: pick === null ? "pointer" : "default",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {pick !== null && (
        <div
          className="rounded-lg p-3 mb-3"
          style={{
            background: correct ? "var(--green-light)" : "var(--yellow-light)",
            border: `1.5px solid ${correct ? "var(--green-border)" : "var(--yellow-border)"}`,
          }}
        >
          <p className="text-xs font-bold mb-1" style={{ color: correct ? "var(--green-dark)" : "var(--yellow)" }}>
            {correct ? "✓ Right!" : `✗ The missing term is ${p.missing}`}
          </p>
          <p className="text-[11px]" style={{ color: "var(--text)" }}>
            {p.explain}
          </p>
          <p className="text-[11px] mt-2 font-mono" style={{ color: "var(--text-muted)" }}>
            Sanity check at x={p.verifyX}: wrong answer gives {p.wrongValue}, correct expansion gives {p.correctValue}.
          </p>
        </div>
      )}

      <button onClick={next} className="btn-ghost w-full">
        Next problem →
      </button>
    </WidgetShell>
  );
}
