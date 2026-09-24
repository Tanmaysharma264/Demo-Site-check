import type { ReactNode } from "react";
import { MagneticButton } from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
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
    "inline-flex items-center gap-2 rounded-full font-medium transition-colors duration-300 whitespace-nowrap";
  const sizes = size === "lg" ? "px-7 py-4 text-[15px]" : "px-6 py-3.5 text-sm";
  const variants =
    variant === "primary"
      ? "bg-[color:var(--color-lime)] text-[#0a0a0d] hover:bg-white"
      : "bg-transparent text-[color:var(--color-ink)] border border-[color:var(--color-border)] hover:border-[color:var(--color-lime)] hover:text-[color:var(--color-lime)]";

  return (
    <MagneticButton
      href={href}
      onClick={onClick}
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {children}
      {icon && (
        <span
          className={`grid size-6 place-items-center rounded-full ${
            variant === "primary" ? "bg-[#0a0a0d] text-[color:var(--color-lime)]" : "bg-white/5"
          }`}
        >
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </span>
      )}
    </MagneticButton>
  );
}
