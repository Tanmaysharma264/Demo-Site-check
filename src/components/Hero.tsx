import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const HEADLINE = "I build high-performance websites that elevate brands online.";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const words = HEADLINE.split(" ");

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-cover bg-top opacity-90"
        style={{ backgroundImage: "url(/images/hero-decoration.jpg)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-white/0 via-white/40 to-white" />

      <div className="container-app relative flex flex-col items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white/80 py-1.5 pl-1.5 pr-4 text-sm text-[color:var(--color-ink-muted)] shadow-[var(--shadow-soft)] backdrop-blur"
        >
          <span className="grid size-7 place-items-center rounded-full bg-[color:var(--color-accent)] text-sm">
            👋
          </span>
          Hey, I am Emilia
        </motion.div>

        <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-ink)]">
          {words.map((word, i) => (
            <span key={i} className="mr-[0.28em] inline-block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 + i * 0.045, ease: easeOut }}
                className={`inline-block ${word.toLowerCase().includes("elevate") ? "text-[color:var(--color-accent)]" : ""}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease: easeOut }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="https://x.com/Hammad7525" size="lg" variant="primary">
            Hire Me
          </Button>
          <Button href="#projects" size="lg" variant="secondary" icon={false}>
            See Works
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
          className="relative mt-4 w-full max-w-md"
        >
          <div className="squircle relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-[var(--shadow-soft)]">
            <img
              src="/images/hero-portrait.jpg"
              alt="Emilia — portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
