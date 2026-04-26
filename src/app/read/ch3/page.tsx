"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import RomanConverter from "@/components/widgets/RomanConverter";
import BaseNExplorer from "@/components/widgets/BaseNExplorer";
import NumberSystemComparator from "@/components/widgets/NumberSystemComparator";
import Quiz from "@/components/widgets/Quiz";
import { CH3_QUESTIONS } from "@/data/ch3-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Power Play", href: "/read/ch2", available: true },
  { number: 3, title: "A Story of Numbers", href: "/read/ch3", available: true },
  { number: 4, title: "Quadrilaterals", href: "/read/ch4", available: true },
  { number: 5, title: "Number Play", href: "/read/ch5", available: true },
  { number: 6, title: "We Distribute, Yet Things Multiply", href: "/read/ch6", available: true },
  { number: 7, title: "Proportional Reasoning-1", href: "/read/ch7", available: true },
];

export default function Chapter3Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · A Story of Numbers" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={3} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 3 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              A Story of Numbers
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["40 min", "3 interactive", "10-question quiz"].map((pill) => (
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
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>The Need for Numbers</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Reema's Curiosity and the Mechanism of Counting</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Before you could read a single digit, someone taught you to count. But what <em>is</em> counting, really? Strip away the number names and what remains is a remarkably simple idea: <strong>one-to-one mapping</strong>. For each cow in the field, touch one stick. When the cows run out, the number of sticks you've touched is your count. No number words required.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>number system</strong> is just a standard sequence — of sticks, sounds, or written symbols — arranged in a fixed order. You count by matching your collection to that sequence, one-to-one, following the order. The digits 0–9 we use today were developed in India around 2,000 years ago, first appearing as a complete set (with zero) in the <strong>Bakhshali manuscript</strong>. They reached Europe via the Arab world around 1100 CE — which is why we call them "Hindu-Arabic numerals."
            </p>

            <CalloutCard title="One-to-One Mapping">
              A one-to-one mapping associates each object in a collection with a unique object in a standard sequence (like a stick or a letter), following the sequence order. This is the <strong>fundamental mechanism of counting</strong>.
            </CalloutCard>

            <CalloutCard title="What is a Number System?">
              A number system is a standard sequence of objects, names, or written symbols that has a fixed order. Collections are counted by making a one-to-one mapping between them and the standard sequence.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Body Parts, Tally Marks, and Counting in Groups</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Some Early Number Systems</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Before written symbols, people used their bodies and tally marks. The <strong>Lebombo bone</strong> (c. 44,000 years old) is among the oldest known tally sticks. Some cultures took a clever shortcut and counted in groups — the <strong>Gumulgal people</strong> of Australia counted in twos (3 = 2+1, 4 = 2+2, anything above 6 was just "many").
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The Romans formalised "counting in groups" using <strong>landmark numbers</strong>: I (1), V (5), X (10), L (50), C (100), D (500), M (1000). 27 becomes XXVII; 40 uses a subtractive shorthand: XL (10 before 50). Practical for everyday counting, but painful for arithmetic — and you need new symbols for large numbers.
            </p>

            <div className="mt-6 mb-6">
              <NumberSystemComparator />
            </div>

            <CalloutCard title="Landmark Numbers">
              Landmark numbers are easily recognisable reference points in a number system. In the Roman system: I (1), V (5), X (10), L (50), C (100), D (500), M (1000).
            </CalloutCard>

            <CalloutCard title="Counting in Groups">
              Counting in groups (2s, 5s, 10s, 20s) is far more efficient than one tally per object. The Gumulgal, Roman, and Egyptian systems all exploit this idea — it is a key step in the evolution of number systems.
            </CalloutCard>

            <div className="mt-6">
              <RomanConverter />
            </div>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Egyptian System and Base-n Systems</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The Idea of a Base</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The ancient Egyptians (c. 3000 BCE) went one step further: their landmark numbers were the <strong>powers of 10</strong> — 1, 10, 100, 1000, … each with its own symbol. To write 324, you'd stamp three 100-symbols, two 10-symbols, and four 1-symbols. This is a <strong>base-n system</strong>: landmarks are n⁰, n¹, n², n³, … and multiplying any two landmarks gives another landmark.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The Egyptian (base-10) system's one drawback: to write enormous numbers you need to keep inventing new symbols. The next big idea — place value — solves that.
            </p>

            <div className="mt-6 mb-6">
              <BaseNExplorer />
            </div>

            <CalloutCard title="Base-n Number System">
              A base-n system has landmark numbers that are the powers of n: 1, n, n², n³, … The product of any two landmarks is always another landmark — that's what makes arithmetic clean.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Mesopotamian, Mayan, Chinese, and Hindu Systems</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Place Value Representation</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The Mesopotamians (Babylonians) built a <strong>base-60</strong> (sexagesimal) system — which is why we still have 60 seconds in a minute and 360° in a circle. They made a crucial leap: instead of stamping a new symbol for each power of 60, they simply used <em>position</em>. The rightmost group of symbols showed the number of 1s, the next group showed the number of 60s, the next showed 3600s, and so on. This is a <strong>positional (place value) system</strong>.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The Mesopotamian system had one defect: a blank space for a missing power of 60 caused ambiguity. Was that gap one empty slot or two? Later they introduced a placeholder symbol — like our zero — but they didn't use it at the <em>end</em> of numbers, leaving trailing ambiguity. The <strong>Mayan</strong> civilisation independently developed a base-20 system with their own placeholder. The <strong>Chinese rod numerals</strong> (c. 3rd century CE) used alternating vertical and horizontal symbol styles at each position to prevent ambiguity without needing a zero.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>Hindu number system</strong> solved everything cleanly: a base-10 place value system with ten symbols (0–9), where zero is used as an actual digit in every position. The number 302 is unambiguously different from 32. <strong>Brahmagupta</strong> (628 CE) codified the arithmetic of zero and negative numbers in his text <em>Brāhmasphuṭasiddhānta</em>, effectively creating what mathematicians now call a ring. The Hindu number system is considered one of humanity's greatest intellectual inventions.
            </p>

            <CalloutCard title="Place Value System">
              A positional number system uses the <strong>position</strong> of each symbol to determine the landmark number it represents. This removes the need for an unending sequence of new symbols — a finite set of digits is enough to write any number.
            </CalloutCard>

            <CalloutCard title="The Role of Zero">
              Zero is indispensable in a place value system. Without it, 302 and 32 would look identical if the blank space were left empty. Using 0 as a digit in every position makes every number unambiguous.
            </CalloutCard>

            {/* Evolution of number representation — 5-step progression */}
            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                Evolution of number representation
              </p>
              <div className="space-y-2">
                {[
                  "Count using one-to-one mapping",
                  "Group into landmark numbers",
                  "Choose powers of a base as landmarks",
                  "Use position to denote the landmark (place value)",
                  "Use 0 as a positional digit and as a number in its own right",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 px-3 py-2.5 rounded-lg"
                    style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)" }}>
                    <span className="text-sm font-extrabold shrink-0 mt-0.5 w-5 text-center"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>
                      {i + 1}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text)" }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── QUIZ ── */}
          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Check Your Understanding
            </h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>
              10 questions from the chapter. Take your time.
            </p>
            <Quiz pool={CH3_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 3 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
