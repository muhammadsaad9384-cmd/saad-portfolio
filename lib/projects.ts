export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  problem: string;
  outcome: string;
  stack: string[];
  bullets: string[];
  images: { src: string; alt: string }[];
  github?: string;
  demoNote: string;
};

export const projects: Project[] = [
  {
    slug: "aurex",
    title: "Aurex",
    role: "Full-stack + Android client",
    year: "2026",
    summary:
      "A multi-asset live desk for client UAT: matching, cash desk, ops console, and a Play-bound Android WebView that loads the same web cabin.",
    problem:
      "The desk needed a trader cabin and an ops console on one codebase, with a phone client that did not wait on a native rewrite.",
    outcome:
      "Next.js desk at /trade and /ops, Prisma-backed matching and cash desk, Android WebView shell for device UAT. Framed as a demo trading UI — not a licensed retail broker.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Android WebView",
      "Flutter (cabin prototype)",
    ],
    bullets: [
      "In-app live order book with crypto marks from public tickers and FX from Frankfurter.",
      "Cash desk: client deposit/withdraw requests, admin confirmation, ops payment rails.",
      "Android debug APK opens the same mobile layout; Flutter cabin kept as layout reference after the WebView cutover.",
      "AWS-oriented deploy notes (EC2, RDS, ALB) for a production-shaped environment.",
    ],
    images: [
      {
        src: "/images/work/aurex-hero.png",
        alt: "Aurex desk marketing hero",
      },
      {
        src: "/images/work/aurex-cabin.png",
        alt: "Aurex trader cabin on a phone frame",
      },
      {
        src: "/images/work/aurex-tape.jpg",
        alt: "Aurex tape and market UI",
      },
    ],
    demoNote:
      "Public retail deploy is withheld. Recruiters can review architecture, screenshots, and a local or recorded walkthrough.",
  },
  {
    slug: "creovox",
    title: "Creovox",
    role: "Full-stack SaaS",
    year: "2026",
    summary:
      "AI image and video platform with Google auth, credit subscriptions, generation pipelines, a character builder, gallery, and admin.",
    problem:
      "Creators needed one product for image models, video models, credits, and billing instead of stitching separate tools.",
    outcome:
      "Next.js app with NextAuth (Google), Stripe credit plans, Replicate-backed generation, demo mode without an API token, and an admin dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "Stripe",
      "Replicate",
      "SQLite / PostgreSQL",
    ],
    bullets: [
      "Credit-based Essential / Advanced / Infinite plans via Stripe checkout and webhooks.",
      "Image (FLUX, SDXL) and video (MiniMax, Luma, Stable Video) routes behind a shared credit ledger.",
      "Character builder for reuse across generations; gallery with download and delete.",
      "Runs in demo mode with placeholders when Replicate is not configured — useful for review without paid keys.",
    ],
    images: [
      {
        src: "/images/work/creovox-hero.png",
        alt: "Creovox product landing",
      },
    ],
    demoNote:
      "Safe to demo locally in demo mode. A hosted preview can be added on Vercel without production secrets.",
  },
  {
    slug: "barakah",
    title: "Barakah",
    role: "Commerce platform + admin",
    year: "2026",
    summary:
      "Custom luxury storefront and admin in one Next.js app: lookbook, collections, checkout, i18n, Redis-cached catalog. Not Shopify — Shopify-grade commerce, owned end to end.",
    problem:
      "A high-end leather house needed editorial motion, merchandising, and ops without handing the stack to a hosted theme.",
    outcome:
      "Storefront plus /admin for products, inventory, orders, discounts, content, and SEO. Five languages, Redis catalog cache, Docker + Nginx + Postgres production shape.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "next-intl",
      "Docker",
      "Nginx",
    ],
    bullets: [
      "Mega menu, lookbook hotspots, quick view, slide-out bag, and checkout (bank transfer, COD, pickup).",
      "Admin covers variants, quantity breaks, smart collections, staff, shipping, and contact inbox.",
      "Public pages in English, French, Italian, German, and Spanish with English fallback.",
      "Anonymous HTML cache plus Redis; admin saves bust the catalog cache.",
    ],
    images: [
      {
        src: "/images/work/barakah-hero.jpg",
        alt: "Barakah editorial storefront hero",
      },
      {
        src: "/images/work/barakah-look.jpg",
        alt: "Barakah lookbook still",
      },
    ],
    demoNote:
      "Runs locally with Postgres and Redis. Product media is first-party; no third-party storefront lock-in.",
  },
  {
    slug: "dk-enterprise",
    title: "DK Enterprise",
    role: "Frontend, APIs, wholesale UX",
    year: "2026",
    summary:
      "Wholesale custom-apparel site: catalog, VIP pricing, sample orders, NextAuth, Prisma admin, and locale-aware pricing.",
    problem:
      "A factory-direct brand needed a public catalog and a private admin without a generic marketplace template.",
    outcome:
      "Next.js storefront with shop, VIP application, WhatsApp-led sampling, admin product CRUD, and i18n-ready locale pricing.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "NextAuth",
      "Zustand",
      "Tailwind CSS",
    ],
    bullets: [
      "Shop catalog and product detail with sample-order panel and wholesale MOQ messaging.",
      "Auth for customers; gated admin for products, uploads, and stats APIs.",
      "Locale selector and currency display for international wholesale buyers.",
      "SEO, sitemap, and content guides for fabric and production education.",
    ],
    images: [
      {
        src: "/images/work/dk-hero.jpg",
        alt: "DK Enterprise factory-floor brand photography",
      },
    ],
    demoNote:
      "Business site; public GitHub can be a sanitized slice. Case study focuses on catalog, auth, and admin APIs.",
  },
  {
    slug: "flutter-android",
    title: "Flutter & Android clients",
    role: "Mobile engineer",
    year: "2025–2026",
    summary:
      "Flutter cabin prototype for Aurex, then an Android WebView / Play-bound shell so the same Next.js desk ships on device without a second product.",
    problem:
      "Native cabin screens and Play distribution were blocking UAT on phones.",
    outcome:
      "Flutter layouts informed the web cabin. The shipping client is an Android WebView APK with a desk URL override for LAN UAT; Play Store path is HTTPS + TWA.",
    stack: ["Flutter", "Dart", "Android", "Gradle", "WebView", "PWA"],
    bullets: [
      "Flutter trader cabin built, then cancelled in favour of one web cabin + thin native shell.",
      "Gradle debug APK with adb reverse and LAN desk URL for testers.",
      "Play Store kit prepared for a live HTTPS origin and Trusted Web Activity.",
      "Same mobile CSS layout on web and in the WebView — no double feature work.",
    ],
    images: [
      {
        src: "/images/work/aurex-cabin.png",
        alt: "Aurex cabin in a phone frame",
      },
      {
        src: "/images/work/aurex-mobile.jpg",
        alt: "Aurex mobile marketing slide",
      },
    ],
    demoNote:
      "APK and Flutter tree stay private. Screenshots and architecture are the public proof.",
  },
  {
    slug: "shopify-commerce",
    title: "Shopify & commerce systems",
    role: "Commerce engineer",
    year: "2025–2026",
    summary:
      "Shopify-capable commerce work plus custom storefronts (Barakah, DK) when the merchant needs admin, i18n, and checkout owned in Next.js.",
    problem:
      "Some brands need Shopify speed; others need a custom admin, cache, and editorial storefront Shopify themes cannot hold.",
    outcome:
      "I implement Shopify storefronts and apps when that is the right surface, and I also ship Shopify-grade custom platforms: catalog, cart, checkout, merchandising, and ops.",
    stack: [
      "Shopify",
      "Liquid / Hydrogen",
      "Next.js",
      "Prisma",
      "Stripe (adjacent SaaS)",
      "REST / GraphQL APIs",
    ],
    bullets: [
      "Custom ecom (Barakah) as proof of checkout, merchandising, and admin depth without a hosted theme.",
      "Wholesale catalog (DK Enterprise) with sampling, VIP, and order APIs.",
      "Comfortable on Shopify Admin, Storefront, and theme/extension surfaces when the merchant stays on Shopify.",
      "Clear split: use Shopify when ops already live there; use custom Next.js when the product is the platform.",
    ],
    images: [
      {
        src: "/images/work/barakah-look.jpg",
        alt: "Custom commerce lookbook used as merchandising proof",
      },
    ],
    demoNote:
      "Shopify merchant dashboards stay private. Public proof is the custom commerce code and this case study.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
