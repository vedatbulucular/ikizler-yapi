import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section className="bg-canvas py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Çalışma süreci"
          title="Net adımlar, ortak kararlar"
          description="Her projeyi anlaşılır bir akış içinde ele alır; tasarım ve uygulama kararlarını aynı hedef doğrultusunda ilerletiriz."
        />

        <ol className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((process, index) => (
            <li
              key={process.id}
              className={
                index === 0
                  ? "border-t border-brand-dark pt-6"
                  : "border-t border-brand-dark pt-6 lg:pl-7"
              }
            >
              <p className="font-heading text-sm font-semibold text-accent-dark">
                {process.step}
              </p>
              <h3 className="mt-8 font-heading text-xl font-semibold text-brand-dark">
                {process.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                {process.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
