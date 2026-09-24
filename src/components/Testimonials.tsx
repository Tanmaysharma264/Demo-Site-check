import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Avatar } from "./ui/Avatar";
import { Marquee } from "./ui/Marquee";

const TESTIMONIALS = [
  {
    name: "Daniel Reyes",
    role: "Founder, NeusPay",
    quote:
      "Emilia transformed our product into something our users genuinely love. The attention to detail was unmatched.",
  },
  {
    name: "Sofia Lindqvist",
    role: "CMO, VoyageVista",
    quote:
      "Working with her felt effortless — clear communication, sharp design instincts, and delivered ahead of schedule.",
  },
  {
    name: "Marcus Oduya",
    role: "CEO, ZephyrGear",
    quote:
      "Our conversion rate jumped 40% after the redesign. Best design investment we've made as a company.",
  },
  {
    name: "Priya Nair",
    role: "Product Lead, StratusCore",
    quote:
      "She doesn't just design screens, she solves problems. Genuinely one of the best designers I've worked with.",
  },
  {
    name: "Ethan Brooks",
    role: "Founder, Nimbus Labs",
    quote:
      "From strategy to execution, everything felt intentional. Our brand finally feels cohesive online.",
  },
];

function TestimonialCard({ name, role, quote }: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="flex w-[340px] shrink-0 flex-col gap-6 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 sm:w-[380px]">
      <Quote className="text-[color:var(--color-lime)]" size={28} />
      <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">"{quote}"</p>
      <div className="mt-auto flex items-center gap-3">
        <Avatar name={name} className="size-11 rounded-full" />
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-ink)]">{name}</p>
          <p className="text-xs text-[color:var(--color-ink-muted)]">{role}</p>
        </div>
        <div className="ml-auto flex items-center gap-0.5 text-[color:var(--color-lime)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="container-app mb-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say about working with me"
          description="Real feedback from founders and teams I've partnered with."
        />
      </div>

      <Marquee speed={40} gap={24}>
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </Marquee>
    </section>
  );
}
