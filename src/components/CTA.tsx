import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-[120px]">
      <div className="container-app">
        <div className="squircle relative overflow-hidden rounded-[36px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-8 py-20 text-center shadow-[var(--shadow-soft)] md:px-16 md:py-28">
          <img
            src="/images/cta-decoration.png"
            alt=""
            className="pointer-events-none absolute -left-10 top-6 w-64 opacity-80"
          />
          <img
            src="/images/cta-decoration.png"
            alt=""
            className="pointer-events-none absolute -right-16 bottom-6 w-72 scale-x-[-1] opacity-80"
          />
          <div className="relative flex flex-col items-center gap-8">
            <Reveal>
              <h2 className="max-w-3xl text-balance font-sans text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.01em] text-[color:var(--color-ink)]">
                Lets Give Your Website A{" "}
                <span className="text-[color:var(--color-accent)]">Professional Look</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="https://x.com/Hammad7525" size="lg" variant="primary">
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
