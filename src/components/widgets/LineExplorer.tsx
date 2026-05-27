"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Form = "slope-intercept" | "intercept" | "point-slope";

const W = 320;
const H = 240;
const X_MIN = -10;
const X_MAX = 10;
const Y_MIN = -8;
const Y_MAX = 8;
const PAD = 24;

function xToPx(x: number) { return PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD); }
function yToPx(y: number) { return H - PAD - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * (H - 2 * PAD); }

function fmt(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(2).replace(/\.?0+$/, "");
}

export default function LineExplorer() {
  const [form, setForm] = useState<Form>("slope-intercept");
  const [m, setM] = useState(0.5);
  const [c, setC] = useState(2); // y-intercept
  const [a, setA] = useState(4); // x-intercept
  const [b, setB] = useState(3); // y-intercept (intercept form)
  const [px, setPx] = useState(2);
  const [py, setPy] = useState(1);

  // Compute two points on the line in current form
  let yAt = (x: number): number => 0;
  let equation = "";

  if (form === "slope-intercept") {
    yAt = (x) => m * x + c;
    equation = `y = ${fmt(m)}x ${c >= 0 ? "+" : "−"} ${fmt(Math.abs(c))}`;
  } else if (form === "intercept") {
    // x/a + y/b = 1 → y = b(1 - x/a) = b - (b/a)x
    yAt = (x) => a === 0 ? NaN : b * (1 - x / a);
    equation = `x/${fmt(a)} + y/${fmt(b)} = 1`;
  } else {
    yAt = (x) => m * (x - px) + py;
    equation = `y − ${fmt(py)} = ${fmt(m)} (x − ${fmt(px)})`;
  }

  // Build line path within plot bounds
  const samples: { x: number; y: number }[] = [];
  for (let i = 0; i <= 50; i++) {
    const x = X_MIN + (i / 50) * (X_MAX - X_MIN);
    const y = yAt(x);
    if (isFinite(y) && y >= Y_MIN - 3 && y <= Y_MAX + 3) {
      samples.push({ x, y });
    }
  }
  const linePath = samples.length > 1 ? samples.map((s, i) => `${i === 0 ? "M" : "L"} ${xToPx(s.x).toFixed(1)} ${yToPx(Math.max(Y_MIN - 1, Math.min(Y_MAX + 1, s.y))).toFixed(1)}`).join(" ") : "";

  return (
    <WidgetShell label="Line Forms" badge="equation ↔ graph">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        A straight line can be written in three common forms. Pick a form, tweak the parameters,
        and watch the equation and graph stay in sync.
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {(["slope-intercept", "intercept", "point-slope"] as Form[]).map((f) => (
          <button
            key={f}
            onClick={() => setForm(f)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: form === f ? "var(--accent)" : "var(--bg-card)",
              color: form === f ? "var(--bg-card)" : "var(--text)",
              borderColor: form === f ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {f === "slope-intercept" ? "y = mx + c" : f === "intercept" ? "x/a + y/b = 1" : "y − y₀ = m(x − x₀)"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {form === "slope-intercept" && (
          <>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>m (slope)</label><input type="range" min={-4} max={4} step={0.25} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{m}</span></div>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>c (y-intercept)</label><input type="range" min={-6} max={6} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{c}</span></div>
          </>
        )}
        {form === "intercept" && (
          <>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>a (x-intercept)</label><input type="range" min={-8} max={8} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{a}</span></div>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>b (y-intercept)</label><input type="range" min={-6} max={6} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{b}</span></div>
          </>
        )}
        {form === "point-slope" && (
          <>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>x₀</label><input type="range" min={-6} max={6} step={1} value={px} onChange={(e) => setPx(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{px}</span></div>
            <div><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>y₀</label><input type="range" min={-6} max={6} step={1} value={py} onChange={(e) => setPy(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{py}</span></div>
            <div className="col-span-2"><label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>m (slope)</label><input type="range" min={-4} max={4} step={0.25} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full" /><span className="text-xs font-mono" style={{ color: "var(--text)" }}>{m}</span></div>
          </>
        )}
      </div>

      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 260 }}>
          {/* Grid */}
          {Array.from({ length: 21 }, (_, i) => i - 10).filter((v) => v !== 0).map((v) => (
            <g key={"g" + v}>
              <line x1={xToPx(v)} y1={PAD} x2={xToPx(v)} y2={H - PAD} stroke="var(--border)" strokeWidth={0.5} />
              <line x1={PAD} y1={yToPx(v)} x2={W - PAD} y2={yToPx(v)} stroke="var(--border)" strokeWidth={0.5} />
            </g>
          ))}
          {/* Axes */}
          <line x1={PAD} y1={yToPx(0)} x2={W - PAD} y2={yToPx(0)} stroke="var(--text-muted)" strokeWidth={1.5} />
          <line x1={xToPx(0)} y1={PAD} x2={xToPx(0)} y2={H - PAD} stroke="var(--text-muted)" strokeWidth={1.5} />
          {/* Line */}
          {linePath && <path d={linePath} fill="none" stroke="var(--accent)" strokeWidth={2.5} strokeLinecap="round" />}
          {/* Highlight markers */}
          {form === "slope-intercept" && (
            <circle cx={xToPx(0)} cy={yToPx(c)} r={5} fill="var(--green-dark)" />
          )}
          {form === "intercept" && (
            <>
              <circle cx={xToPx(a)} cy={yToPx(0)} r={5} fill="var(--green-dark)" />
              <circle cx={xToPx(0)} cy={yToPx(b)} r={5} fill="var(--green-dark)" />
            </>
          )}
          {form === "point-slope" && (
            <circle cx={xToPx(px)} cy={yToPx(py)} r={6} fill="var(--green-dark)" />
          )}
        </svg>
      </div>

      <div
        className="rounded-lg p-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Equation
        </p>
        <p className="text-base font-mono font-bold" style={{ color: "var(--green-dark)" }}>
          {equation}
        </p>
      </div>
    </WidgetShell>
  );
}
