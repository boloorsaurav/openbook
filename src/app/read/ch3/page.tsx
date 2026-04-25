"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import RomanConverter from "@/components/widgets/RomanConverter";
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
              {["40 min", "1 interactive", "10-question quiz"].map((pill) => (
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
              A <strong>number system</strong> is just a standard sequence — of sticks, sounds, or written symbols — arranged in a fixed order. You count by matching your collection to that sequence, one-to-one, following the order. The system we use today (the digits 0–9) was developed in India around 2000 years ago. The first known instance of all ten digits, including zero written as a dot, appears in the <strong>Bakhshali manuscript</strong> (c. 3rd century CE).
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <strong>Aryabhata</strong> (c. 499 CE) was the first mathematician to fully explain and perform elaborate scientific computations using all 10 symbols. The system then travelled to the Arab world around 800 CE, popularised by <strong>Al-Khwārizmī</strong> and Al-Kindi, and finally reached Europe around 1100 CE — where it took until the 17th century to be adopted widely. That's why we call these "Hindu-Arabic numerals": Hindu for where they were born, Arabic for the path they took to reach us.
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
              Long before written symbols, people used their bodies. Hands, fingers, toes — all served as counting sequences. Tally marks scratched on bones offered a more permanent record: the <strong>Lebombo bone</strong> (c. 44,000 years old) and <strong>Ishango bone</strong> (20,000–35,000 years old) are the oldest known tally sticks, possibly used as lunar calendars.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>Gumulgal people</strong> of Australia took a creative shortcut: they counted in twos. So 3 = 2+1, 4 = 2+2, 5 = 2+2+1, 6 = 2+2+2. Anything above 6 was simply called "ras" (many). The Bakairi of South America and the Bushmen of South Africa independently arrived at the same scheme — suggesting this breakthrough was discovered multiple times.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The Romans formalised "counting in groups" into a written system using <strong>landmark numbers</strong> — a small set of memorable reference points. Their landmarks: I (1), V (5), X (10), L (50), C (100), D (500), M (1000). To write 27, you break it down: 10+10+5+1+1 → XXVII. For 40, a nifty subtractive shorthand: XL (10 before 50). The Roman system was practical for everyday use in Europe, but it struggles with large numbers (need new symbols) and arithmetic (addition is painful, multiplication is agony).
            </p>

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
              The ancient Egyptians (c. 3000 BCE) went one step further: their landmark numbers were all <strong>powers of 10</strong> — 1, 10, 100, 1000, … each represented by a distinct symbol. To write 324, you'd stamp three 100-symbols, two 10-symbols, and four 1-symbols. The convenience? Multiplying any two landmark numbers gives another landmark number. Multiplying 10 by 100 gives 1000 — also a landmark. This is the magic of a <strong>base-n system</strong>.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A base-n system chooses landmark numbers that are the powers of n: n⁰=1, n, n², n³, and so on. The Egyptian system is base-10. A base-5 system would have landmarks 1, 5, 25, 125, … The critical advantage: the product of any two landmark numbers is always another landmark number, making multiplication as simple as shifting positions. The Roman system lacks this property — V (5) times X (10) is L (50), which works, but V times L is CCL (250), which has no single landmark symbol.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The Egyptian system's one drawback: to write truly enormous numbers you need to keep inventing new symbols for higher powers of 10. This is where the next big idea — place value — would eventually save the day.
            </p>

            <CalloutCard title="Base-n Number System">
              A base-n system has landmark numbers that are the powers of n: 1, n, n², n³, … In a base-n system, the product of any two landmark numbers is always another landmark number — this makes multiplication straightforward.
            </CalloutCard>

            <CalloutCard title="Advantage of a Base">
              In the Egyptian (base-10) system, multiplying 10 by 100 gives 1000 — also a landmark. In the Roman system, multiplying landmark numbers does not reliably give another landmark. This is why the Egyptian approach is far superior for arithmetic.
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

            <CalloutCard title="Evolution of Number Representation">
              <strong>1.</strong> Count using one-to-one mapping. <strong>2.</strong> Group into landmark numbers. <strong>3.</strong> Choose powers of a base as landmarks. <strong>4.</strong> Use position to denote the landmark (place value). <strong>5.</strong> Use 0 as a positional digit and as a number in its own right.
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
