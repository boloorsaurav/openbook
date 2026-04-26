"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const DIVISORS = [3, 7, 9, 11];

function powerMod(base: number, exp: number, mod: number) {
  let r = 1;
  for (let i = 0; i < exp; i++) r = (r * base) % mod;
  return r;
}

const NOTES: Record<number, { color: string; bg: string; border: string; text: string }> = {
  3: {
    color: "var(--green-dark)",
    bg: "var(--green-light)",
    border: "var(--green-border)",
    text: "All powers of 10 leave remainder 1 when divided by 3 — same pattern as 9. So divisibility by 3 also follows from the digit-sum.",
  },
  9: {
    color: "var(--green-dark)",
    bg: "var(--green-light)",
    border: "var(--green-border)",
    text: "All 1s. Every digit's contribution mod 9 equals the digit itself. That's why the digit sum gives the remainder mod 9 — the digit-sum rule.",
  },
  11: {
    color: "var(--yellow)",
    bg: "var(--yellow-light)",
    border: "var(--yellow-border)",
    text: "Alternates 1, 10, 1, 10… Note: 10 ≡ −1 (mod 11), so this is really 1, −1, 1, −1. That's why divisibility by 11 uses the alternating sum of digits.",
  },
  7: {
    color: "var(--text)",
    bg: "var(--bg-sidebar)",
    border: "var(--border)",
    text: "No clean pattern. Powers of 10 mod 7 cycle through 1, 3, 2, 6, 4, 5 before repeating — which is why there's no simple digit-sum trick for 7.",
  },
};

export default function ModPatternVisualizer() {
  const [divisor, setDivisor] = useState(9);
  const [num, setNum] = useState(427);

  const note = NOTES[divisor];
  const powers = [0, 1, 2, 3, 4, 5].map((e) => ({ e, val: powerMod(10, e, divisor) }));

  const digits = num.toString().split("").map(Number);
  const breakdown = digits.map((d, i) => {
    const p = digits.length - 1 - i;
    const pow = powerMod(10, p, divisor);
    return { d, p, pow, contrib: d * pow };
  });
  const sumContrib = breakdown.reduce((acc, t) => acc + t.contrib, 0);
  const remainder = num % divisor;

  return (
    <WidgetShell label="Interactive · Mod Pattern Visualizer" badge="why digit-sum works">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Why does adding digits tell you about divisibility by 9? Because every power of 10 has the same remainder mod 9.
        Pick a divisor and watch the pattern.
      </p>

      {/* Divisor picker */}
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Divide by
        </p>
        <div className="flex gap-2 flex-wrap">
          {DIVISORS.map((d) => {
            const active = divisor === d;
            return (
              <button
                key={d}
                onClick={() => setDivisor(d)}
                className="text-xs font-bold px-3 py-1.5 rounded-lg border"
                style={{
                  background: active ? "var(--accent)" : "var(--bg-card)",
                  color: active ? "var(--bg-card)" : "var(--text)",
                  borderColor: active ? "var(--accent)" : "var(--border-strong)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      {/* Powers of 10 mod divisor */}
      <div className="mb-3">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          10<sup>k</sup> mod {divisor}
        </p>
        <div className="grid grid-cols-6 gap-1.5">
          {powers.map(({ e, val }) => {
            let bg = "var(--bg-sidebar)";
            let color = "var(--text)";
            if (divisor === 9 || divisor === 3) {
              bg = "var(--green-light)";
              color = "var(--green-dark)";
            } else if (divisor === 11) {
              if (val === 1) {
                bg = "var(--green-light)";
                color = "var(--green-dark)";
              } else {
                bg = "var(--yellow-light)";
                color = "var(--yellow)";
              }
            }
            return (
              <div
                key={e}
                className="rounded-lg py-2 text-center"
                style={{ background: bg, border: "1.5px solid var(--border)" }}
              >
                <p className="text-[9px] font-mono" style={{ color: "var(--text-muted)" }}>
                  10<sup>{e}</sup>
                </p>
                <p className="text-base font-extrabold" style={{ color, fontFamily: "var(--font-display)" }}>
                  {val}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className="mt-2 rounded-lg px-3 py-2"
          style={{ background: note.bg, border: `1.5px solid ${note.border}` }}
        >
          <p className="text-[11px]" style={{ color: note.color }}>
            {note.text}
          </p>
        </div>
      </div>

      {/* Apply to a number */}
      <div className="mb-2 mt-4">
        <label className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold w-16 shrink-0" style={{ color: "var(--text-muted)" }}>
            Number
          </span>
          <input
            type="range"
            min={10}
            max={9999}
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
            className="flex-1"
          />
          <input
            type="number"
            min={1}
            max={9999}
            value={num}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v >= 1 && v <= 9999) setNum(v);
            }}
            className="w-20 text-center text-sm font-bold border rounded px-1 py-0.5"
            style={{ borderColor: "var(--border-strong)", color: "var(--text)", background: "transparent" }}
          />
        </label>
        <div
          className="rounded-lg px-3 py-2 font-mono text-[11px] leading-relaxed"
          style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}
        >
          {breakdown.map(({ d, p, pow }, i) => (
            <span key={i}>
              {i > 0 && " + "}
              <span style={{ color: "var(--text)" }}>{d}</span>
              <span style={{ color: "var(--text-muted)" }}>
                ×10<sup>{p}</sup>
              </span>
              <span style={{ color: "var(--accent)" }}> ≡ {d}×{pow} = {d * pow}</span>
            </span>
          ))}
        </div>
        <div
          className="rounded-lg px-3 py-2 mt-2"
          style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
        >
          <p className="text-xs font-mono" style={{ color: "var(--green-dark)" }}>
            Sum of contributions = {sumContrib} → <strong>{num} mod {divisor} = {remainder}</strong>
            {remainder === 0 && " ✓ divisible"}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
