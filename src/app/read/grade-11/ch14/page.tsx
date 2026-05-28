"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import EventCalculator from "@/components/widgets/EventCalculator";
import CardDeckProbability from "@/components/widgets/CardDeckProbability";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH14_QUESTIONS } from "@/data/grade-11-ch14-questions";

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

export default function Grade11Chapter14Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Probability" />
      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={14} />
        </div>
        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 14 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>Probability</h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["40 min", "2 interactive", "10-question quiz"].map((pill) => (
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
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Measuring chance</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <strong>Probability</strong> is the mathematics of uncertainty. It turns vague phrases like &quot;likely&quot;, &quot;unlikely&quot;, &quot;a sure thing&quot; into precise numbers between 0 and 1. A probability of 0 means the event cannot happen; a probability of 1 means it must happen; anything between measures the degree of plausibility.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The vocabulary builds on what you already know from sets: a <strong>sample space</strong> S is the set of all possible outcomes, and an <strong>event</strong> is any subset of S. From there, the addition rule, complement rule, and a few axioms are all you need.
            </p>

            <CalloutCard title="Quick refresher — sample space">
              A coin tossed twice has sample space S = {`{HH, HT, TH, TT}`} — four equally likely outcomes. Rolling one die: S = {`{1, 2, 3, 4, 5, 6}`}. The sample space is always finite (in this chapter) and every outcome is one element of it.
            </CalloutCard>
          </section>

          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 14.1</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Events — the vocabulary</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An <strong>event</strong> is any subset of the sample space. Events have special names depending on their shape:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Impossible event</strong> — the empty set ∅. Probability 0.</li>
              <li>• <strong>Sure event</strong> — the whole sample space S. Probability 1.</li>
              <li>• <strong>Simple (elementary) event</strong> — exactly one outcome. There are n(S) of these in total.</li>
              <li>• <strong>Compound event</strong> — more than one outcome.</li>
              <li>• <strong>Complementary event A′</strong> — everything in S that is NOT in A. So A′ = S − A.</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two events can be combined using set operations:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>A or B</strong> &nbsp;= &nbsp; A ∪ B &nbsp; (at least one occurs).</li>
              <li>• <strong>A and B</strong> &nbsp;= &nbsp; A ∩ B &nbsp; (both occur).</li>
              <li>• <strong>A but not B</strong> &nbsp;= &nbsp; A − B &nbsp;=&nbsp; A ∩ B′.</li>
            </ul>

            <CalloutCard title="Mutually exclusive vs exhaustive">
              <strong>Mutually exclusive</strong> events can&apos;t both happen: A ∩ B = ∅. (Drawing one card &quot;is an ace&quot; and &quot;is a king&quot; are mutually exclusive.)<br />
              <strong>Exhaustive</strong> events cover the whole sample space: their union equals S. (Drawing one card &quot;is red&quot; and &quot;is black&quot; are exhaustive.)<br />
              Events that are <em>both</em> mutually exclusive and exhaustive partition S into disjoint pieces — useful when you split a problem into cases.
            </CalloutCard>
          </section>

          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 14.2</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The three axioms of probability</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Probability is a function that assigns a number P(E) to every event E, obeying three simple rules:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Axiom 1.  P(E) ≥ 0 for every event E.
            </p>
            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Axiom 2.  P(S) = 1.
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg" style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              Axiom 3.  If A and B are mutually exclusive, P(A ∪ B) = P(A) + P(B).
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              From these three lines, everything else follows. For example, since A and A′ are mutually exclusive and together fill S:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              P(A′) = 1 − P(A)
            </p>

            <CalloutCard title="Equally likely outcomes — the classic formula">
              When every outcome in S has the same probability (a fair coin, a fair die, a well-shuffled deck), and there are n total outcomes:<br />
              <strong>P(E) = (number of outcomes favourable to E) / n</strong>.<br />
              This is the formula you&apos;ve been using since school. The axiomatic framework justifies it.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <CardDeckProbability />
            </div>
          </section>

          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 14.2.4</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The addition rule</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For mutually exclusive events, Axiom 3 says P(A ∪ B) = P(A) + P(B). What if A and B can both happen? Then simply adding double-counts the overlap. The full <strong>addition rule</strong> corrects for that:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This is the same inclusion–exclusion idea as from Sets (Chapter 1) — count the union as the two parts minus the over-counted middle. When A and B are mutually exclusive, P(A ∩ B) = 0 and the rule collapses to the axiom.
            </p>

            <CalloutCard title="Three events">
              The rule extends. For three events:<br />
              <strong>P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A∩B) − P(A∩C) − P(B∩C) + P(A∩B∩C)</strong>.<br />
              Add singles, subtract pairs, add the triple. The same alternating pattern continues for any number of events.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <EventCalculator />
            </div>
          </section>

          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Strategy</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Putting it to work</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Most probability problems in this chapter come down to four steps:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>1. <strong>Identify the sample space S.</strong> How many outcomes total? Use the counting tools from Chapter 6 (permutations and combinations).</li>
              <li>2. <strong>Define the event(s)</strong> as a subset of S.</li>
              <li>3. <strong>Count favourable outcomes</strong>, or compute P from given probabilities.</li>
              <li>4. <strong>Apply the right rule</strong> — addition for unions, complement for &quot;not&quot; questions, counting formulas for arrangements.</li>
            </ul>

            <CalloutCard title="The complement trick">
              When &quot;at least one&quot; appears in a problem, try computing P(none) first — it&apos;s usually easier — then use P(at least one) = 1 − P(none). Same trick for &quot;at most&quot; questions.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              That&apos;s the entire chapter — three axioms, two operations, two rules. Conditional probability and independence (which let you reason about how events influence each other) come in Class 12, building on everything here.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              And with that — congratulations. You&apos;ve reached the end of the Class 11 Mathematics syllabus.
            </p>
          </section>

          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Check Your Understanding</h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>10 questions sampled from a 25-question pool. Take your time.</p>
            <Quiz pool={GRADE_11_CH14_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 14 of 14 · End of Class 11 Math</span>
          </div>

        </main>
      </div>
    </div>
  );
}
