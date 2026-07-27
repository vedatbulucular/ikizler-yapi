import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function ContactCta() {
  return (
    <section className="bg-accent py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-3xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-dark">
              Yeni bir proje
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Fikrinizi birlikte yapılandırmaya başlayalım.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-brand-dark">
              Projenizin ihtiyaçlarını ve önceliklerini konuşmak için iletişim
              sayfasından bize ulaşabilirsiniz.
            </p>
          </div>
          <ButtonLink href="/iletisim" size="large">
            Projenizi Anlatın
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
