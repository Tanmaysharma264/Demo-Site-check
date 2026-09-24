import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";

const PROJECTS = [
  {
    title: "Nimbus UI",
    category: "SaaS Dashboard Design",
    image: "/images/project-nimbus-ui.jpg",
  },
  {
    title: "Aurora Landing",
    category: "Wordpress Marketing Website",
    image: "/images/project-aurora-landing.jpg",
  },
  {
    title: "Pulse App",
    category: "Mobile App / SaaS UI UX",
    image: "/images/project-pulse-app.jpg",
  },
  {
    title: "Vertex Studio",
    category: "Creative Agency Website",
    image: "/images/project-vertex-studio.jpg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-[120px]">
      <div className="container-app flex flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, crafted with care"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.a
                href="https://www.framer.com/@hammad-arif-xqvq8i/?tab=marketplace"
                target="_blank"
                rel="noreferrer"
                whileHover="hover"
                className="squircle group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full object-cover"
                  />
                  <motion.span
                    variants={{ hover: { opacity: 1, scale: 1, x: 0, y: 0 } }}
                    initial={{ opacity: 0, scale: 0.6, x: 10, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-[color:var(--color-accent)] text-white shadow-[var(--shadow-btn-primary)]"
                  >
                    <ArrowUpRight size={20} />
                  </motion.span>
                </div>

                <div className="flex items-center justify-between gap-4 p-6 md:p-7">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-[color:var(--color-ink)] md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{project.category}</p>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
