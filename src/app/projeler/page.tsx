import { ProjectVisual } from "@/components/projects/project-visual";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { projects } from "@/data/home";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Projeler",
  description:
    "İkizler Yapı portföyü için oluşturulmuş konut, ticari yapı, iç mimarlık ve renovasyon odağındaki altı özgün hayalî projeyi inceleyin.",
  path: "/projeler",
});

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projeler"
        title="Her bağlam için farklı bir mekânsal yanıt."
        description="Bu sayfadaki çalışmalar, İkizler Yapı portföy projesinin tasarım yaklaşımını göstermek amacıyla oluşturulmuş tamamen hayalî örneklerdir."
      />

      <section className="bg-brand-dark py-20 text-surface sm:py-24 lg:py-28">
        <Container>
          <h2 className="sr-only">Hayalî proje listesi</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {projects.map((project) => (
              <article key={project.id} className="bg-surface text-text">
                <ProjectVisual variant={project.visualVariant} />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
