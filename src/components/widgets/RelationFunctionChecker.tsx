"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Relation = {
  label: string;
  pairs: [string, string][];
  hint: string;
};

const RELATIONS: Relation[] = [
  {
    label: "R₁ = {(1,2), (2,3), (3,4)}",
    pairs: [
      ["1", "2"],
      ["2", "3"],
      ["3", "4"],
    ],
    hint: "Each first element (1, 2, 3) appears exactly once.",
  },
  {
    label: "R₂ = {(1,2), (1,3), (2,4)}",
    pairs: [
      ["1", "2"],
      ["1", "3"],
      ["2", "4"],
    ],
    hint: "The first element 1 appears twice — it has two different images.",
  },
  {
    label: "R₃ = {(a,1), (b,1), (c,1)}",
    pairs: [
      ["a", "1"],
      ["b", "1"],
      ["c", "1"],
    ],
    hint: "Different first elements can share the same image — that's still a function.",
  },
  {
    label: "R₄ = {(2,5), (3,7), (3,7)}",
    pairs: [
      ["2", "5"],
      ["3", "7"],
      ["3", "7"],
    ],
    hint: "Duplicate pairs are ignored — what matters is whether any first element has two different images.",
  },
  {
    label: "R₅ = {(1,a), (2,b), (3,c), (1,d)}",
    pairs: [
      ["1", "a"],
      ["2", "b"],
      ["3", "c"],
      ["1", "d"],
    ],
    hint: "1 maps to both a and d — two different images.",
  },
];

function isFunction(pairs: [string, string][]): boolean {
  const seen = new Map<string, string>();
  for (const [a, b] of pairs) {
    if (seen.has(a) && seen.get(a) !== b) return false;
    seen.set(a, b);
  }
  return true;
}

export default function RelationFunctionChecker() {
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const r = RELATIONS[idx];
  const verdict = isFunction(r.pairs);
  const domain = Array.from(new Set(r.pairs.map((p) => p[0])));
  const range = Array.from(new Set(r.pairs.map((p) => p[1])));

  return (
    <WidgetShell label="Function Detector" badge="relation → is it a function?">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        A relation is a <strong>function</strong> when every element of the domain has exactly one image.
        Pick a relation and predict — then click <em>Check</em>.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {RELATIONS.map((rel, i) => (
          <button
            key={i}
            onClick={() => {
              setIdx(i);
              setRevealed(false);
            }}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: idx === i ? "var(--accent)" : "var(--bg-card)",
              color: idx === i ? "var(--bg-card)" : "var(--text)",
              borderColor: idx === i ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {rel.label}
          </button>
        ))}
      </div>

      {/* Arrow diagram */}
      <div
        className="rounded-lg p-4 mb-4"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox="0 0 320 200" className="w-full" style={{ maxHeight: 220 }}>
          {/* Domain column */}
          {domain.map((d, i) => {
            const y = 30 + i * (140 / Math.max(domain.length - 1, 1));
            return (
              <g key={"d" + d}>
                <circle cx={70} cy={y} r={18} fill="var(--accent-light)" stroke="var(--accent)" strokeWidth={1.5} />
                <text
                  x={70}
                  y={y + 5}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={700}
                  fill="var(--accent)"
                  fontFamily="var(--font-display)"
                >
                  {d}
                </text>
              </g>
            );
          })}
          {/* Range column */}
          {range.map((b, i) => {
            const y = 30 + i * (140 / Math.max(range.length - 1, 1));
            return (
              <g key={"r" + b}>
                <circle cx={250} cy={y} r={18} fill="var(--green-light)" stroke="var(--green-dark)" strokeWidth={1.5} />
                <text
                  x={250}
                  y={y + 5}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={700}
                  fill="var(--green-dark)"
                  fontFamily="var(--font-display)"
                >
                  {b}
                </text>
              </g>
            );
          })}
          {/* Arrows */}
          {r.pairs.map(([a, b], i) => {
            const ai = domain.indexOf(a);
            const bi = range.indexOf(b);
            const y1 = 30 + ai * (140 / Math.max(domain.length - 1, 1));
            const y2 = 30 + bi * (140 / Math.max(range.length - 1, 1));
            return (
              <line
                key={"arr" + i}
                x1={88}
                y1={y1}
                x2={232}
                y2={y2}
                stroke="var(--text-muted)"
                strokeWidth={1.5}
                markerEnd="url(#arrowhead)"
              />
            );
          })}
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="var(--text-muted)" />
            </marker>
          </defs>
          <text x={70} y={185} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--text-muted)">
            Domain
          </text>
          <text x={250} y={185} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--text-muted)">
            Range
          </text>
        </svg>
      </div>

      {!revealed ? (
        <div className="flex justify-center">
          <button onClick={() => setRevealed(true)} className="btn-primary">
            Check
          </button>
        </div>
      ) : (
        <div
          className="rounded-lg p-4"
          style={{
            background: verdict ? "var(--green-light)" : "var(--red-light)",
            border: `1.5px solid ${verdict ? "var(--green-border)" : "var(--red-border)"}`,
          }}
        >
          <p
            className="text-sm font-extrabold mb-1"
            style={{
              color: verdict ? "var(--green-dark)" : "var(--red-dark)",
              fontFamily: "var(--font-display)",
            }}
          >
            {verdict ? "✓ This is a function" : "✗ Not a function"}
          </p>
          <p className="text-xs" style={{ color: "var(--text)" }}>
            {r.hint}
          </p>
        </div>
      )}
    </WidgetShell>
  );
}
