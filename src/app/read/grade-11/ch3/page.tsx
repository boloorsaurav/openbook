"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import AngleConverter from "@/components/widgets/AngleConverter";
import UnitCircleExplorer from "@/components/widgets/UnitCircleExplorer";
import TrigGraphExplorer from "@/components/widgets/TrigGraphExplorer";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH3_QUESTIONS } from "@/data/grade-11-ch3-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "Sets", href: "/read/grade-11/ch1", available: true },
  { number: 2, title: "Relations and Functions", href: "/read/grade-11/ch2", available: true },
  { number: 3, title: "Trigonometric Functions", href: "/read/grade-11/ch3", available: true },
  { number: 4, title: "Complex Numbers and Quadratic Equations", href: "/read/grade-11/ch4", available: true },
  { number: 5, title: "Linear Inequalities", href: "/read/grade-11/ch5", available: true },
  { number: 6, title: "Permutations and Combinations", href: "/read/grade-11/ch6", available: true },
  { number: 7, title: "Binomial Theorem", href: "/read/grade-11/ch7", available: true },
  { number: 8, title: "Sequences and Series", href: "/read/grade-11/ch8", available: true },
  { number: 9, title: "Straight Lines", href: "/read/grade-11/ch9", available: true },
  { number: 10, title: "Conic Sections", href: "/read/grade-11/ch10", available: true },
  { number: 11, title: "Three Dimensional Geometry", href: "/read/grade-11/ch11", available: true },
  { number: 12, title: "Limits and Derivatives", available: false },
  { number: 13, title: "Statistics", available: false },
  { number: 14, title: "Probability", available: false },
];

