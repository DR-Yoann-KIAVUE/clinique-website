import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "outline-anthracite" | "outline-red" | "ghost";
type ButtonSize = "md" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cardinal text-blanc hover:bg-rouge-profond active:bg-rouge-actif disabled:bg-separateur disabled:text-gris-moyen",
  "outline-anthracite":
    "bg-blanc text-anthracite border border-anthracite hover:bg-anthracite hover:text-blanc active:bg-noir-profond active:text-blanc disabled:border-separateur disabled:text-gris-moyen",
  "outline-red":
    "bg-blanc text-cardinal border border-cardinal hover:bg-cardinal hover:text-blanc active:bg-rouge-actif active:text-blanc disabled:border-separateur disabled:text-gris-moyen",
  ghost:
    "bg-transparent text-anthracite hover:text-cardinal active:text-rouge-actif disabled:text-gris-moyen",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-[10px]",
  sm: "px-4 py-2 text-[10px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, href, ...props },
    ref
  ) {
    const classes = cn(
      "inline-flex items-center justify-center font-display font-bold uppercase tracking-[0.18em] rounded-[var(--radius-btn)] transition-all duration-150 ease-in-out cursor-pointer",
      "hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(177,18,27,0.2)]",
      "active:scale-[0.98]",
      "focus-visible:outline-2 focus-visible:outline-cardinal focus-visible:outline-offset-[3px]",
      "disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none",
      "min-h-[44px] min-w-[44px]",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
