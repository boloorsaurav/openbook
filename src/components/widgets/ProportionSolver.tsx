"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Unknown = "a" | "b" | "c" | "d";

function gcd(x: number, y: number): number {
  return y === 0 ? x : gcd(y, x % y);
}

function simplify(p: number, q: number): string {
  if (q === 0) return "—";
  const g = gcd(Math.abs(Math.round(p)), Math.abs(Math.round(q)));
  if (g === 0) return `${p}:${q}`;
  return `${Math.round(p / g)} : ${Math.round(q / g)}`;
}

export default function ProportionSolver() {
  const [a, setA] = useState("6");
  const [b, setB] = useState("10");
  const [c, setC] = useState("18");
  const [unknown, setUnknown] = useState<Unknown>("d");

  const vals: Record<string, string> = { a, b, c, d: "?" };
  const parse = (s: string) => parseFloat(s);

  function solve(): { result: number | null; steps: string[] } {
    // a:b :: c:d  →  a*d = b*c  →  d = b*c/a
    const na = parse(a), nb = parse(b), nc = parse(c);
    switch (unknown) {
      case "d": {
        if (!na) return { result: null, steps: ["a cannot be 0"] };
        const d = (nb * nc) / na;
        return {
          result: d,
          steps: [
            `Set up: a : b :: c : d`,
            `Cross multiply: a × d = b × c`,
            `${na} × d = ${nb} × ${nc} = ${nb * nc}`,
            `d = ${nb * nc} ÷ ${na} = ${d.toFixed(2)}`,
          ],
        };
      }
      case "a": {
        const nd = parse(b); // using b field as d when a is unknown
        if (!nd) return { result: null, steps: [] };
        const res = (nb * nc) / nd;
        return {
          result: res,
          steps: [
            `Cross multiply: a × d = b × c`,
            `a × ${nd} = ${nb} × ${nc}`,
            `a = ${nb * nc} ÷ ${nd} = ${res.toFixed(2)}`,
          ],
        };
      }
      case "b": {
        if (!nc) return { result: null, steps: [] };
        const res = (na * parse(b)) / nc;
        return {
          result: res,
          steps: [
            `Cross multiply: a × d = b × c`,
            `${na} × ${parse(b)} = b × ${nc}`,
            `b = ${na * parse(b)} ÷ ${nc} = ${res.toFixed(2)}`,
          ],
        };
      }
      case "c": {
        if (!nb) return { result: null, steps: [] };
        const res = (na * parse(c)) / nb;
        return {
          result: res,
          steps: [
            `Cross multiply: a × d = b × c`,
            `${na} × ${parse(c)} = ${nb} × c`,
            `c = ${na * parse(c)} ÷ ${nb} = ${res.toFixed(2)}`,
          ],
        };
      }
    }
  }

  // Simple always-d mode to keep the widget focused
  const na = parse(a), nb = parse(b), nc = parse(c);
  const d = na && nb && nc ? (nb * nc) / na : null;
  const isValid = d !== null && isFinite(d);

  const steps = [
    "Proportion: a : b  ::  c : d",
    "Cross-multiplication rule: a × d = b × c",
    `${na} × d = ${nb} × ${nc}`,
    `d = ${nb * nc} ÷ ${na} = ${isValid ? d!.toFixed(2) : "—"}`,
  ];

  const ratio1 = simplify(na, nb);
  const ratio2 = isValid ? simplify(nc, d!) : "—";
  const proportional = ratio1 === ratio2;

  return (
    <WidgetShell label="Proportion Solver" badge="Cross Multiplication">
      {/* Proportion display: a : b :: c : ? */}
      <div className="flex items-center justify-center gap-1 mb-5 flex-wrap">
        {[
          { key: "a", val: a, setter: setA, color: "var(--green)" },
          { key: ":", val: null },
          { key: "b", val: b, setter: setB, color: "var(--accent-border)" },
          { key: "::", val: null },
          { key: "c", val: c, setter: setC, color: "var(--yellow)" },
          { key: ":", val: null },
          { key: "d", val: null },
        ].map((item) => {
          if (item.val === null && item.key !== "d") {
            return (
              <span key={item.key} className="text-lg font-bold" style={{ color: "var(--text-muted)" }}>
                {item.key}
              </span>
            );
          }
          if (item.key === "d") {
            return (
              <div
                key="d"
                className="w-14 h-10 rounded-lg flex items-center justify-center text-sm font-extrabold border-2"
                style={{
                  borderColor: isValid ? "var(--green-border)" : "var(--border-strong)",
                  background: isValid ? "var(--green-light)" : "var(--bg-sidebar)",
                  color: isValid ? "var(--green-dark)" : "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {isValid ? d!.toFixed(d! % 1 === 0 ? 0 : 2) : "?"}
              </div>
            );
          }
          return (
            <input
              key={item.key}
              type="number"
              min={0.1}
              step={1}
              value={item.val as string}
              onChange={(e) => item.setter!(e.target.value)}
              className="w-14 h-10 text-center text-sm font-extrabold border-2 rounded-lg"
              style={{
                borderColor: item.color,
                color: item.color,
                background: "transparent",
                fontFamily: "var(--font-display)",
              }}
            />
          );
        })}
      </div>

      {/* Proportionality check */}
      {isValid && (
        <div
          className="flex items-center justify-center gap-3 mb-5 rounded-lg px-4 py-2"
          style={{
            background: proportional ? "var(--green-light)" : "var(--red-light)",
            border: `1.5px solid ${proportional ? "var(--green-border)" : "var(--red-border)"}`,
          }}
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>
              a : b
            </p>
            <p className="text-sm font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
              {ratio1}
            </p>
          </div>
          <span className="text-lg font-bold" style={{ color: proportional ? "var(--green-dark)" : "var(--red-dark)" }}>
            {proportional ? "=" : "≠"}
          </span>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>
              c : d
            </p>
            <p className="text-sm font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
              {ratio2}
            </p>
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Working out d
        </p>
        {steps.map((s, i) => (
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
            <span className="text-xs font-mono" style={{ color: "var(--text)" }}>
              {s}
            </span>
          </div>
        ))}
      </div>

      {/* Rule of Three callout */}
      <div
        className="mt-5 rounded-lg px-4 py-3"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--yellow)" }}>
          Rule of Three (Trairasika)
        </p>
        <p className="text-xs" style={{ color: "var(--text)" }}>
          Given pramāṇa (a), phala (b), and ichchhā (c), the ichchhāphala is{" "}
          <strong>d = (b × c) ÷ a</strong>. Ancient Indian mathematicians used this to
          solve proportion problems in commerce and astronomy.
        </p>
      </div>
    </WidgetShell>
  );
}
