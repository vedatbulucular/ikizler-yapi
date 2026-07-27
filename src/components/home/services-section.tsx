import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/home";

export function ServicesSection() {
  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Uzmanlık alanları"
            title="Fikirden uygulamaya bütüncül yaklaşım"
            description="Farklı ölçek ve ihtiyaçlardaki projeleri, aynı yalın tasarım ve planlı çalışma anlayışıyla ele alıyoruz."
          />
          <ButtonLink href="/hizmetler" variant="secondary">
            Tüm hizmetleri görün
          </ButtonLink>
        </div>

        <div className="mt-12 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group min-h-64 border-b border-r border-border p-6 transition-colors hover:bg-canvas sm:p-8"
            >
              <p className="font-heading text-sm font-semibold text-accent-dark">
                {service.number}
              </p>
              <h3 className="mt-12 font-heading text-xl font-semibold text-brand-dark">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
