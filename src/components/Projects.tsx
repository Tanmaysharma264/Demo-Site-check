import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";
import { DashboardMockup, LandingMockup, AppMockup, AgencyMockup } from "./ProjectMockups";

const PROJECTS = [
  {
    title: "Nimbus UI",
    category: "SaaS Dashboard Design",
    tags: ["Product Design", "SaaS"],
    Mockup: DashboardMockup,
  },
  {
    title: "Aurora Landing",
    category: "WordPress Marketing Website",
    tags: ["WordPress", "Marketing"],
    Mockup: LandingMockup,
  },
  {
    title: "Pulse App",
    category: "Mobile App / SaaS UI UX",
    tags: ["Mobile", "UI/UX"],
    Mockup: AppMockup,
  },
  {
    title: "Vertex Studio",
    category: "Creative Agency Website",
    tags: ["Webflow", "Agency"],
    Mockup: AgencyMockup,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="container-app flex flex-col gap-16">
        <SectionHeading
          eyebrow="Selected Works"
          title={
            <>
              Projects that speak <span className="text-[color:var(--color-lime)]">for themselves.</span>
            </>
          }
          description="A curated collection of recent work spanning product design, development and branding."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const Mockup = project.Mockup;
            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <motion.a
                  href="#projects"
                  whileHover="hover"
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <motion.div
                      variants={{ hover: { scale: 1.06 } }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full w-full"
                    >
                      <Mockup className="h-full w-full object-cover" />
                    </motion.div>
                    <motion.span
                      variants={{
                        hover: { opacity: 1, scale: 1, x: 0, y: 0 },
                      }}
                      initial={{ opacity: 0, scale: 0.6, x: 10, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-[color:var(--color-lime)] text-[#0a0a0d]"
                    >
                      <ArrowUpRight size={20} />
                    </motion.span>
                  </div>

                  <div className="flex items-center justify-between gap-4 p-6 md:p-7">
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)] md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{project.category}</p>
                    </div>
                    <div className="hidden shrink-0 flex-wrap justify-end gap-2 sm:flex">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-ink-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
