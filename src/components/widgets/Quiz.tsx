"use client";
import { useState, useMemo } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // index
  hint?: string;
  explanation?: string;
}

interface QuizProps {
  pool: QuizQuestion[];   // full pool — 10 picked randomly
  count?: number;         // how many to pick (default 10)
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
}

export default function Quiz({ pool, count = 10 }: QuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => pickRandom(pool, count));
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [hintVisible, setHintVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[qi];

  function pick(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (qi + 1 >= questions.length) {
      setDone(true);
    } else {
      setQi((i) => i + 1);
      setSelected(null);
      setHintVisible(false);
    }
  }

  function restart() {
    setQuestions(pickRandom(pool, count));
    setQi(0);
    setSelected(null);
    setHintVisible(false);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <WidgetShell label="Check Your Understanding" badge={`${questions.length} questions`}>
        <div className="text-center py-6">
          <div className="text-5xl font-extrabold mb-1" style={{ color: "var(--green)" }}>
            {score}/{questions.length}
          </div>
          <div className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            {pct >= 80
              ? "Excellent! You've got this chapter."
              : pct >= 50
              ? "Good effort — review the sections and try again."
              : "Go back and re-read the chapter, then retry."}
          </div>
          <button onClick={restart} className="btn-primary">
            New Set of 10 →
          </button>
        </div>
      </WidgetShell>
    );
  }

  return (
    <WidgetShell label="Check Your Understanding" badge={`${qi + 1} of ${questions.length}`}>
      {/* Progress dots */}
      <div className="flex gap-1 mb-5">
        {questions.map((_, i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-full transition-all"
            style={{
              background:
                i < qi
                  ? "var(--accent)"
                  : i === qi
                  ? "var(--accent-border)"
                  : "var(--border)",
            }}
          />
        ))}
      </div>

      <p className="text-[15px] font-semibold mb-4 leading-snug" style={{ color: "var(--text)" }}>
        {q.question}
      </p>

      {/* Hint: shown only on request */}
      {q.hint && selected === null && (
        <>
          {hintVisible ? (
            <p className="text-xs mb-4 px-3 py-2 rounded-lg"
              style={{ background: "var(--yellow-light)", border: "1px solid var(--yellow-border)", color: "var(--yellow)" }}>
              💡 {q.hint}
            </p>
          ) : (
            <button
              onClick={() => setHintVisible(true)}
              className="text-xs mb-4 underline underline-offset-2"
              style={{ color: "var(--text-light)" }}
            >
              Show hint
            </button>
          )}
        </>
      )}

      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.answer;
          const isSelected = i === selected;
          let bg = "var(--bg-card)";
          let border = "var(--border)";
          let color = "var(--text-muted)";

          if (selected !== null) {
            if (isCorrect) { bg = "var(--green-light)"; border = "var(--green)"; color = "var(--green-dark)"; }
            else if (isSelected) { bg = "var(--red-light)"; border = "var(--red)"; color = "var(--red-dark)"; }
          }

          return (
            <button
              key={i}
              onClick={() => pick(i)}
              className="w-full text-left border-2 rounded-xl px-4 py-3 text-sm flex items-center gap-3 transition-all"
              style={{ background: bg, borderColor: border, color, cursor: selected !== null ? "default" : "pointer" }}
            >
              <span
                className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
                style={{
                  borderColor:
                    selected !== null && isCorrect ? "var(--green)"
                    : selected !== null && isSelected ? "var(--red)"
                    : "var(--border-strong)",
                  color:
                    selected !== null && isCorrect ? "var(--green)"
                    : selected !== null && isSelected ? "var(--red)"
                    : "transparent",
                }}
              >
                {selected !== null && isCorrect ? "✓" : selected !== null && isSelected ? "✗" : ""}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && q.explanation && (
        <p className="text-sm rounded-xl px-4 py-3 mb-4"
          style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
          {q.explanation}
        </p>
      )}

      {selected !== null && (
        <button onClick={next} className="btn-primary">
          {qi + 1 >= questions.length ? "See Results" : "Next →"}
        </button>
      )}
    </WidgetShell>
  );
}
