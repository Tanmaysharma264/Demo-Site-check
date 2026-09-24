import type { ReactNode } from "react";
import { MagneticButton } from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "light";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
};

export function Button({
  children,
  href = "#",
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
}: ButtonProps) {
  const base =
    "squircle inline-flex items-center gap-2 rounded-full font-semibold transition-transform duration-300 whitespace-nowrap active:scale-[0.98]";
  const sizes = size === "lg" ? "px-7 py-4 text-[15px]" : "px-6 py-3.5 text-sm";

  const variants = {
    primary:
      "text-white bg-[color:var(--color-accent)] shadow-[var(--shadow-btn-primary)]",
    secondary:
      "text-white bg-gradient-to-b from-[#5c5c5c] to-black shadow-[var(--shadow-btn-secondary)]",
    light:
      "text-[color:var(--color-ink)] bg-white border border-[color:var(--color-border)] shadow-[var(--shadow-soft)]",
  } as const;

  return (
    <MagneticButton
      href={href}
      onClick={onClick}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && (
        <span className="grid size-6 place-items-center rounded-full bg-white/15">
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </span>
      )}
    </MagneticButton>
  );
}
