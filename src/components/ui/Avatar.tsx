const PALETTES = [
  ["#CCFF00", "#7a9600"],
  ["#8b8bff", "#3d3d9e"],
  ["#ff8b8b", "#9e3d3d"],
  ["#8bffe0", "#3d9e8a"],
  ["#ffcf8b", "#9e753d"],
];

export function Avatar({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const paletteIndex = name.charCodeAt(0) % PALETTES.length;
  const [from, to] = PALETTES[paletteIndex];

  return (
    <svg viewBox="0 0 48 48" className={className}>
      <defs>
        <linearGradient id={`grad-${initials}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill={`url(#grad-${initials})`} />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Manrope, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="#0a0a0d"
      >
        {initials}
      </text>
    </svg>
  );
}
