import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";
import { Accordion } from "./ui/Accordion";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "I offer web design, web development, brand identity, UX/UI design and consultation services — everything you need to launch and grow a polished digital presence.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 1-3 weeks depending on scope. Landing pages typically ship within 7 days, while full websites take 2-3 weeks.",
  },
  {
    question: "Can I request revisions during the project?",
    answer:
      "Absolutely. Every package includes revision rounds so we can refine the design together until it feels exactly right.",
  },
  {
    question: "Do you work with remote clients?",
    answer:
      "Yes, I work with clients worldwide. All communication happens over email, Slack and video calls to keep things smooth across time zones.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing is based on project scope, starting at $1990/month for the Starter package. Check the pricing section above for full details, or reach out for a custom quote.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-app grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before we start working together."
          align="left"
        />

        <Reveal delay={0.1}>
          <Accordion items={FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
