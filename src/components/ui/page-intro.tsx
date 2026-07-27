import { Container } from "@/components/ui/container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-border bg-canvas py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-accent-dark">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.035em] text-brand-dark sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
