import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`container-app flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled
            ? "mt-3 border border-[color:var(--color-border)] bg-[#0a0a0d]/80 px-5 py-2.5 backdrop-blur-xl md:mt-4"
            : "mt-5 px-5 py-3 md:mt-8"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[color:var(--color-ink)]">
          <span className="grid size-7 place-items-center rounded-full bg-[color:var(--color-lime)] text-[13px] font-bold text-[#0a0a0d]">
            Z
          </span>
          Zedex.
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" size="md" icon={false}>
            Hire Me
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0d]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-app flex items-center justify-between py-5">
              <span className="text-lg font-semibold text-[color:var(--color-ink)]">Zedex.</span>
              <button
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink)]"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="container-app mt-10 flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color:var(--color-border-soft)] py-4 text-2xl font-medium text-[color:var(--color-ink)]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-6">
                <Button href="#contact" onClick={() => setOpen(false)} size="lg">
                  Hire Me
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
