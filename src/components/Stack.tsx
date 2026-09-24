import { Marquee } from "./ui/Marquee";
import { SectionTag } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";

const TOOLS = [
  { name: "Framer", desc: "My main tool for building interactive websites", logo: "/images/stack-framer.png" },
  { name: "Lemon Squeezy", desc: "A secure solution for digital payments", logo: "/images/stack-lemonsqueezy.png" },
  { name: "Figma", desc: "A powerful tool for creating user interfaces", logo: "/images/stack-figma.png" },
  { name: "X", desc: "Where I share insights, tips for Framer.", logo: "/images/stack-x.png" },
  { name: "Contra", desc: "The easiest way to collaborate on projects", logo: "/images/stack-contra.png" },
  { name: "Slack", desc: "My go-to for seamless client and team.", logo: "/images/stack-slack.png" },
];

export function Stack() {
  return (
    <section className="py-16 md:py-[120px]">
      <div className="container-app mb-12 flex flex-col items-center gap-5 text-center">
        <SectionTag>My Stacks</SectionTag>
        <Reveal delay={0.08}>
          <h2 className="max-w-xl text-balance font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.01em] text-[color:var(--color-ink)]">
            Tools I rely on to build and grow
          </h2>
        </Reveal>
      </div>

      <Marquee speed={32} reverse>
        {TOOLS.map((tool) => (
          <div
            key={tool.name}
            className="squircle flex w-[280px] shrink-0 items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white px-5 py-4 shadow-[var(--shadow-soft)]"
          >
            <img src={tool.logo} alt={`${tool.name} logo`} className="size-10 shrink-0 rounded-xl object-contain" />
            <div className="min-w-0">
              <p className="text-sm font-bold text-[color:var(--color-ink)]">{tool.name}</p>
              <p className="truncate text-xs text-[color:var(--color-ink-muted)]">{tool.desc}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
