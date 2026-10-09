interface DogFaceProps {
  fur: string;
  ear: string;
  muzzle: string;
  patch?: string;
  tongue?: boolean;
  label: string;
  className?: string;
}

/** Illustrated dog portrait. Colors are props so every rescue gets its own look. */
export default function DogFace({ fur, ear, muzzle, patch, tongue = false, label, className }: DogFaceProps) {
  const ink = "#1b1b1b";
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={label} className={className}>
      <ellipse cx="44" cy="92" rx="26" ry="56" transform="rotate(14 44 92)" fill={ear} />
      <ellipse cx="156" cy="92" rx="26" ry="56" transform="rotate(-14 156 92)" fill={ear} />
      <ellipse cx="100" cy="104" rx="62" ry="66" fill={fur} />
      {patch && <ellipse cx="128" cy="86" rx="24" ry="28" fill={patch} />}
      <ellipse cx="100" cy="132" rx="35" ry="29" fill={muzzle} />
      {tongue && <path d="M91 142 q9 26 18 0 z" fill="#F28B9B" />}
      <ellipse cx="100" cy="117" rx="14" ry="10" fill={ink} />
      <path
        d="M100 126 v10 M100 136 q-10 10 -21 2 M100 136 q10 10 21 2"
        stroke={ink}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="75" cy="90" r="7" fill={ink} />
      <circle cx="125" cy="90" r="7" fill={ink} />
      <circle cx="77.5" cy="87.5" r="2.5" fill="#fff" />
      <circle cx="127.5" cy="87.5" r="2.5" fill="#fff" />
    </svg>
  );
}
