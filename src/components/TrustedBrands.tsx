import { Marquee } from "./ui/Marquee";
import { Reveal } from "./ui/Reveal";

const LOGOS = [
  "/images/trusted-logo-1.svg",
  "/images/trusted-logo-2.svg",
  "/images/trusted-logo-3.svg",
  "/images/trusted-logo-4.svg",
];

export function TrustedBrands() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)] py-12">
      <div className="container-app">
        <Reveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--color-ink-soft)]">
            Trusted By Many Brands
          </p>
        </Reveal>
      </div>
      <Marquee speed={26}>
        {LOGOS.map((src) => (
          <img
            key={src}
            src={src}
            alt="Client logo"
            className="h-8 w-auto shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-9"
          />
        ))}
      </Marquee>
    </section>
  );
}
