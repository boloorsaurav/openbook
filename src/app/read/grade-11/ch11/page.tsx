"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import OctantExplorer from "@/components/widgets/OctantExplorer";
import Distance3D from "@/components/widgets/Distance3D";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH11_QUESTIONS } from "@/data/grade-11-ch11-questions";

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

export default function Grade11Chapter11Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Three Dimensional Geometry" />
      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={11} />
        </div>
        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 11 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>Three Dimensional Geometry</h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["30 min", "2 interactive", "10-question quiz"].map((pill) => (
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
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Adding a third dimension</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              On a flat sheet, two numbers (x, y) pin down any point. In the room you&apos;re sitting in, you need three — say, how far from the left wall, how far from the front wall, and how high off the floor. That third number is the new ingredient, and once you have it, every formula from 2D coordinate geometry extends with one extra term.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This chapter sets up the 3D coordinate system, names the regions (octants), and gives you the formula for the distance between two points in space. That&apos;s the foundation. Lines and planes in 3D come back in much more detail in Class 12.
            </p>

            <CalloutCard title="2D vs 3D in one line">
              In a plane: 2 axes, 4 quadrants, distance √(Δx² + Δy²).<br />
              In space: 3 axes, 8 octants, distance √(Δx² + Δy² + Δz²).<br />
              Everything you know just gets a third coordinate added.
            </CalloutCard>
          </section>

          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 11.2</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Axes, planes, and octants</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Three mutually perpendicular lines meet at one point, the <strong>origin O</strong>. They are the <strong>x-axis</strong>, <strong>y-axis</strong>, and <strong>z-axis</strong>. Each pair of axes spans a plane:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>XY-plane</strong>: z = 0 (the &quot;floor&quot;).</li>
              <li>• <strong>YZ-plane</strong>: x = 0 (one &quot;wall&quot;).</li>
              <li>• <strong>ZX-plane</strong>: y = 0 (the other &quot;wall&quot;).</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              These three planes slice space into <strong>eight regions called octants</strong>, each labelled by the signs of (x, y, z). Octant I is all positive (+, +, +). The 2D plane has 4 quadrants; 3D space has 8 octants — exactly 2³.
            </p>

            <CalloutCard title="Sign convention">
              <strong>x:</strong> positive in front of the YZ-plane, negative behind.<br />
              <strong>y:</strong> positive to the right of the ZX-plane, negative to the left.<br />
              <strong>z:</strong> positive above the XY-plane, negative below.<br />
              A point on a coordinate plane has one of its coordinates equal to zero — it lies on the boundary between octants.
            </CalloutCard>
          </section>

          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 11.3</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Coordinates of a point in space</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Every point P in space corresponds to a unique <strong>ordered triplet (x, y, z)</strong> — the perpendicular distances from P to the YZ-plane, ZX-plane, and XY-plane, respectively. And conversely, every triplet of real numbers (x, y, z) names exactly one point in space. This one-to-one correspondence is the heart of 3D coordinate geometry.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Useful special cases to know:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• Origin O has coordinates (0, 0, 0).</li>
              <li>• A point on the x-axis: (x, 0, 0). On the y-axis: (0, y, 0). On the z-axis: (0, 0, z).</li>
              <li>• A point on the XY-plane: (x, y, 0). YZ-plane: (0, y, z). ZX-plane: (x, 0, z).</li>
            </ul>

            <div className="mt-6 mb-6">
              <OctantExplorer />
            </div>
          </section>

          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 11.4</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Distance between two points</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The 2D distance formula extends in the most obvious way. For points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂):
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              PQ = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This is just Pythagoras&apos; theorem applied twice: once to find the diagonal of the floor projection (Δx, Δy), then once more to lift it up by Δz.
            </p>

            <CalloutCard title="Distance from the origin">
              For Q(x, y, z), <strong>OQ = √(x² + y² + z²)</strong>. The numerator of every formula on the unit sphere x² + y² + z² = 1.
            </CalloutCard>

            <CalloutCard title="Collinearity test">
              Three points P, Q, R are <strong>collinear</strong> if one of the three distances equals the sum of the other two. (PQ + QR = PR means Q is between P and R on a single line.)
            </CalloutCard>

            <div className="mt-6 mb-6">
              <Distance3D />
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              That&apos;s essentially the whole chapter. The <strong>section formula</strong> for dividing a segment in a ratio also extends naturally — the same expression as 2D, just done coordinate-by-coordinate for all three. With distance and the section formula in hand, the rest of 3D geometry (equations of lines and planes, angles between them, distances from a point to a plane) is mostly a Class 12 topic that builds on these foundations.
            </p>
          </section>

          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Check Your Understanding</h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>10 questions sampled from a 25-question pool. Take your time.</p>
            <Quiz pool={GRADE_11_CH11_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 11 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
