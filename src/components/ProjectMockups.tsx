type MockProps = { className?: string };

const chrome = "#1c1c22";
const panel = "#232329";
const line = "#33333c";

export function DashboardMockup({ className = "" }: MockProps) {
  return (
    <svg viewBox="0 0 480 340" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="340" fill="#141418" />
      <rect x="0" y="0" width="120" height="340" fill={chrome} />
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x="20" y={40 + i * 40} width="80" height="10" rx="5" fill={i === 1 ? "#CCFF00" : line} />
      ))}
      <rect x="140" y="24" width="320" height="46" rx="12" fill={panel} />
      <rect x="158" y="40" width="140" height="14" rx="7" fill={line} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={140 + i * 108} y="92" width="96" height="76" rx="12" fill={panel} />
      ))}
      <rect x="140" y="184" width="200" height="132" rx="12" fill={panel} />
      <polyline
        points="156,290 190,250 222,270 254,220 286,240 318,200"
        fill="none"
        stroke="#CCFF00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="356" y="184" width="104" height="132" rx="12" fill={panel} />
      <circle cx="408" cy="240" r="34" fill="none" stroke="#CCFF00" strokeWidth="10" strokeDasharray="140 213" strokeLinecap="round" />
    </svg>
  );
}

export function LandingMockup({ className = "" }: MockProps) {
  return (
    <svg viewBox="0 0 480 340" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="340" fill="#151a12" />
      <rect x="0" y="0" width="480" height="48" fill={chrome} />
      <circle cx="30" cy="24" r="8" fill="#CCFF00" />
      {[120, 180, 240, 300].map((x) => (
        <rect key={x} x={x} y="19" width="42" height="10" rx="5" fill={line} />
      ))}
      <rect x="380" y="14" width="70" height="20" rx="10" fill="#CCFF00" />
      <rect x="60" y="96" width="360" height="26" rx="6" fill="#e8e8e8" opacity="0.9" />
      <rect x="110" y="132" width="260" height="16" rx="6" fill={line} />
      <rect x="190" y="176" width="100" height="34" rx="17" fill="#CCFF00" />
      <rect x="70" y="240" width="100" height="70" rx="10" fill={panel} />
      <rect x="190" y="240" width="100" height="70" rx="10" fill={panel} />
      <rect x="310" y="240" width="100" height="70" rx="10" fill={panel} />
    </svg>
  );
}

export function AppMockup({ className = "" }: MockProps) {
  return (
    <svg viewBox="0 0 480 340" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="340" fill="#12141c" />
      <rect x="170" y="14" width="140" height="312" rx="28" fill="#1a1c26" stroke="#33333c" strokeWidth="2" />
      <rect x="182" y="34" width="116" height="200" rx="14" fill={panel} />
      <circle cx="240" cy="90" r="26" fill="#CCFF00" opacity="0.85" />
      <rect x="198" y="130" width="84" height="10" rx="5" fill={line} />
      <rect x="198" y="148" width="60" height="10" rx="5" fill={line} />
      <rect x="198" y="176" width="84" height="40" rx="10" fill="#0e0e12" />
      <rect x="182" y="246" width="116" height="18" rx="9" fill="#CCFF00" />
      <rect x="182" y="272" width="116" height="18" rx="9" fill="#242430" />
      <circle cx="90" cy="120" r="34" fill={panel} />
      <circle cx="90" cy="120" r="34" fill="none" stroke="#CCFF00" strokeWidth="6" strokeDasharray="90 124" />
      <rect x="60" y="180" width="60" height="60" rx="12" fill={panel} />
      <circle cx="390" cy="120" r="30" fill={panel} />
      <rect x="366" y="176" width="70" height="90" rx="12" fill={panel} />
    </svg>
  );
}

export function AgencyMockup({ className = "" }: MockProps) {
  return (
    <svg viewBox="0 0 480 340" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="340" fill="#0f0f13" />
      <rect x="0" y="0" width="480" height="340" fill="url(#agencyGrad)" opacity="0.5" />
      <defs>
        <radialGradient id="agencyGrad" cx="30%" cy="20%" r="70%">
          <stop offset="0" stopColor="#CCFF00" stopOpacity="0.35" />
          <stop offset="1" stopColor="#0f0f13" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="40" y="40" width="120" height="14" rx="7" fill={line} />
      <rect x="40" y="90" width="380" height="46" rx="8" fill="#f4f4f2" opacity="0.92" />
      <rect x="40" y="150" width="300" height="46" rx="8" fill="#f4f4f2" opacity="0.55" />
      <rect x="40" y="220" width="130" height="40" rx="20" fill="#CCFF00" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={40 + i * 148} y="280" width="128" height="1" fill={line} />
      ))}
    </svg>
  );
}
