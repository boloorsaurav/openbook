"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import LockerSimulation from "@/components/widgets/LockerSimulation";
import OddSumBuilder from "@/components/widgets/OddSumBuilder";
import SquareRootEstimator from "@/components/widgets/SquareRootEstimator";
import CubeBuilder from "@/components/widgets/CubeBuilder";
import Quiz from "@/components/widgets/Quiz";
import { CH1_QUESTIONS } from "@/data/ch1-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Playing with Numbers", available: false },
  { number: 3, title: "Understanding Quadrilaterals", available: false },
  { number: 4, title: "Data Handling and Graphing", available: false },
  { number: 5, title: "Introduction to Graphs", available: false },
  { number: 6, title: "Visualising Solid Shapes", available: false },
  { number: 7, title: "Algebraic Expressions and Identities", available: false },
];

export default function Chapter1Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · A Square and A Cube" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={1} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">
          {/* ── INTRO: The Locker Puzzle ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 1 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              A Square and A Cube
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["25 min", "4 interactive", "10-question quiz"].map((pill) => (
                <span key={pill} className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)", borderWidth: "1.5px" }}>
                  {pill}
                </span>
              ))}
            </div>
            <hr className="mt-2 mb-8" style={{ borderColor: "var(--border)" }} />

            {/* Section 1 header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>1</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Introduction</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The Locker Puzzle</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Queen Ratnamanjuri left a puzzle in her will. She placed her fortune in a room with{" "}
              <strong>100 lockers</strong>, and invited 100 relatives to toggle them one by one.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Person 1 opens every locker. Person 2 toggles every 2nd locker. Person 3 toggles every
              3rd locker. This continues until all 100 have gone.
            </p>

            <CalloutCard title="The Puzzle">
              At the end, only some lockers remain open. <strong>Which ones?</strong> Khoisnam
              figured it out instantly. Can you?
            </CalloutCard>

            <LockerSimulation />

            <CalloutCard title="Why Perfect Squares?">
              A locker is toggled once per factor. Most numbers have factors in pairs (e.g., 1×6, 2×3 for 6),
              giving an <em>even</em> number of toggles — so they end closed. But a <strong>perfect
              square</strong> has one factor that pairs with itself (e.g., 2×2 = 4), giving an <em>odd</em>{" "}
              number of toggles — so it stays open.
            </CalloutCard>
          </section>

          {/* ── SECTION 1.1: Square Numbers ── */}
          <section id="squares" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 1.1</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Square Numbers</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The numbers 1, 4, 9, 16, 25 … are called <strong>square numbers</strong> (or perfect
              squares). Each is the area of a square whose side is a whole number.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              We write n × n = n². For example, 3² = 9 means a 3-unit square has area 9 sq. units.
              The squares of natural numbers — 1², 2², 3², … — are the perfect squares.
            </p>

            <CalloutCard title="Units Digit Rule">
              A perfect square can only end in <strong>0, 1, 4, 5, 6, or 9</strong>. If a number
              ends in 2, 3, 7, or 8, it is <em>definitely not</em> a perfect square.
            </CalloutCard>

            <p className="leading-relaxed mt-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This rule gives us a quick filter: 2048 ends in 8 → not a square. 1089 ends in 9 →
              could be (and indeed 33² = 1089).
            </p>
          </section>

          {/* ── SECTION: Patterns ── */}
          <section id="patterns" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Patterns</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Patterns of Perfect Squares</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              There is a beautiful pattern hiding inside perfect squares. The differences between
              consecutive squares are always <strong>odd numbers</strong>:
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              4 − 1 = <strong>3</strong> &nbsp;·&nbsp; 9 − 4 = <strong>5</strong> &nbsp;·&nbsp;
              16 − 9 = <strong>7</strong> &nbsp;·&nbsp; 25 − 16 = <strong>9</strong>
            </p>
            <p className="leading-relaxed mt-4 mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This means: adding successive odd numbers (1, 3, 5, 7…) starting from 1 always gives
              a perfect square. The widget below makes this visual.
            </p>

            <OddSumBuilder />

            <p className="leading-relaxed mt-2" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Each L-shaped ring adds the next odd number. The growing square proves that the sum
              of the first n odd numbers equals n².
            </p>
          </section>

          {/* ── SECTION: Square Roots ── */}
          <section id="roots" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Square Roots</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Finding √n</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              If a square has area 49 sq. cm, its side length is 7 cm — because 7² = 49. We call
              7 the <strong>square root</strong> of 49, written √49 = 7.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For numbers that aren't perfect squares, we can <em>estimate</em> the square root by
              locating it between two known squares and narrowing down the interval.
            </p>

            <SquareRootEstimator />

            <CalloutCard title="Finding Square Roots via Prime Factorisation">
              Write the number as a product of primes. If every prime factor appears an even number
              of times, it&apos;s a perfect square. The square root is the product of one of each pair.{" "}
              <strong>Example:</strong> 324 = 2² × 3⁴ = (2 × 3²)² → √324 = 18.
            </CalloutCard>
          </section>

          {/* ── SECTION 1.2: Cubes ── */}
          <section id="cubes" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 1.2</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Cubic Numbers</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>cube</strong> is a solid with all equal sides meeting at right angles. If the
              side length is n, the volume is n × n × n = n³ unit cubes.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The numbers 1, 8, 27, 64, 125 … are <strong>perfect cubes</strong>: 1³, 2³, 3³, 4³, 5³.
              Drag the slider to see how unit cubes stack up into a cube of side n.
            </p>

            <CubeBuilder />

            <CalloutCard title="Not Every Number is a Perfect Cube">
              9 is not a perfect cube because there is no integer n where n³ = 9. The nearest cubes
              are 2³ = 8 and 3³ = 27.
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
            <Quiz pool={CH1_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 1 of 7</span>
          </div>
        </main>
      </div>
    </div>
  );
}
