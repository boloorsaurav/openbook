"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import FoldingSimulation from "@/components/widgets/FoldingSimulation";
import ExponentExplorer from "@/components/widgets/ExponentExplorer";
import GrowthComparison from "@/components/widgets/GrowthComparison";
import Quiz from "@/components/widgets/Quiz";
import { CH2_QUESTIONS } from "@/data/ch2-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Power Play", href: "/read/ch2", available: true },
  { number: 3, title: "A Story of Numbers", href: "/read/ch3", available: true },
  { number: 4, title: "Quadrilaterals", href: "/read/ch4", available: true },
  { number: 5, title: "Number Play", href: "/read/ch5", available: true },
  { number: 6, title: "We Distribute, Yet Things Multiply", href: "/read/ch6", available: true },
  { number: 7, title: "Proportional Reasoning-1", href: "/read/ch7", available: true },
];

export default function Chapter2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · Power Play" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={2} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 2 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Power Play
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["45 min", "3 interactive", "10-question quiz"].map((pill) => (
                <span key={pill} className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)", borderWidth: "1.5px" }}>
                  {pill}
                </span>
              ))}
            </div>
            <hr className="mt-2 mb-8" style={{ borderColor: "var(--border)" }} />

            {/* ── SECTION 1: Exponential Growth ── */}
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>
                1
              </span>
              <div>
                <p className="mb-0.5"
                  style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Exponential Growth
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Experiencing the Power Play
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Take a sheet of paper 0.001 cm thick. Fold it once — now it&apos;s 0.002 cm.
              Fold it again — 0.004 cm. After 10 folds it&apos;s over 1 cm thick.
              After 20 folds, taller than the Burj Khalifa.
              After <strong>46 folds, it reaches the Moon.</strong>
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              No typo. 46 folds. A piece of paper. The Moon.
              This is what happens when you <em>multiply</em> instead of add —
              each step doesn&apos;t pile on a fixed amount, it <strong>doubles everything that came before</strong>.
            </p>

            <CalloutCard title="Exponential Growth">
              Growth by <strong>repeated multiplication</strong> is called exponential growth.
              It feels modest at first — doubling 0.001 cm ten times gives just 1 cm.
              But the same doubling ten more times clears a skyscraper. Ten more after that
              puts you in orbit. The numbers don&apos;t grow — they <em>explode</em>.
            </CalloutCard>

            <FoldingSimulation />
          </section>

          {/* ── SECTION 2: Powers and Exponents ── */}
          <section id="powers" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>
                2
              </span>
              <div>
                <p className="mb-0.5"
                  style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Powers and Exponents
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Exponential Notation and Its Laws
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Writing 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 gets tedious fast.
              So we shorthand it: <strong>2¹⁰</strong>. The bottom number is the <strong>base</strong>,
              the top is the <strong>exponent</strong> — how many times you multiply.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Three laws govern how exponents combine. They&apos;re not rules to memorise —
              they&apos;re patterns you can <em>see</em>:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              nᵃ × nᵇ = nᵃ⁺ᵇ &nbsp;·&nbsp; (nᵃ)ᵇ = nᵃˣᵇ &nbsp;·&nbsp; nᵃ ÷ nᵇ = nᵃ⁻ᵇ
            </p>

            <p className="leading-relaxed mt-4 mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two bonus rules: (−1) raised to an <em>odd</em> power is −1; to an <em>even</em>{" "}
              power it&apos;s 1. And 0 raised to anything positive is 0.
              Use the explorer below to see each law expand step by step.
            </p>

            <CalloutCard title="Product Rule">
              When multiplying powers with the <strong>same base</strong>, add the exponents:{" "}
              nᵃ × nᵇ = nᵃ⁺ᵇ. For example, 2³ × 2⁴ = 2⁷ = 128.
            </CalloutCard>

            <CalloutCard title="Power of a Power Rule">
              When raising a power to another power, <strong>multiply</strong> the exponents:{" "}
              (nᵃ)ᵇ = nᵃˣᵇ. For example, (2³)⁴ = 2¹² = 4096.
            </CalloutCard>

            <ExponentExplorer />

            <p className="leading-relaxed mt-2" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              These laws power real counting problems too. A 5-digit PIN lock has 10⁵ = 1,00,000
              possible combinations — each of 5 slots independently picks from 10 digits.
              Choosing 4 outfits from 2 dresses and 2 caps? 2 × 2 × 2 × 2 = 2⁴ = 16 combos.
            </p>
          </section>

          {/* ── SECTION 3: Negative and Zero Exponents ── */}
          <section id="negative-exponents" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>
                3
              </span>
              <div>
                <p className="mb-0.5"
                  style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Negative and Zero Exponents
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  The Other Side of Powers
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              What happens when you use the quotient rule on equal exponents? 2⁴ ÷ 2⁴ = 2⁰.
              But 16 ÷ 16 = 1. So <strong>2⁰ = 1</strong>. This isn&apos;t a definition
              pulled from thin air — the rule itself demands it.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Push further: 2⁴ ÷ 2⁵ = 2⁻¹. And 16 ÷ 32 = 1/2. So <strong>2⁻¹ = 1/2</strong>.
              Negative exponents aren&apos;t a new concept — they&apos;re the quotient rule
              running past zero. Every negative exponent is just a reciprocal in disguise.
            </p>

            <CalloutCard title="Zero Exponent">
              Any non-zero number raised to the power 0 equals 1. This follows directly from
              the quotient rule: nᵃ ÷ nᵃ = nᵃ⁻ᵃ = n⁰ = 1.
            </CalloutCard>

            <CalloutCard title="Negative Exponent">
              n⁻ᵃ = 1 ÷ nᵃ. A negative exponent means <em>reciprocal</em> of the positive
              power. For example, 3⁻² = 1 ÷ 9 = 1/9.
            </CalloutCard>
          </section>

          {/* ── SECTION 4: Scientific Notation ── */}
          <section id="scientific-notation" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>
                4
              </span>
              <div>
                <p className="mb-0.5"
                  style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Scientific Notation
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Powers of 10
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The distance from Earth to the Sun is 149,600,000 km. The size of a hydrogen
              atom is 0.000000000053 m. Writing those by hand is error-prone and impossible
              to compare. <strong>Scientific notation</strong> solves this: any number becomes
              x × 10ʸ, where x is between 1 and 10.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The exponent y tells you how many places the decimal point shifts.
              Positive y = a big number. Negative y = a tiny one.
              5,900 becomes 5.9 × 10³. The hydrogen atom becomes 5.3 × 10⁻¹¹ m.
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              5900 = 5.9 × 10³ &nbsp;·&nbsp; 20800 = 2.08 × 10⁴ &nbsp;·&nbsp; 80,00,000 = 8 × 10⁶
            </p>

            <p className="leading-relaxed mt-4 mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The exponent tells you how many places the decimal point moves. Positive exponent →
              move right (large number). Negative exponent → move left (small number, like 4.5 × 10⁻⁴ = 0.00045).
            </p>

            <CalloutCard title="Scientific Notation">
              Write any number as x × 10ʸ where <strong>1 ≤ x &lt; 10</strong> and y is an
              integer. Positive y for large numbers, negative y for small ones. The number of
              digits in x reflects how precisely the value is known.
            </CalloutCard>
          </section>

          {/* ── SECTION 5: Linear vs Exponential ── */}
          <section id="estimation" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>
                5
              </span>
              <div>
                <p className="mb-0.5"
                  style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Estimation and Large Numbers
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Did You Ever Wonder?
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              At step 1, linear and exponential look similar. At step 10, exponential is
              already 10× ahead. At step 30, it&apos;s not close — exponential is over{" "}
              <strong>35 million times larger</strong>. The table below makes this visceral.
            </p>

            <GrowthComparison />

            <p className="leading-relaxed mt-4 mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Large numbers earned their own names. In the Indian system: lakh (10⁵), crore (10⁷),
              arab (10⁹). Internationally: million (10⁶), billion (10⁹), trillion (10¹²).
              And the legendary <em>googol</em> — 10¹⁰⁰ — a number so large that writing
              it out would take more digits than there are atoms in the observable universe.
            </p>

            <CalloutCard title="Linear vs. Exponential">
              Linear growth adds a fixed amount at each step. Exponential growth multiplies.
              They look similar early on — but given enough steps, exponential{" "}
              <strong>doesn&apos;t just win, it makes linear look like rounding error</strong>.
            </CalloutCard>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions from the chapter. Take your time.
            </p>
            <Quiz pool={CH2_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 2 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
