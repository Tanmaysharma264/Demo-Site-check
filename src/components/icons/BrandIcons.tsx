type IconProps = { className?: string };

export function FramerLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8h-8v8l-8-8z" />
    </svg>
  );
}

export function LemonSqueezyLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 9.5c1.2-1.6 2.7-2.5 4-2.5 2.2 0 3 1.7 1.6 3.3-1 1.1-2.6 1.7-2.6 3.2 0 1 .8 1.5 1.8 1.5 1.1 0 2.2-.6 3.2-1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FigmaLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M8 1a3.5 3.5 0 0 0 0 7h3.5V1H8z" fill="currentColor" opacity="0.55" />
      <path d="M8 8a3.5 3.5 0 0 0 0 7h3.5V8H8z" fill="currentColor" opacity="0.75" />
      <path d="M8 15a3.5 3.5 0 1 0 3.5 3.5V15H8z" fill="currentColor" />
      <path d="M11.5 1v7H15a3.5 3.5 0 0 0 0-7h-3.5z" fill="currentColor" opacity="0.85" />
      <circle cx="15" cy="11.5" r="3.5" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

export function XLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.85 10.4 21.1 2h-1.72l-6.3 7.3L8.06 2H2l7.6 11.06L2 22h1.72l6.66-7.72L15.94 22H22l-8.15-11.6Zm-2.36 2.74-.77-1.1L4.55 3.3h2.65l4.96 7.1.77 1.1 6.45 9.23h-2.65l-5.24-7.6Z" />
    </svg>
  );
}

export function ContraLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="1.5" y="1.5" width="21" height="21" rx="10.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 8.2c-1-.8-2.2-1.2-3.5-1.2-3 0-5.4 1.9-5.4 5s2.4 5 5.4 5c1.3 0 2.5-.4 3.5-1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SlackLogo({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M9 15a2 2 0 1 1-2-2h2v2Z" fill="currentColor" opacity="0.9" />
      <path d="M10 15a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z" fill="currentColor" opacity="0.7" />
      <path d="M9 9a2 2 0 1 1 2-2v2H9Z" fill="currentColor" opacity="0.75" />
      <path d="M9 10a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5Z" fill="currentColor" opacity="0.55" />
      <path d="M15 9a2 2 0 1 1 2 2h-2V9Z" fill="currentColor" opacity="0.6" />
      <path d="M14 9a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5Z" fill="currentColor" opacity="0.9" />
      <path d="M15 14a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
