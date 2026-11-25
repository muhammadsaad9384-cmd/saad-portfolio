"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const current = projects[active] ?? projects[0];
  const preview = current?.screens[0];

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <ol>
        {projects.map((project, index) => (
          <li key={project.slug} className="border-t border-line last:border-b">
            <Link
              href={`/work/${project.slug}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className="group flex items-baseline justify-between gap-6 py-6"
            >
              <span className="w-10 shrink-0 text-[11px] tracking-[0.2em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="display min-w-0 flex-1 text-3xl leading-none sm:text-4xl md:text-5xl">
                {project.title}
              </span>
              <span className="hidden shrink-0 text-[11px] tracking-[0.16em] text-muted sm:block">
                {project.year}
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {preview ? (
        <div className="sticky top-28 hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-line bg-slate-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview.src}
              alt={preview.alt}
              className="block h-auto w-full object-contain"
            />
          </div>
          <p className="mt-4 text-[11px] tracking-[0.18em] text-muted uppercase">
            {current.title}, {current.screens.length} screens
          </p>
        </div>
      ) : null}
    </div>
  );
}
