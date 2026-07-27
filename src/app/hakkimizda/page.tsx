import type { Metadata } from "next";

import { ContactCta } from "@/components/home/contact-cta";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPrinciples } from "@/data/home";

export const metadata: Metadata = {
  title: "Hakkımızda | İkizler Yapı",
  description:
    "Hayalî İkizler Yapı markasının tasarım yaklaşımı, misyonu, vizyonu ve değerleri.",
};

const values = [
  {
    title: "Sadelik",
    description:
      "Gereksiz katmanları azaltır, her kararın açık ve anlaşılır olmasını gözetiriz.",
  },
  {
    title: "İşlevsellik",
    description:
      "Mekânın gündelik kullanımını tasarımın temel ölçütlerinden biri kabul ederiz.",
  },
  {
    title: "Planlama",
    description:
      "Tasarım ve uygulama adımlarını birbiriyle ilişkili, takip edilebilir bir bütün olarak ele alırız.",
  },
  {
    title: "Sorumluluk",
    description:
      "Kaynakları, mevcut yapıyı ve kullanıcı ihtiyaçlarını dikkatle değerlendirmeyi önemseriz.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hakkımızda"
        title="Yapıyı, yaşamla birlikte düşünürüz."
        description="İkizler Yapı; işlev, estetik ve uygulanabilirlik arasında dengeli ilişkiler kurmayı amaçlayan hayalî bir yapı ve mimarlık markasıdır."
      />

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Yaklaşım"
            title="Her kararın bir karşılığı olmalı."
            description="Mekânın bağlamını, kullanıcı ihtiyaçlarını ve uygulama koşullarını aynı düşünce çizgisinde değerlendiririz."
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {aboutPrinciples.map((principle, index) => (
              <article key={principle.id} className="bg-canvas p-6 sm:p-8">
                <p className="font-heading text-sm font-semibold text-accent-dark">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 font-heading text-xl font-semibold text-brand-dark">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-dark py-20 text-surface sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <article className="border-t border-surface/30 pt-7">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Misyon
              </p>
              <h2 className="mt-5 font-heading text-3xl font-semibold">
                Kullanıma değer katan dengeli mekânlar
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-canvas">
                Tasarım kararlarını anlaşılır bir süreçle geliştirmek; yapı
                koşullarıyla kullanıcı beklentileri arasında ölçülü ve
                uygulanabilir çözümler kurmak.
              </p>
            </article>
            <article className="border-t border-surface/30 pt-7">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Vizyon
              </p>
              <h2 className="mt-5 font-heading text-3xl font-semibold">
                Zamana uyum sağlayan tasarım yaklaşımı
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-canvas">
                Değişen ihtiyaçları karşılayabilen, çevresiyle dengeli ilişki
                kuran ve kullanıcıları için uzun süre anlamlı kalan mekânlar
                üzerine düşünmek.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-canvas py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Değerler"
            title="Çalışma biçimimizi belirleyen ilkeler"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="border-t border-brand-dark pt-6"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-dark">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
