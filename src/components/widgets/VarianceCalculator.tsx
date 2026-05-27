"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const PRESETS = [
  { label: "{6, 7, 10, 12, 13, 4, 8, 12}", data: [6, 7, 10, 12, 13, 4, 8, 12] },
  { label: "{2, 4, 4, 4, 5, 5, 7, 9}", data: [2, 4, 4, 4, 5, 5, 7, 9] },
  { label: "{10, 20, 30, 40, 50}", data: [10, 20, 30, 40, 50] },
];

function fmt(v: number): string {
  if (!isFinite(v)) return "—";
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(3).replace(/\.?0+$/, "");
}

export default function VarianceCalculator() {
  const [idx, setIdx] = useState(0);
  const xs = PRESETS[idx].data;
  const n = xs.length;
  const sum = xs.reduce((s, x) => s + x, 0);
  const mean = sum / n;
  const devs = xs.map((x) => x - mean);
  const sqDevs = devs.map((d) => d * d);
  const sumSqDevs = sqDevs.reduce((s, x) => s + x, 0);
  const variance = sumSqDevs / n;
  const sd = Math.sqrt(variance);

  return (
    <WidgetShell label="Variance · Step by Step" badge="(xᵢ − x̄)² → σ²">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Variance is the average of squared deviations from the mean. Each row shows the deviation
        and its square so you can see exactly where the formula comes from.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((p, i) => (
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
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg p-2 mb-3" style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}>
        <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Step 1 — mean</p>
        <p className="text-xs font-mono" style={{ color: "var(--accent)" }}>
          x̄ = ({xs.join(" + ")}) / {n} = {sum} / {n} = {fmt(mean)}
        </p>
      </div>

      <div className="rounded-lg p-3 mb-3 overflow-x-auto" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
        <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)" }}>Steps 2 & 3 — deviation and squared deviation</p>
        <table className="w-full text-[11px]" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-strong)" }}>
              <th className="px-2 py-1 text-right" style={{ color: "var(--text-muted)" }}>xᵢ</th>
              <th className="px-2 py-1 text-right" style={{ color: "var(--yellow)" }}>xᵢ − x̄</th>
              <th className="px-2 py-1 text-right" style={{ color: "var(--green-dark)" }}>(xᵢ − x̄)²</th>
            </tr>
          </thead>
          <tbody>
            {xs.map((x, i) => (
              <tr key={i} style={{ borderBottom: i < xs.length - 1 ? "1px solid var(--border)" : "none" }}>
                <td className="px-2 py-1 text-right font-mono" style={{ color: "var(--text)" }}>{x}</td>
                <td className="px-2 py-1 text-right font-mono" style={{ color: "var(--yellow)" }}>{fmt(devs[i])}</td>
                <td className="px-2 py-1 text-right font-mono font-bold" style={{ color: "var(--green-dark)" }}>{fmt(sqDevs[i])}</td>
              </tr>
            ))}
            <tr style={{ borderTop: "1px solid var(--border-strong)" }}>
              <td className="px-2 py-1 text-right text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Total</td>
              <td className="px-2 py-1 text-right font-mono" style={{ color: "var(--yellow)" }}>{fmt(devs.reduce((s, d) => s + d, 0))}</td>
              <td className="px-2 py-1 text-right font-mono font-extrabold" style={{ color: "var(--green-dark)" }}>{fmt(sumSqDevs)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg p-2" style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--green-dark)" }}>Variance (σ²)</p>
          <p className="text-xs font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            σ² = {fmt(sumSqDevs)} / {n} = {fmt(variance)}
          </p>
        </div>
        <div className="rounded-lg p-2" style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--accent)" }}>Std Deviation (σ)</p>
          <p className="text-xs font-mono font-bold" style={{ color: "var(--accent)" }}>
            σ = √{fmt(variance)} = {fmt(sd)}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
