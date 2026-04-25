"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const MAX_STEP = 30;

function formatNum(n: number): string {
  if (n >= 1_000_000_000_000) return `${(n / 1_000_000_000_000).toFixed(1)} trillion`;
  if (n >= 1_000_000_000)     return `${(n / 1_000_000_000).toFixed(1)} billion`;
  if (n >= 1_000_000)         return `${(n / 1_000_000).toFixed(1)} million`;
  if (n >= 1_000)             return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

const TABLE_STEPS = [5, 10, 15, 20, 25, 30];

export default function GrowthComparison() {
  const [step, setStep] = useState(10);

  const linear = step * 100;
  const exponential = Math.pow(2, step);
  const ratio = Math.round(exponential / linear);

  const expWidth = Math.min(100, (Math.log2(exponential + 1) / MAX_STEP) * 100);
  const linWidth = Math.min(100, (linear / (MAX_STEP * 100)) * 100);

  return (
    <WidgetShell label="Growth Comparison" badge="Linear vs Exponential">

      {/* Stepper */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button className="btn-ghost"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step <= 1}>
          ←
        </button>
        <div className="text-center">
          <p className="text-3xl font-extrabold"
            style={{ color: "var(--text)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
            Step {step}
          </p>
          <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
            of {MAX_STEP}
          </p>
        </div>
        <button className="btn-primary"
          onClick={() => setStep((s) => Math.min(MAX_STEP, s + 1))}
          disabled={step >= MAX_STEP}>
          →
        </button>
      </div>

      {/* Bars */}
      <div className="space-y-5 mb-6">
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <div>
              <span className="text-xs font-bold" style={{ color: "var(--text)" }}>Linear</span>
              <span className="text-[10px] ml-2" style={{ color: "var(--text-muted)" }}>adds 100 each step</span>
            </div>
            <span className="text-sm font-extrabold"
              style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
              {formatNum(linear)}
            </span>
          </div>
          <div className="w-full rounded-full h-3" style={{ background: "var(--border)" }}>
            <div className="h-3 rounded-full transition-all duration-300"
              style={{ width: `${linWidth}%`, background: "var(--accent-border)" }} />
          </div>
          <p className="text-[10px] mt-1 font-mono" style={{ color: "var(--text-muted)" }}>
            100 × {step} = {linear.toLocaleString()}
          </p>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <div>
              <span className="text-xs font-bold" style={{ color: "var(--green-dark)" }}>Exponential</span>
              <span className="text-[10px] ml-2" style={{ color: "var(--text-muted)" }}>doubles each step</span>
            </div>
            <span className="text-sm font-extrabold"
              style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
              {formatNum(exponential)}
            </span>
          </div>
          <div className="w-full rounded-full h-3" style={{ background: "var(--border)" }}>
            <div className="h-3 rounded-full transition-all duration-300"
              style={{ width: `${expWidth}%`, background: "var(--green)" }} />
          </div>
          <p className="text-[10px] mt-1 font-mono" style={{ color: "var(--text-muted)" }}>
            2^{step} = {exponential.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-hidden mb-4"
        style={{ borderColor: "var(--border)" }}>
        <div className="grid grid-cols-3 px-3 py-2 text-[10px] font-bold uppercase tracking-wider"
          style={{ background: "var(--bg-sidebar)", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>
          <span>Step</span>
          <span>Linear (+100)</span>
          <span style={{ color: "var(--green-dark)" }}>Exponential (×2)</span>
        </div>
        {TABLE_STEPS.map((s) => {
          const isCurrent = s === step;
          return (
            <div key={s}
              className="grid grid-cols-3 px-3 py-2 text-xs border-b last:border-b-0 cursor-pointer transition-colors"
              style={{ borderColor: "var(--border)", background: isCurrent ? "var(--green-light)" : "transparent" }}
              onClick={() => setStep(s)}>
              <span className="font-bold"
                style={{ color: isCurrent ? "var(--green-dark)" : "var(--text-muted)" }}>{s}</span>
              <span style={{ color: isCurrent ? "var(--green-dark)" : "var(--text-muted)" }}>
                {formatNum(s * 100)}
              </span>
              <span className="font-bold"
                style={{ color: isCurrent ? "var(--green-dark)" : "var(--text)" }}>
                {formatNum(Math.pow(2, s))}
              </span>
            </div>
          );
        })}
      </div>

      {/* Ratio callout */}
      <div className="rounded-lg px-4 py-3 text-center"
        style={{ background: "var(--yellow-light)", border: "1.5px solid var(--yellow-border)" }}>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>At step {step}, exponential is</p>
        <p className="text-2xl font-extrabold"
          style={{ color: "var(--yellow)", fontFamily: "var(--font-display)" }}>
          {formatNum(ratio)}×
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>larger than linear</p>
      </div>
    </WidgetShell>
  );
}
