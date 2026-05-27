"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import ComplexArithmetic from "@/components/widgets/ComplexArithmetic";
import PowersOfI from "@/components/widgets/PowersOfI";
import ArgandPlanePlot from "@/components/widgets/ArgandPlanePlot";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH4_QUESTIONS } from "@/data/grade-11-ch4-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "Sets", href: "/read/grade-11/ch1", available: true },
  { number: 2, title: "Relations and Functions", href: "/read/grade-11/ch2", available: true },
  { number: 3, title: "Trigonometric Functions", href: "/read/grade-11/ch3", available: true },
  { number: 4, title: "Complex Numbers and Quadratic Equations", href: "/read/grade-11/ch4", available: true },
  { number: 5, title: "Linear Inequalities", href: "/read/grade-11/ch5", available: true },
  { number: 6, title: "Permutations and Combinations", href: "/read/grade-11/ch6", available: true },
  { number: 7, title: "Binomial Theorem", href: "/read/grade-11/ch7", available: true },
  { number: 8, title: "Sequences and Series", available: false },
  { number: 9, title: "Straight Lines", available: false },
  { number: 10, title: "Conic Sections", available: false },
  { number: 11, title: "Three Dimensional Geometry", available: false },
  { number: 12, title: "Limits and Derivatives", available: false },
  { number: 13, title: "Statistics", available: false },
  { number: 14, title: "Probability", available: false },
];

export default function Grade11Chapter4Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Complex Numbers" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={4} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 4 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Complex Numbers
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["35 min", "3 interactive", "10-question quiz"].map((pill) => (
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
                  When the real numbers run out
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Look at the equation <strong>x² + 1 = 0</strong>. It asks for a number whose square is −1. No real number works — squaring a real always gives something ≥ 0. So either this equation has no answer, or the real numbers are not the end of the story.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The same problem appears whenever the discriminant <strong>D = b² − 4ac</strong> of a quadratic is negative. To handle these cases, mathematicians extended the real numbers by inventing a new symbol whose square is −1. The resulting system — the <strong>complex numbers</strong> — turns out to be exactly the right setting for solving every polynomial equation, modelling electrical circuits, describing quantum states, and rotating things in 2D.
            </p>

            <CalloutCard title="Why this extension is needed">
              For a quadratic with D &lt; 0 there is no real solution. The complex numbers fix that by adding a single new element, <strong>i</strong>, defined so that i² = −1. Every polynomial equation then has a solution somewhere.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 4.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  The form a + ib
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The new symbol <strong>i</strong> is defined by the single rule <strong>i² = −1</strong>. A <strong>complex number</strong> is any expression of the form
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              z = a + ib,  where a, b ∈ ℝ
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Here <strong>a is the real part</strong>, written Re(z), and <strong>b is the imaginary part</strong>, written Im(z). When b = 0, z is just an ordinary real number. When a = 0, z is called <em>purely imaginary</em>.
            </p>

            <CalloutCard title="Equality of complex numbers">
              Two complex numbers a + ib and c + id are equal exactly when <strong>a = c</strong> and <strong>b = d</strong>. So a single equation between complex numbers is really two real equations rolled into one.
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 4.3
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Algebra: adding, multiplying, dividing
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You can do all the usual arithmetic on complex numbers — treat them like ordinary algebraic expressions, then collect terms using i² = −1.
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + ib) + (c + id) = (a + c) + i(b + d)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + ib) − (c + id) = (a − c) + i(b − d)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (a + ib)(c + id) = (ac − bd) + i(ad + bc)
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              For division, multiply top and bottom by the conjugate of the denominator.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              All the usual laws hold: closure, commutativity, associativity, distributivity. Complex numbers form a <em>field</em> — every non-zero z has a multiplicative inverse 1/z (we&apos;ll meet a clean formula for that below).
            </p>

            <div className="mt-6 mb-6">
              <ComplexArithmetic />
            </div>

            <CalloutCard title="Powers of i cycle every four">
              i¹ = i, i² = −1, i³ = −i, i⁴ = 1, then it repeats. For any integer k:<br />
              <strong>i^(4k) = 1, i^(4k+1) = i, i^(4k+2) = −1, i^(4k+3) = −i</strong>. To compute i^n for any n, just take n mod 4.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <PowersOfI />
            </div>

            <CalloutCard title="Square roots of negative numbers — careful!">
              For a positive real a, <strong>√(−a) = √a · i</strong> by convention. But the rule √a · √b = √(ab) <em>fails</em> when both a and b are negative. For example, √(−1) · √(−1) = i · i = −1, NOT √((−1)(−1)) = 1.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 4.4
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Modulus and Conjugate
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two operations on a single complex number z = a + ib show up everywhere:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Modulus</strong>: |z| = √(a² + b²). A non-negative real number — the &quot;size&quot; of z.</li>
              <li>• <strong>Conjugate</strong>: z̄ = a − ib. Flip the sign of the imaginary part.</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The two are related by the identity <strong>z · z̄ = a² + b² = |z|²</strong>. That gives a clean formula for the multiplicative inverse:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              1/z = z̄ / |z|²
            </p>

            <CalloutCard title="Useful properties of the modulus">
              <strong>|z₁ z₂| = |z₁| |z₂|</strong> and <strong>|z₁ / z₂| = |z₁| / |z₂|</strong>.<br />
              But <strong>|z₁ + z₂| ≤ |z₁| + |z₂|</strong> only — equality is rare (the triangle inequality).
            </CalloutCard>

            <CalloutCard title="Useful properties of the conjugate">
              The conjugate respects every operation:<br />
              <strong>(z₁ ± z₂) bar = z̄₁ ± z̄₂</strong>, <strong>(z₁ z₂) bar = z̄₁ z̄₂</strong>, <strong>(z₁ / z₂) bar = z̄₁ / z̄₂</strong>.<br />
              Also, taking the conjugate twice gets you back where you started: <strong>(z̄) bar = z</strong>.
            </CalloutCard>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 4.5
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  The Argand Plane
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Every complex number z = x + iy has two real components, so it corresponds to a unique point <strong>(x, y) in the plane</strong>. This picture is called the <strong>Argand plane</strong> (or complex plane), named after Jean-Robert Argand, who popularised the diagram in 1806.
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• The <strong>x-axis is the real axis</strong> — points (a, 0) are ordinary reals.</li>
              <li>• The <strong>y-axis is the imaginary axis</strong> — points (0, b) are purely imaginary.</li>
              <li>• The <strong>modulus |z|</strong> is the distance from z to the origin.</li>
              <li>• The <strong>conjugate z̄</strong> is the mirror image of z across the real axis.</li>
              <li>• The <strong>additive inverse −z</strong> is the rotation of z by 180° about the origin.</li>
            </ul>

            <div className="mt-6 mb-6">
              <ArgandPlanePlot />
            </div>

            <CalloutCard title="A geometric way to multiply by i">
              Multiplying any complex number by i rotates it <strong>90° anticlockwise</strong> about the origin. This is why complex numbers are the natural language for 2D rotation — and the seed of every advanced topic from quaternions to Fourier analysis.
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
            <Quiz pool={GRADE_11_CH4_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 4 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
