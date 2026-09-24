import { Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

const PLANS = [
  {
    name: "Starter",
    price: "1990",
    popular: false,
    description: "Best for small projects and quick turnarounds.",
    features: [
      "1 Landing Page Design",
      "Responsive Development",
      "Basic SEO Setup",
      "2 Rounds of Revisions",
      "7 Day Delivery",
    ],
  },
  {
    name: "Pro Plan",
    price: "2990",
    popular: true,
    description: "For growing brands that need the full package.",
    features: [
      "Up to 5 Page Website",
      "Custom UI/UX Design",
      "Advanced SEO & Performance",
      "Unlimited Revisions",
      "Priority Support",
      "14 Day Delivery",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="container-app flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Packages for Every Stage"
          description="Transparent pricing with no hidden fees. Choose the plan that fits your needs."
        />

        <div className="mx-auto grid w-full max-w-4xl gap-6 sm:grid-cols-2">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <div
                className={`relative flex h-full flex-col gap-8 rounded-3xl border p-8 ${
                  plan.popular
                    ? "border-[color:var(--color-lime)] bg-[color:var(--color-surface)] shadow-[var(--shadow-glow)]"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-8 rounded-full bg-[color:var(--color-lime)] px-4 py-1 text-xs font-semibold text-[#0a0a0d]">
                    Popular
                  </span>
                )}

                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)]">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-[var(--font-display)] text-5xl font-bold tracking-tight text-[color:var(--color-ink)]">
                    ${plan.price}
                  </span>
                  <span className="text-[color:var(--color-ink-muted)]">/month</span>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[color:var(--color-ink-muted)]">
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-full ${
                          plan.popular ? "bg-[color:var(--color-lime)] text-[#0a0a0d]" : "bg-[color:var(--color-surface-2)] text-[color:var(--color-lime)]"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-auto w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
