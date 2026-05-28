"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar, { Chapter } from "@/components/layout/Sidebar";
import CalloutCard from "@/components/layout/CalloutCard";
import ConicGallery from "@/components/widgets/ConicGallery";
import CircleFromGeneralForm from "@/components/widgets/CircleFromGeneralForm";
import Quiz from "@/components/widgets/Quiz";
import { GRADE_11_CH10_QUESTIONS } from "@/data/grade-11-ch10-questions";

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

export default function Grade11Chapter10Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Class 11 Math · Conic Sections" />
      <div className="flex flex-1">
        <div className="hidden md:block sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto">
          <Sidebar chapters={CHAPTERS} activeChapter={10} />
        </div>
        <main className="flex-1 max-w-2xl mx-auto px-6 md:px-12 py-10 pb-24">

          <section id="intro" className="scroll-mt-16">
            <p className="text-[10px] font-bold uppercase mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              Chapter 10 · Mathematics · Grade 11
            </p>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text)" }}>Conic Sections</h1>
            <div className="flex gap-2 flex-wrap mb-8">
              {["45 min", "2 interactive", "10-question quiz"].map((pill) => (
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
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>Curves from slicing a cone</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Take a double-napped cone (two cones tip-to-tip), pass a flat plane through it, and look at the curve where they meet. Depending on how you angle the plane, you get one of four shapes:
            </p>
            <ul className="mb-4 space-y-1 pl-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              <li>• <strong>Circle</strong> — plane perpendicular to the cone&apos;s axis.</li>
              <li>• <strong>Ellipse</strong> — plane tilted, but not parallel to a generator.</li>
              <li>• <strong>Parabola</strong> — plane exactly parallel to one generator (one side of the cone).</li>
              <li>• <strong>Hyperbola</strong> — plane tilted enough to cut both nappes.</li>
            </ul>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              These four curves are everywhere in physics and engineering: planets travel in ellipses, projectiles follow parabolas, the cooling towers of power plants are hyperboloids, and the lenses in eyes and telescopes are sections of spheres.
            </p>

            <CalloutCard title="Why these four?">
              These shapes are exactly what you get from quadratic equations in x and y — that is, equations where the highest power is 2 and there&apos;s no mixed xy term. Any equation Ax² + Cy² + Dx + Ey + F = 0 is one of the four conics (or a degenerate version: a point, a line, or two crossing lines).
            </CalloutCard>
          </section>

          <section id="section2" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>2</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 10.3</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The Circle</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>circle</strong> is the set of all points at a fixed distance r (the <em>radius</em>) from a fixed point (the <em>centre</em>). By the distance formula, the equation of a circle with centre (h, k) and radius r is:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              (x − h)² + (y − k)² = r²
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              When the centre is at the origin, this simplifies to x² + y² = r². Expanding the standard form gives x² + y² + Dx + Ey + F = 0 for some constants D, E, F. To go the other way — given the expanded form, find the centre and radius — you <strong>complete the square</strong> in x and y.
            </p>

            <CalloutCard title="Completing the square — the trick">
              For x² + Dx, add and subtract (D/2)². Then x² + Dx = (x + D/2)² − (D/2)². The same trick works for y. After applying it to both groups, the equation collapses into standard form (x − h)² + (y − k)² = r².
            </CalloutCard>

            <div className="mt-6 mb-6">
              <CircleFromGeneralForm />
            </div>
          </section>

          <section id="section3" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>3</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 10.4</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The Parabola</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>parabola</strong> is the set of points equidistant from a fixed point (the <em>focus</em>) and a fixed line (the <em>directrix</em>). Every parabola has an <strong>axis of symmetry</strong> — the perpendicular from the focus to the directrix — and a <strong>vertex</strong> at the midpoint between the focus and the directrix.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For a parabola with vertex at the origin, axis along the x-axis, focus at (a, 0), and directrix x = −a, the equation is:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              y² = 4ax  (opens right when a &gt; 0)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Flipping signs and swapping x with y gives the other three orientations: y² = −4ax (opens left), x² = 4ay (opens up), x² = −4ay (opens down). The chord through the focus perpendicular to the axis is the <strong>latus rectum</strong>, with length 4a.
            </p>

            <CalloutCard title="Why parabolas appear in dishes and headlights">
              A parabola has the reflection property: light or sound coming in parallel to the axis bounces off the curve and converges at the focus. That&apos;s why satellite dishes and car headlights are parabolic — to focus incoming rays or project outgoing ones in a tight beam.
            </CalloutCard>
          </section>

          <section id="section4" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>4</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 10.5</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The Ellipse</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              An <strong>ellipse</strong> is the set of points where the <em>sum</em> of distances to two fixed points (the <strong>foci</strong>) is a constant. The longer axis through both foci is the <strong>major axis</strong> with length 2a; perpendicular to it is the <strong>minor axis</strong> with length 2b. The distance between the foci is 2c, with the relationship:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--bg-sidebar)", border: "1.5px solid var(--border)", color: "var(--text)" }}>
              a² = b² + c²,  so c = √(a² − b²)
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              For an ellipse centred at the origin with major axis along the x-axis, the equation is:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              x²/a² + y²/b² = 1  (with a &gt; b)
            </p>

            <CalloutCard title="Eccentricity">
              The <strong>eccentricity</strong> e = c/a measures how &quot;stretched&quot; the ellipse is. For an ellipse, 0 ≤ e &lt; 1.<br />
              e = 0: a perfect circle (c = 0, foci collide at the centre).<br />
              e close to 1: very elongated ellipse (foci near the ends).
            </CalloutCard>

            <CalloutCard title="Why planets matter">
              Kepler&apos;s first law of planetary motion: each planet moves in an <em>ellipse</em> with the Sun at one focus. The eccentricity of Earth&apos;s orbit is just 0.017 — almost a circle. Halley&apos;s comet has e ≈ 0.97 — long and skinny.
            </CalloutCard>
          </section>

          <section id="section5" className="scroll-mt-16 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="leading-none shrink-0" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: "var(--text)" }}>5</span>
              <div>
                <p className="mb-0.5" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>Section 10.6</p>
                <h2 className="font-bold" style={{ fontSize: 20, color: "var(--text)" }}>The Hyperbola</h2>
              </div>
            </div>
            <hr className="mb-6" style={{ borderColor: "var(--border)" }} />

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              A <strong>hyperbola</strong> is the set of points where the <em>difference</em> of distances to two fixed foci is a constant (in absolute value). Same actors as the ellipse — two foci, two vertices, a centre — but with subtraction instead of addition, you get two separate branches opening in opposite directions.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The standard equation, with centre at the origin and transverse axis along x:
            </p>

            <p className="leading-relaxed mb-4 font-mono text-sm px-4 py-3 rounded-lg text-center font-bold"
              style={{ background: "var(--green-light)", border: "1.5px solid var(--green-border)", color: "var(--green-dark)" }}>
              x²/a² − y²/b² = 1
            </p>

            <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontSize: 15 }}>
              The relationship between a, b, and c is reversed: <strong>c² = a² + b²</strong>. The eccentricity e = c/a is now <em>greater</em> than 1. As you go far from the centre, the branches approach two straight lines called <strong>asymptotes</strong>, with slopes ±b/a.
            </p>

            <div className="mt-6 mb-6">
              <ConicGallery />
            </div>

            <CalloutCard title="The conic identity">
              Here&apos;s a beautiful unifying fact. All four conics can be defined as &quot;the set of points where the ratio of distance from a focus to distance from a directrix equals e&quot;:<br />
              e &lt; 1: ellipse<br />
              e = 1: parabola<br />
              e &gt; 1: hyperbola<br />
              e = 0 (degenerate): circle<br />
              One definition, one number, all the conics.
            </CalloutCard>
          </section>

          <section id="quiz" className="scroll-mt-16 mt-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Check Your Understanding</h2>
            <p className="mb-6" style={{ color: "var(--text-muted)", fontSize: 14 }}>10 questions sampled from a 25-question pool. Take your time.</p>
            <Quiz pool={GRADE_11_CH10_QUESTIONS} />
          </section>

          <div className="mt-16 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Chapter 10 of 14</span>
          </div>

        </main>
      </div>
    </div>
  );
}
