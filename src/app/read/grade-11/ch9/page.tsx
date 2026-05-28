"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import LineExplorer from "@/components/widgets/LineExplorer";
import SlopeRelationship from "@/components/widgets/SlopeRelationship";
import PointLineDistance from "@/components/widgets/PointLineDistance";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH9_QUESTIONS } from "@/data/grade-11-ch9-questions";

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

export default function Grade11Chapter9Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Straight Lines" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={9} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 9 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Straight Lines
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

            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>1</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Introduction</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Geometry, written in coordinates</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <strong>Coordinate geometry</strong> is what happens when you stop drawing geometry and start writing it as equations. Every point in the plane has an ordered pair (x, y). Every line has an equation. Every distance, midpoint, slope, and angle becomes a calculation you can do without picking up a ruler.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              This chapter is the basics: distance between points, dividing a segment in a ratio, area of a triangle from three vertices, and then the main event — every way to write down the equation of a line and what to do with it.
            </p>

            <CalloutCard title="Three useful formulas to start">
              <strong>Distance</strong> between P(x₁, y₁) and Q(x₂, y₂): √[(x₂ − x₁)² + (y₂ − y₁)²].<br />
              <strong>Midpoint</strong>: ((x₁ + x₂)/2, (y₁ + y₂)/2).<br />
              <strong>Section formula</strong> — divide PQ in ratio m:n: ((m·x₂ + n·x₁)/(m+n), (m·y₂ + n·y₁)/(m+n)).
            </CalloutCard>

            <CalloutCard title="Area of a triangle, and the collinearity test">
              For triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃):<br />
              <strong>Area = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|</strong>.<br />
              If this area is 0, the three points are <em>collinear</em> — they all lie on one straight line.
            </CalloutCard>
          </section>

          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 9.2</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Slope of a line</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>inclination</strong> θ of a non-horizontal line is the angle it makes with the positive x-axis, measured anticlockwise. The <strong>slope</strong> m of the line is the tangent of that angle: <strong>m = tan θ</strong>.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For a non-vertical line through two points, slope is &quot;rise over run&quot;:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              m = (y₂ − y₁) / (x₂ − x₁)
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Horizontal line</strong>: slope 0 (inclination 0°).</li>
              <li>• <strong>Vertical line</strong>: slope undefined (inclination 90°). The denominator x₂ − x₁ is zero.</li>
              <li>• <strong>Positive slope</strong>: line rises left-to-right.</li>
              <li>• <strong>Negative slope</strong>: line falls left-to-right.</li>
            </ul>

            <CalloutCard title="Parallel and perpendicular">
              Two non-vertical lines are <strong>parallel</strong> iff their slopes are equal (m₁ = m₂).<br />
              Two non-vertical lines are <strong>perpendicular</strong> iff <strong>m₁ · m₂ = −1</strong>. (One slope is the negative reciprocal of the other.)
            </CalloutCard>

            <CalloutCard title="Angle between two lines">
              For two non-vertical lines with slopes m₁ and m₂, the acute angle θ between them satisfies:<br />
              <strong>tan θ = |(m₂ − m₁) / (1 + m₁ m₂)|</strong>, &nbsp;provided 1 + m₁m₂ ≠ 0.<br />
              The obtuse angle is just 180° − θ.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <SlopeRelationship />
            </div>
          </section>

          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 9.3</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Equations of a line — five forms</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The same straight line can be written several ways. Each form is the most natural to use depending on what you know:
            </p>

            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Horizontal / vertical</strong>: y = a (parallel to x-axis), or x = b (parallel to y-axis).</li>
              <li>• <strong>Point-slope</strong>: y − y₀ = m(x − x₀). Use when you know one point and the slope.</li>
              <li>• <strong>Two-point</strong>: y − y₁ = [(y₂ − y₁)/(x₂ − x₁)] · (x − x₁). Use when you know two points.</li>
              <li>• <strong>Slope-intercept</strong>: y = mx + c. Use when you know the slope and the y-intercept c.</li>
              <li>• <strong>Intercept</strong>: x/a + y/b = 1. Use when you know both intercepts.</li>
            </ul>

            <CalloutCard title="General linear equation">
              Every straight line in the plane can be written in the form <strong>Ax + By + C = 0</strong>, where A and B are not both zero. All five forms above are just rearrangements of this general form.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <LineExplorer />
            </div>
          </section>

          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 9.4</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Distance from a point to a line</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The <strong>distance from a point to a line</strong> is the length of the perpendicular from the point to the line. For a point (x₁, y₁) and a line Ax + By + C = 0:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              d = |A x₁ + B y₁ + C| / √(A² + B²)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The numerator is what you get by plugging the point into the line equation — it&apos;s zero exactly when the point is on the line. The denominator normalises by the length of the &quot;normal vector&quot; (A, B).
            </p>

            <CalloutCard title="Distance between two parallel lines">
              Two parallel lines have the form Ax + By + C₁ = 0 and Ax + By + C₂ = 0 (same A and B). The distance between them is:<br />
              <strong>d = |C₁ − C₂| / √(A² + B²)</strong>.<br />
              Same denominator as the point-to-line case; the numerator is just the gap between the two constants.
            </CalloutCard>

            <div className="mt-6 mb-6">
              <PointLineDistance />
            </div>
          </section>

          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Beyond the basics</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>A few more useful results</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <CalloutCard title="Concurrent lines">
              Three lines are <strong>concurrent</strong> if they all pass through one common point. To check, find the intersection of any two and verify the third equation is satisfied there.
            </CalloutCard>

            <CalloutCard title="Image of a point in a line">
              The mirror image of point P across a line ℓ is the point P′ such that ℓ is the <em>perpendicular bisector</em> of PP′. Two equations to write: P′ lies on the perpendicular from P to ℓ, and the midpoint of PP′ lies on ℓ.
            </CalloutCard>

            <CalloutCard title="Locus of equidistant points">
              The set of points equidistant from two intersecting lines is the pair of <strong>angle bisectors</strong> (one for each pair of vertical angles). The bisectors themselves are also straight lines.
            </CalloutCard>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              These tools — distance, slope, parallelism, perpendicularity, intersection — are enough to encode every classical geometry theorem (medians concurrent at the centroid, perpendicular bisectors at the circumcentre, etc.) as straightforward algebra. The geometry doesn&apos;t go away; it just becomes a computation.
            </p>
          </section>

          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Check Your Understanding</h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>10 questions sampled from a 25-question pool. Take your time.</p>
            <Quiz pool={GRADE_11_CH9_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 9 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
