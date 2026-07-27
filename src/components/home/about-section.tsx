import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPrinciples } from "@/data/home";

export function AboutSection() {
  return (
    <section className="border-y border-border bg-canvas py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Yaklaşımımız"
              title="İyi bir yapı, doğru sorularla başlar."
              description="İkizler Yapı, tasarımın yalnızca nasıl göründüğüyle değil; nasıl kullanıldığı, nasıl uygulandığı ve zaman içinde nasıl yaşadığıyla ilgilenir."
            />
            <div className="mt-8">
              <ButtonLink href="/hakkimizda">Yaklaşımımızı keşfedin</ButtonLink>
            </div>
          </div>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {aboutPrinciples.map((principle) => (
              <article key={principle.id} className="bg-surface p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="h-px w-10 bg-accent-dark"
                />
                <h3 className="mt-7 font-heading text-lg font-semibold text-brand-dark">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
