import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Walk through every major page of the products: screenshots, route maps, and source notes.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">Work</h1>
        <p className="mt-3 max-w-xl text-muted">
          Click a project for the full walkthrough: captured screens and every
          route. Live domains are not required.
        </p>
        <div className="mt-12 grid min-w-0 gap-10 sm:gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 2) * 110}
              variant="scale"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
