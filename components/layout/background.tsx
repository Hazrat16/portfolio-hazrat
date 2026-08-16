/** Fixed ambient glow behind every page. */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-primary/12 blur-[120px]" />
      <div className="absolute -top-52 -right-24 size-[32rem] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute -bottom-56 left-1/3 size-[40rem] rounded-full bg-primary/6 blur-[140px]" />
    </div>
  );
}

/** Decorative edge glow used inside individual sections. */
export function SectionGlow({
  side = "left",
  className,
}: {
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-1/2 -z-10 size-[26rem] -translate-y-1/2 rounded-full bg-primary/8 blur-[110px] ${
        side === "left" ? "-left-48" : "-right-48"
      } ${className ?? ""}`}
    />
  );
}
