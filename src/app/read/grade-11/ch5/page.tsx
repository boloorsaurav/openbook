"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import InequalitySolver from "@/components/widgets/InequalitySolver";
import NumberLineBuilder from "@/components/widgets/NumberLineBuilder";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH5_QUESTIONS } from "@/data/grade-11-ch5-questions";

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

export default function Grade11Chapter5Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Linear Inequalities" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={5} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 5 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Linear Inequalities
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
                  When &quot;equals&quot; isn&apos;t the right question
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Real problems often ask &quot;at least how much?&quot; or &quot;at most how many?&quot; rather than &quot;exactly what?&quot;. Speed limits cap a number from above. A pass mark sets a floor. A budget caps a sum. These situations call for <strong>inequalities</strong> instead of equations.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An inequality uses one of four signs to compare two quantities:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>&lt;</strong> &nbsp; strictly less than</li>
              <li>• <strong>&gt;</strong> &nbsp; strictly greater than</li>
              <li>• <strong>≤</strong> &nbsp; less than or equal to</li>
              <li>• <strong>≥</strong> &nbsp; greater than or equal to</li>
            </ul>

            <CalloutCard title="Strict vs slack">
              An inequality with &lt; or &gt; is called <strong>strict</strong> — the endpoint is excluded. An inequality with ≤ or ≥ is called <strong>slack</strong> — the endpoint is included. This distinction matters for the kind of circle you draw on the number line: open for strict, filled for slack.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 5.2
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Kinds of inequalities
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Inequalities come in a few flavours. <strong>Numerical</strong> ones involve only numbers (3 &lt; 5). <strong>Literal</strong> ones involve variables (x &lt; 5). A <strong>double inequality</strong> combines two into one: 3 &lt; x &lt; 5 says x is strictly between 3 and 5.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The shape of the expression matters too:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Linear in one variable</strong>: ax + b &lt; 0 (with a ≠ 0). Example: 2x + 3 &lt; 7.</li>
              <li>• <strong>Linear in two variables</strong>: ax + by &lt; c. Example: x + 2y ≥ 4.</li>
              <li>• <strong>Quadratic</strong>: ax² + bx + c &lt; 0. Example: x² − 5x + 6 &gt; 0.</li>
            </ul>

            <CalloutCard title="Chapter scope">
              This chapter only studies <strong>linear</strong> inequalities — the variable appears to the first power, never squared or under a root. The two-variable case (graphing half-planes) is set up here but explored in detail in the chapter on Linear Programming in Class 12.
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Section 5.3
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Solving and graphing on a number line
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>solution</strong> of an inequality is any value of x that makes the statement true. The full collection of solutions is the <strong>solution set</strong>. Unlike equations, an inequality usually has infinitely many solutions — an entire interval of real numbers.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Solving a linear inequality uses just two rules, both nearly identical to the rules for equations — with one critical exception:
            </p>

            <CalloutCard title="The two rules">
              <strong>Rule 1.</strong> You may add or subtract the same number from both sides. The sign stays the same.<br /><br />
              <strong>Rule 2.</strong> You may multiply or divide both sides by the same <em>positive</em> number. The sign stays the same.<br /><br />
              <strong>Rule 2, special case.</strong> If you multiply or divide both sides by a <em>negative</em> number, you must <strong>flip the inequality sign</strong>. So &lt; becomes &gt;, and ≤ becomes ≥.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The reason for the flip: multiplying by −1 reflects the number line. If 3 &lt; 5, then −3 &gt; −5. The larger number swaps to the smaller side, and the inequality sign has to swap with it.
            </p>

            <div className="mt-6 mb-6">
              <InequalitySolver />
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Once you have a solution like <em>x &lt; 3</em> or <em>x ≥ 1</em>, draw it on a number line:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Strict</strong> (&lt; or &gt;): open circle at the boundary, the boundary itself is NOT included.</li>
              <li>• <strong>Slack</strong> (≤ or ≥): filled circle at the boundary, the boundary IS included.</li>
              <li>• Darken the ray that contains all the solutions — left for &lt; and ≤, right for &gt; and ≥.</li>
            </ul>

            <div className="mt-6 mb-6">
              <NumberLineBuilder />
            </div>

            <CalloutCard title="Interval notation">
              The solution sets above can be written with brackets:<br />
              <strong>x &lt; a</strong> ⟶ (−∞, a) &nbsp; — round bracket means &quot;not included&quot;<br />
              <strong>x ≤ a</strong> ⟶ (−∞, a] &nbsp; — square bracket means &quot;included&quot;<br />
              <strong>x &gt; a</strong> ⟶ (a, ∞)<br />
              <strong>x ≥ a</strong> ⟶ [a, ∞)<br />
              ∞ always gets a round bracket — infinity is never a number that&apos;s &quot;included&quot;.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>system of inequalities</strong> is solved by finding the values of x that satisfy <em>all</em> of them — that is, the intersection of the individual solution sets. For example, the system 3x − 7 &lt; 5 + x and 11 − 5x ≤ 1 reduces to x &lt; 6 and x ≥ 2, giving the joint solution 2 ≤ x &lt; 6, or [2, 6) in interval notation.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <strong>Double inequalities</strong> like −8 ≤ 5x − 3 &lt; 7 are solved by applying the same operation to all three parts at once: add 3 everywhere to get −5 ≤ 5x &lt; 10, then divide by 5 to get −1 ≤ x &lt; 2.
            </p>

            <CalloutCard title="Word-problem checklist">
              1. Read the problem twice. Identify what&apos;s being asked, and assign a variable.<br />
              2. Translate &quot;at least&quot; / &quot;no more than&quot; / &quot;exceeds&quot; into the right inequality sign.<br />
              3. Solve algebraically with the two rules above.<br />
              4. Re-read the problem and check your answer makes sense in context (e.g., a count can&apos;t be negative).
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
            <Quiz pool={GRADE_11_CH5_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 5 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
