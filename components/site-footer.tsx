import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {site.location}
        </p>
        <p>AI-assisted, human-owned architecture and shipping.</p>
      </div>
    </footer>
  );
}
