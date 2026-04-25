"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import AreaModel from "@/components/widgets/AreaModel";
import Quiz from "@/components/widgets/Quiz";
import { CH6_QUESTIONS } from "@/data/ch6-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Power Play", href: "/read/ch2", available: true },
  { number: 3, title: "A Story of Numbers", href: "/read/ch3", available: true },
  { number: 4, title: "Quadrilaterals", href: "/read/ch4", available: true },
  { number: 5, title: "Number Play", href: "/read/ch5", available: true },
  { number: 6, title: "We Distribute, Yet Things Multiply", href: "/read/ch6", available: true },
  { number: 7, title: "Proportional Reasoning-1", href: "/read/ch7", available: true },
];

export default function Chapter6Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · We Distribute, Yet Things Multiply" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={6} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 6 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              We Distribute, Yet Things Multiply
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["45 min", "1 interactive", "10-question quiz"].map((pill) => (
                <span key={pill} className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)", borderWidth: "1.5px" }}>
                  {pill}
                </span>
              ))}
            </div>
            <hr className="mt-2 mb-8" style={{ borderColor: "var(--border)" }} />

            {/* ── SECTION 1 ── */}
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>1</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Distributive Property and Product Changes</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Some Properties of Multiplication</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>distributive property</strong> of multiplication over addition — a(b + c) = ab + ac — is the backbone of all algebraic expansion. Brahmagupta called it <em>khaṇḍa-guṇanam</em> (multiplication by parts). Think of it geometrically: a rectangle of width a and height (b + c) has exactly the same area as two smaller rectangles, one of width a and height b, and another of width a and height c.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              From the distributive property, a cascade of useful identities follows. If one factor increases by 1, the product increases by a. If <em>both</em> factors increase by 1, the product increases by a + b + 1. The general rule covers any shifts m and n:
            </p>

            {/* Product change rules — visual break in the paragraph run */}
            <div className="space-y-1.5 mb-4">
              {[
                "a(b + 1) = ab + a",
                "(a + 1)(b + 1) = ab + a + b + 1",
                "(a + m)(b + n) = ab + an + bm + mn",
              ].map((line) => (
                <p key={line} className="font-mono text-sm px-4 py-2.5 rounded-lg"
                  style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
                  {line}
                </p>
              ))}
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An <strong>identity</strong> is a mathematical equation that holds for all values of its variables. Unlike a specific equation (which is true for certain values), an identity is universally true. The distributive property itself is an identity: no matter what numbers you substitute for a, b, and c, a(b+c) always equals ab + ac.
            </p>
            <p className="leading-relaxed mb-2" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A fast-multiplication trick: multiplying a number by 11 is the same as writing the number twice — once shifted one decimal place. This works because 11 = 10 + 1:
            </p>

            {/* ×11 trick — shown as a formula block */}
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-2.5 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              3874 × 11 = 3874 × (10 + 1) = 38740 + 3874 = <strong>42614</strong>
            </p>

            <CalloutCard title="Distributive Property">
              For any numbers a, b, and c: <strong>a(b + c) = ab + ac</strong>. This property links multiplication and addition, and underpins all algebraic manipulation.
            </CalloutCard>

            <CalloutCard title="Identity">
              An identity is a mathematical statement expressing the equality of two algebraic expressions that holds true for <strong>all</strong> values of the variables — not just some.
            </CalloutCard>

            <CalloutCard title="General Product Identity">
              <strong>(a + m)(b + n) = ab + an + bm + mn</strong>. The product equals the sum of the products of each term in the first factor with each term in the second.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Squares and Differences</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Special Cases of the Distributive Property</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Three identities emerge when a = b in the general product formula, and are worth memorising because they appear everywhere:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Identity 1A: (a + b)² = a² + 2ab + b²
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Identity 1B: (a − b)² = a² − 2ab + b²
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Identity 1C: (a + b)(a − b) = a² − b²
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Identity 1A has a beautiful geometric proof: a square of side (a + b) can be cut into four pieces — a square of side a (area a²), a square of side b (area b²), and two rectangles each of area ab. Identity 1C is the "difference of squares": it lets you compute a² knowing a nearby product. For example, 31² = (31+1)(31−1) + 1² = 32×30 + 1 = 961. And 197² = 200×194 + 9 = 38809.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two useful patterns follow: 2(a² + b²) = (a+b)² + (a−b)², and a² − b² = (a+b)(a−b).
            </p>

            <CalloutCard title="Square of a Sum">
              <strong>(a + b)² = a² + 2ab + b²</strong>. The square of a sum is the sum of the squares <em>plus</em> twice the product. The most common mistake is forgetting the middle term.
            </CalloutCard>

            <CalloutCard title="Difference of Squares">
              <strong>(a + b)(a − b) = a² − b²</strong>. The product of the sum and difference of two numbers equals the difference of their squares. Use this to compute squares: a² = (a+b)(a−b) + b².
            </CalloutCard>

            <div className="mt-6">
              <AreaModel />
            </div>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Error Analysis</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Mind the Mistake, Mend the Mistake</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Algebraic identities are easy to mis-apply. The two most common errors:
            </p>
            <ul className="mb-4 space-y-2 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Forgetting the middle term:</strong> Writing (2x + 3)² = 4x² + 9 instead of 4x² + 12x + 9. The 2ab term (here, 2 × 2x × 3 = 12x) is always missing when students naively square each part separately.</li>
              <li>• <strong>Misapplying the distributive property:</strong> Writing (a + b)² as a² + b² treats squaring like it distributes over addition — it doesn't. Squaring is not linear.</li>
              <li>• <strong>Incorrectly combining like terms:</strong> Only terms with the <em>same</em> letter-numbers (and powers) can be combined. x² and x are not like terms.</li>
            </ul>

            <CalloutCard title="Check Your Work">
              Always verify each step. The most reliable check: substitute a simple number. If (2x+3)² = 4x²+9 were true, substituting x=1 gives 25 = 13 — clearly wrong. The correct expansion gives 25 = 25.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Multiple Methods for Patterns</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>All Ways Lead to the Same Answer</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A single pattern can often be described by multiple algebraic expressions. Consider a triangular arrangement of circles where Step k has k² + 2k circles. This can also be written as k(k+2), or (k+1)² − 1, or k(k+1) + k. All four expressions are equivalent — they simplify to the same polynomial. Two expressions are equal if they produce the same values for every substitution of the variable.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Finding multiple ways to describe a pattern is a creative act in mathematics. Different viewpoints on the same structure — counting by rows, by columns, by L-shapes, by subtracting a corner — all lead to the same result, confirmed by the identities we've learned. Mathematics rewards the ability to see the same thing in multiple ways.
            </p>

            <CalloutCard title="Multiple Methods">
              In mathematics, there are often multiple correct ways to look at a pattern. All correct methods produce equivalent expressions, which can be verified using the identities (a+b)² = a² + 2ab + b² and (a+b)(a−b) = a² − b².
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
            <Quiz pool={CH6_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 6 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
