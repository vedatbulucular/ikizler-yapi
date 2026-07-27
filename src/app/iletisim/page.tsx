import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "İletişim | İkizler Yapı",
  description:
    "Hayalî İkizler Yapı portföy markasının temsili iletişim bilgileri ve işlevsiz demo proje formu.",
};

const contactDetails = [
  { label: "E-posta", value: "ornek@ikizleryapi.test" },
  { label: "Telefon", value: "0 (000) 000 00 00 — temsili" },
  { label: "Konum", value: "Temsili Ofis, Türkiye" },
  { label: "Çalışma saatleri", value: "Hafta içi 09.00–18.00 — temsili" },
] as const;

const fieldStyles =
  "mt-2 min-h-12 w-full rounded-sm border border-border bg-surface px-4 py-3 text-text outline-none transition-colors placeholder:text-text-muted focus:border-accent-dark";

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

            <div className="border border-border bg-canvas p-6 sm:p-8 lg:p-10">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent-dark">
                Demo proje formu
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-dark">
                Projenizi kısaca anlatın
              </h2>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                Bu form henüz işlevsel değildir; girilen bilgiler gönderilmez
                veya kaydedilmez.
              </p>

              <form className="mt-8 grid gap-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-brand-dark">
                    Ad soyad
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      className={fieldStyles}
                      placeholder="Adınız ve soyadınız"
                    />
                  </label>
                  <label className="text-sm font-semibold text-brand-dark">
                    E-posta
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className={fieldStyles}
                      placeholder="ornek@eposta.test"
                    />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-brand-dark">
                    Telefon
                    <span className="ml-1 font-normal text-text-muted">
                      (isteğe bağlı)
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className={fieldStyles}
                      placeholder="0 (000) 000 00 00"
                    />
                  </label>
                  <label className="text-sm font-semibold text-brand-dark">
                    Proje türü
                    <select
                      name="projectType"
                      defaultValue=""
                      className={fieldStyles}
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="konut">Konut projesi</option>
                      <option value="ticari">Ticari yapı</option>
                      <option value="mimari">Mimari tasarım</option>
                      <option value="ic-mimarlik">İç mimarlık</option>
                      <option value="renovasyon">Renovasyon</option>
                      <option value="danismanlik">Proje danışmanlığı</option>
                    </select>
                  </label>
                </div>

                <label className="text-sm font-semibold text-brand-dark">
                  Mesaj
                  <textarea
                    name="message"
                    rows={6}
                    className={fieldStyles}
                    placeholder="Projenizin kapsamını ve önceliklerini paylaşın."
                  />
                </label>

                <label className="flex items-start gap-3 text-sm leading-6 text-text-muted">
                  <input
                    type="checkbox"
                    name="demoConsent"
                    className="mt-1 size-5 shrink-0 accent-accent-dark"
                  />
                  <span>
                    Bu formun yalnızca görsel bir demo olduğunu ve veri
                    göndermediğini anladım.
                  </span>
                </label>

                <button
                  type="button"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand-dark px-6 py-3 font-semibold text-surface transition-colors hover:bg-brand-secondary focus-visible:text-surface active:bg-brand-dark"
                >
                  Demo formu gönder
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
