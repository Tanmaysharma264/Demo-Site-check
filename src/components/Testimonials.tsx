import { Quote } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Marquee } from "./ui/Marquee";

const TESTIMONIALS = [
  {
    name: "Michael B.",
    role: "Business Owner",
    avatar: "/images/testimonial-michael.jpg",
    quote: "From concept to launch, everything was handled perfectly. Emily truly cares about quality and results.",
  },
  {
    name: "Sarah M.",
    role: "Startup Founder",
    avatar: "/images/testimonial-sarah.jpg",
    quote: "Working with Emily was a game-changer for our product. She instantly understood our vision.",
  },
  {
    name: "Ayeza Ali",
    role: "Project Manager",
    avatar: "/images/testimonial-ayeza.jpg",
    quote: "The quality of Emily's work and attention to detail were outstanding. Everything felt polished and modern.",
  },
  {
    name: "Sophia Malik",
    role: "Founder, Atelier Home",
    avatar: "/images/testimonial-sophia.jpg",
    quote: "Communication was smooth, the process was transparent, and the final result exceeded our expectations.",
  },
  {
    name: "Amira Khan",
    role: "Product Designer",
    avatar: "/images/testimonial-amira.jpg",
    quote: "Emily created a design that feels premium, fast, and intuitive. We've received amazing feedback from our users.",
  },
];

function TestimonialCard({ name, role, avatar, quote }: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="squircle flex w-[340px] shrink-0 flex-col gap-6 rounded-3xl border border-[color:var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)] sm:w-[380px]">
      <Quote className="text-[color:var(--color-accent)]" size={28} />
      <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">"{quote}"</p>
      <div className="mt-auto flex items-center gap-3">
        <img src={avatar} alt={name} className="size-11 shrink-0 rounded-full object-cover" />
        <div>
          <p className="text-sm font-bold text-[color:var(--color-ink)]">{name}</p>
          <p className="text-xs text-[color:var(--color-ink-muted)]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden py-16 md:py-[120px]">
      <div className="container-app mb-14">
        <SectionHeading eyebrow="Testimonials" title="What clients say about working with me" />
      </div>

      <Marquee speed={40} gap={24}>
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </Marquee>
    </section>
  );
}
