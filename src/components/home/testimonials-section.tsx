import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Proje deneyimi"
          title="Sürecin ardından"
          description="Aşağıdaki ifadeler, bu portföy projesi için oluşturulmuş hayalî müşteri değerlendirmeleridir."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex min-h-64 flex-col justify-between border border-border bg-canvas p-6 sm:p-8"
            >
              <blockquote className="font-heading text-lg leading-8 text-brand-dark">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 text-sm font-semibold text-accent-dark">
                {testimonial.attribution}
                <span className="mt-1 block font-normal text-text-muted">
                  Hayalî değerlendirme
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
