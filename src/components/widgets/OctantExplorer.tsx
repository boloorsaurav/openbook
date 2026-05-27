"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

const OCTANTS = [
  { roman: "I",    signs: [1, 1, 1] },
  { roman: "II",   signs: [-1, 1, 1] },
  { roman: "III",  signs: [-1, -1, 1] },
  { roman: "IV",   signs: [1, -1, 1] },
  { roman: "V",    signs: [1, 1, -1] },
  { roman: "VI",   signs: [-1, 1, -1] },
  { roman: "VII",  signs: [-1, -1, -1] },
  { roman: "VIII", signs: [1, -1, -1] },
];

function octantOf(x: number, y: number, z: number) {
  if (x === 0 || y === 0 || z === 0) return null;
  const s = [Math.sign(x), Math.sign(y), Math.sign(z)];
  const found = OCTANTS.find((o) => o.signs[0] === s[0] && o.signs[1] === s[1] && o.signs[2] === s[2]);
  return found || null;
}

export default function OctantExplorer() {
  const [x, setX] = useState(2);
  const [y, setY] = useState(-3);
  const [z, setZ] = useState(4);
  const octant = octantOf(x, y, z);

  return (
    <WidgetShell label="Octants in 3D" badge="signs decide everything">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        The three coordinate planes split 3D space into 8 regions called octants. Set the signs of
        x, y, z — or type real values — and see which octant the point lands in.
      </p>

      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "x", val: x, set: setX },
          { label: "y", val: y, set: setY },
          { label: "z", val: z, set: setZ },
        ].map((c) => (
          <div key={c.label}>
            <label className="text-[10px] font-bold uppercase block" style={{ color: "var(--text-muted)" }}>
              {c.label}
            </label>
            <input
              type="number"
              value={c.val}
              step={1}
              onChange={(e) => c.set(Number(e.target.value) || 0)}
              className="w-full mt-1 px-2 py-1 rounded border text-sm font-mono"
              style={{ borderColor: "var(--border-strong)", background: "var(--bg-card)" }}
            />
          </div>
        ))}
      </div>

      <div
        className="rounded-lg p-3 mb-3 text-center"
        style={{
          background: octant ? "var(--green-light)" : "var(--yellow-light)",
          border: `1.5px solid ${octant ? "var(--green-border)" : "var(--yellow-border)"}`,
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: octant ? "var(--green-dark)" : "var(--yellow)" }}>
          Point ({x}, {y}, {z}) lies in
        </p>
        {octant ? (
          <p className="text-lg font-extrabold" style={{ color: "var(--green-dark)", fontFamily: "var(--font-display)" }}>
            Octant {octant.roman}  ({octant.signs.map((s) => (s > 0 ? "+" : "−")).join(", ")})
          </p>
        ) : (
          <p className="text-base font-bold" style={{ color: "var(--yellow)" }}>
            On a coordinate plane (one or more coords are 0)
          </p>
        )}
      </div>

      {/* Sign table */}
      <div
        className="rounded-lg p-3 overflow-x-auto"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          Octant sign chart
        </p>
        <table className="w-full text-[11px]" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-strong)" }}>
              <th className="px-2 py-1 text-left" style={{ color: "var(--text-muted)" }}>Octant</th>
              <th className="px-2 py-1" style={{ color: "var(--text-muted)" }}>x</th>
              <th className="px-2 py-1" style={{ color: "var(--text-muted)" }}>y</th>
              <th className="px-2 py-1" style={{ color: "var(--text-muted)" }}>z</th>
            </tr>
          </thead>
          <tbody>
            {OCTANTS.map((o) => {
              const isActive = octant?.roman === o.roman;
              return (
                <tr key={o.roman} style={{ background: isActive ? "var(--accent-light)" : "transparent" }}>
                  <td className="px-2 py-1 font-bold" style={{ color: isActive ? "var(--accent)" : "var(--text)", fontFamily: "var(--font-display)" }}>{o.roman}</td>
                  {o.signs.map((s, i) => (
                    <td key={i} className="px-2 py-1 text-center font-mono font-bold" style={{ color: s > 0 ? "var(--green-dark)" : "var(--red-dark)" }}>
                      {s > 0 ? "+" : "−"}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </WidgetShell>
  );
}
