import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Cursor-built products: trading desk, AI SaaS, custom ecom, wholesale, Flutter, and Shopify-grade commerce.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Product sites do not need to be on a public domain. Each case study is
        backed by a local repo, architecture, and first-party screenshots.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
