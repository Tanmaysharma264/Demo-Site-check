import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export function PortraitIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 480" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#1c2005" />
          <stop offset="1" stopColor="#0e0f08" />
        </linearGradient>
        <linearGradient id="bustGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a2a30" />
          <stop offset="0.55" stopColor="#18181c" />
          <stop offset="1" stopColor="#0c0c0e" />
        </linearGradient>
        <linearGradient id="rimGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-lime)" stopOpacity="0.95" />
          <stop offset="1" stopColor="var(--color-lime)" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.28" r="0.6">
          <stop offset="0" stopColor="var(--color-lime)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--color-lime)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="frameClip">
          <rect x="0" y="0" width="400" height="480" rx="28" />
        </clipPath>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#ffffff" opacity="0.07" />
        </pattern>
      </defs>

      <g clipPath="url(#frameClip)">
        <rect width="400" height="480" fill="url(#bgGrad)" />
        <rect width="400" height="480" fill="url(#dots)" />
        <ellipse cx="210" cy="120" rx="230" ry="200" fill="url(#glow)" />

        {/* shoulders */}
        <path d="M-20 480V360c0-70 100-110 220-110s220 40 220 110v120Z" fill="url(#bustGrad)" />
        {/* rim light on shoulders */}
        <path d="M-20 480V360c0-70 100-110 220-110l6 20c-96 8-176 44-176 90v120Z" fill="url(#rimGrad)" opacity="0.5" />

        {/* neck */}
        <rect x="176" y="270" width="48" height="70" fill="#16161a" />

        {/* head */}
        <ellipse cx="200" cy="205" rx="82" ry="92" fill="url(#bustGrad)" />
        {/* rim light on head edge */}
        <path
          d="M200 113c45 0 82 41 82 92 0 45-22 78-55 89"
          fill="none"
          stroke="url(#rimGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* jaw shadow */}
        <path d="M140 250c18 22 38 34 60 34s42-12 60-34c-6 34-32 58-60 58s-54-24-60-58Z" fill="#0c0c0e" opacity="0.55" />

        {/* hair mass */}
        <path
          d="M118 190c-6-68 34-118 82-118s88 50 82 118c-4-30-16-52-34-64 4 12 2 24-4 32-18-26-46-40-44-40s-26 14-44 40c-6-8-8-20-4-32-18 12-30 34-34 64Z"
          fill="#0a0a0d"
        />

        <rect x="80" y="450" width="240" height="8" rx="4" fill="var(--color-lime)" opacity="0.55" />
      </g>
    </svg>
  );
}

export function FloatingBadge({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float absolute z-20 flex items-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-[#141418]/90 px-4 py-3 shadow-2xl backdrop-blur-xl ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

export function ExperienceBadge() {
  return (
    <FloatingBadge className="-left-6 bottom-10 md:-left-10" delay={0.9}>
      <span className="grid size-9 place-items-center rounded-full bg-[color:var(--color-lime)] text-[#0a0a0d]">
        <Sparkles size={16} />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-[color:var(--color-ink)]">5+ Years</p>
        <p className="text-xs text-[color:var(--color-ink-muted)]">Experience</p>
      </div>
    </FloatingBadge>
  );
}

export function RatingBadge() {
  return (
    <FloatingBadge className="-right-4 top-14 md:-right-8" delay={1.15}>
      <div className="flex -space-x-2">
        {["#CCFF00", "#8b8bff", "#ff8b8b"].map((c) => (
          <span
            key={c}
            className="size-7 rounded-full border-2 border-[#141418]"
            style={{ background: c }}
          />
        ))}
      </div>
      <div className="leading-tight">
        <div className="flex items-center gap-0.5 text-[color:var(--color-lime)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="text-xs text-[color:var(--color-ink-muted)]">40+ Clients</p>
      </div>
    </FloatingBadge>
  );
}
