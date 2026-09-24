import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--color-border)] pb-10 pt-16">
      <img
        src="/images/footer-decoration.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="container-app relative flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink-muted)]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[color:var(--color-accent)]" />
                </span>
                Available for work
              </div>
              <a
                href="mailto:Hammadarif662@gmail.com"
                className="group flex items-center gap-3 font-sans text-[clamp(1.5rem,5vw,3rem)] font-bold tracking-[-0.01em] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-accent)]"
              >
                Hammadarif662@gmail.com
                <ArrowUpRight
                  size={30}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-md text-balance text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            I create stunning digital experiences that captivate—welcome to Zedex.
          </p>
        </Reveal>

        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-[color:var(--color-border)] pt-8 md:flex-row md:items-center">
          <p className="text-sm text-[color:var(--color-ink-soft)]">© 2025 Emily Zedex</p>
          <div className="flex items-center gap-6 text-sm text-[color:var(--color-ink-muted)]">
            <a href="https://x.com/Hammad7525" target="_blank" rel="noreferrer" className="transition-colors hover:text-[color:var(--color-ink)]">
              X
            </a>
            <a href="https://www.linkedin.com/in/hammad7525/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[color:var(--color-ink)]">
              LinkedIn
            </a>
            <a href="https://dribbble.com/Hammad_Arif" target="_blank" rel="noreferrer" className="transition-colors hover:text-[color:var(--color-ink)]">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
