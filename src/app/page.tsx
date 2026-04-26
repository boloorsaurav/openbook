import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

type Course = { name: string; href?: string };
type Section = { title: string; columns: 2 | 4; courses: Course[] };

const SECTIONS: Section[] = [
  {
    title: "NCERT Math",
    columns: 4,
    courses: [
      { name: "Grade 1" },
      { name: "Grade 2" },
      { name: "Grade 3" },
      { name: "Grade 4" },
      { name: "Grade 5" },
      { name: "Grade 6" },
      { name: "Grade 7" },
      { name: "Grade 8", href: "/read/ch1" },
      { name: "Grade 9" },
      { name: "Grade 10" },
      { name: "Grade 11" },
      { name: "Grade 12" },
    ],
  },
  {
    title: "Engineering Math",
    columns: 2,
    courses: [
      { name: "Differential Equations" },
      { name: "Linear Algebra" },
      { name: "Complex Variable" },
      { name: "Probability & Statistics" },
      { name: "Basic Graph Theory" },
      { name: "Discrete Mathematics" },
    ],
  },
  {
    title: "Advanced Math",
    columns: 2,
    courses: [
      { name: "Non-linear Dynamics & Chaos" },
      { name: "Computational Mechanics" },
    ],
  },
];

function CourseCard({ course }: { course: Course }) {
  const available = !!course.href;

  const cardBase: React.CSSProperties = {
    position: "relative",
    padding: "16px 18px",
    borderRadius: 10,
    border: "1.5px solid var(--border)",
    background: available ? "var(--bg-card)" : "var(--bg-sidebar)",
    color: available ? "var(--text)" : "var(--text-light)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15,
    cursor: available ? "pointer" : "default",
    textDecoration: "none",
    transition: "transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 64,
  };

  const inner = (
    <>
      <span style={{ paddingRight: available ? 56 : 0 }}>{course.name}</span>
      {available ? (
        <span
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "3px 8px",
            borderRadius: 999,
            background: "var(--green-light)",
            color: "var(--green-dark)",
            border: "1px solid var(--green-border)",
            fontFamily: "var(--font-body)",
          }}
        >
          ✓ Available
        </span>
      ) : (
        <span
          style={{
            alignSelf: "flex-end",
            fontSize: 10,
            fontWeight: 500,
            color: "var(--text-light)",
            letterSpacing: "0.04em",
            fontFamily: "var(--font-body)",
            marginTop: 6,
          }}
        >
          soon
        </span>
      )}
    </>
  );

  if (available && course.href) {
    return (
      <Link href={course.href} className="course-card course-card--available" style={cardBase}>
        {inner}
      </Link>
    );
  }
  return (
    <div className="course-card" style={cardBase} aria-disabled="true">
      {inner}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 md:px-12 py-12 pb-24">
        {/* Hero */}
        <section className="mb-14">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3"
            style={{ color: "var(--text)" }}
          >
            Openbook
          </h1>
          <p className="text-base md:text-lg" style={{ color: "var(--text-muted)", maxWidth: 560 }}>
            Interactive textbooks for self-learners. One course available today, more on the way.
          </p>
        </section>

        {/* Sections */}
        {SECTIONS.map((section) => (
          <section key={section.title} className="mb-12">
            <p
              className="text-[10px] font-bold uppercase mb-4"
              style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
            >
              {section.title}
            </p>
            <div
              className={
                section.columns === 4
                  ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                  : "grid grid-cols-1 md:grid-cols-2 gap-3"
              }
            >
              {section.courses.map((c) => (
                <CourseCard key={c.name} course={c} />
              ))}
            </div>
          </section>
        ))}

        {/* Footer note */}
        <p
          className="mt-16 text-xs"
          style={{ color: "var(--text-light)", borderTop: "1px solid var(--border)", paddingTop: 18 }}
        >
          Built with Next.js. No accounts, no tracking — just the textbooks.
        </p>
      </main>

      {/* Hover lift for available cards (scoped via class) */}
      <style>{`
        .course-card--available:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          border-color: var(--green-border) !important;
        }
      `}</style>
    </div>
  );
}
