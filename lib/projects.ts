export type Screen = {
  title: string;
  path: string;
  src: string;
  alt: string;
};

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
  screens: Screen[];
  sitemap: string[];
  github?: string;
  sourceLabel: string;
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
      "Next.js desk at /trade and /ops, Prisma-backed matching and cash desk, Android WebView shell for device UAT. Framed as a demo trading UI, not a licensed retail broker.",
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
    screens: [
      {
        title: "Live desk",
        path: "/trade",
        src: "/images/work/aurex-desk.png",
        alt: "Aurex live desk with the BTCUSD chart, account balance, and Up and Down ticket panel.",
      },
      {
        title: "Phone desk",
        path: "/trade",
        src: "/images/work/aurex-mobile-desk.png",
        alt: "Aurex phone screen of the same live desk, with the chart, amount, time, and trade controls.",
      },
    ],
    sitemap: [
      "/",
      "/trade",
      "/spot",
      "/futures",
      "/wallet",
      "/kyc",
      "/history",
      "/alerts",
      "/inbox",
      "/settings",
      "/login",
      "/register",
      "/vip",
      "/prop",
      "/leaderboard",
      "/signals",
      "/ops",
      "/ops/users",
      "/ops/kyc",
      "/ops/cash",
      "/ops/payments",
      "/ops/trading",
      "/ops/markets",
    ],
    sourceLabel: "Private repo. Walkthrough on this page",
    demoNote:
      "Not deployed as public retail. The walkthrough uses the live desk at desktop width and on a phone screen. This is a client UAT cabin, not a licensed broker.",
  },
  {
    slug: "creovox",
    title: "Creovox",
    role: "Full-stack SaaS",
    year: "2026",
    summary:
      "Image and video generation platform with Google auth, credit subscriptions, generation pipelines, a character builder, gallery, and admin.",
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
      "Runs in demo mode with placeholders when Replicate is not configured.",
    ],
    screens: [
      {
        title: "Landing",
        path: "/",
        src: "/images/work/creovox-hero.png",
        alt: "Creovox product landing",
      },
      {
        title: "Pricing",
        path: "/pricing",
        src: "/images/work/creovox-pricing.png",
        alt: "Creovox credit pricing plans",
      },
      {
        title: "Sign in",
        path: "/login",
        src: "/images/work/creovox-login.png",
        alt: "Creovox Google sign-in",
      },
    ],
    sitemap: [
      "/",
      "/pricing",
      "/login",
      "/dashboard",
      "/generate/image",
      "/generate/video",
      "/gallery",
      "/characters",
      "/settings",
      "/admin",
    ],
    sourceLabel: "Private repo. Public pages captured locally",
    demoNote:
      "Auth-gated studio pages (generate, gallery, admin) sit behind Google sign-in. Public pages are captured here; remaining routes are listed in the sitemap.",
  },
  {
    slug: "barakah",
    title: "Barakah",
    role: "Commerce platform + admin",
    year: "2026",
    summary:
      "Custom luxury storefront and admin in one Next.js app: lookbook, collections, checkout, i18n, Redis-cached catalog. Not Shopify. Shopify-grade commerce, owned end to end.",
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
    screens: [
      {
        title: "Editorial home",
        path: "/en",
        src: "/images/work/barakah-hero.jpg",
        alt: "Barakah storefront hero",
      },
      {
        title: "Lookbook",
        path: "/en/collections",
        src: "/images/work/barakah-look.jpg",
        alt: "Barakah lookbook",
      },
      {
        title: "Campaign",
        path: "/en",
        src: "/images/work/barakah-hero-2.jpg",
        alt: "Barakah second hero campaign",
      },
      {
        title: "Atelier story",
        path: "/en/pages",
        src: "/images/work/barakah-atelier.jpg",
        alt: "Barakah atelier editorial",
      },
      {
        title: "Journal",
        path: "/en/blog",
        src: "/images/work/barakah-story.jpg",
        alt: "Barakah journal still",
      },
      {
        title: "Press",
        path: "/en/pages",
        src: "/images/work/barakah-press.jpg",
        alt: "Barakah press still",
      },
      {
        title: "Product",
        path: "/en/products/[slug]",
        src: "/images/work/barakah-product.jpg",
        alt: "Barakah product still",
      },
    ],
    sitemap: [
      "/en",
      "/en/collections/[slug]",
      "/en/products/[slug]",
      "/en/cart",
      "/en/checkout",
      "/en/search",
      "/en/blog",
      "/en/faq",
      "/en/contact",
      "/admin",
      "/admin/products",
      "/admin/orders",
      "/admin/inventory",
      "/admin/collections",
      "/admin/discounts",
      "/admin/customers",
      "/admin/content",
      "/admin/analytics",
    ],
    sourceLabel: "Private repo. Access on request",
    demoNote:
      "Storefront media is first-party. Admin is listed in the sitemap; live admin stays private.",
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
    screens: [
      {
        title: "Home",
        path: "/",
        src: "/images/work/dk-home.png",
        alt: "DK Enterprise factory-floor home",
      },
      {
        title: "Wholesale catalog",
        path: "/shop",
        src: "/images/work/dk-shop.png",
        alt: "DK wholesale catalog grid",
      },
      {
        title: "Product + sample order",
        path: "/shop/heavy-oversized-tshirt",
        src: "/images/work/dk-product.png",
        alt: "DK product detail and sample inquiry",
      },
      {
        title: "VIP pricing",
        path: "/vip",
        src: "/images/work/dk-vip.png",
        alt: "DK VIP wholesale application",
      },
      {
        title: "Fabric story",
        path: "/vip",
        src: "/images/work/dk-fabric.jpg",
        alt: "DK fabric comparison still",
      },
    ],
    sitemap: [
      "/",
      "/shop",
      "/shop/[slug]",
      "/vip",
      "/guides",
      "/guides/[slug]",
      "/about",
      "/contact",
      "/cart",
      "/checkout",
      "/login",
      "/register",
      "/admin/products",
    ],
    sourceLabel: "Private business repo. Full public pages on this site",
    demoNote:
      "Home, catalog, product, and VIP were captured from the running app. Admin remains private.",
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
      "Same mobile CSS layout on web and in the WebView. No double feature work.",
    ],
    screens: [
      {
        title: "Live desk",
        path: "/trade",
        src: "/images/work/aurex-desk.png",
        alt: "Desktop Aurex desk with the chart visible. This is the cabin the Android client loads.",
      },
      {
        title: "Phone screen",
        path: "Android WebView",
        src: "/images/work/aurex-mobile-desk.png",
        alt: "Phone screen of the Aurex desk, the layout shown inside the Android WebView.",
      },
    ],
    sitemap: [
      "Flutter cabin (cancelled, layout reference)",
      "Android WebView APK",
      "Desk URL override (debug)",
      "Play Store / TWA kit",
    ],
    sourceLabel: "Private mobile trees",
    demoNote:
      "The APK stays private. These captures are the cabin the WebView loads: the desktop desk and the same desk on a phone screen.",
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
    screens: [
      {
        title: "Custom lookbook",
        path: "Barakah /en",
        src: "/images/work/barakah-look.jpg",
        alt: "Custom commerce lookbook",
      },
      {
        title: "Wholesale catalog",
        path: "DK /shop",
        src: "/images/work/dk-shop.png",
        alt: "Wholesale catalog as commerce proof",
      },
      {
        title: "Product merchandising",
        path: "DK /shop/[slug]",
        src: "/images/work/dk-product.png",
        alt: "Product merchandising and sample order",
      },
      {
        title: "Editorial PDP media",
        path: "Barakah /products",
        src: "/images/work/barakah-product.jpg",
        alt: "Editorial product still",
      },
    ],
    sitemap: [
      "Storefront home",
      "Collections",
      "PDP",
      "Cart / checkout",
      "Admin merchandising",
      "Shopify Admin / Storefront APIs (when the merchant is on Shopify)",
    ],
    sourceLabel: "See Barakah and DK case studies",
    demoNote:
      "Shopify merchant dashboards stay private. Public proof is the custom commerce walkthroughs on this site.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function coverSrc(src: string) {
  const file = src.split("/").pop() ?? src;
  const base = file.replace(/\.(png|jpe?g|webp)$/i, "");
  return `/images/covers/${base}.jpg`;
}
