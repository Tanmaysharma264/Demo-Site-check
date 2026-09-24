import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)]">
        <span className="size-1.5 rounded-full bg-[color:var(--color-lime)]" />
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
        <h2 className="max-w-3xl text-balance font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--color-ink)]">
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
