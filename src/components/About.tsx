import { motion } from "framer-motion";
import { SectionTag } from "./ui/SectionTag";
import { Reveal, RevealStagger, revealItem } from "./ui/Reveal";

const SKILLS = [
  { title: "Framer Development", icon: "/images/about-skill-framer.png" },
  { title: "Figma UIUX", icon: "/images/about-skill-figma.png" },
  { title: "Webflow Development", icon: "/images/about-skill-webflow.svg" },
  { title: "3d Animation", icon: "/images/about-skill-3danimation.svg" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-[120px]">
      <div className="container-app grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="squircle relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[32px] shadow-[var(--shadow-soft)]">
            <img
              src="/images/about-portrait.jpg"
              alt="Emilia — portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          <SectionTag>About Me</SectionTag>
          <Reveal delay={0.08}>
            <h2 className="max-w-xl text-balance font-sans text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Hey, I am Emilia
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-balance text-base leading-relaxed text-[color:var(--color-ink-muted)]">
              As a digital product designer, my focus is on creating intuitive
              user interfaces, seamless interactions, and cohesive brand
              identities that drive engagement and enhance usability.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-2 gap-4 pt-2">
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.title}
                variants={revealItem}
                className="squircle flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white p-4 shadow-[var(--shadow-soft)]"
              >
                <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-[color:var(--color-surface)]">
                  <img src={skill.icon} alt={skill.title} className="h-7 w-7 object-contain" />
                </span>
                <span className="text-sm font-semibold text-[color:var(--color-ink)]">{skill.title}</span>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
