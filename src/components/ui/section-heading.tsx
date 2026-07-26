type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent-dark">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-heading text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p
          className={[
            "mt-4 max-w-2xl text-base text-text-muted sm:text-lg",
            isCentered ? "mx-auto" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
