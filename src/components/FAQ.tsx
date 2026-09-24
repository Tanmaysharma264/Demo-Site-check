import { SectionHeading } from "./ui/SectionTag";
import { Reveal } from "./ui/Reveal";
import { Accordion } from "./ui/Accordion";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "I provide a full range of design services including UI/UX design, web design, branding, and digital product development.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity, but most projects are completed within 4–8 weeks.",
  },
  {
    question: "Can I request revisions during the project?",
    answer:
      "Yes! Feedback is a crucial part of the design process. I include multiple rounds of revisions to ensure the final design meets your expectations.",
  },
  {
    question: "Do you work with remote clients?",
    answer:
      "Absolutely. I have experience collaborating with clients worldwide using Zoom, Figma, and other remote tools to ensure smooth communication.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing depends on the scope and complexity of the project. After understanding your requirements, I provide a clear and transparent quote before starting.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-[120px]">
      <div className="container-app grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
        <Reveal delay={0.1}>
          <Accordion items={FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
