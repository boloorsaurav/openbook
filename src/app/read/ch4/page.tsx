"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import AngleSumWidget from "@/components/widgets/AngleSumWidget";
import QuadFamilyExplorer from "@/components/widgets/QuadFamilyExplorer";
import TriangleJoiner from "@/components/widgets/TriangleJoiner";
import Quiz from "@/components/widgets/Quiz";
import { CH4_QUESTIONS } from "@/data/ch4-questions";

const CHAPTERS: Chapter[] = [
  { number: 1, title: "A Square and A Cube", href: "/read/ch1", available: true },
  { number: 2, title: "Power Play", href: "/read/ch2", available: true },
  { number: 3, title: "A Story of Numbers", href: "/read/ch3", available: true },
  { number: 4, title: "Quadrilaterals", href: "/read/ch4", available: true },
  { number: 5, title: "Number Play", href: "/read/ch5", available: true },
  { number: 6, title: "We Distribute, Yet Things Multiply", href: "/read/ch6", available: true },
  { number: 7, title: "Proportional Reasoning-1", href: "/read/ch7", available: true },
];

export default function Chapter4Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 8 Math · Quadrilaterals" />

      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={4} />
        </div>

        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          {/* ── CHAPTER HEADER ── */}
          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 4 · Ganita Prakash · Grade 8
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>
              Quadrilaterals
            </h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["55 min", "4 interactive", "10-question quiz"].map((pill) => (
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
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Defining and Deducing Properties</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Rectangles and Squares</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>rectangle</strong> is defined by one simple condition: all four interior angles are 90°. From this single requirement, a cascade of properties follows: opposite sides become parallel (parallel lines + 90° angles), opposite sides become equal (congruent triangles), and the diagonals end up <strong>equal in length</strong> and <strong>bisecting each other</strong>. The reverse also holds: any quadrilateral whose diagonals are equal and bisect each other must be a rectangle.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>square</strong> is a rectangle with all sides equal. Its diagonals inherit the rectangle's properties (equal, bisecting) and gain two more: they cross at 90° and bisect each interior angle (each 90° corner splits into two 45° angles). Every square is a rectangle; not every rectangle is a square.
            </p>

            <CalloutCard title="Rectangle Definition">
              A rectangle is a quadrilateral in which all angles are 90°. This single condition implies opposite sides are equal and parallel, and diagonals are equal and bisect each other.
            </CalloutCard>

            <CalloutCard title="Key Property of Diagonals">
              In a rectangle, diagonals are equal and bisect each other. In a square, diagonals are equal, bisect each other, intersect at right angles, and bisect the angles of the square.
            </CalloutCard>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Sum of Interior Angles</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Angles in a Quadrilateral</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Draw any diagonal inside a quadrilateral. It slices the shape into two triangles. Each triangle has an angle sum of 180°. Together: 180° + 180° = <strong>360°</strong>. Every quadrilateral, no matter how irregular, has interior angles summing to exactly 360°. This is a universal law — not a coincidence for "nice" shapes.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A neat consequence: it's impossible for a quadrilateral to have three right angles and a fourth angle that is not 90°. Three right angles already account for 270°. The fourth must be 360° − 270° = 90°. Three right angles force the fourth.
            </p>

            <CalloutCard title="Angle Sum of a Quadrilateral">
              The sum of the four interior angles of <strong>any</strong> quadrilateral is always 360°. This is proved by drawing a diagonal to create two triangles, each with an angle sum of 180°.
            </CalloutCard>

            <div className="mt-6">
              <AngleSumWidget />
            </div>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Parallelograms</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>More Quadrilaterals with Parallel Opposite Sides</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>parallelogram</strong> is a quadrilateral where both pairs of opposite sides are parallel. Rectangles are special parallelograms (all angles 90°). From the parallel sides, four key properties follow:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Adjacent angles are supplementary</strong> — they sum to 180°.</li>
              <li>• <strong>Opposite angles are equal.</strong></li>
              <li>• <strong>Opposite sides are equal.</strong></li>
              <li>• <strong>Diagonals bisect each other</strong> (but aren't necessarily equal or perpendicular — those only appear in rectangles, rhombi, and squares).</li>
            </ul>

            <div className="mt-6 mb-6">
              <QuadFamilyExplorer />
            </div>

            <CalloutCard title="Parallelogram Properties">
              Opposite sides equal and parallel. Opposite angles equal. Adjacent angles sum to 180°. Diagonals bisect each other.
            </CalloutCard>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Rhombus</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Quadrilaterals with Equal Side Lengths</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>rhombus</strong> is a quadrilateral where all four sides have the same length. Because equal adjacent sides imply opposite sides are parallel, every rhombus is also a parallelogram — and inherits all parallelogram properties: opposite angles equal, adjacent angles supplementary, diagonals bisecting each other.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The rhombus gains two special diagonal properties not present in general parallelograms. First, <strong>the diagonals intersect at 90°</strong>. Second, <strong>each diagonal bisects the interior angles</strong> at the vertices it joins. This is because the equal sides create isosceles triangles, and the diagonal of an isosceles triangle from the apex is also the angle bisector.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A square is a special rhombus where all angles happen to be 90°. A rhombus need not be a square — its angles can be anything, as long as opposite ones are equal and adjacent ones are supplementary.
            </p>

            <p className="leading-relaxed mb-4 text-sm italic" style={{ color: "var(--text-muted)" }}>
              ↑ Try this in the explorer above: switch to <strong>Rhombus</strong> mode and drag any vertex. All four sides stay equal, the diagonals stay perpendicular, and the family pills light up to show that every rhombus is also a parallelogram.
            </p>

            <CalloutCard title="Rhombus Properties">
              All four sides equal. Opposite sides parallel. Opposite angles equal. Adjacent angles sum to 180°. Diagonals bisect each other <strong>at right angles</strong> and bisect the interior angles.
            </CalloutCard>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Hands-on Exploration</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Playing with Quadrilaterals</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A simple way to construct quadrilaterals: take two congruent triangles and join them along a shared side. The shape you get depends on the triangle type and the joining side. Try it:
            </p>

            <div className="mt-6 mb-6">
              <TriangleJoiner />
            </div>

            <CalloutCard title="Joining Triangles">
              Joining two congruent triangles along a common side always forms a quadrilateral. The type depends on the triangle shape and which side is used for joining.
            </CalloutCard>
          </section>

          {/* ── SECTION 6 ── */}
          <section id="section6" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>6</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Other Special Quadrilaterals</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Kite and Trapezium</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>kite</strong> has two distinct pairs of <em>adjacent</em> sides that are equal (not opposite sides — that would make it a parallelogram or rhombus). Label it ABCD so that AB = AD and CB = CD. The diagonal from A to C bisects the angles at A and C, and it is perpendicular to — and bisects — the other diagonal BD.
            </p>

            <p className="leading-relaxed mb-2 text-sm italic" style={{ color: "var(--text-muted)" }}>
              ↑ Switch the explorer above to <strong>Kite</strong> mode: drag any vertex and watch the main diagonal stay perpendicular to the other while bisecting it.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>trapezium</strong> is a quadrilateral with at least one pair of parallel sides. The angles on the same side of the non-parallel leg are co-interior angles with respect to the parallel sides — so they sum to 180°. An <strong>isosceles trapezium</strong> has its two non-parallel sides equal in length. By drawing perpendiculars and using triangle congruence, you can prove that its base angles (angles adjacent to each parallel side) are equal.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Note the hierarchy: every parallelogram is a trapezium (it has two pairs of parallel sides, which certainly satisfies "at least one pair"), but a general trapezium is not a parallelogram.
            </p>

            <p className="leading-relaxed mb-4 text-sm italic" style={{ color: "var(--text-muted)" }}>
              ↑ Try <strong>Trapezium</strong> mode in the explorer: drag A or B and notice how D slides along the line through C parallel to AB — the parallel-side property is forced.
            </p>

            <CalloutCard title="Kite Definition">
              A kite has two distinct pairs of adjacent sides that are equal. Its main diagonal is perpendicular to — and bisects — the other diagonal, and it bisects the angles at the vertices where equal sides meet.
            </CalloutCard>

            <CalloutCard title="Trapezium Definition">
              A trapezium is a quadrilateral with at least one pair of parallel sides. An isosceles trapezium has equal non-parallel sides, and its base angles are equal.
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
            <Quiz pool={CH4_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 4 of 7</span>
          </div>

        </main>
      </div>
    </div>
  );
}
