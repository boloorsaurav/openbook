"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import ProportionSolver from "@/components/widgets/ProportionSolver";
import PhotoScaler from "@/components/widgets/PhotoScaler";
import RatioEquivalenceChecker from "@/components/widgets/RatioEquivalenceChecker";
import Quiz from "@/components/widgets/Quiz";
import { CH7_QUESTIONS } from "@/data/ch7-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Power Play", href: "/read/ch2", available: true },
  { number: 3, title: "A Story of Numbers", href: "/read/ch3", available: true },
  { number: 4, title: "Quadrilaterals", href: "/read/ch4", available: true },
  { number: 5, title: "Number Play", href: "/read/ch5", available: true },
  { number: 6, title: "We Distribute, Yet Things Multiply", href: "/read/ch6", available: true },
  { number: 7, title: "Proportional Reasoning-1", href: "/read/ch7", available: true },
];

export default function Chapter7Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · Proportional Reasoning-1" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={7} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 7 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Proportional Reasoning-1
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
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Similarity Through Scaling</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Observing Similarity in Change</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              You've resized a photo on your phone. Drag a corner — both width and height change by the same factor, the face stays recognisable. Drag just one side — only one dimension changes, the face distorts. That's the core insight of <strong>proportional reasoning</strong>: two quantities change proportionally when both are multiplied by the same factor. Adding the same amount to each is <em>not</em> proportional.
            </p>

            <div className="mt-6 mb-6">
              <PhotoScaler />
            </div>

            <CalloutCard title="Proportional Change">
              Two quantities change proportionally when both are <strong>multiplied by the same factor</strong>. Adding or subtracting the same amount changes the ratio and is not proportional change.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Representing Proportional Relationships</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Ratios</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>ratio</strong> a : b captures the relationship between two quantities. It means: for every a units of the first quantity, there are b units of the second. The numbers a and b are called the <strong>terms</strong> of the ratio.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Two ratios are proportional if their terms change by the same factor. Image A is 60×40, ratio 60:40. Image C is 30×20, ratio 30:20. Both terms halved — so 60:40 and 30:20 are proportional. Image D is 90:60 — both terms multiplied by 1.5 from 60:40 — also proportional. The systematic way to check: reduce both ratios to simplest form and compare.
            </p>

            <CalloutCard title="Ratio Definition">
              A ratio a : b means for every a units of the first quantity, there are b units of the second. Two ratios are proportional if their terms are related by the same multiplicative factor.
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Reducing Ratios</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Ratios in their Simplest Form</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A ratio a : b is in its <strong>simplest form</strong> when the HCF (Highest Common Factor) of a and b is 1. To reduce: divide both terms by their HCF. For 60:40, HCF is 20, so the simplest form is 3:2. For 90:60, HCF is 30, giving 3:2 again. Since both reduce to 3:2, they are in proportion.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              When two ratios are proportional, we write them with the symbol <strong>::</strong> — so 60:40 :: 90:60 means "60:40 is in proportion to 90:60." This notation, used in ancient Indian mathematics, captures the equivalence relationship between ratio pairs.
            </p>

            <CalloutCard title="Proportional Ratios">
              Two ratios are proportional if their simplest forms are equal. We write <strong>a : b :: c : d</strong> to show that a:b and c:d are proportional. Reduce each ratio by its HCF to check.
            </CalloutCard>

            <div className="mt-6">
              <RatioEquivalenceChecker />
            </div>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Finding Unknowns in Proportions</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Problem Solving with Proportional Reasoning</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              If a : b :: c : d, then cross-multiplying gives <strong>a × d = b × c</strong>. This is called the <strong>cross-multiplication rule</strong>, and it lets you find any unknown fourth term: d = (b × c) ÷ a. For example: 6 glasses need 10 spoons of sugar. How many spoons for 18 glasses? Factor = 18/6 = 3, so spoons = 10 × 3 = 30.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Ancient Indian mathematicians formalised this as the <strong>Rule of Three</strong> (Trairasika): given pramāṇa (known quantity, a), phala (known result, b), and ichchhā (desired quantity, c), the ichchhāphala (desired result, d) = (b × c) ÷ a. This rule appeared in Sanskrit mathematical texts and was used for commerce, astronomy, and engineering.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              One important caveat: adding the same number to both terms of a ratio <em>changes</em> the ratio. If Neelima is 3 and her mother is 30 (ratio 1:10), when Neelima is 12 her mother is 39 (ratio 12:39 = 4:13 — not 1:10). Time passes additively, but ratios require multiplicative relationships.
            </p>

            <CalloutCard title="Cross-Multiplication Rule">
              If a : b :: c : d, then <strong>a × d = b × c</strong>. The unknown fourth term: d = (b × c) ÷ a. Always convert units to the same type before setting up the proportion.
            </CalloutCard>

            <CalloutCard title="Rule of Three (Trairasika)">
              Given pramāṇa (a), phala (b), and ichchhā (c), the ichchhāphala is <strong>d = (b × c) ÷ a</strong>. Ancient Indian mathematicians used this for commerce, astronomy, and engineering problems.
            </CalloutCard>

            <div className="mt-6">
              <ProportionSolver />
            </div>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Dividing a Quantity in a Given Ratio</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Sharing, but Not Equally!</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              To divide a quantity x in the ratio m : n, think in groups. There are m + n groups total. Each group has x ÷ (m + n) units. The first person gets m groups (m × x ÷ (m+n)) and the second gets n groups (n × x ÷ (m+n)). For example, dividing 42 counters in ratio 4:3: total groups = 7, each group = 6 counters. First person gets 4 × 6 = 24, second gets 3 × 6 = 18.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Prashanti and Bhuvan invested ₹75,000 and ₹25,000 (ratio 3:1). Profit of ₹4,000 shared proportionally: 4 total groups, each worth ₹1,000. Prashanti gets ₹3,000 and Bhuvan gets ₹1,000.
            </p>

            <CalloutCard title="Dividing in a Ratio">
              To divide x in ratio m : n: first part = <strong>m × x ÷ (m+n)</strong>, second part = <strong>n × x ÷ (m+n)</strong>. Think of m+n equal groups, each of size x÷(m+n).
            </CalloutCard>
          </section>

          {/* ── SECTION 6 ── */}
          <section id="section6" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>6</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Converting Units for Proportional Problems</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Unit Conversions</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Proportion problems often mix units. Before setting up a ratio, always ensure all quantities are in the same unit. Key conversions:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Length:</strong> 1 metre = 3.281 feet</li>
              <li>• <strong>Area:</strong> 1 sq. metre = 10.764 sq. feet · 1 acre = 43,560 sq. feet · 1 hectare = 10,000 sq. metres = 2.471 acres</li>
              <li>• <strong>Volume:</strong> 1 mL = 1 cm³ · 1 litre = 1,000 mL</li>
              <li>• <strong>Temperature:</strong> °F = (9/5) × °C + 32 · °C = (5/9) × (°F − 32)</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For example, a tap fills a 500 mL mug in 15 seconds. How long to fill a 10-litre bucket? Convert: 10 litres = 10,000 mL. Set up the proportion: 500 mL : 15 s :: 10,000 mL : x s. Cross multiply: 500x = 15 × 10,000, so x = 300 seconds.
            </p>

            <CalloutCard title="Unit Conversion">
              Always convert quantities to the <strong>same units</strong> before setting up a proportion. Mixing metres and feet, or mL and litres, in the same ratio will give a wrong answer.
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
            <Quiz pool={CH7_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 7 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
