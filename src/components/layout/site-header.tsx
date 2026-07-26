import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

import { MobileNavigation } from "./mobile-navigation";
import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/95 backdrop-blur-sm">
      <Container>
        <div className="flex min-h-18 items-center justify-between gap-6">
          <SiteLogo />

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Ana navigasyon">
              <ul className="flex items-center gap-6">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-medium text-brand-dark no-underline transition-colors hover:text-accent-dark"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ButtonLink href="/iletisim" variant="accent">
              İletişime Geç
            </ButtonLink>
          </div>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
