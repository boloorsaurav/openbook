"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function factorial(n: number): number {
  if (n > 20) return Infinity;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function counts(word: string): { letter: string; count: number }[] {
  const map = new Map<string, number>();
  for (const ch of word) map.set(ch, (map.get(ch) || 0) + 1);
  return Array.from(map.entries()).map(([letter, count]) => ({ letter, count })).sort((a, b) => b.count - a.count);
}

function fmt(v: number): string {
  if (!isFinite(v)) return "(too big)";
  return v.toLocaleString();
}

const SAMPLES = ["ROSE", "BANANA", "ALLAHABAD", "MISSISSIPPI", "INDEPENDENCE"];

export default function WordArranger() {
  const [word, setWord] = useState("BANANA");

  const cleaned = word.toUpperCase().replace(/[^A-Z]/g, "");
  const n = cleaned.length;
  const groups = counts(cleaned);
  const nFact = factorial(n);
  const denom = groups.reduce((p, g) => p * factorial(g.count), 1);
  const distinct = n > 0 && n <= 20 ? nFact / denom : NaN;
  const hasRepeats = groups.some((g) => g.count > 1);

  return (
    <WidgetShell label="Word Arranger" badge="distinct permutations">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Type a word. If some letters repeat, the number of <em>distinct</em> arrangements drops
        from n! by a factor of (count!) for each repeated letter.
      </p>

      <div className="mb-3">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          maxLength={20}
          className="w-full px-3 py-2 rounded border text-base font-mono font-bold uppercase tracking-wider"
          style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)", color: "var(--text)" }}
        />
        <div className="flex flex-wrap gap-1.5 mt-2">
          {SAMPLES.map((s) => (
            <button
              key={s}
              onClick={() => setWord(s)}
              className="text-[10px] font-bold px-2 py-1 rounded border"
              style={{ background: "var(--bg-card)", color: "var(--text)", borderColor: "var(--border-strong)", fontFamily: "var(--font-display)" }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div
          className="rounded-lg p-2"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Letters ({n} total)
          </p>
          <div className="flex flex-wrap gap-1.5">
            {groups.map((g) => (
              <span
                key={g.letter}
                className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                style={{
                  background: g.count > 1 ? "var(--yellow-light)" : "var(--accent-light)",
                  color: g.count > 1 ? "var(--yellow)" : "var(--text)",
                  border: `1px solid ${g.count > 1 ? "var(--yellow-border)" : "var(--accent-border)"}`,
                }}
              >
                {g.letter} × {g.count}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-lg p-3"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
            Distinct arrangements
          </p>
          {hasRepeats ? (
            <p className="text-sm font-mono" style={{ color: "var(--green-dark)" }}>
              {n}! / ({groups.filter((g) => g.count > 1).map((g) => `${g.count}!`).join(" · ")}) ={" "}
              <strong className="text-lg">{fmt(distinct)}</strong>
            </p>
          ) : (
            <p className="text-sm font-mono" style={{ color: "var(--green-dark)" }}>
              {n}! = <strong className="text-lg">{fmt(distinct)}</strong> &nbsp;(all letters distinct)
            </p>
          )}
        </div>
      </div>
    </WidgetShell>
  );
}
