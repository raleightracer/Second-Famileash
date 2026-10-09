/** The leash line used as a section divider across the site. */
export default function Leash({ className }: { className?: string }) {
  const d = "M0 30 C150 0 300 62 450 30 S750 0 900 30 S1100 56 1200 24";
  return (
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path d={d} fill="none" className="stroke-accent" strokeWidth="9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path
        d={d}
        fill="none"
        className="stroke-ink/40"
        strokeWidth="2.5"
        strokeDasharray="1 12"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
