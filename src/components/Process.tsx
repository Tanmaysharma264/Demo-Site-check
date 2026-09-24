import { motion } from "framer-motion";
import { Search, Compass, PenTool, Rocket } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We align on goals, audience and scope to set a clear foundation.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Research",
    description: "Competitive analysis and user insights inform every decision.",
    icon: Search,
  },
  {
    number: "03",
    title: "Design",
    description: "Wireframes evolve into polished, on-brand visual designs.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    description: "Pixel-perfect, performant builds ready for launch.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-app flex flex-col gap-16">
        <SectionHeading
          eyebrow="How I Work"
          title="My Process"
          description="A refined four-step process that takes your project from idea to launch."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.09}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7"
              >
                <span className="font-[var(--font-display)] text-5xl font-bold text-[color:var(--color-surface-2)]">
                  {step.number}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-[color:var(--color-surface-2)] text-[color:var(--color-lime)]">
                  <step.icon size={20} />
                </span>
                <div>
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-[color:var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {step.description}
                  </p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-[color:var(--color-border)] lg:block" />
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
