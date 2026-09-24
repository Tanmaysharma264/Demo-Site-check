import { motion } from "framer-motion";
import { Layers, PenTool, Globe, Box } from "lucide-react";
import { SectionTag } from "./ui/SectionTag";
import { Reveal, RevealStagger, revealItem } from "./ui/Reveal";
import { PortraitIllustration } from "./HeroVisual";

const SKILLS = [
  { title: "Framer Development", icon: Globe },
  { title: "Figma UIUX", icon: PenTool },
  { title: "Webflow Development", icon: Layers },
  { title: "3D Animation", icon: Box },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container-app grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[color:var(--color-border)]">
              <PortraitIllustration className="h-full w-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/95 p-4 text-center backdrop-blur-xl"
            >
              <p className="font-[var(--font-display)] text-2xl font-bold text-[color:var(--color-lime)]">4+ Years</p>
              <p className="text-xs text-[color:var(--color-ink-muted)]">Freelance Design Experience</p>
            </motion.div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          <SectionTag>About Me</SectionTag>
          <Reveal delay={0.08}>
            <h2 className="max-w-xl text-balance font-[var(--font-display)] text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[color:var(--color-ink)]">
              Hey, I am Emilia
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-balance text-base leading-relaxed text-[color:var(--color-ink-muted)]">
              I'm a product designer and developer based between web and brand.
              Over the last four years I've partnered with founders and teams to
              turn ambitious ideas into polished, high-performing digital
              products — blending strategy, visual design and clean code into
              experiences people genuinely enjoy using.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-2 gap-4 pt-4">
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.title}
                variants={revealItem}
                className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[color:var(--color-surface-2)] text-[color:var(--color-lime)]">
                  <skill.icon size={18} />
                </span>
                <span className="text-sm font-medium text-[color:var(--color-ink)]">{skill.title}</span>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
