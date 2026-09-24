import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  gap?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  speed = 32,
  reverse = false,
  gap = 56,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div
        className={`flex w-max shrink-0 items-center ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          gap,
          animation: `marquee-x ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
