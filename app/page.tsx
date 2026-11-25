import type { CSSProperties } from "react";
import Link from "next/link";
import { BrowserFrame } from "@/components/browser-frame";
import { CountUp } from "@/components/count-up";
import { MagneticBtn } from "@/components/magnetic-btn";
import { PageTransition } from "@/components/page-transition";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { WorkShot } from "@/components/work-shot";
import { WalletMock } from "@/components/wallet-mock";
import { capabilities, process, recruiterNotes } from "@/lib/home";
import { chainIntro, chainPillars } from "@/lib/chain";
import { projects } from "@/lib/projects";
import { site, stack } from "@/lib/site";

const film = [
  { src: "/images/work/creovox-hero.png", label: "Creovox" },
  { src: "/images/work/creovox-pricing.png", label: "Creovox pricing" },
  { src: "/images/work/dk-shop.png", label: "DK catalog" },
  { src: "/images/work/dk-product.png", label: "DK product" },
  { src: "/images/work/dk-vip.png", label: "DK VIP" },
  { src: "/images/work/aurex-desk.png", label: "Aurex live desk" },
  { src: "/images/work/creovox-login.png", label: "Creovox sign in" },
];

const lead = projects.find((project) => project.slug === "creovox") ?? projects[0];
const featured = projects.filter((project) => project.slug !== lead.slug).slice(0, 3);
const moreWork = projects.slice(4);

const screenCount = projects.reduce((n, project) => n + project.screens.length, 0);
const routeCount = projects.reduce((n, project) => n + project.sitemap.length, 0);

const stats = [
  { value: String(projects.length), label: "Products walked through" },
  { value: String(screenCount), label: "Captured screens" },
  { value: String(routeCount), label: "Mapped routes" },
  { value: "5", label: "Product types" },
];

export default function Home() {
  return (
    <PageTransition>
      <div>
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-16 lg:pt-20">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.location}
          </p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="hero-in hero-in-1 text-[2.7rem] font-extrabold leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
              <span className="block">Saad</span>
              <span className="hero-shimmer block bg-clip-text text-transparent">
                Bakshi
              </span>
            </h1>
            <div className="hero-in hero-in-2 max-w-md lg:pb-2">
              <p className="text-xl font-medium text-slate-800">{site.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                I build Next.js products, APIs, Flutter clients, commerce systems,
                and personal crypto wallets. Open a case study for screenshots and
                route maps, even when the app is not on a public domain.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticBtn href="/work" transitionTypes={["nav-forward"]}>
                  See the work
                </MagneticBtn>
                <MagneticBtn
                  href="/chain"
                  variant="ghost"
                  transitionTypes={["nav-forward"]}
                >
                  Blockchain
                </MagneticBtn>
              </div>
            </div>
          </div>
        </section>

        <div className="hero-in hero-in-4 filmstrip pb-4">
          <div className="filmstrip-track px-6">
            {[...film, ...film].map((frame, index) => (
              <Tilt key={`${frame.src}-${index}`} className="w-[220px] shrink-0 sm:w-[340px]">
                <BrowserFrame url={frame.label}>
                  <WorkShot src={frame.src} alt={frame.label} priority={index < 3} />
                </BrowserFrame>
              </Tilt>
            ))}
          </div>
        </div>

        <div className="marquee mt-6 border-y border-slate-200/80 bg-white/50 py-4">
          <div className="marquee-track text-sm font-medium text-slate-500">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 sm:px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_16px_40px_-28px_rgb(15_23_42/0.35)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 90}
                variant="scale"
                className="bg-white px-6 py-6"
              >
                <CountUp
                  value={stat.value}
                  className="text-3xl font-extrabold tracking-tight text-blue-600"
                />
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="chain-heading">
          <Reveal
            variant="blur"
            className="chain-panel mx-auto max-w-6xl overflow-hidden rounded-3xl px-5 py-10 sm:px-10 sm:py-14"
          >
            <div className="chain-mesh" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                  {chainIntro.kicker}
                </p>
                <h2
                  id="chain-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  Exchange desks, wallets, and the chain around them
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                  {chainIntro.body}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {chainPillars.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-mono text-[11px] text-cyan-300">{item.code}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <MagneticBtn
                    href="/chain"
                    variant="light"
                    transitionTypes={["nav-forward"]}
                  >
                    Open blockchain
                  </MagneticBtn>
                </div>
              </div>
              <WalletMock />
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="work-heading">
          <Reveal className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                Selected work
              </p>
              <h2 id="work-heading" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Products, page by page
              </h2>
            </div>
            <MagneticBtn
              href="/work"
              variant="text"
              transitionTypes={["nav-forward"]}
            >
              All projects
            </MagneticBtn>
          </Reveal>
          {lead ? (
            <Reveal variant="scale" className="mb-12">
              <ProjectCard project={lead} featured />
            </Reveal>
          ) : null}
          <div className="grid min-w-0 gap-10 sm:gap-12 md:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 110}
                variant="scale"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {moreWork.map((project, index) => (
              <Reveal key={project.slug} delay={index * 90} variant={index ? "right" : "left"}>
              <Link
                href={`/work/${project.slug}`}
                transitionTypes={["nav-forward"]}
                className="more-row flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5"
              >
                <div>
                  <p className="font-semibold tracking-tight">{project.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{project.summary}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-blue-600">
                  {project.screens.length} pages
                </span>
              </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <Reveal>
              <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                What I ship
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Full-stack, not just the landing page
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={(index % 2) * 100}
                  variant={index % 2 ? "right" : "left"}
                  className="glow-card relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-28px_rgb(15_23_42/0.3)] sm:p-6"
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 font-mono text-6xl font-bold text-blue-600/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              How I work
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              From architecture to a walkable product
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {process.map((item, index) => (
              <Reveal
                key={item.step}
                delay={(index % 2) * 90}
                variant={index % 2 ? "right" : "left"}
                className="flex gap-4"
              >
                <span className="font-mono text-sm font-semibold text-blue-600">{item.step}</span>
                <div>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <Reveal className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="text-sm font-semibold">Stack in this portfolio</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((item, index) => (
                <li
                  key={item}
                  className="stack-chip rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600"
                  style={{ "--i": index } as CSSProperties}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              For recruiters
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Straight answers
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {recruiterNotes.map((item, index) => (
              <Reveal
                key={item.q}
                delay={(index % 2) * 90}
                variant={index % 2 ? "right" : "left"}
              >
                <h3 className="font-semibold tracking-tight">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 sm:pb-16">
          <Reveal
            variant="blur"
            className="cta-aurora mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 px-5 py-10 shadow-[0_30px_80px_-40px_rgb(37_99_235/0.9)] sm:flex-row sm:items-center sm:rounded-[28px] sm:px-12 sm:py-14"
          >
            <div>
              <p className="text-sm font-medium text-blue-100">Next conversation</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need a full-stack engineer on a product team?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-blue-100">
                I can walk through real screens in one sitting: SaaS, commerce,
                APIs, and Android clients.
              </p>
            </div>
            <MagneticBtn
              href="/contact"
              variant="light"
              transitionTypes={["nav-forward"]}
            >
              Get in touch
            </MagneticBtn>
          </Reveal>
        </section>
      </div>
    </PageTransition>
  );
}
