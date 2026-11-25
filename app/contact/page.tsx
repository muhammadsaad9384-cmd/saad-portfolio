import type { Metadata } from "next";
import { MagneticBtn } from "@/components/magnetic-btn";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
          Email
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Contact</h1>
        <p className="mt-4 text-muted">Roles, walkthroughs, source access.</p>
        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8">
            {site.email ? (
              <>
                <p className="break-all text-base font-semibold tracking-tight sm:text-xl">
                  {site.email}
                </p>
                <div className="mt-5">
                  <MagneticBtn href={`mailto:${site.email}`}>Email me</MagneticBtn>
                </div>
              </>
            ) : null}
            {site.github ? (
              <p className="mt-4">
                <MagneticBtn href={site.github} variant="text" external>
                  GitHub
                </MagneticBtn>
              </p>
            ) : (
              <p className="mt-4 text-sm text-muted">
                Public GitHub is not linked yet. Walkthroughs are on this site.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </PageTransition>
  );
}
