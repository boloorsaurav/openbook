"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import DescriptiveStats from "@/components/widgets/DescriptiveStats";
import VarianceCalculator from "@/components/widgets/VarianceCalculator";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH13_QUESTIONS } from "@/data/grade-11-ch13-questions";

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
  { number: 13, title: "Statistics", href: "/read/grade-11/ch13", available: true },
  { number: 14, title: "Probability", href: "/read/grade-11/ch14", available: true },
];

export default function Grade11Chapter13Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Statistics" />
      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={13} />
        </div>
        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 13 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>Statistics</h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["45 min", "2 interactive", "10-question quiz"].map((pill) => (
                <span key={pill} className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)", borderWidth: "1.5px" }}>
                  {pill}
                </span>
              ))}
            </div>
            <hr className="mt-2 mb-8" style={{ borderColor: "var(--border)" }} />

            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>1</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Introduction</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The average is only half the story</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two cricket batsmen both average 50 runs per innings. One scores 50, 50, 50, 50, 50. The other scores 0, 0, 0, 0, 250. Same mean. Wildly different players. To capture the difference you need a second number: one that says how <em>spread out</em> the data is — a <strong>measure of dispersion</strong>.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This chapter introduces three measures of central tendency (mean, median, mode — you&apos;ve seen most before) and four measures of dispersion: <strong>range</strong>, <strong>quartile deviation</strong>, <strong>mean deviation</strong>, and the all-important <strong>standard deviation</strong>.
            </p>

            <CalloutCard title="Why dispersion matters">
              The mean tells you where the centre is. Dispersion tells you how reliable that centre is — whether the data really clusters around it, or whether the average just averages over chaos.
            </CalloutCard>

            <CalloutCard title="Quick refresher — central tendency">
              <strong>Mean</strong>: x̄ = (sum of all values) / (number of values).<br />
              <strong>Median</strong>: middle value when data is sorted. For even n, average of the two middle values.<br />
              <strong>Mode</strong>: most frequently occurring value (may not be unique).
            </CalloutCard>
          </section>

          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 13.3</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Range — the crudest dispersion</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The simplest measure of spread is the <strong>range</strong>:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              Range = Maximum − Minimum
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For Batsman A (0, 5, 0, 100, 8, 117, 6) the range is 117. For Batsman B (50, 55, 60, 52, 48, 46, 58) it&apos;s 14. That difference captures the volatility instantly.
            </p>

            <CalloutCard title="Range's blind spot">
              The range only depends on the two extreme values. It ignores everything in the middle. A single outlier can balloon the range while the bulk of the data sits tight. For a more honest picture, we need measures that involve <em>every</em> data point.
            </CalloutCard>
          </section>

          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 13.4</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Mean Deviation</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A better idea: for each data point, measure how far it sits from the centre. Then average those distances. That&apos;s the <strong>mean deviation</strong>.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You might first try averaging the raw differences (xᵢ − x̄), but here&apos;s the catch: <strong>the sum of deviations from the mean is always zero</strong>. The positives and negatives cancel exactly. That&apos;s why we use <em>absolute values</em>:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              M.D.(x̄) = (1/n) · Σ |xᵢ − x̄|
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You can compute mean deviation from <em>any</em> central value — mean, median, mode — but mean and median are the standard choices. For grouped data, multiply each |xᵢ − a| by its frequency fᵢ before summing, and divide by N (total frequency) instead of n.
            </p>

            <CalloutCard title="Why mean deviation isn't the final answer">
              Two problems with M.D.: (1) absolute values are awkward to do algebra with — they don&apos;t differentiate nicely. (2) M.D. weights every deviation equally, so it under-emphasises the few really extreme observations that often matter most. The fix to both problems leads to <strong>standard deviation</strong>.
            </CalloutCard>
          </section>

          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 13.5</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Variance and Standard Deviation</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              To kill the sign problem cleanly, square the deviations instead of taking absolute values. That gives the <strong>variance</strong> — the mean of squared deviations from the mean:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              σ² = (1/n) · Σ (xᵢ − x̄)²
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Variance has the wrong units though — if your data is in metres, variance comes out in square metres. To get back to the original units, take the square root:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              σ = √variance = √((1/n) · Σ (xᵢ − x̄)²)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              That&apos;s the <strong>standard deviation</strong> — the dominant measure of dispersion in all of statistics, physics, and machine learning. Squared deviations also do something M.D. doesn&apos;t: they <em>over-weight</em> extreme values, which is usually what you want.
            </p>

            <div className="mt-6 mb-6">
              <VarianceCalculator />
            </div>

            <CalloutCard title="Shortcut formula for variance">
              The identity Σ(xᵢ − x̄)² = Σxᵢ² − n·x̄² gives a useful shortcut:<br />
              <strong>σ² = (1/n) · Σxᵢ² − x̄²</strong>.<br />
              You don&apos;t have to compute every deviation — just sum the data and sum the squared data, then combine.
            </CalloutCard>

            <CalloutCard title="Coefficient of variation — comparing apples to oranges">
              To compare the dispersion of two datasets in different units (heights in cm vs weights in kg), use the dimensionless <strong>coefficient of variation</strong>:<br />
              <strong>C.V. = (σ / x̄) × 100%</strong>.<br />
              A larger C.V. means more variability relative to the mean.
            </CalloutCard>
          </section>

          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Tools of the trade</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Try it on your own data</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Type any list of numbers — your test scores, your monthly expenses, anything — and see all the measures computed at once. A great exercise: compare a tightly clustered dataset to a volatile one and notice which measures react most strongly.
            </p>

            <div className="mt-6 mb-6">
              <DescriptiveStats />
            </div>
          </section>

          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Check Your Understanding</h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>10 questions sampled from a 25-question pool. Take your time.</p>
            <Quiz pool={GRADE_11_CH13_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 13 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