export default function Grade11Chapter3Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Trigonometric Functions" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={3} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 3 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Trigonometric Functions
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

            {/* ── SECTION 1 ── */}
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>1</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Introduction
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  From triangle ratios to functions of any angle
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You first met trig as <strong>ratios of sides in a right triangle</strong>: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and so on. That definition only works for acute angles — the angles inside a right triangle have to be between 0° and 90°.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This chapter does two things. First, it generalises those ratios into <strong>functions defined for any real number</strong>, using the unit circle. Second, it explores the rich algebra of identities — sum, difference, double-angle, and product-to-sum formulas — that make trig the language of waves, oscillations, and rotations across physics and engineering.
            </p>

            <CalloutCard title="Why this matters">
              Trig functions describe anything that oscillates: sound waves, AC circuits, tides, planetary orbits, even atomic clocks. The identities you&apos;ll learn here are the algebra of rotation itself.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 3.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Angles: degrees and radians
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An angle is the amount of rotation of a ray about its starting point. The starting position is the <strong>initial side</strong>, the ending position is the <strong>terminal side</strong>, and the corner is the <strong>vertex</strong>. Anticlockwise rotation is positive; clockwise is negative.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              There are two standard units. <strong>Degrees</strong> split one full turn into 360 equal parts; a degree splits further into 60 minutes (1° = 60′) and a minute into 60 seconds (1′ = 60″). <strong>Radians</strong> measure angles by the <em>arc length</em> they cut on a unit circle.
            </p>

            <CalloutCard title="Radian definition">
              <strong>One radian</strong> is the angle at the centre of a circle subtended by an arc whose length equals the radius. So on a unit circle (r = 1), an arc of length 1 makes 1 radian — the angle and the arc length use the same number.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A full revolution covers the whole circumference, 2π·r. On a unit circle that&apos;s 2π — so <strong>2π radians = 360°</strong>, or equivalently <strong>π radians = 180°</strong>. From that single equation you get everything:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              degrees = radians × (180/π)
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              radians = degrees × (π/180)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Common conversions to memorise: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 270° = 3π/2, 360° = 2π.
            </p>

            <div className="mt-6 mb-6">
              <AngleConverter />
            </div>

            <CalloutCard title="Arc length formula">
              For a circle of radius r, an arc of length ℓ subtends an angle θ at the centre with <strong>ℓ = r · θ</strong>. The catch: θ must be in radians. (That&apos;s the main reason radians exist — the formula in degrees would need an awkward π/180 factor.)
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 3.3
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  The six trigonometric functions
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Place a unit circle at the origin. For any angle x, draw a ray from the origin making that angle with the positive x-axis. It hits the circle at some point P = (a, b). Define:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              cos x = a (the x-coordinate)
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              sin x = b (the y-coordinate)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Because P is on the unit circle, a² + b² = 1. That immediately gives the most important identity in all of trig:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              sin²x + cos²x = 1
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The other four functions are defined in terms of sin and cos:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>tan x = sin x / cos x</strong> &nbsp; (where cos x ≠ 0)</li>
              <li>• <strong>cot x = cos x / sin x</strong> &nbsp; (where sin x ≠ 0)</li>
              <li>• <strong>sec x = 1 / cos x</strong> &nbsp; (where cos x ≠ 0)</li>
              <li>• <strong>csc x = 1 / sin x</strong> &nbsp; (where sin x ≠ 0)</li>
            </ul>

            <div className="mt-6 mb-6">
              <UnitCircleExplorer />
            </div>

            <CalloutCard title="Signs by quadrant — &quot;All Students Take Calculus&quot;">
              In QI <strong>All</strong> six functions are positive. In QII only <strong>S</strong>ine (and csc) are positive. In QIII only <strong>T</strong>angent (and cot). In QIV only <strong>C</strong>osine (and sec). This mnemonic, walked anticlockwise from the top-right, saves a lot of sign mistakes.
            </CalloutCard>

            <CalloutCard title="Two more Pythagorean identities">
              Dividing sin²x + cos²x = 1 by cos²x gives <strong>1 + tan²x = sec²x</strong>. Dividing by sin²x gives <strong>1 + cot²x = csc²x</strong>. All three identities are really the same identity wearing different clothes.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Each trig function is <strong>periodic</strong> — its values repeat. The unit-circle picture makes this obvious: rotating by a full 2π puts you back at the same point. So sin(x + 2π) = sin x, and similarly cos, sec, csc all have period 2π. The exceptions are tan and cot, which repeat every π (half a revolution) because rotating 180° flips both coordinates by the same factor.
            </p>

            <div className="mt-6 mb-6">
              <TrigGraphExplorer />
            </div>

            <CalloutCard title="Where sin and cos vanish">
              sin x = 0 exactly when x is an integer multiple of π (… −π, 0, π, 2π, …). cos x = 0 exactly at odd multiples of π/2 (… −π/2, π/2, 3π/2, …). Memorise these — they tell you where tan, cot, sec, csc are undefined.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 3.4
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Sum, difference, double, and product formulas
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The rest of the chapter is a catalogue of identities. They look like a lot at first, but every single one descends from just two:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              cos(x + y) = cos x cos y − sin x sin y
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              sin(x + y) = sin x cos y + cos x sin y
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Sign symmetries (which the unit circle makes obvious): <strong>sin(−x) = −sin x</strong> and <strong>cos(−x) = cos x</strong>. Replacing y with −y in the formulas above gives the difference formulas:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              cos(x − y) = cos x cos y + sin x sin y
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              sin(x − y) = sin x cos y − cos x sin y
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For tangent, divide the sin formula by the cos formula:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              tan(x ± y) = (tan x ± tan y) / (1 ∓ tan x tan y)
            </p>

            <CalloutCard title="Double-angle formulas">
              Set y = x in the sum formulas:<br />
              <strong>sin 2x = 2 sin x cos x</strong><br />
              <strong>cos 2x = cos²x − sin²x = 2 cos²x − 1 = 1 − 2 sin²x</strong><br />
              <strong>tan 2x = 2 tan x / (1 − tan²x)</strong><br />
              The three forms of cos 2x are equivalent — pick whichever cancels the other variables in the problem you&apos;re solving.
            </CalloutCard>

            <CalloutCard title="Triple-angle formulas">
              Combine sum and double:<br />
              <strong>sin 3x = 3 sin x − 4 sin³x</strong><br />
              <strong>cos 3x = 4 cos³x − 3 cos x</strong>
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two more families are especially useful for simplifying expressions and integrating. The <strong>sum-to-product</strong> identities convert sums of sines and cosines into products:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              sin x + sin y = 2 sin((x+y)/2) cos((x−y)/2)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              sin x − sin y = 2 cos((x+y)/2) sin((x−y)/2)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              cos x + cos y = 2 cos((x+y)/2) cos((x−y)/2)
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              cos x − cos y = −2 sin((x+y)/2) sin((x−y)/2)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The reverse — <strong>product-to-sum</strong> — comes from adding/subtracting the sum and difference formulas:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              2 cos x cos y = cos(x+y) + cos(x−y)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              2 sin x sin y = cos(x−y) − cos(x+y)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              2 sin x cos y = sin(x+y) + sin(x−y)
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              2 cos x sin y = sin(x+y) − sin(x−y)
            </p>

            <CalloutCard title="How to use this section">
              Don&apos;t memorise all of these — memorise the two sum formulas at the top, and learn how to derive the rest. Most exam problems test whether you can pick the right identity (sum vs product, double-angle vs half-angle) for the shape of the expression you&apos;re given.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Worked examples from this section: sin 15° = (√3 − 1)/(2√2), using the difference formula with 15° = 45° − 30°. cos 75° = (√6 − √2)/4, by the same trick. tan(π/8) = √2 − 1, by solving a quadratic that comes from tan(π/4) = 1 = 2t/(1 − t²) with t = tan(π/8).
            </p>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions sampled from a 25-question pool. Take your time.
            </p>
            <Quiz pool={GRADE_11_CH3_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 3 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
