"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import LimitExplorer from "@/components/widgets/LimitExplorer";
import SecantToTangent from "@/components/widgets/SecantToTangent";
import DerivativeRules from "@/components/widgets/DerivativeRules";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH12_QUESTIONS } from "@/data/grade-11-ch12-questions";

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
  { number: 14, title: "Probability", available: false },
];

export default function Grade11Chapter12Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Limits and Derivatives" />
      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={12} />
        </div>
        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 12 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>Limits and Derivatives</h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["50 min", "3 interactive", "10-question quiz"].map((pill) => (
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
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The first calculus chapter</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <strong>Calculus</strong> is the mathematics of <em>change</em>. Two ideas drive it. The first is the <strong>limit</strong> — what value does a function approach as the input gets arbitrarily close to some target? The second is the <strong>derivative</strong> — how fast is the function changing, right at a single instant?
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Limits and derivatives are tied together: the derivative is itself defined as a limit. Get comfortable with limits, and derivatives become straightforward. Get comfortable with derivatives, and you unlock optimization, motion analysis, and most of modern physics.
            </p>

            <CalloutCard title="A motivating example">
              A ball is dropped from a cliff. Its distance fallen at time t is s = 4.9t². The <em>average</em> velocity between t = 1 and t = 2 is (19.6 − 4.9)/(2 − 1) = 14.7 m/s. But what&apos;s the velocity <em>exactly</em> at t = 2 — the speed on a speedometer at one instant? That&apos;s a derivative.
            </CalloutCard>
          </section>

          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 12.3</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Limits</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>limit of f(x) as x approaches a</strong> is what value f(x) gets close to as x is brought close to a — without necessarily reaching it. It&apos;s written:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              lim x→a f(x) = L
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You can approach a from two sides — values less than a (the <strong>left-hand limit</strong>) or greater than a (the <strong>right-hand limit</strong>). The two-sided limit exists only when both sides agree:
            </p>

            <CalloutCard title="The existence rule">
              <strong>lim x→a f(x) exists ⟺ lim x→a⁻ f(x) = lim x→a⁺ f(x)</strong>.<br />
              If the two one-sided limits give different answers (or one of them blows up), the limit at a does not exist.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An important subtlety: the limit at a is about what happens <em>near</em> a, not <em>at</em> a. The function might be undefined at a, or even defined to be a different value — the limit doesn&apos;t care. For example, f(x) = (x² − 4)/(x − 2) is undefined at x = 2, but lim x→2 f(x) = 4 because the function equals x + 2 everywhere except x = 2.
            </p>

            <div className="mt-6 mb-6">
              <LimitExplorer />
            </div>
          </section>

          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 12.3.1</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The algebra of limits</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Limits behave well under all the usual arithmetic operations. If lim x→a f(x) = L and lim x→a g(x) = M (and both exist), then:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              lim (f + g) = L + M
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              lim (f − g) = L − M
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              lim (f · g) = L · M
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              lim (f / g) = L / M, &nbsp;provided M ≠ 0
            </p>

            <CalloutCard title="Polynomials and rational functions">
              For any polynomial p(x), <strong>lim x→a p(x) = p(a)</strong> — just plug in. For a rational function p(x)/q(x), the limit at a equals p(a)/q(a), provided q(a) ≠ 0. When q(a) = 0, factor and cancel — the 0/0 form often hides a removable singularity.
            </CalloutCard>

            <CalloutCard title="Three trig limits worth memorising">
              <strong>lim x→0 sin x / x = 1</strong> &nbsp;(the most important trig limit)<br />
              <strong>lim x→0 (1 − cos x) / x = 0</strong><br />
              <strong>lim x→0 tan x / x = 1</strong><br />
              These three appear constantly when you start computing derivatives of trig functions.
            </CalloutCard>
          </section>

          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 12.4</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The derivative</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>derivative</strong> of a function f at a point a is the instantaneous rate of change of f at a. Equivalently, it&apos;s the slope of the tangent line to the graph of f at the point (a, f(a)). It&apos;s defined as a limit:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              f′(a) = lim h→0 [f(a + h) − f(a)] / h
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The expression in brackets is the slope of the <strong>secant line</strong> through (a, f(a)) and (a+h, f(a+h)). As h shrinks toward 0, the secant pivots and merges into the tangent. The slope it converges to is the derivative.
            </p>

            <div className="mt-6 mb-6">
              <SecantToTangent />
            </div>

            <CalloutCard title="Notation, notation, notation">
              The same idea has many names: <strong>f′(x)</strong>, <strong>df/dx</strong>, <strong>d/dx [f(x)]</strong>, <strong>y′</strong>, <strong>dy/dx</strong>. They all mean the derivative. The Leibniz notation df/dx is handy because the &quot;variables&quot; you&apos;re differentiating with respect to are visible.
            </CalloutCard>
          </section>

          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 12.5</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Standard derivatives and rules</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You almost never compute derivatives from the limit definition in practice. Instead, you memorise a short table of standard derivatives and use a handful of combination rules.
            </p>

            <CalloutCard title="The power rule">
              For any real number n: <strong>d/dx (xⁿ) = n · x^(n−1)</strong>.<br />
              Drop the exponent in front, subtract 1 from the exponent. Works for positive, negative, and fractional n.
            </CalloutCard>

            <CalloutCard title="Combination rules">
              <strong>Sum / difference</strong>: (f ± g)′ = f′ ± g′.<br />
              <strong>Constant multiple</strong>: (cf)′ = c·f′.<br />
              <strong>Product</strong>: (fg)′ = f′g + fg′.<br />
              <strong>Quotient</strong>: (f/g)′ = (f′g − fg′)/g².
            </CalloutCard>

            <div className="mt-6 mb-6">
              <DerivativeRules />
            </div>

            <CalloutCard title="The Sandwich (or Squeeze) Theorem">
              If three functions satisfy f(x) ≤ g(x) ≤ h(x) for x near a, and <strong>lim f = lim h = L</strong>, then lim g must equal L too. Useful for limits that resist direct evaluation — &quot;sandwich&quot; the tricky function between two nicer ones.
            </CalloutCard>
          </section>

          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Check Your Understanding</h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>10 questions sampled from a 25-question pool. Take your time.</p>
            <Quiz pool={GRADE_11_CH12_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 12 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
