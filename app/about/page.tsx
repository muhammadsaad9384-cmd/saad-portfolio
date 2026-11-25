import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/reveal";
import { stack } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
          Profile
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">About</h1>
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            I am a full-stack product engineer. I build the storefront, admin, API,
            and mobile client for ecommerce, SaaS, and internal tools. I also build
            personal crypto wallets and chain product surfaces.
          </p>
          <p>
            Wallet work is non-custodial: HD keys, multi-chain adapters, signing,
            and contracts. Seeds do not appear on this site.
          </p>
          <p>
            This site is the proof. Each case study has real pages and a route map,
            so you can see the product without a public domain.
          </p>
          <p>
            I own the architecture and I ship the work.
          </p>
        </div>
        <Reveal delay={120}>
          <h2 className="mt-12 text-sm font-semibold">Technologies in the work</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </PageTransition>
  );
}
