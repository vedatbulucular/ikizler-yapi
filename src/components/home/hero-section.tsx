import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-border bg-canvas py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-16">
          <div className="max-w-3xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-accent-dark">
              Yapı ve Mimarlık
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.035em] text-brand-dark sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Mekânları, yaşamın ritmine göre tasarlıyoruz.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              İkizler Yapı; konut, ticari alan, mimari tasarım ve renovasyon
              projelerinde işlevi, bağlamı ve uygulama sürecini bütüncül bir
              yaklaşımla ele alır.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <ButtonLink href="/projeler" size="large">
                Projeleri İncele
              </ButtonLink>
              <ButtonLink href="/iletisim" variant="secondary" size="large">
                İletişime Geç
              </ButtonLink>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[5/4] w-full max-w-xl border border-border bg-surface"
          >
            <div className="absolute inset-5 border border-border sm:inset-8">
              <div className="absolute inset-y-0 left-[28%] border-l border-border" />
              <div className="absolute inset-x-0 top-[34%] border-t border-border" />
              <div className="absolute inset-x-0 bottom-[22%] border-t border-border" />
              <div className="absolute right-0 top-[34%] h-[44%] w-[38%] bg-brand-dark" />
              <div className="absolute bottom-0 left-0 h-[22%] w-[28%] bg-accent" />
              <div className="absolute left-[28%] top-0 h-[34%] w-[44%] bg-canvas" />
              <div className="absolute bottom-[22%] left-[28%] size-16 -translate-x-1/2 translate-y-1/2 rounded-full border border-accent-dark bg-surface sm:size-20" />
            </div>
            <div className="absolute right-2 top-2 h-10 w-px bg-accent sm:right-4 sm:top-4" />
            <div className="absolute right-2 top-2 h-px w-10 bg-accent sm:right-4 sm:top-4" />
            <div className="absolute bottom-2 left-2 h-10 w-px bg-brand-dark sm:bottom-4 sm:left-4" />
            <div className="absolute bottom-2 left-2 h-px w-10 bg-brand-dark sm:bottom-4 sm:left-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
