"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Op = "A" | "B" | "AunionB" | "AintersectB" | "AminusB" | "BminusA" | "Acomplement" | "BothComplement";
type Region = "onlyA" | "both" | "onlyB" | "outside";

const A = [1, 2, 3, 4, 5];
const B = [4, 5, 6, 7, 8];
const U = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const onlyA = A.filter((x) => !B.includes(x));
const onlyB = B.filter((x) => !A.includes(x));
const both = A.filter((x) => B.includes(x));
const outside = U.filter((x) => !A.includes(x) && !B.includes(x));

const HIGHLIGHTS: Record<
  Op,
  { regions: Region[]; label: string; result: number[]; notation: string }
> = {
  A: { regions: ["onlyA", "both"], label: "Set A", result: A, notation: "A" },
  B: { regions: ["onlyB", "both"], label: "Set B", result: B, notation: "B" },
  AunionB: {
    regions: ["onlyA", "both", "onlyB"],
    label: "Union (everything in A or B or both)",
    result: [...new Set([...A, ...B])].sort((a, b) => a - b),
    notation: "A ∪ B",
  },
  AintersectB: {
    regions: ["both"],
    label: "Intersection (in both A and B)",
    result: both,
    notation: "A ∩ B",
  },
  AminusB: {
    regions: ["onlyA"],
    label: "Difference (in A but not in B)",
    result: onlyA,
    notation: "A − B",
  },
  BminusA: {
    regions: ["onlyB"],
    label: "Difference (in B but not in A)",
    result: onlyB,
    notation: "B − A",
  },
  Acomplement: {
    regions: ["onlyB", "outside"],
    label: "Complement of A (everything outside A)",
    result: U.filter((x) => !A.includes(x)),
    notation: "A′",
  },
  BothComplement: {
    regions: ["outside"],
    label: "Outside both (De Morgan: A′ ∩ B′)",
    result: outside,
    notation: "(A ∪ B)′",
  },
};

const OPS: { id: Op; label: string }[] = [
  { id: "A", label: "A" },
  { id: "B", label: "B" },
  { id: "AunionB", label: "A ∪ B" },
  { id: "AintersectB", label: "A ∩ B" },
  { id: "AminusB", label: "A − B" },
  { id: "BminusA", label: "B − A" },
  { id: "Acomplement", label: "A′" },
  { id: "BothComplement", label: "(A ∪ B)′" },
];

