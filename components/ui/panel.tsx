import type { ReactNode } from "react";

/** Bordered surface with a small uppercase accent label, used to group the
 *  resume and projects page sections. */
export function Panel({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`overflow-hidden rounded-xl border border-border/50 bg-card/40 backdrop-blur-[2px] ${className ?? ""}`}
    >
      <header className="border-b border-border/40 px-5 py-3">
        <h2 className="text-xs font-semibold tracking-widest text-primary uppercase">
          {label}
        </h2>
      </header>
      <div className="divide-y divide-border/40">{children}</div>
    </section>
  );
}

export function PanelItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-5 ${className ?? ""}`}>{children}</div>;
}
