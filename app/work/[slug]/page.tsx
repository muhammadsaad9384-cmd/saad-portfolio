import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import { BrowserFrame } from "@/components/browser-frame";
import { MagneticBtn } from "@/components/magnetic-btn";
import { PageTransition } from "@/components/page-transition";
import { ScreenGallery } from "@/components/screen-gallery";
import { WorkShot } from "@/components/work-shot";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

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
        <div className="mx-auto max-w-6xl px-6 py-16 text-muted">Loading…</div>
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

  const github = project.github || site.github;
  const cover = project.screens[0];

  return (
    <PageTransition>
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <p className="text-sm text-muted">
        <Link
          href="/work"
          transitionTypes={["nav-back"]}
          className="font-medium text-blue-600 hover:underline"
        >
          Work
        </Link>
        <span aria-hidden="true"> / </span>
        {project.title}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-sm tracking-wide text-muted">
        {project.role} · {project.year} · {project.screens.length} screens ·{" "}
        {project.sitemap.length} routes
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <MagneticBtn href="#screens">View screens</MagneticBtn>
        {github ? (
          <MagneticBtn href={github} variant="ghost" external>
            Source
          </MagneticBtn>
        ) : (
          <span className="rounded-full border border-line bg-white px-5 py-2.5 text-sm text-muted">
            {project.sourceLabel}
          </span>
        )}
      </div>

      {cover ? (
        <ViewTransition
          name={`project-${project.slug}`}
          share="morph"
          default="none"
        >
          <div className="mt-10">
            <BrowserFrame url={cover.path}>
              <WorkShot src={cover.src} alt={cover.alt} priority />
            </BrowserFrame>
          </div>
        </ViewTransition>
      ) : null}

      <section id="screens" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight">Walkthrough</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Click any screen to enlarge it. These are captured from the running
          product or first-party assets, not stock UI.
        </p>
        <div className="mt-8">
          <ScreenGallery screens={project.screens} />
        </div>
      </section>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="text-sm font-medium">
            Problem
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-sm font-medium">
            What shipped
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.outcome}</p>
        </section>
      </div>

      <section className="mt-14">
        <h2 className="text-sm font-medium">
          In this build
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-sm font-medium">
          Stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight">All routes</h2>
        <p className="mt-2 text-sm text-muted">
          Complete surface map of the product. Screens above cover the public
          and UAT flows; the rest exist in the repo.
        </p>
        <ul className="mt-6 grid gap-2 font-mono text-[11px] text-muted sm:grid-cols-2 sm:text-xs lg:grid-cols-3">
          {project.sitemap.map((path) => (
            <li
              key={path}
              className="overflow-x-auto rounded-lg border border-line bg-white px-3 py-2 whitespace-nowrap"
            >
              {path}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-14 border-t border-line pt-8 text-sm text-muted">
        {project.demoNote} {project.sourceLabel}.
        {github ? (
          <>
            {" "}
            <a className="underline" href={github} rel="noreferrer" target="_blank">
              Source
            </a>
          </>
        ) : site.github ? (
          <>
            {" "}
            <a className="underline" href={site.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
          </>
        ) : (
          <> Set NEXT_PUBLIC_GITHUB to publish a public GitHub link on this page.</>
        )}
      </p>
    </article>
    </PageTransition>
  );
}
