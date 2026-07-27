import { Container } from "@/components/ui/container";
import { statistics } from "@/data/home";

export function StatisticsSection() {
  return (
    <section
      aria-labelledby="statistics-title"
      className="border-b border-border bg-surface py-14 sm:py-16"
    >
      <Container>
        <h2 id="statistics-title" className="sr-only">
          İkizler Yapı proje istatistikleri
        </h2>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {statistics.map((statistic, index) => (
            <div
              key={statistic.id}
              className={
                index === 0
                  ? ""
                  : "border-border lg:border-l lg:pl-8"
              }
            >
              <dt className="mt-2 text-sm text-text-muted">
                {statistic.label}
              </dt>
              <dd className="font-heading text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
                {statistic.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
