import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { PortraitIllustration, ExperienceBadge, RatingBadge } from "./HeroVisual";

const HEADLINE = "I build high-performance websites that elevate brands online.";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const words = HEADLINE.split(" ");

  return (
    <section id="home" className="noise-bg relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)" }}
      />

      <div className="container-app relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-[color:var(--color-ink-muted)]"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[color:var(--color-lime)] text-sm">
              👋
            </span>
            Hey, I am Emilia
          </motion.div>

          <h1 className="max-w-2xl text-balance font-[var(--font-display)] text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[color:var(--color-ink)]">
            {words.map((word, i) => (
              <span key={i} className="mr-[0.28em] inline-block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15 + i * 0.045, ease: easeOut }}
                  className={`inline-block ${word.toLowerCase().includes("elevate") ? "text-[color:var(--color-lime)]" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
            className="max-w-md text-balance text-base leading-relaxed text-[color:var(--color-ink-muted)]"
          >
            A freelance product designer &amp; developer crafting refined digital
            experiences for ambitious startups and brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: easeOut }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg">
              Hire Me
            </Button>
            <Button href="#projects" size="lg" variant="secondary" icon={false}>
              See Works
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: easeOut }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[28px] border border-[color:var(--color-border)]">
            <PortraitIllustration className="h-full w-full" />
          </div>
          <ExperienceBadge />
          <RatingBadge />
        </motion.div>
      </div>
    </section>
  );
}
