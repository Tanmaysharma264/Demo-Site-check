import { motion } from "framer-motion";
import { ArrowUpRight, Layout, Code2, Palette, Sparkles, MessageCircle } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";

const SERVICES = [
  {
    title: "Web Design",
    description: "Modern, conversion-focused designs tailored to your brand and audience.",
    icon: Layout,
  },
  {
    title: "Web Development",
    description: "Fast, responsive, pixel-perfect builds using modern frameworks.",
    icon: Code2,
  },
  {
    title: "Brand Identity",
    description: "Cohesive visual systems — logos, colors, typography that stand out.",
    icon: Palette,
  },
  {
    title: "UX/UI Design",
    description: "Intuitive interfaces backed by research and thoughtful interaction design.",
    icon: Sparkles,
  },
  {
    title: "Consultation Services",
    description: "Strategic guidance to help you make the right product decisions.",
    icon: MessageCircle,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="container-app flex flex-col gap-16">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Services designed to <span className="text-[color:var(--color-lime)]">grow your brand.</span>
            </>
          }
          description="From concept to launch, I offer end-to-end design and development services."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <motion.div
                whileHover="hover"
                className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 transition-colors duration-300 hover:border-[color:var(--color-lime)]/40"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "var(--color-lime)" }}
                />
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[color:var(--color-surface-2)] text-[color:var(--color-lime)]">
                    <service.icon size={22} />
                  </span>
                  <motion.span
                    variants={{ hover: { rotate: 45 } }}
                    transition={{ duration: 0.3 }}
                    className="grid size-9 place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink-muted)]"
                  >
                    <ArrowUpRight size={16} />
                  </motion.span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
