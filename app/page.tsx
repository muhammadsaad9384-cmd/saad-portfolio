import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { site, stack } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm text-muted">{site.location}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
          {site.title} who ships Next.js products, APIs, Flutter clients, and commerce.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.summary} The work below was built in production-shaped repos —
          trading desks, AI SaaS, wholesale catalogs, and custom storefronts —
          not tutorial clones.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background hover:opacity-90"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-white"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-20" aria-labelledby="stack-heading">
        <h2 id="stack-heading" className="text-sm font-medium">
          Proof stack
        </h2>
        <p className="mt-1 text-sm text-muted">
          Only technologies used in the Cursor-built projects on this site.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-white/50 px-3 py-1 text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20" aria-labelledby="work-heading">
        <div className="flex items-end justify-between">
          <h2 id="work-heading" className="font-serif text-3xl">
            Selected work
          </h2>
          <Link href="/work" className="text-sm text-muted hover:text-foreground">
            All case studies
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
