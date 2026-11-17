import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return { title: project.title, description: project.summary };
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-5xl px-6 py-16 text-muted">Loading…</div>
      }
    >
      <ProjectBody params={params} />
    </Suspense>
  );
}

async function ProjectBody({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm text-muted">
        <Link href="/work" className="hover:text-foreground">
          Work
        </Link>
        <span aria-hidden="true"> / </span>
        {project.title}
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {project.role} · {project.year}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-10 grid gap-6">
        {project.images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[16/9] overflow-hidden border border-line bg-[#e7e2d6]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 960px, 100vw"
              priority={image === project.images[0]}
            />
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wide">
            Problem
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wide">
            What shipped
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.outcome}</p>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide">
          In this build
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide">Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-white/50 px-3 py-1 text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 border-t border-line pt-8 text-sm text-muted">
        {project.demoNote}
      </p>
    </article>
  );
}
