import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border-soft)] pb-10 pt-16">
      <div className="container-app flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-muted)]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-lime)] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[color:var(--color-lime)]" />
                </span>
                Available for work
              </div>
              <a
                href="mailto:Hammadarif662@gmail.com"
                className="group flex items-center gap-3 font-[var(--font-display)] text-[clamp(1.75rem,5vw,3.25rem)] font-semibold tracking-[-0.02em] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-lime)]"
              >
                Hammadarif662@gmail.com
                <ArrowUpRight
                  size={32}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-md text-balance text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            I create stunning digital experiences that captivate—welcome to
            Zedex.
          </p>
        </Reveal>

        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-[color:var(--color-border-soft)] pt-8 md:flex-row md:items-center">
          <p className="text-sm text-[color:var(--color-ink-dim)]">© 2025 Emily Zedex</p>
          <div className="flex items-center gap-6 text-sm text-[color:var(--color-ink-muted)]">
            <a href="#home" className="transition-colors hover:text-[color:var(--color-ink)]">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-[color:var(--color-ink)]">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-[color:var(--color-ink)]">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-[color:var(--color-ink)]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
