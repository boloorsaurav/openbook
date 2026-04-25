"use client";
import Link from "next/link";

export interface Chapter {
  number: number;
  title: string;
  href?: string;
  available?: boolean;
}

interface SidebarProps {
  chapters: Chapter[];
  activeChapter: number;
}

export default function Sidebar({ chapters, activeChapter }: SidebarProps) {
  return (
    <aside className="w-52 shrink-0 border-r pt-6 pb-5 min-h-full"
      style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}>
      <p className="text-[9px] font-bold uppercase px-4 pb-4"
        style={{ color: "var(--text-light)", letterSpacing: "0.12em" }}>
        Contents
      </p>
      {chapters.map((ch) => {
        const isActive = ch.number === activeChapter;
        const isAvailable = ch.available !== false && !!ch.href;

        const itemStyle = {
          paddingLeft: "14px",
          borderLeft: `2.5px solid ${isActive ? "var(--accent)" : "transparent"}`,
          borderRadius: isActive ? "0 8px 8px 0" : "8px",
          background: isActive ? "var(--accent-light)" : "transparent",
          color: isActive ? "var(--accent-dark)" : isAvailable ? "var(--text-muted)" : "var(--text-light)",
          fontWeight: isActive ? 700 : 500,
          fontSize: 13,
          cursor: isAvailable ? "pointer" : "default",
          textDecoration: "none",
          marginBottom: 1,
          marginRight: 8,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingRight: "12px",
        } as React.CSSProperties;

        const inner = (
          <>
            <span className="shrink-0" style={{
              width: 6, height: 6, borderRadius: "50%",
              background: isActive ? "var(--accent)" : isAvailable ? "var(--border-strong)" : "var(--border)",
              flexShrink: 0,
            }} />
            <span className="leading-snug">{ch.number}. {ch.title}</span>
          </>
        );

        if (isAvailable && ch.href) {
          return (
            <Link key={ch.number} href={ch.href} style={itemStyle}>
              {inner}
            </Link>
          );
        }

        return (
          <span key={ch.number} style={itemStyle}>
            {inner}
          </span>
        );
      })}
    </aside>
  );
}
