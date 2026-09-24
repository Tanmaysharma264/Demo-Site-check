import { Marquee } from "./ui/Marquee";
import { Reveal } from "./ui/Reveal";

const BRANDS = [
  { name: "Lumen", markPath: "M4 4h4v16H4zM10 4h10v4H10zM10 12h8v4h-8z" },
  { name: "Orbital", markPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" },
  { name: "Quartz", markPath: "M12 2 22 12 12 22 2 12z" },
  { name: "Halcyon", markPath: "M3 12h6l3-8 3 16 3-8h3" },
  { name: "Nordic Co", markPath: "M4 20V4h4l8 12V4h4v16h-4L8 8v12z" },
  { name: "Verve", markPath: "M3 4h4l5 14 5-14h4l-7 18h-4z" },
];

function BrandMark({ name, markPath }: { name: string; markPath: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 text-[color:var(--color-ink-dim)] grayscale transition-all duration-300 hover:text-[color:var(--color-ink)] hover:grayscale-0">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={markPath} />
      </svg>
      <span className="font-[var(--font-display)] text-xl font-bold tracking-tight">{name}</span>
    </div>
  );
}

export function TrustedBrands() {
  return (
    <section className="border-y border-[color:var(--color-border-soft)] py-14">
      <div className="container-app">
        <Reveal>
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-dim)]">
            Trusted By Many Brands
          </p>
        </Reveal>
      </div>
      <Marquee speed={26}>
        {BRANDS.map((brand) => (
          <BrandMark key={brand.name} {...brand} />
        ))}
      </Marquee>
    </section>
  );
}
