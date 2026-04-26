"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const ROMAN_MAP: [number, string][] = [
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

function toRoman(n: number): string {
  let r = "";
  let rem = n;
  for (const [v, s] of ROMAN_MAP) {
    while (rem >= v) {
      r += s;
      rem -= v;
    }
  }
  return r;
}

function tallyGroups(n: number): number[] {
  const groups: number[] = [];
  const fives = Math.floor(n / 5);
  const rem = n % 5;
  for (let i = 0; i < fives; i++) groups.push(5);
  if (rem > 0) groups.push(rem);
  return groups;
}

export default function NumberSystemComparator() {
  const [n, setN] = useState(27);

  const groups = tallyGroups(n);
  const roman = toRoman(n);
  const hundreds = Math.floor(n / 100);
  const tens = Math.floor((n % 100) / 10);
  const ones = n % 10;
  const egyptianStampCount = hundreds + tens + ones;

  return (
    <WidgetShell label="Interactive · Number Systems" badge="same number, three ways">
      <div className="mb-5">
        <label className="flex items-center gap-3">
          <span className="text-xs font-bold w-16 shrink-0" style={{ color: "var(--text-muted)" }}>
            Number
          </span>
          <input
            type="range"
            min={1}
            max={399}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="flex-1"
          />
          <input
            type="number"
            min={1}
            max={399}
            value={n}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v >= 1 && v <= 399) setN(v);
            }}
            className="w-16 text-center text-sm font-bold border rounded px-1 py-0.5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text)", background: "transparent" }}
          />
        </label>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Tally */}
        <div
          className="rounded-lg p-3 flex flex-col"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
            Tally
          </p>
          <div className="flex-1 flex items-start flex-wrap gap-2 mb-2 min-h-[80px]">
            {groups.map((g, i) => (
              <div key={i} className="relative inline-flex" style={{ height: 26 }}>
                {Array.from({ length: g }).map((_, j) => (
                  <span
                    key={j}
                    className="inline-block"
                    style={{ width: 3, marginRight: 2, height: 26, background: "var(--text)" }}
                  />
                ))}
                {g === 5 && (
                  <span
                    className="absolute"
                    style={{
                      width: 26,
                      height: 2,
                      background: "var(--text)",
                      top: 12,
                      left: -2,
                      transform: "rotate(-22deg)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>{n}</strong> marks · grows endlessly
          </p>
        </div>

        {/* Roman */}
        <div
          className="rounded-lg p-3 flex flex-col"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
            Roman
          </p>
          <div className="flex-1 flex items-center justify-center min-h-[80px] px-1">
            <span
              className="font-bold tracking-widest break-all text-center"
              style={{
                fontSize: roman.length > 10 ? 14 : roman.length > 6 ? 18 : 22,
                color: "var(--text)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.2,
              }}
            >
              {roman}
            </span>
          </div>
          <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>{roman.length}</strong> symbols · landmarks I V X L C
          </p>
        </div>

        {/* Egyptian (rendered as shapes, no glyph fonts needed) */}
        <div
          className="rounded-lg p-3 flex flex-col"
          style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
            Egyptian
          </p>
          <div className="flex-1 flex flex-col gap-1.5 justify-center min-h-[80px]">
            {hundreds > 0 && (
              <div className="flex items-center gap-1 flex-wrap">
                {Array.from({ length: hundreds }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full border-2"
                    style={{ width: 12, height: 12, borderColor: "var(--text)", background: "transparent" }}
                  />
                ))}
                <span className="text-[9px] ml-1" style={{ color: "var(--text-muted)" }}>×100</span>
              </div>
            )}
            {tens > 0 && (
              <div className="flex items-center gap-1 flex-wrap">
                {Array.from({ length: tens }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      width: 10,
                      height: 6,
                      borderTop: "2px solid var(--text)",
                      borderLeft: "2px solid var(--text)",
                      borderRight: "2px solid var(--text)",
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                  />
                ))}
                <span className="text-[9px] ml-1" style={{ color: "var(--text-muted)" }}>×10</span>
              </div>
            )}
            {ones > 0 && (
              <div className="flex items-center gap-1 flex-wrap">
                {Array.from({ length: ones }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block"
                    style={{ width: 2, height: 14, background: "var(--text)" }}
                  />
                ))}
                <span className="text-[9px] ml-1" style={{ color: "var(--text-muted)" }}>×1</span>
              </div>
            )}
          </div>
          <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>{egyptianStampCount}</strong> stamps · powers of 10
          </p>
        </div>
      </div>

      {/* Insight */}
      <div
        className="mt-4 rounded-lg px-4 py-3"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[11px]" style={{ color: "var(--green-dark)" }}>
          <strong>Drag the slider to 99.</strong> Tally needs 99 marks. Roman needs 7 symbols (XCIX). Egyptian needs 27
          stamps. Now try 100 — Egyptian collapses to one stamp because 100 is a landmark; Roman stays neat (C). The next
          leap, place value, beats them all: 100 in three characters with no new symbols.
        </p>
      </div>
    </WidgetShell>
  );
}
