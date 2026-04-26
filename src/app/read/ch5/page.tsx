"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import DivisibilityChecker from "@/components/widgets/DivisibilityChecker";
import ModPatternVisualizer from "@/components/widgets/ModPatternVisualizer";
import CryptarithmSolver from "@/components/widgets/CryptarithmSolver";
import Quiz from "@/components/widgets/Quiz";
import { CH5_QUESTIONS } from "@/data/ch5-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Power Play", href: "/read/ch2", available: true },
  { number: 3, title: "A Story of Numbers", href: "/read/ch3", available: true },
  { number: 4, title: "Quadrilaterals", href: "/read/ch4", available: true },
  { number: 5, title: "Number Play", href: "/read/ch5", available: true },
  { number: 6, title: "We Distribute, Yet Things Multiply", href: "/read/ch6", available: true },
  { number: 7, title: "Proportional Reasoning-1", href: "/read/ch7", available: true },
];

export default function Chapter5Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · Number Play" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={5} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 5 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Number Play
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["35 min", "3 interactive", "10-question quiz"].map((pill) => (
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
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Exploring Patterns</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Sums of Consecutive Numbers and Parity</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Every odd number can be written as the sum of two consecutive numbers. 7 = 3+4. 13 = 6+7. The reason: two consecutive numbers have different parities (one odd, one even), and their sum is always odd. Even numbers cannot be expressed this way — you'd need the two consecutive numbers to have the same parity, which is impossible.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Now consider any four consecutive numbers, say 5, 6, 7, 8. Place '+' or '−' signs between them in any of the 8 possible combinations. What do all the results have in common? They're all even. This isn't luck. Switching a '+' to a '−' in an expression changes its value by an even number (twice the affected term). Since all such switches preserve parity, and the full sum of four consecutive numbers is always even (two odds + two evens), all 8 expressions must be even.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Even numbers split into two families by their remainder when divided by 4: multiples of 4 (remainder 0) and non-multiples (remainder 2). Two non-multiples of 4 add to a multiple of 4 (remainder 2+2 = 4 ≡ 0). A multiple of 4 plus a non-multiple gives another non-multiple (remainder 0+2 = 2).
            </p>

            <CalloutCard title="Parity of a ± b">
              The expressions a + b and a − b have the <strong>same parity</strong>, regardless of the parities of a and b individually. Switching a sign changes the value by 2×(that term), which is always even.
            </CalloutCard>

            <CalloutCard title="Sum of Two Even Numbers (by remainder mod 4)">
              Two even numbers that are both multiples of 4 add to a multiple of 4. Two even non-multiples of 4 also add to a multiple of 4. One of each gives a non-multiple of 4.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Reasoning About Divisibility</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Always, Sometimes, or Never True</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Divisibility has precise, provable rules. Some statements are <strong>always true</strong> (no exceptions), some are <strong>sometimes true</strong> (depends on the specific numbers), and some are <strong>never true</strong>.
            </p>

            {/* Always / Sometimes / Never — three visual blocks */}
            <div className="space-y-3 mb-4">
              {/* Always */}
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--green-border)" }}>
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "var(--green-light)", color: "var(--green-dark)" }}>
                  Always true
                </div>
                <ul className="px-4 py-3 space-y-1.5" style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  <li>If a divides M and a divides N → a divides M+N and M−N</li>
                  <li>If A is divisible by k → all multiples of A are divisible by k</li>
                  <li>If A is divisible by k → A is divisible by every factor of k (e.g. divisible by 12 → by 1, 2, 3, 4, 6, 12)</li>
                  <li>If A is divisible by k and m → A is divisible by LCM(k, m) (e.g. by 9 and 4 → by 36, since gcd=1)</li>
                </ul>
              </div>
              {/* Sometimes */}
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--yellow-border)" }}>
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "var(--yellow-light)", color: "var(--yellow)" }}>
                  Sometimes true
                </div>
                <ul className="px-4 py-3 space-y-1.5" style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  <li>Divisible by 6 and 4 → divisible by 24? <em>Not always.</em> 12 is divisible by both but not by 24. The guarantee is only LCM(6,4)=12.</li>
                </ul>
              </div>
              {/* Never */}
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--red-border)" }}>
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "var(--red-light)", color: "var(--red-dark)" }}>
                  Never true
                </div>
                <ul className="px-4 py-3 space-y-1.5" style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  <li>The sum of an odd and an even number is always odd — never a multiple of 6 (which must be even).</li>
                </ul>
              </div>
            </div>

            <CalloutCard title="Divisibility of Sums and Differences">
              If a divides M and a divides N, then a divides M+N and a divides M−N. (Always true — follows directly from writing M and N as multiples of a.)
            </CalloutCard>

            <CalloutCard title="Divisibility by LCM">
              If a number is divisible by k and also by m, then it is divisible by the <strong>LCM</strong> of k and m. When k and m are coprime, LCM(k,m) = k×m.
            </CalloutCard>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Numbers with a Given Remainder</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>What Remains?</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Numbers that leave a remainder of 3 when divided by 5 are: 3, 8, 13, 18, 23, … These are numbers of the form <strong>5k + 3</strong> for k = 0, 1, 2, 3, … The same set can also be described as <strong>5k − 2</strong> for k = 1, 2, 3, … Both algebraic expressions describe exactly the same set of numbers — a reminder that a pattern can have multiple correct descriptions.
            </p>

            <CalloutCard title="Numbers with a Given Remainder">
              Numbers leaving remainder r when divided by n are of the form <strong>nk + r</strong>. Multiple algebraic expressions can describe the same set — all that matters is which numbers they generate.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Divisibility Shortcuts</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Checking Divisibility Quickly</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The digit-sum trick for 9 isn't magic — it's a consequence of how powers of 10 behave mod 9. Every power of 10 leaves remainder 1 when divided by 9, so a number's remainder equals the sum of its digits. The rule for 11 works similarly, but powers of 10 alternate +1, −1, +1, −1 mod 11 — that's why we use the alternating sum. The widget below makes the pattern visible.
            </p>

            <div className="mt-6 mb-6">
              <ModPatternVisualizer />
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For composite divisors, check by <em>coprime</em> factors. To test divisibility by 24 = 3 × 8, check 3 and 8 separately (not 4 and 6, since gcd(4,6) ≠ 1). Coprime factors guarantee LCM equals the product.
            </p>

            <CalloutCard title="Divisibility by 9 and 11">
              A number is divisible by 9 if its <strong>digit sum</strong> is divisible by 9, and divisible by 11 if its <strong>alternating digit sum</strong> (units − tens + hundreds − …) is divisible by 11.
            </CalloutCard>

            <div className="mt-6">
              <DivisibilityChecker />
            </div>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Repeated Digit Sum</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Digital Roots</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>digital root</strong> of a number is what you get by repeatedly adding its digits until you reach a single digit. For 489710: 4+8+9+7+1+0 = 29, then 2+9 = 11, then 1+1 = 2. The digital root of 489710 is 2.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The digital root is exactly the remainder when the number is divided by 9 — with the convention that a remainder of 0 is represented as 9. So the digital root of any multiple of 9 is always 9, and the digital root of any other number equals its remainder mod 9.
            </p>

            <CalloutCard title="Digital Root">
              The digital root is the single-digit number obtained by repeatedly summing a number's digits. It equals the remainder when divided by 9 (with 0 shown as 9). Every multiple of 9 has a digital root of 9.
            </CalloutCard>
          </section>

          {/* ── SECTION 6 ── */}
          <section id="section6" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>6</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Cryptarithms</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Digits in Disguise</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>cryptarithm</strong> is a puzzle where letters replace digits. Each letter stands for a unique digit, and the first digit of any number is never 0. They're solved by combining place-value, divisibility, and parity reasoning to narrow the search. Try a few:
            </p>

            <div className="mt-6 mb-6">
              <CryptarithmSolver />
            </div>

            <CalloutCard title="Cryptarithm Rules">
              Each letter stands for a <strong>unique</strong> digit. The first digit is never 0. Combine place-value reasoning with divisibility and parity arguments to narrow possibilities.
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
            <Quiz pool={CH5_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 5 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
