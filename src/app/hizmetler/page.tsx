import { ContactCta } from "@/components/home/contact-cta";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { services } from "@/data/home";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Hizmetler",
  description:
    "Konut ve ticari yapı projelerinden iç mimarlık, renovasyon ve danışmanlığa uzanan İkizler Yapı hizmet yaklaşımını inceleyin.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hizmetler"
        title="Farklı ihtiyaçlar için ortak bir tasarım disiplini."
        description="Projeleri ölçeğinden bağımsız olarak işlev, bağlam ve uygulama bütünlüğü içinde ele alır; karar süreçlerini anlaşılır adımlara dönüştürürüz."
      />

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid border-l border-t border-border">
            {services.map((service) => (
              <article
                key={service.id}
                className="grid gap-8 border-b border-r border-border p-6 sm:p-8 lg:grid-cols-[100px_minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-12 lg:p-10"
              >
                <p className="font-heading text-sm font-semibold text-accent-dark">
                  {service.number}
                </p>
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-7 text-text-muted">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark">
                    Kapsam
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {service.scope.map((item) => (
                      <li
                        key={item}
                        className="border-t border-border pt-3 text-sm text-text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