export default function VennDiagramExplorer() {
  const [op, setOp] = useState<Op>("AunionB");
  const h = HIGHLIGHTS[op];
  const lit = (r: Region) => h.regions.includes(r);

  return (
    <WidgetShell label="Interactive · Venn Diagram" badge="set operations">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick an operation. The Venn diagram lights up which elements belong to the result, and the equation
        below shows the answer.
      </p>

      {/* SVG Venn diagram */}
      <div
        className="rounded-lg p-3 mb-4 flex justify-center"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox="0 0 360 220" width="100%" style={{ maxWidth: 420 }}>
          {/* Universal set rectangle */}
          <rect
            x="10"
            y="10"
            width="340"
            height="200"
            fill={lit("outside") ? "var(--green-light)" : "var(--bg-card)"}
            stroke="var(--text-muted)"
            strokeWidth="1.5"
            strokeDasharray="4,3"
          />
          <text x="22" y="30" fontSize="13" fontWeight="bold" fill="var(--text-muted)" fontFamily="sans-serif">
            U
          </text>

          <defs>
            <clipPath id="venn-cA">
              <circle cx="140" cy="115" r="78" />
            </clipPath>
            <clipPath id="venn-cB">
              <circle cx="220" cy="115" r="78" />
            </clipPath>
          </defs>

          {/* Only A (clipped: A but not B) */}
          {lit("onlyA") && (
            <g clipPath="url(#venn-cA)">
              <rect x="0" y="0" width="360" height="220" fill="var(--green-light)" />
              <circle cx="220" cy="115" r="78" fill="var(--bg-card)" />
            </g>
          )}
          {/* Only B */}
          {lit("onlyB") && (
            <g clipPath="url(#venn-cB)">
              <rect x="0" y="0" width="360" height="220" fill="var(--green-light)" />
              <circle cx="140" cy="115" r="78" fill="var(--bg-card)" />
            </g>
          )}
          {/* Intersection */}
          {lit("both") && (
            <g clipPath="url(#venn-cA)">
              <circle cx="220" cy="115" r="78" fill="var(--green-light)" />
            </g>
          )}

          {/* Circle outlines on top */}
          <circle cx="140" cy="115" r="78" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
          <circle cx="220" cy="115" r="78" fill="none" stroke="var(--accent)" strokeWidth="2.5" />

          {/* Set labels */}
          <text x="82" y="48" fontSize="15" fontWeight="bold" fill="var(--accent)" fontFamily="sans-serif">A</text>
          <text x="270" y="48" fontSize="15" fontWeight="bold" fill="var(--accent)" fontFamily="sans-serif">B</text>

          {/* Elements — only-A region */}
          {onlyA.map((el, i) => (
            <text
              key={`a-${el}`}
              x={85 + (i % 2) * 20}
              y={95 + Math.floor(i / 2) * 24}
              fontSize="13"
              fontWeight={lit("onlyA") ? "bold" : "normal"}
              fill={lit("onlyA") ? "var(--green-dark)" : "var(--text)"}
              fontFamily="sans-serif"
            >
              {el}
            </text>
          ))}
          {/* Intersection */}
          {both.map((el, i) => (
            <text
              key={`ab-${el}`}
              x={172 + i * 18}
              y={120}
              fontSize="13"
              fontWeight={lit("both") ? "bold" : "normal"}
              fill={lit("both") ? "var(--green-dark)" : "var(--text)"}
              fontFamily="sans-serif"
            >
              {el}
            </text>
          ))}
          {/* Only-B region */}
          {onlyB.map((el, i) => (
            <text
              key={`b-${el}`}
              x={245 + (i % 2) * 20}
              y={95 + Math.floor(i / 2) * 24}
              fontSize="13"
              fontWeight={lit("onlyB") ? "bold" : "normal"}
              fill={lit("onlyB") ? "var(--green-dark)" : "var(--text)"}
              fontFamily="sans-serif"
            >
              {el}
            </text>
          ))}
          {/* Outside */}
          {outside.map((el, i) => (
            <text
              key={`out-${el}`}
              x={300 + i * 20}
              y={200}
              fontSize="13"
              fontWeight={lit("outside") ? "bold" : "normal"}
              fill={lit("outside") ? "var(--green-dark)" : "var(--text-muted)"}
              fontFamily="sans-serif"
            >
              {el}
            </text>
          ))}
        </svg>
      </div>

      {/* Operation buttons */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {OPS.map((o) => (
          <button
            key={o.id}
            onClick={() => setOp(o.id)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: op === o.id ? "var(--accent)" : "transparent",
              color: op === o.id ? "var(--bg-card)" : "var(--text-muted)",
              borderColor: op === o.id ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Result */}
      <div
        className="rounded-lg p-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          {h.label}
        </p>
        <p className="text-base font-bold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
          {h.notation} = {`{ ${h.result.join(", ")} }`}
        </p>
        <p className="text-[11px] mt-1" style={{ color: "var(--green-dark)" }}>
          n({h.notation}) = {h.result.length}
        </p>
      </div>

      {/* Givens */}
      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div
          className="rounded p-2"
          style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <strong style={{ color: "var(--text)" }}>U</strong> = {`{${U.join(",")}}`}
        </div>
        <div
          className="rounded p-2"
          style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <strong style={{ color: "var(--text)" }}>A</strong> = {`{${A.join(",")}}`}
        </div>
        <div
          className="rounded p-2"
          style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          <strong style={{ color: "var(--text)" }}>B</strong> = {`{${B.join(",")}}`}
        </div>
      </div>
    </WidgetShell>
  );
}
