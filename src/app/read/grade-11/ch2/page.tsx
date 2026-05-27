"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import CartesianProductGrid from "@/components/widgets/CartesianProductGrid";
import RelationFunctionChecker from "@/components/widgets/RelationFunctionChecker";
import FunctionGraphExplorer from "@/components/widgets/FunctionGraphExplorer";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH2_QUESTIONS } from "@/data/grade-11-ch2-questions";

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
  { number: 12, title: "Limits and Derivatives", href: "/read/grade-11/ch12", available: true },
  { number: 13, title: "Statistics", available: false },
  { number: 14, title: "Probability", available: false },
];

export default function Grade11Chapter2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Relations and Functions" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={2} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 2 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Relations and Functions
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
                  Pairing things up
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A lot of mathematics is about <strong>links between two quantities</strong>. The price of a coffee depends on its size. The area of a square depends on its side length. The shadow of a person depends on the sun&apos;s angle. In each case, we pair one value with another according to some rule.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This chapter makes that idea precise in three steps. First we define <strong>ordered pairs</strong> and the <strong>Cartesian product</strong> — the raw material for any pairing. Then a <strong>relation</strong> is just any rule that selects some of those pairs. Finally a <strong>function</strong> is a special kind of relation where the rule is unambiguous: every input has exactly one output.
            </p>

            <CalloutCard title="The big idea">
              All functions are relations, but not all relations are functions. The distinguishing rule: a function gives every input <em>exactly one</em> output — never zero, never two.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 2.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Cartesian Product of Sets
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An <strong>ordered pair</strong> (a, b) is just two elements written in a particular order. Order matters: (a, b) is <em>not</em> the same as (b, a) unless a = b. Two ordered pairs are equal only when their first elements match and their second elements match: (x, y) = (3, 5) means x = 3 and y = 5.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>Cartesian product</strong> of two non-empty sets A and B, written <strong>A × B</strong>, is the set of <em>all</em> ordered pairs (a, b) with a from A and b from B. If A has p elements and B has q elements, then A × B has exactly <strong>p × q</strong> ordered pairs.
            </p>

            <CalloutCard title="Order matters">
              (DL, 01) is a Delhi car with plate 01. (01, DL) is plate-01&apos;s car in some other state called DL. They are not the same pair. In general, A × B ≠ B × A unless A = B.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You can also extend this to three sets. A × A × A is the set of all <strong>ordered triplets</strong> (a, b, c). For real numbers, ℝ × ℝ is the familiar 2D plane (every point is an ordered pair of coordinates), and ℝ × ℝ × ℝ is 3D space.
            </p>

            <div className="mt-6 mb-6">
              <CartesianProductGrid />
            </div>

            <CalloutCard title="Counting check">
              <strong>n(A × B) = n(A) × n(B)</strong>. If either set is empty, the product is empty. If either is infinite (and the other non-empty), the product is infinite.
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 2.3
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Relations
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>relation R from A to B</strong> is any subset of A × B. In other words, you take all possible ordered pairs and keep only the ones that satisfy some rule. Example: from A = {`{1, 2, 3, 4, 5, 6}`} to itself, the rule <em>y = x + 1</em> picks out the pairs (1,2), (2,3), (3,4), (4,5), (5,6).
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Every relation gives three sets worth naming:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Domain</strong> — all <em>first</em> elements that appear in R.</li>
              <li>• <strong>Range</strong> — all <em>second</em> elements that appear in R.</li>
              <li>• <strong>Codomain</strong> — the whole target set B.</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The range is always a subset of the codomain (sometimes equal, sometimes smaller).
            </p>

            <CalloutCard title="How many relations can there be?">
              If n(A) = p and n(B) = q, then A × B has pq elements. A relation is any subset, so the total number of relations from A to B is <strong>2<sup>pq</sup></strong> — that&apos;s how many subsets a set with pq elements has.
            </CalloutCard>

            <CalloutCard title="Three ways to describe a relation">
              <strong>Roster form</strong> — list every pair: R = {`{(1,2), (2,3), (3,4)}`}.<br />
              <strong>Set-builder form</strong> — state the rule: R = {`{(x, y) : y = x + 1}`}.<br />
              <strong>Arrow diagram</strong> — draw arrows from each first element to its image.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 2.4
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Functions
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>function</strong> f from A to B (written <strong>f : A → B</strong>) is a relation with two extra requirements:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>1. Every element of A must appear as a first element somewhere in f. (No element of A is left out.)</li>
              <li>2. No element of A can appear as a first element twice with two different images. (No ambiguity.)</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              If (a, b) belongs to f, we write <strong>f(a) = b</strong>. We call b the <em>image</em> of a, and a the <em>preimage</em> of b. A relation fails to be a function in exactly two ways: some element of A has no image, or some element of A has more than one image.
            </p>

            <div className="mt-6 mb-6">
              <RelationFunctionChecker />
            </div>

            <CalloutCard title="Real-valued vs real function">
              A <strong>real-valued function</strong> has its <em>range</em> inside ℝ. A <strong>real function</strong> has both its <em>domain and range</em> inside ℝ. Almost every function you&apos;ll meet in this course is a real function.
            </CalloutCard>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 2.4.1
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Eight functions you should recognise on sight
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The same handful of function types come up over and over. Learning their graphs, domains, and ranges by sight pays off for the rest of the course.
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Identity</strong>: f(x) = x. Straight line through the origin, slope 1.</li>
              <li>• <strong>Constant</strong>: f(x) = c. Horizontal line; range is the single value {`{c}`}.</li>
              <li>• <strong>Polynomial</strong>: a₀ + a₁x + a₂x² + … with non-negative integer exponents. Includes x², x³, and so on.</li>
              <li>• <strong>Rational</strong>: f(x)/g(x), where both are polynomials and g(x) ≠ 0. Domain excludes the zeros of g.</li>
              <li>• <strong>Modulus</strong>: f(x) = |x|. V-shaped graph; range is [0, ∞).</li>
              <li>• <strong>Signum</strong>: returns −1, 0, or 1 depending on the sign of x. Range is {`{−1, 0, 1}`}.</li>
              <li>• <strong>Greatest integer</strong>: f(x) = ⌊x⌋. Step function — jumps at each integer.</li>
            </ul>

            <div className="mt-6 mb-6">
              <FunctionGraphExplorer />
            </div>

            <CalloutCard title="Why 1/x has range ℝ \ {0}">
              For any non-zero output y, you can solve x = 1/y and get back a valid input. The only output you can never produce is 0 — there&apos;s no real x with 1/x = 0. So the range is every real number <em>except</em> 0.
            </CalloutCard>
          </section>

          {/* ── SECTION 6 ── */}
          <section id="section6" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>6</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 2.4.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Algebra of Real Functions
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Real-valued functions defined on the same set X can be combined pointwise — meaning you apply the operation at <em>each</em> input separately. If f and g are both functions X → ℝ:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (f + g)(x) = f(x) + g(x)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (f − g)(x) = f(x) − g(x)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (α f)(x) = α · f(x){"   "}(scalar multiplication)
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (f g)(x) = f(x) · g(x){"   "}(pointwise product)
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (f / g)(x) = f(x) / g(x){"   "}where g(x) ≠ 0
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              These look like ordinary arithmetic — and that&apos;s the point. Functions inherit the algebra of numbers, evaluated one input at a time. The one catch: for division, you must exclude any x where the denominator is zero.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Worked example: for f(x) = x² and g(x) = 2x + 1, (f + g)(x) = x² + 2x + 1, (fg)(x) = 2x³ + x², and (f/g)(x) = x² / (2x + 1), defined for x ≠ −½.
            </p>

            <CalloutCard title="Domain of a quotient">
              The domain of f/g is the common domain of f and g, minus any x where g(x) = 0. For a rational function p(x)/q(x), the domain is all of ℝ except the roots of q(x).
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
            <Quiz pool={GRADE_11_CH2_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 2 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
