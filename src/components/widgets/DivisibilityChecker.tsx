"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Rule = 9 | 11;

function checkBy9(n: number): { steps: string[]; remainder: number } {
  const steps: string[] = [];
  let current = n;
  while (current >= 10) {
    const digits = String(current).split("").map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    steps.push(`Digits of ${current}: ${digits.join(" + ")} = ${sum}`);
    current = sum;
  }
  steps.push(`Single digit: ${current} → remainder when divided by 9 is ${current === 9 ? 0 : current}`);
  return { steps, remainder: current === 9 ? 0 : current };
}

function checkBy11(n: number): { steps: string[]; remainder: number } {
  const digits = String(n).split("").map(Number).reverse(); // units first
  const oddPlaces: number[] = [];
  const evenPlaces: number[] = [];
  digits.forEach((d, i) => {
    if (i % 2 === 0) oddPlaces.push(d);
    else evenPlaces.push(d);
  });
  const oddSum = oddPlaces.reduce((a, b) => a + b, 0);
  const evenSum = evenPlaces.reduce((a, b) => a + b, 0);
  const diff = Math.abs(oddSum - evenSum);
  const steps = [
    `Digits from right: ${String(n).split("").reverse().join(" ")}`,
    `Odd positions (units, hundreds, …): ${oddPlaces.join(" + ")} = ${oddSum}`,
    `Even positions (tens, thousands, …): ${evenPlaces.join(" + ")} = ${evenSum}`,
    `Difference: |${oddSum} − ${evenSum}| = ${diff}`,
    diff === 0 || diff % 11 === 0
      ? `${diff} is 0 or divisible by 11 ✓`
      : `${diff} is not 0 or divisible by 11 ✗`,
  ];
  return { steps, remainder: diff % 11 };
}

export default function DivisibilityChecker() {
  const [input, setInput] = useState("7309");
  const [rule, setRule] = useState<Rule>(9);

  const n = parseInt(input.replace(/\D/g, ""), 10) || 0;
  const valid = n >= 1 && n <= 9999999;
  const result9 = valid ? checkBy9(n) : null;
  const result11 = valid ? checkBy11(n) : null;
  const activeResult = rule === 9 ? result9 : result11;
  const isDivisible = activeResult
    ? activeResult.remainder === 0
    : false;

  return (
    <WidgetShell label="Divisibility Checker" badge="Rules for 9 & 11">
      {/* Input */}
      <div className="flex items-center gap-3 mb-5">
        <label className="text-xs font-bold shrink-0" style={{ color: "var(--text-muted)" }}>
          Enter a number
        </label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={7}
          value={input}
          onChange={(e) => setInput(e.target.value.replace(/\D/g, ""))}
          className="flex-1 text-center text-lg font-extrabold border rounded-lg px-3 py-2"
          style={{
            borderColor: "var(--border-strong)",
            color: "var(--text)",
            background: "transparent",
            fontFamily: "var(--font-display)",
          }}
        />
      </div>

      {/* Rule toggle */}
      <div className="flex gap-2 mb-5">
        {([9, 11] as Rule[]).map((r) => (
          <button
            key={r}
            onClick={() => setRule(r)}
            className="flex-1 py-2 rounded-lg text-sm font-bold border transition-all"
            style={{
              borderColor: rule === r ? "var(--accent)" : "var(--border-strong)",
              background: rule === r ? "var(--accent)" : "transparent",
              color: rule === r ? "#fff" : "var(--text-muted)",
            }}
          >
            Rule for {r}
          </button>
        ))}
      </div>

      {/* Result banner */}
      {valid && activeResult && (
        <div
          className="rounded-lg px-4 py-3 text-center mb-5"
          style={{
            background: isDivisible ? "var(--green-light)" : "var(--red-light)",
            border: `1.5px solid ${isDivisible ? "var(--green-border)" : "var(--red-border)"}`,
          }}
        >
          <p
            className="text-sm font-bold"
            style={{ color: isDivisible ? "var(--green-dark)" : "var(--red-dark)" }}
          >
            {n} is{isDivisible ? "" : " NOT"} divisible by {rule}
          </p>
        </div>
      )}

      {/* Steps */}
      {valid && activeResult && (
        <div className="space-y-2">
          <p
            className="text-[10px] font-bold uppercase tracking-wider mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            Step-by-step
          </p>
          {activeResult.steps.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-2 px-3 py-2 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold w-4 shrink-0 mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                {i + 1}
              </span>
              <span className="text-xs" style={{ color: "var(--text)" }}>
                {s}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Rule summary */}
      <div
        className="mt-5 rounded-lg px-4 py-3"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
          The Rule
        </p>
        <p className="text-xs" style={{ color: "var(--text)" }}>
          {rule === 9
            ? "Keep adding all the digits until you reach a single digit. If it's 9, the number is divisible by 9. Otherwise, that single digit is the remainder."
            : "Find the sum of digits in odd positions (from the right) and the sum in even positions. If their difference is 0 or divisible by 11, the number is divisible by 11."}
        </p>
      </div>
    </WidgetShell>
  );
}
