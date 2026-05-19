"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Preset = {
  label: string;
  roster: string[];
  builder: string;
  finite: boolean;
};

const PRESETS: Preset[] = [
  {
    label: "Vowels",
    roster: ["a", "e", "i", "o", "u"],
    builder: "{ x : x is a vowel in the English alphabet }",
    finite: true,
  },
  {
    label: "Even numbers < 12",
    roster: ["2", "4", "6", "8", "10"],
    builder: "{ x : x is an even natural number less than 12 }",
    finite: true,
  },
  {
    label: "Primes < 20",
    roster: ["2", "3", "5", "7", "11", "13", "17", "19"],
    builder: "{ x : x is a prime number less than 20 }",
    finite: true,
  },
  {
    label: "Squares of 1–7",
    roster: ["1", "4", "9", "16", "25", "36", "49"],
    builder: "{ x : x = n² where n ∈ ℕ and 1 ≤ n ≤ 7 }",
    finite: true,
  },
  {
    label: "All natural numbers",
    roster: ["1", "2", "3", "4", "5", "…"],
    builder: "{ x : x ∈ ℕ }",
    finite: false,
  },
];

export default function SetRepresenter() {
  const [idx, setIdx] = useState(0);
  const p = PRESETS[idx];

  return (
    <WidgetShell label="Set Representations" badge="roster ↔ builder">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        The same set can be written two ways: list every element (roster form) or describe the rule
        (builder form). Pick a set and compare.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((preset, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: idx === i ? "var(--accent)" : "var(--bg-card)",
              color: idx === i ? "var(--bg-card)" : "var(--text)",
              borderColor: idx === i ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {/* Roster form */}
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--green-dark)" }}>
            Roster form (list every element)
          </p>
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-lg font-bold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
              {"{"}
            </span>
            {p.roster.map((el, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="inline-block px-2 py-0.5 rounded text-sm font-bold"
                  style={{
                    background: "var(--bg-card)",
                    color: "var(--green-dark)",
                    border: "1px solid var(--green-border)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {el}
                </span>
                {i < p.roster.length - 1 && <span style={{ color: "var(--green-dark)", margin: "0 4px" }}>,</span>}
              </span>
            ))}
            <span className="text-lg font-bold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
              {"}"}
            </span>
          </div>
        </div>

        {/* Builder form */}
        <div
          className="rounded-lg p-3"
          style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--yellow)" }}>
            Set-builder form (state the rule)
          </p>
          <p className="text-sm font-mono" style={{ color: "var(--text)" }}>
            {p.builder}
          </p>
        </div>

        {/* Cardinality */}
        <div
          className="rounded-lg p-3 text-center"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
            Cardinality and type
          </p>
          <p className="text-xl font-extrabold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
            {p.finite ? `n(Set) = ${p.roster.length - (p.roster.includes("…") ? 1 : 0)}` : "n(Set) = ∞"}
          </p>
          <p className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>
            {p.finite ? "Finite set" : "Infinite set — roster form must use … to indicate continuation"}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
