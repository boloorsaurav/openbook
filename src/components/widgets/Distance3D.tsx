"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

function fmt(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(4).replace(/\.?0+$/, "");
}

export default function Distance3D() {
  const [p, setP] = useState({ x: 1, y: -3, z: 4 });
  const [q, setQ] = useState({ x: -4, y: 1, z: 2 });

  const dx = q.x - p.x;
  const dy = q.y - p.y;
  const dz = q.z - p.z;
  const sumSq = dx * dx + dy * dy + dz * dz;
  const dist = Math.sqrt(sumSq);

  return (
    <WidgetShell label="3D Distance" badge="P → Q in space">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        For two points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂), the distance is
        <strong> √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]</strong>. Same as 2D, just one more term.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-lg p-2" style={{ background: "var(--accent-light)", border: "1.5px solid var(--accent-border)" }}>
          <p className="text-[10px] font-bold uppercase mb-1" style={{ color: "var(--text-muted)" }}>Point P</p>
          {(["x", "y", "z"] as const).map((axis) => (
            <div key={axis} className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono w-3" style={{ color: "var(--text)" }}>{axis}₁</span>
              <input type="number" value={p[axis]} step={1} onChange={(e) => setP({ ...p, [axis]: Number(e.target.value) || 0 })} className="flex-1 px-2 py-0.5 rounded border text-xs font-mono" style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }} />
            </div>
          ))}
        </div>
        <div className="rounded-lg p-2" style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
          <p className="text-[10px] font-bold uppercase mb-1" style={{ color: "var(--green-dark)" }}>Point Q</p>
          {(["x", "y", "z"] as const).map((axis) => (
            <div key={axis} className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono w-3" style={{ color: "var(--green-dark)" }}>{axis}₂</span>
              <input type="number" value={q[axis]} step={1} onChange={(e) => setQ({ ...q, [axis]: Number(e.target.value) || 0 })} className="flex-1 px-2 py-0.5 rounded border text-xs font-mono" style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="rounded-lg p-2" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Step 1 — differences</p>
          <p className="text-xs font-mono" style={{ color: "var(--text)" }}>
            Δx = {q.x} − {p.x} = {fmt(dx)}, &nbsp; Δy = {q.y} − {p.y} = {fmt(dy)}, &nbsp; Δz = {q.z} − {p.z} = {fmt(dz)}
          </p>
        </div>
        <div className="rounded-lg p-2" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
          <p className="text-[10px] font-bold uppercase" style={{ color: "var(--text-muted)" }}>Step 2 — sum of squares</p>
          <p className="text-xs font-mono" style={{ color: "var(--text)" }}>
            ({fmt(dx)})² + ({fmt(dy)})² + ({fmt(dz)})² = {fmt(dx * dx)} + {fmt(dy * dy)} + {fmt(dz * dz)} = {fmt(sumSq)}
          </p>
        </div>
        <div className="rounded-lg p-3 text-center" style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>Distance PQ</p>
          <p className="text-base font-mono font-bold" style={{ color: "var(--green-dark)" }}>
            √{fmt(sumSq)} = {fmt(dist)}
          </p>
        </div>
      </div>
    </WidgetShell>
  );
}
