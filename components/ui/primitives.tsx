import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold tracking-widest text-primary/70 uppercase">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl leading-tight font-bold tracking-tight sm:text-4xl ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground transition-colors duration-200 hover:bg-secondary/70">
      {children}
    </span>
  );
}

export function TopicTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary/90">
      {children}
    </span>
  );
}

export function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
        >
          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
