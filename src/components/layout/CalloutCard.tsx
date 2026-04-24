interface CalloutCardProps {
  title?: string;
  children: React.ReactNode;
}

export default function CalloutCard({ title = "Key Idea", children }: CalloutCardProps) {
  return (
    <div className="rounded-lg px-5 py-4 my-5 border"
      style={{
        background: "var(--green-light)",
        borderColor: "var(--green-border)",
      }}>
      <p className="text-[10px] font-bold uppercase tracking-wider mb-2"
        style={{ color: "var(--green-dark)" }}>
        {title}
      </p>
      <div className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
        {children}
      </div>
    </div>
  );
}
