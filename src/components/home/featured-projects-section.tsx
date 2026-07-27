import Link from "next/link";

import { ProjectVisual } from "@/components/projects/project-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/home";

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
          {projects.slice(0, 3).map((project) => (
            <article key={project.id} className="bg-surface text-text">
              <ProjectVisual variant={project.visualVariant} />
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
