import { motion } from "framer-motion";
import { ArrowUpRight, Layout, Code2, Palette, Sparkles, MessageCircle } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";

const SERVICES = [
  {
    title: "Web Design",
    description:
      "Crafting visually appealing, user-friendly designs that reflect your brand. From wireframes to final prototypes, every detail is considered.",
    icon: Layout,
  },
  {
    title: "Web Development",
    description:
      "Building functional, no-code websites that are easy to manage and optimized for performance across devices.",
    icon: Code2,
  },
  {
    title: "Brand Identity",
    description:
      "Crafting cohesive visual branding, including logos, color palettes, and typography, to establish a strong brand presence.",
    icon: Palette,
  },
  {
    title: "UX/UI Design",
    description:
      "Designing intuitive user interfaces and seamless user experiences to enhance engagement and usability.",
    icon: Sparkles,
  },
  {
    title: "Consultation Services",
    description:
      "Providing expert advice and actionable insights to help you plan and execute your design projects effectively.",
    icon: MessageCircle,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-[120px]">
      <div className="container-app flex flex-col gap-14">
        <SectionHeading eyebrow="Services" title="What I can do for you" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <motion.div
                whileHover="hover"
                className="squircle group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[color:var(--color-surface)] text-[color:var(--color-accent)]">
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
                  <h3 className="font-sans text-xl font-bold text-[color:var(--color-ink)]">
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
