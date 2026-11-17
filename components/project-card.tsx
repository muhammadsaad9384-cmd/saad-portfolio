import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border border-line bg-white/40 transition-colors hover:bg-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e7e2d6]">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg tracking-tight">{project.title}</h2>
          <p className="text-xs text-muted">{project.year}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="text-xs text-muted">{project.stack.slice(0, 5).join(" · ")}</p>
      </div>
    </Link>
  );
}
