import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-surface">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 lg:py-16">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tight">
              İkizler Yapı
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-canvas">
              Yapı ve mimarlık odağında yalın, güvenilir ve çağdaş bir kurumsal
              deneyim için geliştirilen hayalî marka çalışması.
            </p>
            <p className="mt-4 text-sm text-canvas">
              Bu site yalnızca portföy amacıyla hazırlanmış özgün bir projedir.
            </p>
          </div>

          <nav aria-label="Alt navigasyon">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Sayfalar
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-canvas no-underline transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-surface/20 py-6 text-sm text-canvas">
          © {currentYear} İkizler Yapı. Portföy projesi.
        </div>
      </Container>
    </footer>
  );
}
