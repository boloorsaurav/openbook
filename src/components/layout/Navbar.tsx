"use client";

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="h-12 bg-white border-b sticky top-0 z-10 flex items-center px-5 gap-3"
      style={{ borderColor: "var(--border)" }}>
      <span className="font-bold text-[15px] tracking-tight" style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>
        Openbook
      </span>
      <span className="w-px h-5" style={{ background: "var(--border-strong)" }} />
      <span className="text-xs flex-1 truncate" style={{ color: "var(--text-muted)" }}>
        {title}
      </span>
    </nav>
  );
}
