import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { featuredProjects } from "@/data/home";
import type { ProjectVisualVariant } from "@/types/home";

const visualStyles: Record<ProjectVisualVariant, string> = {
  courtyard:
    "before:absolute before:inset-[18%] before:border before:border-brand-dark/35 after:absolute after:bottom-[18%] after:left-[18%] after:size-[31%] after:bg-accent",
  grid: "before:absolute before:inset-y-[16%] before:left-[24%] before:w-[18%] before:bg-brand-dark after:absolute after:bottom-[16%] after:right-[16%] after:h-[42%] after:w-[34%] after:border after:border-accent-dark",
  interior:
    "before:absolute before:bottom-0 before:left-[16%] before:h-[72%] before:w-[34%] before:bg-brand-secondary after:absolute after:right-[14%] after:top-[16%] after:size-[36%] after:rounded-full after:border after:border-accent-dark",
};

export function FeaturedProjectsSection() {
  return (
    <section className="bg-brand-dark py-20 text-surface sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Seçili çalışmalar
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-surface sm:text-4xl">
              Her proje, kendi bağlamından doğar.
            </h2>
            <p className="mt-4 text-base text-canvas sm:text-lg">
              Farklı kullanım biçimlerine yanıt veren üç hayalî proje üzerinden
              tasarım yaklaşımımıza kısa bir bakış.
            </p>
          </div>
          <ButtonLink href="/projeler" variant="accent">
            Tüm projeleri inceleyin
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.id} className="bg-surface text-text">
              <div
                aria-hidden="true"
                className={`relative aspect-[4/3] overflow-hidden bg-canvas ${visualStyles[project.visualVariant]}`}
              >
                <div className="absolute inset-x-0 top-1/2 border-t border-border" />
                <div className="absolute inset-y-0 right-[28%] border-l border-border" />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-brand-dark">
                  <Link
                    href="/projeler"
                    className="no-underline transition-colors hover:text-accent-dark"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-6 text-text-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
