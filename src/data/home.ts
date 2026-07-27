import type {
  AboutPrinciple,
  FeaturedProject,
  ProcessStep,
  Service,
  Statistic,
  Testimonial,
} from "@/types/home";

export const services = [
  {
    id: "konut-projeleri",
    number: "01",
    title: "Konut projeleri",
    description:
      "Günlük yaşam alışkanlıklarını, arsa koşullarını ve uzun vadeli kullanımı birlikte değerlendiren konut çözümleri.",
  },
  {
    id: "ticari-yapilar",
    number: "02",
    title: "Ticari yapılar",
    description:
      "Marka deneyimi ile operasyonel ihtiyaçları dengede tutan, esnek ve işlevsel ticari mekânlar.",
  },
  {
    id: "mimari-tasarim",
    number: "03",
    title: "Mimari tasarım",
    description:
      "Bağlam, ölçek ve malzeme kararlarını tek bir düşünce etrafında buluşturan özgün tasarım yaklaşımı.",
  },
  {
    id: "ic-mimarlik",
    number: "04",
    title: "İç mimarlık",
    description:
      "Mekânsal akışı, ışığı ve kullanıcı ihtiyaçlarını merkeze alan bütüncül iç mekân kurguları.",
  },
  {
    id: "renovasyon",
    number: "05",
    title: "Tadilat ve renovasyon",
    description:
      "Mevcut yapı değerlerini korurken yeni kullanım ihtiyaçlarına uyum sağlayan kontrollü dönüşümler.",
  },
  {
    id: "proje-danismanligi",
    number: "06",
    title: "Proje danışmanlığı",
    description:
      "Karar süreçlerini sadeleştiren, bütçe ve uygulama adımlarını birlikte ele alan proje desteği.",
  },
] as const satisfies readonly Service[];

export const aboutPrinciples = [
  {
    id: "islevsel-tasarim",
    title: "İşlevsel tasarım",
    description:
      "Her kararın mekânın gerçek kullanımına ve gündelik yaşama karşılık vermesini önemsiyoruz.",
  },
  {
    id: "planli-uygulama",
    title: "Planlı uygulama",
    description:
      "Tasarım ile saha süreçlerini aynı çerçevede ele alarak ilerlemeyi görünür kılıyoruz.",
  },
  {
    id: "seffaf-iletisim",
    title: "Şeffaf iletişim",
    description:
      "Seçenekleri, öncelikleri ve olası etkileri anlaşılır bir dille paylaşmayı temel alıyoruz.",
  },
  {
    id: "butuncul-degerlendirme",
    title: "Bütüncül değerlendirme",
    description:
      "Yapının koşullarıyla kullanıcı ihtiyaçlarını birbirinden ayırmadan değerlendiriyoruz.",
  },
] as const satisfies readonly AboutPrinciple[];

export const featuredProjects = [
  {
    id: "avlu-izleri",
    name: "Avlu İzleri Konutları",
    category: "Konut",
    location: "Kuzey Yerleşkesi",
    year: "2025",
    description:
      "Ortak yaşam alanlarını iç avlu çevresinde toplayan, gün ışığı ve mahremiyet dengesine odaklanan bir konut kurgusu.",
    visualVariant: "courtyard",
  },
  {
    id: "eksen-ofisleri",
    name: "Eksen Ofisleri",
    category: "Ticari yapı",
    location: "Merkez Bölgesi",
    year: "2024",
    description:
      "Değişen ekip yapılarına uyum sağlayan çalışma alanları ile sakin ortak alanları bir araya getiren esnek ofis projesi.",
    visualVariant: "grid",
  },
  {
    id: "katman-ev",
    name: "Katman Ev Dönüşümü",
    category: "İç mimarlık",
    location: "Güney Yakası",
    year: "2026",
    description:
      "Mevcut mekânsal izleri koruyup yeni yaşam senaryolarına açan, malzeme geçişleriyle tanımlanan bir renovasyon.",
    visualVariant: "interior",
  },
] as const satisfies readonly FeaturedProject[];

export const statistics = [
  { id: "projects", value: "24", label: "Tamamlanan hayalî proje" },
  { id: "disciplines", value: "6", label: "Uzmanlık alanı" },
  { id: "cities", value: "4", label: "Temsili şehirde çalışma" },
  { id: "experience", value: "11 yıl", label: "Toplam ekip deneyimi" },
] as const satisfies readonly Statistic[];

export const processSteps = [
  {
    id: "analysis",
    step: "01",
    title: "İhtiyaç analizi",
    description:
      "Mekânın koşullarını, kullanıcı beklentilerini ve projenin önceliklerini birlikte tanımlarız.",
  },
  {
    id: "design",
    step: "02",
    title: "Tasarım ve planlama",
    description:
      "Alternatifleri değerlendirir; kapsam, malzeme ve uygulama kararlarını anlaşılır bir plana dönüştürürüz.",
  },
  {
    id: "delivery",
    step: "03",
    title: "Uygulama ve koordinasyon",
    description:
      "Tasarım kararlarının sahadaki karşılığını takip eder, ilgili çalışma adımlarını uyum içinde yürütürüz.",
  },
  {
    id: "review",
    step: "04",
    title: "Teslim ve değerlendirme",
    description:
      "Tamamlanan işleri proje hedefleriyle birlikte gözden geçirir, kullanım öncesi son değerlendirmeyi yaparız.",
  },
] as const satisfies readonly ProcessStep[];

export const testimonials = [
  {
    id: "residential-client",
    quote:
      "İhtiyaçlarımız dikkatle dinlendi; seçeneklerin nedenleri açıkça anlatıldığı için karar süreci çok daha anlaşılır ilerledi.",
    attribution: "Konut projesi müşterisi",
  },
  {
    id: "commercial-client",
    quote:
      "Çalışma alanının günlük akışı tasarıma doğru yansıdı. Süreç boyunca düzenli ve sade bir iletişim kuruldu.",
    attribution: "Ticari alan yatırımcısı",
  },
  {
    id: "renovation-client",
    quote:
      "Mevcut mekânın karakteri korunurken yeni kullanım ihtiyaçlarımız için dengeli çözümler geliştirildi.",
    attribution: "Renovasyon projesi müşterisi",
  },
] as const satisfies readonly Testimonial[];
