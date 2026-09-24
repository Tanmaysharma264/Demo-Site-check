import { motion } from "framer-motion";
import { Search, Compass, PenTool, Rocket } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "I start by learning about your brand, users, and objectives.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Research",
    description: "I explore competitors, and best practices to ensure the solution.",
    icon: Search,
  },
  {
    number: "03",
    title: "Design",
    description: "I create wireframes and UI concepts focused on usability.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    description: "I transform designs into high-performance websites.",
    icon: Rocket,
  },
];

const TAGS = ["Web Development", "UI UX", "Web Design", "Framer Migration"];

export function Process() {
  return (
    <section className="py-16 md:py-[120px]">
      <div className="container-app flex flex-col gap-14">
        <SectionHeading eyebrow="How I Work" title="My Process" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.09}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="squircle relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]"
                style={{
                  backgroundImage: "url(/images/process-icon.svg)",
                  backgroundSize: "180px",
                  backgroundRepeat: "repeat",
                  backgroundPosition: "top left",
                }}
              >
                <span className="font-sans text-5xl font-extrabold text-[color:var(--color-surface-2)]">
                  {step.number}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-[color:var(--color-surface)] text-[color:var(--color-accent)]">
                  <step.icon size={20} />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-bold text-[color:var(--color-ink)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="squircle relative mx-auto flex w-full max-w-xl flex-col items-center gap-5 overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-center shadow-[var(--shadow-soft)]">
            <p className="font-sans text-xl font-bold text-[color:var(--color-ink)]">
              Ready to start your project?
            </p>
            <p className="max-w-sm text-sm text-[color:var(--color-ink-muted)]">
              Our commitment to innovation drives better outcomes for every patient
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--color-border)] bg-white px-4 py-1.5 text-xs font-medium text-[color:var(--color-ink-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
