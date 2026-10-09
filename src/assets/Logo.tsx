export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="20" className="fill-accent" />
      <path d="M8 24 C8 12 22 8 27 15" fill="none" stroke="#111f1c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="22" r="8" fill="#111f1c" />
      <ellipse cx="25" cy="16.5" rx="3" ry="5" transform="rotate(-20 25 16.5)" fill="#111f1c" />
      <circle cx="30" cy="22" r="1.4" fill="#F7C948" />
      <circle cx="26" cy="22" r="1.4" fill="#F7C948" />
    </svg>
  );
}
