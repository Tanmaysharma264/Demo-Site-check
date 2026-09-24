import { Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

const PLANS = [
  {
    name: "Starter",
    price: "1990",
    popular: false,
    description: "Perfect for early-stage start ups.",
    features: ["Logo", "Color Palette", "Basic Brand Guide"],
  },
  {
    name: "Pro Plan",
    price: "2990",
    popular: true,
    description: "Ideal for businesses ready to scale.",
    features: ["Full Visual Identity", "Brand Strategy", "Brand Guide"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-[120px]">
      <div className="container-app flex flex-col gap-14">
        <SectionHeading eyebrow="Pricing" title="Simple Packages for Every Stage" />

        <div className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <div
                className={`squircle relative flex h-full flex-col gap-8 rounded-3xl border p-8 shadow-[var(--shadow-soft)] ${
                  plan.popular
                    ? "border-[color:var(--color-accent)] bg-white"
                    : "border-[color:var(--color-border)] bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="squircle absolute -top-3.5 right-8 rounded-full bg-[color:var(--color-accent)] px-4 py-1 text-xs font-bold text-white shadow-[var(--shadow-btn-primary)]">
                    Popular
                  </span>
                )}

                <div>
                  <h3 className="font-sans text-xl font-bold text-[color:var(--color-ink)]">{plan.name}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-5xl font-extrabold tracking-tight text-[color:var(--color-ink)]">
                    ${plan.price}
                  </span>
                  <span className="text-[color:var(--color-ink-muted)]">/month</span>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[color:var(--color-ink-muted)]">
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-full ${
                          plan.popular ? "bg-[color:var(--color-accent)] text-white" : "bg-[color:var(--color-surface)] text-[color:var(--color-accent)]"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="mailto:Hammadarif662@gmail.com"
                  variant={plan.popular ? "primary" : "light"}
                  icon={false}
                  className="mt-auto w-full justify-center !rounded-2xl"
                >
                  Get in Touch
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
