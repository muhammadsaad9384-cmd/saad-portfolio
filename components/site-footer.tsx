import { MagneticBtn } from "@/components/magnetic-btn";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="font-semibold text-foreground">{site.name}</span>
          <span className="mx-2 text-slate-300">/</span>
          {site.title}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <MagneticBtn href="/work" variant="text">
            Work
          </MagneticBtn>
          <MagneticBtn href="/chain" variant="text">
            Blockchain
          </MagneticBtn>
          <MagneticBtn href="/about" variant="text">
            About
          </MagneticBtn>
          <MagneticBtn href={`mailto:${site.email}`} variant="text" className="max-w-full break-all">
            {site.email}
          </MagneticBtn>
        </div>
      </div>
    </footer>
  );
}
