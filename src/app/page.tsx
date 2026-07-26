import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
            İkizler Yapı
          </h1>
          <p className="mt-5 max-w-2xl text-base text-text-muted sm:text-lg">
            Kurumsal web sitesi geliştirme aşamasındadır. Bu sayfa, projenin
            temel tasarım sistemini geçici olarak ön izlemek için hazırlanmıştır.
          </p>
        </div>

        <section className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16">
          <SectionHeading
            eyebrow="Tasarım sistemi"
            title="Temel arayüz bileşenleri"
            description="Renk, tipografi, yerleşim ve bağlantı varyantları sonraki geliştirme aşamalarında tutarlı bir temel sağlayacaktır."
          />

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/">Primary bağlantı</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Secondary bağlantı
            </ButtonLink>
            <ButtonLink href="/" variant="accent" size="large">
              Accent bağlantı
            </ButtonLink>
          </div>
        </section>
      </Container>
    </div>
  );
}
