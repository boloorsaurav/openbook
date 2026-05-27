"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import PascalsTriangle from "@/components/widgets/PascalsTriangle";
import BinomialExpander from "@/components/widgets/BinomialExpander";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH7_QUESTIONS } from "@/data/grade-11-ch7-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "Sets", href: "/read/grade-11/ch1", available: true },
  { number: 2, title: "Relations and Functions", href: "/read/grade-11/ch2", available: true },
  { number: 3, title: "Trigonometric Functions", href: "/read/grade-11/ch3", available: true },
  { number: 4, title: "Complex Numbers and Quadratic Equations", href: "/read/grade-11/ch4", available: true },
  { number: 5, title: "Linear Inequalities", href: "/read/grade-11/ch5", available: true },
  { number: 6, title: "Permutations and Combinations", href: "/read/grade-11/ch6", available: true },
  { number: 7, title: "Binomial Theorem", href: "/read/grade-11/ch7", available: true },
  { number: 8, title: "Sequences and Series", href: "/read/grade-11/ch8", available: true },
  { number: 9, title: "Straight Lines", available: false },
  { number: 10, title: "Conic Sections", available: false },
  { number: 11, title: "Three Dimensional Geometry", available: false },
  { number: 12, title: "Limits and Derivatives", available: false },
  { number: 13, title: "Statistics", available: false },
  { number: 14, title: "Probability", available: false },
];

export default function Grade11Chapter7Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Binomial Theorem" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={7} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 7 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Binomial Theorem
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["30 min", "2 interactive", "10-question quiz"].map((pill) => (
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
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Introduction
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  A shortcut for (a + b)ⁿ
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You can expand (a + b)² by hand: it&apos;s a² + 2ab + b². (a + b)³ is doable too: a³ + 3a²b + 3ab² + b³. By (a + b)⁵ you&apos;re multiplying five copies together — error-prone and slow. By (a + b)¹⁰ you&apos;d rather not.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>binomial theorem</strong> gives a one-line formula for every coefficient in (a + b)ⁿ, for any positive integer n. The coefficients turn out to be exactly the numbers in <strong>Pascal&apos;s triangle</strong> — and equivalently, the combination counts nCr from the previous chapter.
            </p>

            <CalloutCard title="Chapter scope">
              In this chapter, n is a non-negative integer. The theorem generalises to fractional and negative n (giving the infinite binomial series for things like (1 + x)^(1/2)), but that&apos;s a later topic.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 7.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  The theorem and Pascal&apos;s triangle
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Look at a few small expansions and the pattern jumps out:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + b)¹ = 1a + 1b
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + b)² = 1a² + 2ab + 1b²
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + b)³ = 1a³ + 3a²b + 3ab² + 1b³
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + b)⁴ = 1a⁴ + 4a³b + 6a²b² + 4ab³ + 1b⁴
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Three things happen in every expansion:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>1. There are <strong>n + 1 terms</strong>.</li>
              <li>2. The power of a starts at n and drops to 0; the power of b rises from 0 to n. <strong>The two exponents always sum to n.</strong></li>
              <li>3. The coefficients are exactly the rows of <strong>Pascal&apos;s triangle</strong>: each interior entry equals the sum of the two directly above.</li>
            </ul>

            <div className="mt-6 mb-6">
              <PascalsTriangle />
            </div>

            <CalloutCard title="The theorem">
              For any non-negative integer n:<br />
              <strong>(a + b)ⁿ = Σ from k=0 to n of nCk · a^(n−k) · b^k</strong><br />
              The numbers nCk are called <em>binomial coefficients</em>. They are the same as the combination counts &quot;n choose k&quot;.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Why combinations? Because expanding (a + b)ⁿ means picking one factor (a or b) from each of n copies. To produce a term with k b&apos;s, you choose which k of the n factors contribute a b — and there are nCk ways to do that. So the coefficient of a^(n−k) b^k is exactly nCk.
            </p>

            <div className="mt-6 mb-6">
              <BinomialExpander />
            </div>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 7.2.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Special cases and useful tricks
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A few substitutions into the binomial theorem give important identities you should recognise on sight.
            </p>

            <CalloutCard title="(x − y)ⁿ — alternating signs">
              Substitute b = −y: <strong>(x − y)ⁿ = nC0 x^n − nC1 x^(n−1) y + nC2 x^(n−2) y² − …</strong><br />
              The signs alternate starting positive. Useful for any expression with subtraction.
            </CalloutCard>

            <CalloutCard title="(1 + x)ⁿ — coefficients only">
              Substitute a = 1: <strong>(1 + x)ⁿ = nC0 + nC1·x + nC2·x² + … + nCn·xⁿ</strong>.<br />
              The coefficients show up bare — handy for approximations and for proving identities about nCr.
            </CalloutCard>

            <CalloutCard title="Sums of binomial coefficients">
              Set x = 1 in (1 + x)ⁿ: <strong>2ⁿ = nC0 + nC1 + nC2 + … + nCn</strong> — the total of any row of Pascal&apos;s triangle is 2ⁿ.<br />
              Set x = −1: <strong>0 = nC0 − nC1 + nC2 − …</strong> — alternating signs cancel. So the even-indexed and odd-indexed binomial coefficients have equal sums.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              One classic trick: to compute something like 98⁵ by hand, write it as (100 − 2)⁵ and apply the binomial theorem. Each term is easy to compute (powers of 100 are just zeros), the alternating signs handle the negative, and the result drops out without ever multiplying 98 by itself.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Worked example: 98⁵ = (100 − 2)⁵ = 100⁵ − 5·100⁴·2 + 10·100³·4 − 10·100²·8 + 5·100·16 − 32 = 9,039,207,968.
            </p>

            <CalloutCard title="A divisibility application">
              Want to show 6ⁿ − 5n leaves remainder 1 when divided by 25? Write 6ⁿ = (1 + 5)ⁿ and expand. Every term from 5² onward is a multiple of 25, so 6ⁿ = 1 + 5n + (multiple of 25), giving 6ⁿ − 5n − 1 ≡ 0 (mod 25). Quick proofs like this are a major reason the binomial theorem is taught early.
            </CalloutCard>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions sampled from a 25-question pool. Take your time.
            </p>
            <Quiz pool={GRADE_11_CH7_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 7 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
