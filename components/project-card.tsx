import Link from "next/link";
import { ViewTransition } from "react";
import type { Project } from "@/lib/projects";
import { BrowserFrame } from "@/components/browser-frame";
import { Tilt } from "@/components/tilt";
import { WorkShot } from "@/components/work-shot";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const image = project.screens[0];

  return (
    <Link
      href={`/work/${project.slug}`}
      transitionTypes={["nav-forward"]}
      className="group block min-w-0 w-full"
    >
      <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
        <Tilt className="card-lift">
          <BrowserFrame url={image?.path ?? `/${project.slug}`}>
            <div className="relative bg-slate-100">
              {image ? (
                <div className="transition duration-700 ease-out group-hover:scale-[1.02]">
                  <WorkShot src={image.src} alt={image.alt} />
                </div>
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <p className="pointer-events-none absolute bottom-3 left-4 text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:opacity-100">
                Open case study
              </p>
            </div>
          </BrowserFrame>
        </Tilt>
      </ViewTransition>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold tracking-tight transition group-hover:text-blue-600">
              {project.title}
            </h2>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
              {project.screens.length} pages
            </span>
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <p className="shrink-0 pt-1 text-xs font-medium text-muted">{project.year}</p>
      </div>
    </Link>
  );
}
