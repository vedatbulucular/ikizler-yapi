import Link from "next/link";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  const classes = [
    "inline-flex font-heading text-xl font-semibold tracking-tight text-brand-dark no-underline sm:text-2xl",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href="/" className={classes} aria-label="İkizler Yapı ana sayfa">
      İkizler Yapı
    </Link>
  );
}
