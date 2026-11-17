import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const hasLinks = site.email || site.github || site.linkedin;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
        Contact
      </h1>
      <p className="mt-6 text-muted">
        For roles in Europe, the fastest path is email or LinkedIn. Set{" "}
        <code className="font-mono text-sm">NEXT_PUBLIC_EMAIL</code>,{" "}
        <code className="font-mono text-sm">NEXT_PUBLIC_GITHUB</code>, and{" "}
        <code className="font-mono text-sm">NEXT_PUBLIC_LINKEDIN</code> in{" "}
        <code className="font-mono text-sm">.env.local</code> so these links
        stay yours.
      </p>
      {hasLinks ? (
        <ul className="mt-8 space-y-3 text-base">
          {site.email ? (
            <li>
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          ) : null}
          {site.github ? (
            <li>
              <a
                className="underline"
                href={site.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          ) : null}
          {site.linkedin ? (
            <li>
              <a
                className="underline"
                href={site.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          ) : null}
        </ul>
      ) : (
        <p className="mt-8 text-sm text-muted">
          Links are empty until environment variables are set. The live
          portfolio URL is still the right thing to put on a CV.
        </p>
      )}
    </div>
  );
}
