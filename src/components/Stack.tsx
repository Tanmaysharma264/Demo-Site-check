import { Marquee } from "./ui/Marquee";
import { SectionTag } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";
import {
  FramerLogo,
  LemonSqueezyLogo,
  FigmaLogo,
  XLogo,
  ContraLogo,
  SlackLogo,
} from "./icons/BrandIcons";

const TOOLS = [
  { name: "Framer", Icon: FramerLogo },
  { name: "Lemon Squeezy", Icon: LemonSqueezyLogo },
  { name: "Figma", Icon: FigmaLogo },
  { name: "X", Icon: XLogo },
  { name: "Contra", Icon: ContraLogo },
  { name: "Slack", Icon: SlackLogo },
];

export function Stack() {
  return (
    <section className="py-16 md:py-28">
      <div className="container-app mb-12 flex flex-col items-center gap-5 text-center">
        <SectionTag>My Stacks</SectionTag>
        <Reveal delay={0.08}>
          <h2 className="max-w-xl text-balance font-[var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-[-0.02em] text-[color:var(--color-ink)]">
            Tools &amp; platforms I use every day
          </h2>
        </Reveal>
      </div>

      <Marquee speed={30} reverse>
        {TOOLS.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex shrink-0 items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-7 py-5 text-[color:var(--color-ink)] transition-colors duration-300 hover:border-[color:var(--color-lime)]/50"
          >
            <Icon className="size-7 text-[color:var(--color-lime)]" />
            <span className="text-base font-medium whitespace-nowrap">{name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
