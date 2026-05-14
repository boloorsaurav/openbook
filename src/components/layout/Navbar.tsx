/**
 * Navbar — the sticky top bar shown on every page.
 *
 * Shows the "Openbook" brand on the left (links back to home) and an optional
 * page title to its right, separated by a thin vertical divider.
 *
 * Props:
 *   title — optional. The chapter or page name shown next to the brand.
 *           Example: "Class 8 Math · Playing with Numbers".
 *
 * Used by: every chapter page (src/app/read/chN/page.tsx) and the home page.
 *
 * Gotchas:
 *   - It's `sticky top-0` with z-index 10, so anything that should sit above
 *     it needs a higher z-index.
 *   - The title is `truncate`d on narrow screens — long titles get cut off.
 */
"use client";
import Link from "next/link";

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="h-12 bg-white border-b sticky top-0 z-10 flex items-center px-5 gap-3"
      style={{ borderColor: "var(--border)" }}>
      <Link href="/" className="font-bold text-[15px] tracking-tight" style={{ color: "var(--accent)", fontFamily: "var(--font-display)", textDecoration: "none" }}>
        Openbook
      </Link>
      {title && (
        <>
          <span className="w-px h-5" style={{ background: "var(--border-strong)" }} />
          <span className="text-xs flex-1 truncate" style={{ color: "var(--text-muted)" }}>
            {title}
          </span>
        </>
      )}
    </nav>
  );
}
