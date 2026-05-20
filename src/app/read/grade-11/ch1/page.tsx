"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import SetRepresenter from "@/components/widgets/SetRepresenter";
import VennDiagramExplorer from "@/components/widgets/VennDiagramExplorer";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH1_QUESTIONS } from "@/data/grade-11-ch1-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "Sets", href: "/read/grade-11/ch1", available: true },
  { number: 2, title: "Relations and Functions", href: "/read/grade-11/ch2", available: true },
  { number: 3, title: "Trigonometric Functions", available: false },
  { number: 4, title: "Complex Numbers and Quadratic Equations", available: false },
  { number: 5, title: "Linear Inequalities", available: false },
  { number: 6, title: "Permutations and Combinations", available: false },
  { number: 7, title: "Binomial Theorem", available: false },
  { number: 8, title: "Sequences and Series", available: false },
  { number: 9, title: "Straight Lines", available: false },
  { number: 10, title: "Conic Sections", available: false },
  { number: 11, title: "Three Dimensional Geometry", available: false },
  { number: 12, title: "Limits and Derivatives", available: false },
  { number: 13, title: "Statistics", available: false },
  { number: 14, title: "Probability", available: false },
];

export default function Grade11Chapter1Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Sets" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={1} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 1 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Sets
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["25 min", "2 interactive", "22-question quiz"].map((pill) => (
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
                  What is a Set
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Well-defined collections
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>set</strong> is a well-defined collection of distinct objects. "Well-defined" is the key word — for any given object, there must be no ambiguity about whether it belongs in the set or not. "The collection of tall people" is not a set (how tall is tall?); "the collection of all prime numbers less than 20" is a set.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Sets are usually denoted by capital letters (A, B, S, …) and their elements by lowercase letters. To say <em>x is an element of A</em>, we write <strong>x ∈ A</strong>. To say <em>x is not in A</em>, we write <strong>x ∉ A</strong>.
            </p>

            <CalloutCard title="Standard number sets">
              <strong>ℕ</strong> = natural numbers {`{1, 2, 3, …}`}<br />
              <strong>ℤ</strong> = integers {`{…, −2, −1, 0, 1, 2, …}`}<br />
              <strong>ℚ</strong> = rational numbers (fractions p/q with q ≠ 0)<br />
              <strong>ℝ</strong> = real numbers (everything on the number line)
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Two ways to write a set
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Roster form vs Set-builder form
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The same set can be written in two equivalent ways. <strong>Roster form</strong> lists every element inside braces, separated by commas: {`{2, 4, 6, 8, 10}`}. <strong>Set-builder form</strong> describes the rule that defines membership: {`{x : x is an even natural number less than 12}`}. Both describe the same set — pick whichever is clearer for the situation.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For an infinite set, roster form must use an ellipsis (…) to signal continuation: {`{x : x ∈ ℕ}`} = {`{1, 2, 3, 4, …}`}. The order of elements inside a set doesn't matter, and repetition is ignored — {`{1, 2, 2, 3}`} is the same set as {`{1, 2, 3}`}.
            </p>

            <div className="mt-6 mb-6">
              <SetRepresenter />
            </div>

            <CalloutCard title="Cardinality">
              The number of distinct elements in a finite set A is called its <strong>cardinality</strong>, written n(A) or |A|. A set with no elements is called the <strong>empty set</strong>, denoted ∅ or {`{ }`}. Its cardinality is 0.
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Subsets and Power Sets
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Sets inside sets
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A set A is a <strong>subset</strong> of B (written <strong>A ⊂ B</strong>) if every element of A is also in B. So {`{1, 2}`} ⊂ {`{1, 2, 3}`}, but {`{1, 4}`} is not a subset of {`{1, 2, 3}`} because 4 isn't in the larger set. Every set is a subset of itself, and the empty set is a subset of every set.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>power set</strong> of A, written P(A), is the set of all subsets of A — including ∅ and A itself. If A has n elements, then P(A) has exactly <strong>2ⁿ</strong> elements. For A = {`{a, b}`}, the power set is P(A) = {`{ ∅, {a}, {b}, {a, b} }`}, which has 2² = 4 members.
            </p>

            <CalloutCard title="Why 2ⁿ subsets">
              For each of the n elements, you make an independent yes/no decision about whether to include it in the subset. Two choices per element, n elements, gives 2 × 2 × … × 2 = 2ⁿ total subsets.
            </CalloutCard>

            <CalloutCard title="Set equality">
              Two sets A and B are equal (written A = B) when A ⊂ B and B ⊂ A — that is, they have exactly the same elements. Order and repetition don't matter; only membership does.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Operations on Sets
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  Union, intersection, difference, complement
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              When we work with several sets at once, we usually fix a <strong>universal set</strong> U that contains everything under discussion. Inside U, four basic operations let us build new sets from old ones:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Union</strong> (A ∪ B): every element that is in A, or in B, or in both.</li>
              <li>• <strong>Intersection</strong> (A ∩ B): elements that are in both A and B.</li>
              <li>• <strong>Difference</strong> (A − B): elements in A but not in B.</li>
              <li>• <strong>Complement</strong> (A′): elements of U that are not in A.</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              These operations are easiest to see with a <strong>Venn diagram</strong> — two overlapping circles inside a rectangle (the universal set). The widget below lets you toggle between operations and watch which region lights up.
            </p>

            <div className="mt-6 mb-6">
              <VennDiagramExplorer />
            </div>

            <CalloutCard title="Inclusion–Exclusion Principle">
              <strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong>. Adding the cardinalities double-counts the intersection — subtracting it once corrects the over-count. Useful for word problems involving overlapping groups.
            </CalloutCard>

            <CalloutCard title="Disjoint sets">
              Sets A and B are <strong>disjoint</strong> when A ∩ B = ∅. In that case, n(A ∪ B) = n(A) + n(B) — no correction needed because there's no overlap.
            </CalloutCard>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  Two laws worth memorising
                </p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>
                  De Morgan&apos;s Laws
                </h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              When you take a complement, ∪ and ∩ swap places. This pair of identities, named after the 19th-century logician Augustus De Morgan, comes up constantly in algebra, logic, and probability:
            </p>

            <p className="leading-relaxed mb-2 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (A ∪ B)′ = A′ ∩ B′
            </p>
            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              (A ∩ B)′ = A′ ∪ B′
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              In words: <em>the complement of a union is the intersection of the complements</em>, and vice versa. You can verify either one with the Venn diagram widget above — pick <strong>(A ∪ B)′</strong> and notice it lights up exactly the elements outside <em>both</em> circles, which is the same as A′ ∩ B′.
            </p>

            <CalloutCard title="De Morgan's Laws — practical use">
              These laws let you rewrite "not (A or B)" as "(not A) and (not B)" — handy when a logical condition is easier to negate than to check directly.
            </CalloutCard>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions sampled from a 22-question pool. Take your time.
            </p>
            <Quiz pool={GRADE_11_CH1_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 1 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
