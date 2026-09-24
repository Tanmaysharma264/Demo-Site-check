import { TrendingUp } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";

export function Stats() {
  return (
    <section className="py-16 md:py-28">
      <div className="container-app">
        <div className="squircle grid gap-8 rounded-[32px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-10 shadow-[var(--shadow-soft)] md:grid-cols-[0.7fr_1.3fr] md:p-16">
          <Reveal>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-none tracking-tight text-[color:var(--color-accent)]">
                <Counter to={180} suffix="+" />
              </p>
              <p className="text-base text-[color:var(--color-ink-muted)]">Projects Completed</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-center gap-6 border-t border-[color:var(--color-border)] pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-0">
              <span className="grid size-14 place-items-center rounded-2xl bg-white text-[color:var(--color-accent)] shadow-[var(--shadow-soft)]">
                <TrendingUp size={24} />
              </span>
              <p className="max-w-md text-balance font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight tracking-[-0.01em] text-[color:var(--color-ink)]">
                My work helped clients grow their revenue by{" "}
                <span className="text-[color:var(--color-accent)]">
                  <Counter to={200} suffix="%" />
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
