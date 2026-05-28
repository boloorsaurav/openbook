"use client";
import { useState } from "react";
import WidgetShell from "@/components/layout/WidgetShell";

type Filter = "all" | "red" | "black" | "hearts" | "diamonds" | "clubs" | "spades" | "face" | "ace" | "king" | "queen" | "jack" | "number";

const SUITS = ["♥", "♦", "♣", "♠"] as const;
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] as const;

type Card = { rank: string; suit: string; red: boolean };

const DECK: Card[] = [];
for (const suit of SUITS) {
  for (const rank of RANKS) {
    DECK.push({ rank, suit, red: suit === "♥" || suit === "♦" });
  }
}

function matches(c: Card, f: Filter): boolean {
  switch (f) {
    case "all": return true;
    case "red": return c.red;
    case "black": return !c.red;
    case "hearts": return c.suit === "♥";
    case "diamonds": return c.suit === "♦";
    case "clubs": return c.suit === "♣";
    case "spades": return c.suit === "♠";
    case "face": return c.rank === "J" || c.rank === "Q" || c.rank === "K";
    case "ace": return c.rank === "A";
    case "king": return c.rank === "K";
    case "queen": return c.rank === "Q";
    case "jack": return c.rank === "J";
    case "number": return !["A", "J", "Q", "K"].includes(c.rank);
  }
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: "red", label: "Red card" },
  { key: "black", label: "Black card" },
  { key: "hearts", label: "Heart" },
  { key: "face", label: "Face card (J, Q, K)" },
  { key: "ace", label: "Ace" },
  { key: "king", label: "King" },
  { key: "number", label: "Number card (2–10)" },
];

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

export default function CardDeckProbability() {
  const [filter, setFilter] = useState<Filter>("face");
  const matched = DECK.filter((c) => matches(c, filter));
  const n = matched.length;
  const total = 52;
  const g = gcd(n, total);

  return (
    <WidgetShell label="Card Probability" badge="standard 52-card deck">
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Pick a description of an event. The widget highlights the matching cards and computes
        P(event) = (favourable outcomes) / 52.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all"
            style={{
              background: filter === f.key ? "var(--accent)" : "var(--bg-card)",
              color: filter === f.key ? "var(--bg-card)" : "var(--text)",
              borderColor: filter === f.key ? "var(--accent)" : "var(--border-strong)",
              fontFamily: "var(--font-display)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        className="rounded-lg p-2 mb-3"
        style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}
      >
        <div className="grid grid-cols-13 gap-1" style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}>
          {DECK.map((c, i) => {
            const hit = matches(c, filter);
            return (
              <div
                key={i}
                className="rounded text-center font-mono"
                style={{
                  background: hit ? "var(--green-light)" : "var(--bg-card)",
                  color: hit ? (c.red ? "var(--red-dark)" : "var(--green-dark)") : (c.red ? "var(--red-border)" : "var(--text-light)"),
                  border: `1px solid ${hit ? "var(--green-border)" : "var(--border)"}`,
                  fontSize: 9,
                  padding: "2px 0",
                  fontWeight: hit ? 700 : 400,
                  opacity: hit ? 1 : 0.45,
                }}
              >
                {c.rank}{c.suit}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="rounded-lg p-3 text-center"
        style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)" }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--green-dark)" }}>
          Probability
        </p>
        <p className="text-base font-mono font-bold" style={{ color: "var(--green-dark)" }}>
          P(event) = {n} / 52
          {g > 1 && n > 0 && ` = ${n / g} / ${52 / g}`}
          {" ≈ "}
          {(n / total).toFixed(4).replace(/\.?0+$/, "")}
        </p>
      </div>
    </WidgetShell>
  );
}
