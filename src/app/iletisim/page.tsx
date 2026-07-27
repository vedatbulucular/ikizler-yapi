import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "İkizler Yapı portföy projesinin temsili iletişim bilgilerini görüntüleyin ve hiçbir veriyi saklamayan güvenli demo formunu deneyin.",
  path: "/iletisim",
});

const contactDetails = [
  { label: "E-posta", value: "ornek@ikizleryapi.test" },
  { label: "Telefon", value: "0 (000) 000 00 00 — temsili" },
  { label: "Konum", value: "Temsili Ofis, Türkiye" },
  { label: "Çalışma saatleri", value: "Hafta içi 09.00–18.00 — temsili" },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="İletişim"
        title="Projenizin ilk sorusuyla başlayalım."
        description="Bu sayfa portföy sunumu için hazırlanmış temsili bir iletişim alanıdır. Aşağıdaki bilgiler ve form gerçek bir firmaya bağlı değildir."
      />

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Temsili bilgiler"
                title="Bize ulaşın"
                description="İletişim bilgileri güvenli örneklerden oluşur ve gerçek bir kişi ya da kuruluşa yönlendirmez."
                as="h2"
              />
              <dl className="mt-10 grid gap-6">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="border-t border-border pt-5"
                  >
                    <dt className="text-sm text-text-muted">{detail.label}</dt>
                    <dd className="mt-1 font-heading text-lg font-semibold text-brand-dark">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
