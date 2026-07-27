import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-canvas py-20">
      <Container>
        <div className="max-w-2xl border-l-4 border-accent pl-6 sm:pl-10">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-accent-dark">
            404
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
            Sayfa bulunamadı
          </h1>
          <p className="mt-5 text-lg leading-8 text-text-muted">
            Aradığınız sayfa taşınmış, kaldırılmış veya henüz oluşturulmamış
            olabilir.
          </p>
          <div className="mt-8">
            <ButtonLink href="/">Ana sayfaya dön</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
