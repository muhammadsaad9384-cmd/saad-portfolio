import type { Metadata } from "next";
import { stack } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">About</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        <p>
          I am a full-stack product engineer. I design and ship the storefront,
          the admin, the API, and the mobile client when the product needs all
          four — ecommerce, Shopify-grade commerce, SaaS, and internal tools.
        </p>
        <p>
          Recent work in Cursor includes a multi-asset trading desk with an
          Android WebView client, an AI image/video SaaS with Stripe credits, a
          custom luxury storefront with Redis caching and five languages, and a
          wholesale apparel catalog with auth and admin APIs.
        </p>
        <p>
          I use AI tools to move faster. I do not outsource architecture,
          product decisions, or shipping. Recruiters in Europe get a narrow,
          evidenced stack — not a claim that every language is an expertise.
        </p>
        <p>Open to full-time product engineering roles in Europe.</p>
      </div>
      <h2 className="mt-12 text-sm font-medium uppercase tracking-wide">
        Technologies in the portfolio
      </h2>
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
    </div>
  );
}
