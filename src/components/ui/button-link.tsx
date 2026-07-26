import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "accent";
type ButtonLinkSize = "default" | "large";

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
  className?: string;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
};

const baseStyles =
  "inline-flex min-h-11 items-center justify-center rounded-sm font-semibold no-underline transition-colors";

const variantStyles: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-brand-dark text-surface hover:bg-brand-secondary hover:text-surface focus-visible:text-surface active:bg-brand-dark active:text-surface",
  secondary:
    "border border-border bg-surface text-brand-dark hover:border-accent-dark hover:bg-canvas",
  accent: "bg-accent text-brand-dark hover:bg-accent-dark hover:text-surface",
};

const sizeStyles: Record<ButtonLinkSize, string> = {
  default: "px-5 py-2.5 text-sm",
  large: "min-h-12 px-6 py-3 text-base",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  size = "default",
  ...linkProps
}: ButtonLinkProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} {...linkProps}>
      {children}
    </Link>
  );
}
