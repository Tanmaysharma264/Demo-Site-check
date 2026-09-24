import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionTag";

const EXPERIENCE = [
  { role: "Lead Product Designer", company: "NeusPay", period: "2021 - Present" },
  { role: "Senior UI/UX Designer", company: "VoyageVista", period: "2019 – 2021" },
  { role: "Digital Designer", company: "ZephyrGear", period: "2017 - 2019" },
  { role: "Product Designer", company: "StratusCore", period: "2015 - 2017" },
  { role: "UI Designer", company: "Syncora", period: "2013 - 2015" },
];

export function Experience() {
  return (
    <section className="py-16 md:py-[120px]">
      <div className="container-app flex flex-col gap-14">
        <SectionHeading eyebrow="Experience" title="My journey through design" align="left" />

        <div className="relative flex flex-col">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[color:var(--color-border)] md:left-[9px]" />
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-2 border-b border-[color:var(--color-border)] py-8 pl-8 last:border-none md:flex-row md:items-center md:justify-between md:pl-10"
            >
              <span className="absolute left-0 top-9 grid size-4 place-items-center rounded-full border-2 border-[color:var(--color-accent)] bg-white md:left-0.5" />
              <div>
                <h3 className="font-sans text-xl font-bold text-[color:var(--color-ink)] md:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{item.company}</p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-1.5 text-sm text-[color:var(--color-ink-muted)]">
                {item.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
