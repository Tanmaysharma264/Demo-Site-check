import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="container-app">
        <div className="noise-bg relative overflow-hidden rounded-[36px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-8 py-20 text-center md:px-16 md:py-28">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
            style={{ background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)" }}
          />
          <div className="relative flex flex-col items-center gap-8">
            <Reveal>
              <h2 className="max-w-3xl text-balance font-[var(--font-display)] text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-ink)]">
                Let's Give Your Website A{" "}
                <span className="text-[color:var(--color-lime)]">Professional Look</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-lg text-balance text-base leading-relaxed text-[color:var(--color-ink-muted)]">
                Ready to elevate your brand online? Let's build something people
                remember.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="mailto:Hammadarif662@gmail.com" size="lg">
                  Hire Me
                </Button>
                <Button href="#projects" size="lg" variant="secondary" icon={false}>
                  See Works
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
