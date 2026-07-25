type ProjectLinkChipProps = {
  href?: string;
  label: string;
};

export default function ProjectLinkChip({ href, label }: ProjectLinkChipProps) {
  if (href) {
    return (
      <a
        href={href}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:border-cyan-300/35"
      >
        {label}
      </a>
    );
  }

  return (
    <span className="cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-500">
      {label} (add link)
    </span>
  );
}
