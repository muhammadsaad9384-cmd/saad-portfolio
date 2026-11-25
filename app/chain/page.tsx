import type { Metadata } from "next";
import { CountUp } from "@/components/count-up";
import { MagneticBtn } from "@/components/magnetic-btn";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { WalletMock } from "@/components/wallet-mock";
import {
  chainFaq,
  chainIntro,
  chainPillars,
  chainServices,
  chainStack,
  chainStats,
  supportedFamilies,
  walletBuild,
} from "@/lib/chain";

export const metadata: Metadata = {
  title: "Blockchain",
  description: chainIntro.body,
};

const film = [...chainServices, ...chainServices];

export default function ChainPage() {
  return (
    <PageTransition>
      <article className="min-w-0 pb-10">
        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-16 lg:pt-20">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            {chainIntro.kicker}
          </p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="hero-in hero-in-1 max-w-xl text-[2.6rem] font-extrabold leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Exchange</span>
              <span className="hero-shimmer block bg-clip-text text-transparent">
                products.
              </span>
            </h1>
            <div className="hero-in hero-in-2 max-w-md lg:pb-2">
              <p className="text-xl font-medium text-slate-800">
                Frontends, matching APIs, wallets, and chain software.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {chainIntro.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticBtn href="/contact" transitionTypes={["nav-forward"]}>
                  Start a build
                </MagneticBtn>
                <MagneticBtn
                  href="/work"
                  variant="ghost"
                  transitionTypes={["nav-forward"]}
                >
                  See the work
                </MagneticBtn>
              </div>
            </div>
          </div>
        </section>

        <div className="hero-in hero-in-4 filmstrip mt-10 pb-2">
          <div className="filmstrip-track px-4 sm:px-6">
            {film.map((frame, index) => (
              <Tilt
                key={`${frame.image}-${index}`}
                className="w-[240px] shrink-0 sm:w-[360px]"
              >
                <figure className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-[0_18px_40px_-28px_rgb(15_23_42/0.55)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={frame.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <figcaption className="truncate px-3 py-2 text-xs font-medium text-slate-300">
                    {frame.title}
                  </figcaption>
                </figure>
              </Tilt>
            ))}
          </div>
        </div>

        <div className="marquee mt-8 border-y border-slate-200/80 bg-white/50 py-4">
          <div className="marquee-track text-sm font-medium text-slate-500">
            {[...chainStack, ...chainStack].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 pb-2 pt-10 sm:px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_16px_40px_-28px_rgb(15_23_42/0.35)] sm:grid-cols-2 lg:grid-cols-4">
            {chainStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 90}
                variant="scale"
                className="min-w-0 bg-white px-6 py-6"
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

        <section className="px-4 py-10 sm:px-6 sm:py-14" aria-labelledby="desk-heading">
          <Reveal
            variant="blur"
            className="chain-panel mx-auto max-w-6xl overflow-hidden rounded-3xl px-5 py-10 sm:px-10 sm:py-14"
          >
            <div className="chain-mesh" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                  What a desk build includes
                </p>
                <h2
                  id="desk-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Matching, order book, wallets, admin, and charts.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                  I ship both sides of the product. The screen a trader uses, and
                  the API that matches orders and serves balances. License and
                  customer funds stay with the client who runs the venue.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {chainPillars.map((item) => (
                    <li
                      key={item.title}
                      className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="font-mono text-[11px] text-cyan-300">{item.code}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.body}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <MagneticBtn
                    href="/contact"
                    variant="light"
                    transitionTypes={["nav-forward"]}
                  >
                    Scope a desk
                  </MagneticBtn>
                </div>
              </div>
              <WalletMock />
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10" aria-labelledby="services-heading">
          <Reveal className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Services
            </p>
            <h2 id="services-heading" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Product engineering I actually ship
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Each surface is a UI plus the API or contracts behind it. Eight
              practices, grouped so the work is readable.
            </p>
          </Reveal>
          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            {chainServices.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 110}
                variant="scale"
                className={index === 0 ? "sm:col-span-2" : undefined}
              >
                <article
                  className={`glow-card group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white ${
                    index === 0 ? "lg:grid lg:grid-cols-2" : ""
                  }`}
                >
                  <div
                    className={`still-frame relative bg-slate-950 ${
                      index === 0
                        ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[320px]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className={`min-w-0 p-5 sm:p-6 ${
                      index === 0 ? "flex flex-col justify-center lg:p-10" : ""
                    }`}
                  >
                    <p className="font-mono text-xs font-semibold text-blue-600">
                      {item.code}
                    </p>
                    <h3
                      className={`mt-2 font-semibold tracking-tight ${
                        index === 0 ? "text-2xl sm:text-3xl" : "text-lg"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6" aria-labelledby="vault-heading">
          <Reveal className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Wallet engineering
            </p>
            <h2 id="vault-heading" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              What a personal vault includes
            </h2>
          </Reveal>
          <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {walletBuild.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80} variant="up">
                <div className="glow-card h-full rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <Reveal>
              <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                Networks
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Families I wire into one vault
              </h2>
            </Reveal>
            <ul className="mt-8 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportedFamilies.map((item, index) => (
                <Reveal key={item.name} delay={(index % 3) * 70} variant="scale">
                  <li className="more-row flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="font-semibold tracking-tight">{item.name}</span>
                    <span className="shrink-0 text-xs text-muted">{item.note}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Straight answers</h2>
          </Reveal>
          <div className="mt-8 grid min-w-0 gap-8 md:grid-cols-3">
            {chainFaq.map((item, index) => (
              <Reveal key={item.q} delay={index * 90}>
                <h3 className="font-semibold tracking-tight">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12" variant="scale">
            <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-white px-5 py-6 sm:flex-row sm:items-center sm:px-8">
              <div className="min-w-0">
                <p className="text-lg font-semibold tracking-tight">Ready to scope a desk or a vault?</p>
                <p className="mt-1 text-sm text-muted">
                  Tell me the chains, the screens, and whether the client holds the license.
                </p>
              </div>
              <MagneticBtn href="/contact" transitionTypes={["nav-forward"]}>
                Talk through it
              </MagneticBtn>
            </div>
          </Reveal>
        </section>
      </article>
    </PageTransition>
  );
}
