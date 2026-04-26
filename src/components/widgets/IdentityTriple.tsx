"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Mode = "sum-sq" | "diff-sq" | "diff-of-sq";

const MODES: { id: Mode; label: string; identity: string }[] = [
  { id: "sum-sq", label: "(a + b)²", identity: "(a + b)² = a² + 2ab + b²" },
  { id: "diff-sq", label: "(a − b)²", identity: "(a − b)² = a² − 2ab + b²" },
  { id: "diff-of-sq", label: "(a + b)(a − b)", identity: "(a + b)(a − b) = a² − b²" },
];

export default function IdentityTriple() {
  const [mode, setMode] = useState<Mode>("sum-sq");
  const [a, setA] = useState(5);
  const [b, setB] = useState(2);
  const safeB = Math.min(b, a - 1); // for difference modes, b < a

  const a2 = a * a;
  const b2 = b * b;
  const ab = a * safeB;

  const current = MODES.find((m) => m.id === mode)!;

  // Computed result for current mode
  let lhs = "";
  let rhsExpanded = "";
  let value = 0;
  if (mode === "sum-sq") {
    lhs = `(${a} + ${b})²`;
    value = (a + b) * (a + b);
    rhsExpanded = `${a2} + ${2 * a * b} + ${b2} = ${value}`;
  } else if (mode === "diff-sq") {
    lhs = `(${a} − ${safeB})²`;
    value = (a - safeB) * (a - safeB);
    rhsExpanded = `${a2} − ${2 * ab} + ${safeB * safeB} = ${value}`;
  } else {
    lhs = `(${a} + ${safeB})(${a} − ${safeB})`;
    value = a2 - safeB * safeB;
    rhsExpanded = `${a2} − ${safeB * safeB} = ${value}`;
  }

  return (
    <WidgetShell label="Interactive · Identity Triple" badge="visual proofs">
      {/* Mode tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {MODES.map((m) => {
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "var(--bg-card)" : "var(--text-muted)",
                borderColor: active ? "var(--accent)" : "var(--border-strong)",
                fontFamily: "var(--font-display)",
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Sliders */}
      <div className="space-y-3 mb-4">
        <label className="flex items-center gap-3">
          <span className="text-sm font-extrabold w-5 text-center shrink-0" style={{ color: "var(--green)", fontFamily: "var(--font-display)" }}>
            a
          </span>
          <input type="range" min={2} max={10} value={a} onChange={(e) => setA(Number(e.target.value))} className="flex-1" style={{ accentColor: "var(--green)" }} />
          <span className="w-6 text-right text-sm font-extrabold" style={{ color: "var(--green)", fontFamily: "var(--font-display)" }}>
            {a}
          </span>
        </label>
        <label className="flex items-center gap-3">
          <span className="text-sm font-extrabold w-5 text-center shrink-0" style={{ color: "var(--accent-border)", fontFamily: "var(--font-display)" }}>
            b
          </span>
          <input
            type="range"
            min={1}
            max={mode === "sum-sq" ? 10 : Math.max(1, a - 1)}
            value={mode === "sum-sq" ? b : safeB}
            onChange={(e) => setB(Number(e.target.value))}
            className="flex-1"
            style={{ accentColor: "var(--accent-border)" }}
          />
          <span className="w-6 text-right text-sm font-extrabold" style={{ color: "var(--accent-border)", fontFamily: "var(--font-display)" }}>
            {mode === "sum-sq" ? b : safeB}
          </span>
        </label>
      </div>

      {/* Visual area model — different per mode */}
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Geometric proof
        </p>
        {mode === "sum-sq" && <SumSquareVisual a={a} b={b} />}
        {mode === "diff-sq" && <DiffSquareVisual a={a} b={safeB} />}
        {mode === "diff-of-sq" && <DiffOfSquaresVisual a={a} b={safeB} />}
      </div>

      {/* Identity equation */}
      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Identity
        </p>
        <p className="text-base font-extrabold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
          {current.identity}
        </p>
        <p className="text-sm font-bold mt-2 font-mono" style={{ color: "var(--green-dark)" }}>
          {lhs} = {rhsExpanded}
        </p>
      </div>
    </WidgetShell>
  );
}

/* ──────────── Visual sub-components ──────────── */

