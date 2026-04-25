"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import AngleSumWidget from "@/components/widgets/AngleSumWidget";
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
              {["55 min", "1 interactive", "10-question quiz"].map((pill) => (
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
              A <strong>rectangle</strong> is defined by one simple condition: all four interior angles are 90°. That's it. From this single requirement, a cascade of properties follows by logical deduction. Because two parallel lines cut by a transversal create supplementary co-interior angles (summing to 180°), and all angles in a rectangle are already 90°, the opposite sides must be parallel. Because the angles force congruent triangles (via AAS), opposite sides must also be equal.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The diagonals of a rectangle are <strong>equal in length</strong> (proved by SAS congruence of triangles formed by each diagonal) and <strong>bisect each other</strong> (proved by AAS congruence at the intersection point). Remarkably, you can run this backwards: any quadrilateral whose diagonals are equal and bisect each other is a rectangle — regardless of the angle at which those diagonals cross.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>square</strong> is a rectangle with all sides equal. Its diagonals inherit all the rectangle's properties (equal, bisecting) and gain two more: they intersect at 90° and bisect each interior angle (each 90° corner splits into two 45° angles). Every square is a rectangle, but not every rectangle is a square.
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
              A <strong>parallelogram</strong> is a quadrilateral where both pairs of opposite sides are parallel. Rectangles are special parallelograms (all angles 90°). From the parallel sides, three key properties follow:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Adjacent angles are supplementary</strong> — they sum to 180° (co-interior angles with parallel lines).</li>
              <li>• <strong>Opposite angles are equal</strong> — since both pairs of adjacent angles are supplementary, opposite pairs must match.</li>
              <li>• <strong>Opposite sides are equal</strong> (proved by AAS congruence on triangles formed by a diagonal).</li>
              <li>• <strong>Diagonals bisect each other</strong> (proved by ASA congruence at the intersection).</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The diagonals of a parallelogram are <em>not</em> necessarily equal, and they don't necessarily intersect at a particular angle. Those extra properties only appear in special cases (rectangle, rhombus, square).
            </p>

            {/* Parallelogram diagram */}
            <div className="my-5 p-4 rounded-lg border flex flex-col items-center"
              style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}>
                Parallelogram ABCD — diagonals AC and BD bisect each other at M
              </p>
              <svg viewBox="0 0 240 160" width="240" height="160" fill="none" aria-hidden="true">
                {/* Shape outline */}
                <polygon points="30,130 90,30 210,30 150,130"
                  stroke="var(--text)" strokeWidth="2" fill="var(--bg-sidebar)" />
                {/* Diagonals (dashed) */}
                <line x1="30" y1="130" x2="210" y2="30"
                  stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,3" />
                <line x1="90" y1="30" x2="150" y2="130"
                  stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,3" />
                {/* Midpoint M */}
                <circle cx="120" cy="80" r="3.5" fill="var(--text)" />
                <text x="126" y="75" fontSize="10" fill="var(--text-muted)" fontFamily="sans-serif">M</text>
                {/* Tick marks on each half of both diagonals (shows bisection) */}
                {/* AC: direction vector from A(30,130)→C(210,30) normalised */}
                {/* half-way ticks on A-side of AC */}
                <line x1="117" y1="83" x2="123" y2="77" stroke="var(--text)" strokeWidth="1.5" />
                {/* half-way ticks on C-side of AC */}
                <line x1="117" y1="83" x2="123" y2="77" stroke="var(--text)" strokeWidth="1.5"
                  transform="translate(6,-6)" />
                {/* Vertex labels */}
                <text x="12" y="142" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">A</text>
                <text x="83" y="22" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">B</text>
                <text x="212" y="26" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">C</text>
                <text x="147" y="150" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">D</text>
              </svg>
            </div>

            <CalloutCard title="Parallelogram Properties">
              Opposite sides are equal and parallel. Opposite angles are equal. Adjacent angles sum to 180°. Diagonals bisect each other (but are not necessarily equal or perpendicular).
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

            {/* Rhombus diagram */}
            <div className="my-5 p-4 rounded-lg border flex flex-col items-center"
              style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}>
                Rhombus ABCD — diagonals cross at exactly 90°
              </p>
              <svg viewBox="0 0 240 170" width="240" height="170" fill="none" aria-hidden="true">
                {/* Shape outline — diamond */}
                <polygon points="120,15 210,85 120,155 30,85"
                  stroke="var(--text)" strokeWidth="2" fill="var(--bg-sidebar)" />
                {/* Diagonals */}
                <line x1="120" y1="15" x2="120" y2="155"
                  stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,3" />
                <line x1="30" y1="85" x2="210" y2="85"
                  stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,3" />
                {/* 90° angle mark at intersection M(120,85) */}
                <path d="M120,85 L128,85 L128,77 L120,77" stroke="var(--text)" strokeWidth="1.5" fill="none" />
                {/* Midpoint dot */}
                <circle cx="120" cy="85" r="3" fill="var(--text)" />
                {/* Equal-side tick marks (one tick on each side) */}
                <line x1="161" y1="47" x2="172" y2="52" stroke="var(--text)" strokeWidth="2" />
                <line x1="161" y1="120" x2="172" y2="115" stroke="var(--text)" strokeWidth="2" />
                <line x1="69" y1="47" x2="80" y2="52" stroke="var(--text)" strokeWidth="2" />
                <line x1="69" y1="120" x2="80" y2="115" stroke="var(--text)" strokeWidth="2" />
                {/* Vertex labels */}
                <text x="113" y="9" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">A</text>
                <text x="216" y="89" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">B</text>
                <text x="113" y="169" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">C</text>
                <text x="14" y="89" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">D</text>
                <text x="128" y="80" fontSize="10" fill="var(--text-muted)" fontFamily="sans-serif">90°</text>
              </svg>
            </div>

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
              A simple way to construct quadrilaterals: take two congruent triangles and join them along a shared side. The type of quadrilateral you get depends on the triangle shape and which sides you join.
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• Two congruent <strong>equilateral triangles</strong> joined along any side → <strong>rhombus</strong>.</li>
              <li>• Two congruent <strong>isosceles triangles</strong> joined along their base → <strong>kite</strong>.</li>
              <li>• Two congruent <strong>isosceles triangles</strong> joined along equal sides → <strong>parallelogram</strong>.</li>
              <li>• Two congruent <strong>scalene triangles</strong> joined along any side → <strong>parallelogram</strong>.</li>
            </ul>

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

            {/* Kite + Trapezium diagrams side by side */}
            <div className="my-5 flex gap-3 flex-wrap justify-center">
              {/* Kite */}
              <div className="p-4 rounded-lg border flex flex-col items-center flex-1 min-w-[140px]"
                style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-3"
                  style={{ color: "var(--text-muted)" }}>Kite ABCD</p>
                <svg viewBox="0 0 160 170" width="150" height="160" fill="none" aria-hidden="true">
                  {/* Kite: A top, B right, C bottom, D left. AB=AD, CB=CD */}
                  <polygon points="80,15 150,75 80,155 10,75"
                    stroke="var(--text)" strokeWidth="2" fill="var(--bg-sidebar)" />
                  {/* Main diagonal AC (bisects BD) */}
                  <line x1="80" y1="15" x2="80" y2="155"
                    stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,3" />
                  {/* Cross diagonal BD */}
                  <line x1="10" y1="75" x2="150" y2="75"
                    stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="5,3" />
                  {/* 90° mark at intersection (80,75) */}
                  <path d="M80,75 L88,75 L88,67 L80,67" stroke="var(--text)" strokeWidth="1.5" fill="none" />
                  <circle cx="80" cy="75" r="3" fill="var(--text)" />
                  {/* Equal-side tick marks: AB and AD (top pair) */}
                  <line x1="108" y1="42" x2="116" y2="47" stroke="var(--text)" strokeWidth="2" />
                  <line x1="44" y1="42" x2="52" y2="47" stroke="var(--text)" strokeWidth="2" />
                  {/* Equal-side tick marks: CB and CD (bottom pair, double tick) */}
                  <line x1="112" y1="108" x2="120" y2="104" stroke="var(--text)" strokeWidth="2" />
                  <line x1="116" y1="114" x2="124" y2="110" stroke="var(--text)" strokeWidth="2" />
                  <line x1="32" y1="108" x2="40" y2="112" stroke="var(--text)" strokeWidth="2" />
                  <line x1="28" y1="114" x2="36" y2="118" stroke="var(--text)" strokeWidth="2" />
                  {/* Labels */}
                  <text x="73" y="10" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">A</text>
                  <text x="154" y="79" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">B</text>
                  <text x="73" y="169" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">C</text>
                  <text x="0" y="79" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">D</text>
                </svg>
              </div>
              {/* Trapezium */}
              <div className="p-4 rounded-lg border flex flex-col items-center flex-1 min-w-[140px]"
                style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-3"
                  style={{ color: "var(--text-muted)" }}>Isosceles Trapezium</p>
                <svg viewBox="0 0 160 160" width="150" height="160" fill="none" aria-hidden="true">
                  {/* Isosceles trapezium: symmetric, AB top, DC bottom */}
                  <polygon points="45,25 115,25 145,135 15,135"
                    stroke="var(--text)" strokeWidth="2" fill="var(--bg-sidebar)" />
                  {/* Parallel-side arrows on AB (top) */}
                  <line x1="55" y1="25" x2="105" y2="25" stroke="var(--accent-border)" strokeWidth="1.5" />
                  <polygon points="105,25 98,20 98,30" fill="var(--accent-border)" />
                  {/* Parallel-side arrows on DC (bottom) */}
                  <line x1="25" y1="135" x2="135" y2="135" stroke="var(--accent-border)" strokeWidth="1.5" />
                  <polygon points="135,135 128,130 128,140" fill="var(--accent-border)" />
                  {/* Equal non-parallel sides tick marks */}
                  <line x1="25" y1="76" x2="34" y2="73" stroke="var(--text)" strokeWidth="2" />
                  <line x1="125" y1="76" x2="134" y2="79" stroke="var(--text)" strokeWidth="2" />
                  {/* Labels */}
                  <text x="39" y="19" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">A</text>
                  <text x="116" y="19" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">B</text>
                  <text x="147" y="148" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">C</text>
                  <text x="3" y="148" fontSize="12" fontWeight="bold" fill="var(--text)" fontFamily="sans-serif">D</text>
                  {/* "parallel" label */}
                  <text x="65" y="20" fontSize="9" fill="var(--text-muted)" fontFamily="sans-serif">AB ∥ DC</text>
                </svg>
              </div>
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>trapezium</strong> is a quadrilateral with at least one pair of parallel sides. The angles on the same side of the non-parallel leg are co-interior angles with respect to the parallel sides — so they sum to 180°. An <strong>isosceles trapezium</strong> has its two non-parallel sides equal in length. By drawing perpendiculars and using triangle congruence, you can prove that its base angles (angles adjacent to each parallel side) are equal.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Note the hierarchy: every parallelogram is a trapezium (it has two pairs of parallel sides, which certainly satisfies "at least one pair"), but a general trapezium is not a parallelogram.
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
