"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import CountingPrinciple from "@/components/widgets/CountingPrinciple";
import FactorialCalculator from "@/components/widgets/FactorialCalculator";
import WordArranger from "@/components/widgets/WordArranger";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH6_QUESTIONS } from "@/data/grade-11-ch6-questions";

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

export default function Grade11Chapter6Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Permutations and Combinations" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={6} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 6 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Permutations and Combinations
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
                  Counting without listing
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              How many 4-digit PINs are possible? How many ways can you seat 5 friends at a round table? How many 5-card hands are there from a 52-card deck? You could in principle list them all — but the numbers get huge fast (52-card hands alone give 2.6 million). This chapter is about counting them <em>without</em> writing them out.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two distinctions drive every problem:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• Are repetitions allowed?</li>
              <li>• Does the order matter (arrangement) or not (selection)?</li>
            </ul>

            <CalloutCard title="Permutations vs combinations">
              <strong>Permutation</strong> = arrangement, order matters. ABC ≠ BCA.<br />
              <strong>Combination</strong> = selection, order doesn&apos;t matter. {`{A, B, C}`} = {`{B, C, A}`}.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 6.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Fundamental Principle of Counting
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The whole subject is built on one rule. If a process happens in stages and stage 1 has m possible outcomes, stage 2 has n, stage 3 has p, and so on — then the total number of outcomes is the <strong>product</strong>:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              Total = m × n × p × …
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Example: 3 soups, 5 mains, 2 desserts gives 3 × 5 × 2 = 30 meal combinations. Example: a 4-digit PIN where each slot is 0–9 gives 10 × 10 × 10 × 10 = 10,000.
            </p>

            <CalloutCard title="Repetition or not?">
              When <strong>repetition is allowed</strong>, each stage has the full menu of choices — same number every time. When <strong>repetition is not allowed</strong>, each pick removes one option for the next stage. The first choice has all options; the second has one fewer; the third has two fewer; and so on.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <CountingPrinciple />
            </div>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 6.3
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Permutations — order matters
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>permutation</strong> is an arrangement of objects in a definite order. The number of ways to arrange n distinct objects taking r at a time, with no repetition, is:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              nPr = n × (n−1) × (n−2) × … × (n−r+1) = n! / (n−r)!
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The shorthand <strong>n!</strong> (read &quot;n factorial&quot;) means the product of every natural number from 1 up to n. By convention, <strong>0! = 1</strong>. The factorial grows fast: 5! = 120, 10! ≈ 3.6 million, 20! ≈ 2.4 × 10¹⁸.
            </p>

            <CalloutCard title="Useful identity">
              n! = n × (n−1)! — so 7! = 7 × 6! = 7 × 720 = 5040. This is how the formula collapses: nPr = n!/(n−r)! cancels all the factors below (n−r+1).
            </CalloutCard>

            <div className="mt-6 mb-6">
              <FactorialCalculator />
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              When repetition <em>is</em> allowed, each slot has the full n choices independently, so the count is just <strong>n^r</strong>. Example: 4-letter words from ROSE without repetition give 4! = 24; with repetition give 4⁴ = 256.
            </p>

            <CalloutCard title="When objects are identical">
              If among n objects, p are identical of one kind, the count of distinct arrangements drops to <strong>n! / p!</strong>. With multiple identical groups (p₁ of one kind, p₂ of another, …), the formula is <strong>n! / (p₁! · p₂! · …)</strong>. ALLAHABAD has 9 letters with 4 As, 2 Ls, 1 H, 1 B, 1 D → 9! / (4!·2!) = 7560 distinct arrangements.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <WordArranger />
            </div>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 6.4
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Combinations — order doesn&apos;t matter
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>combination</strong> is a selection of objects where the order is irrelevant. Choosing {`{Alice, Bob, Carol}`} for a committee is the same as choosing {`{Carol, Alice, Bob}`} — same three people. The count is denoted <strong>nCr</strong>.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Here&apos;s the key relationship: every selection of r objects can be arranged in r! orders. So the number of permutations is r! times the number of combinations:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              nPr = nCr × r!   ⇒   nCr = n! / (r! · (n−r)!)
            </p>

            <CalloutCard title="Symmetry of nCr">
              Picking r items to keep is the same as picking n−r items to leave behind:<br />
              <strong>nCr = nC(n−r)</strong>.<br />
              So 52C5 (choose 5 cards from 52) equals 52C47 (choose 47 to leave) — both give 2,598,960. Use the smaller r in calculations.
            </CalloutCard>

            <CalloutCard title="Boundary values + Pascal's identity">
              <strong>nC0 = 1</strong> (one way to choose nothing). <strong>nCn = 1</strong> (one way to choose everything). And the recursion that builds Pascal&apos;s triangle: <strong>nCr + nC(r−1) = (n+1)Cr</strong>.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A worked example: how many 4-card hands from a 52-card deck contain exactly one Ace? Choose 1 Ace from 4: 4C1 = 4. Choose 3 non-Aces from 48: 48C3 = 17,296. By the multiplication principle, 4 × 17,296 = 69,184 such hands.
            </p>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Strategy
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Putting it together
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Many problems mix selection and arrangement. A common pattern: <strong>first select, then arrange</strong>. To form a 5-letter word from INVOLUTE using exactly 3 vowels and 2 consonants — first select (4C3 ways for vowels, 4C2 for consonants), then arrange the 5 chosen letters (5! ways). Multiply: 4 × 6 × 120 = 2880.
            </p>

            <CalloutCard title="The gap method">
              When the question says &quot;no two X are adjacent&quot;, seat the non-X items first, then place the X items into the gaps between them. For 5 girls and 3 boys with no two boys together: arrange 5 girls (5! = 120 ways), then pick 3 of the 6 gaps for boys (6P3 = 120 ways). Total: 120 × 120 = 14,400.
            </CalloutCard>

            <CalloutCard title="At least / at most">
              Phrases like &quot;at least 1 girl&quot; usually mean: total cases minus the &quot;zero girls&quot; case. Or sum the individual cases (1 girl, 2 girls, 3 girls, …) — pick whichever path is shorter.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              When you&apos;re stuck, ask three diagnostic questions:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>1. Does order matter? &nbsp;(permutation vs combination)</li>
              <li>2. Are repetitions allowed? &nbsp;(n^r vs nPr)</li>
              <li>3. Is there a constraint that splits into cases? &nbsp;(sum the cases)</li>
            </ul>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions sampled from a 25-question pool. Take your time.
            </p>
            <Quiz pool={GRADE_11_CH6_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 6 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