function SumSquareVisual({ a, b }: { a: number; b: number }) {
  const total = a + b;
  const aPct = (a / total) * 100;
  const bPct = (b / total) * 100;
  return (
    <div
      className="w-full rounded-lg overflow-hidden border"
      style={{ borderColor: "var(--border-strong)", aspectRatio: "1" }}
    >
      <div className="flex" style={{ height: `${aPct}%` }}>
        <div className="flex items-center justify-center text-xs font-bold" style={{ width: `${aPct}%`, background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
          <span style={{ fontFamily: "var(--font-display)" }}>a²={a * a}</span>
        </div>
        <div className="flex-1 flex items-center justify-center text-xs font-bold" style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)", color: "var(--yellow)" }}>
          <span style={{ fontFamily: "var(--font-display)" }}>ab={a * b}</span>
        </div>
      </div>
      <div className="flex" style={{ height: `${bPct}%` }}>
        <div className="flex items-center justify-center text-xs font-bold" style={{ width: `${aPct}%`, background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)", color: "var(--yellow)" }}>
          <span style={{ fontFamily: "var(--font-display)" }}>ab={a * b}</span>
        </div>
        <div className="flex-1 flex items-center justify-center text-xs font-bold" style={{ background: "var(--accent-light)", border: "1.5px solid var(--border-strong)", color: "var(--text)" }}>
          <span style={{ fontFamily: "var(--font-display)" }}>b²={b * b}</span>
        </div>
      </div>
    </div>
  );
}

function DiffSquareVisual({ a, b }: { a: number; b: number }) {
  // Take a×a square. Subtract right strip (ab) and bottom strip (ab).
  // Their overlap (b²) was subtracted twice — add back. The remaining (a-b)² is what's left.
  const aMinusB = a - b;
  const innerPct = (aMinusB / a) * 100;
  const stripPct = (b / a) * 100;
  return (
    <div className="space-y-2">
      <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
        Start with a×a, subtract two ab strips. They overlap in a b² corner — add it back.
      </p>
      <div
        className="w-full rounded-lg overflow-hidden border relative"
        style={{ borderColor: "var(--border-strong)", aspectRatio: "1" }}
      >
        {/* (a-b)² inner top-left — the answer */}
        <div
          className="absolute flex items-center justify-center text-xs font-bold"
          style={{
            top: 0,
            left: 0,
            width: `${innerPct}%`,
            height: `${innerPct}%`,
            background: "var(--green-light)",
            border: "1.5px solid var(--green-border)",
            color: "var(--green-dark)",
          }}
        >
          <span style={{ fontFamily: "var(--font-display)" }}>(a−b)²={aMinusB * aMinusB}</span>
        </div>
        {/* Right strip — subtracted */}
        <div
          className="absolute flex items-center justify-center text-[10px] font-bold"
          style={{
            top: 0,
            right: 0,
            width: `${stripPct}%`,
            height: `${innerPct}%`,
            background: "var(--red-light)",
            border: "1.5px solid var(--red-border)",
            color: "var(--red-dark)",
          }}
        >
          −ab
        </div>
        {/* Bottom strip — subtracted */}
        <div
          className="absolute flex items-center justify-center text-[10px] font-bold"
          style={{
            bottom: 0,
            left: 0,
            width: `${innerPct}%`,
            height: `${stripPct}%`,
            background: "var(--red-light)",
            border: "1.5px solid var(--red-border)",
            color: "var(--red-dark)",
          }}
        >
          −ab
        </div>
        {/* Bottom-right corner — added back */}
        <div
          className="absolute flex items-center justify-center text-[10px] font-bold"
          style={{
            bottom: 0,
            right: 0,
            width: `${stripPct}%`,
            height: `${stripPct}%`,
            background: "var(--yellow-light)",
            border: "1.5px solid var(--yellow-border)",
            color: "var(--yellow)",
          }}
        >
          +b²
        </div>
      </div>
    </div>
  );
}

function DiffOfSquaresVisual({ a, b }: { a: number; b: number }) {
  // Show a² with b² cut out from corner — remaining L-shape is a²-b².
  // Side equation: this L-shape has the same area as an (a+b) × (a-b) rectangle.
  const innerPct = (b / a) * 100;
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Left: a² with b² cut out */}
      <div className="flex flex-col gap-1">
        <p className="text-[10px] text-center" style={{ color: "var(--text-muted)" }}>
          a² − b² (cut a corner out)
        </p>
        <div
          className="rounded-lg overflow-hidden border relative"
          style={{ borderColor: "var(--border-strong)", aspectRatio: "1" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--green-light)", color: "var(--green-dark)" }}
          >
            <span style={{ fontFamily: "var(--font-display)" }}>a²={a * a}</span>
          </div>
          <div
            className="absolute flex items-center justify-center text-[10px] font-bold"
            style={{
              bottom: 0,
              right: 0,
              width: `${innerPct}%`,
              height: `${innerPct}%`,
              background: "var(--bg-card)",
              border: "1.5px dashed var(--red)",
              color: "var(--red-dark)",
            }}
          >
            −b²
          </div>
        </div>
        <p className="text-[11px] text-center font-bold mt-1" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
          = {a * a - b * b}
        </p>
      </div>

      {/* Right: (a+b) × (a-b) rectangle */}
      <div className="flex flex-col gap-1">
        <p className="text-[10px] text-center" style={{ color: "var(--text-muted)" }}>
          (a+b) × (a−b) (rearranged)
        </p>
        <div
          className="rounded-lg overflow-hidden border flex items-center justify-center text-xs font-bold"
          style={{
            borderColor: "var(--green-border)",
            background: "var(--green-light)",
            color: "var(--green-dark)",
            aspectRatio: `${a + b} / ${a - b}`,
            minHeight: 60,
          }}
        >
          <span style={{ fontFamily: "var(--font-display)" }}>{a + b} × {a - b}</span>
        </div>
        <p className="text-[11px] text-center font-bold mt-1" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
          = {(a + b) * (a - b)}
        </p>
      </div>
    </div>
  );
}
