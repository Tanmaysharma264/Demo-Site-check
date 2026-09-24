import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-ink-muted)]">
        <span className="size-1.5 rounded-full bg-[color:var(--color-accent)]" />
        {children}
      </div>
    </Reveal>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <SectionTag>{eyebrow}</SectionTag>
      <Reveal delay={0.08}>
        <h2 className="max-w-2xl text-balance font-sans text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink)]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-balance text-base leading-relaxed text-[color:var(--color-ink-muted)]">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
