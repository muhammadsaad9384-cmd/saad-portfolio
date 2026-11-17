# Saad Bakshi — portfolio

English portfolio for Europe-facing product engineering roles. Case studies come from Cursor-built products (Aurex, Creovox, Barakah, DK Enterprise, Flutter/Android, Shopify-grade commerce). Product apps do not need to be on a public domain; this site is the live URL.

## Run

```bash
npm install
cp .env.example .env.local
# optional: NEXT_PUBLIC_EMAIL, NEXT_PUBLIC_GITHUB, NEXT_PUBLIC_LINKEDIN
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Vercel (or any Next.js host):

```bash
npx vercel
```

## Public GitHub

This repository is meant to be public. Other product repos should be sanitized before they go public:

- Never commit `.env`, keys, or demo passwords
- Frame Aurex as a **demo trading UI / ops desk**, not a licensed broker
- Prefer screenshots and architecture notes over live KYC or payments

Sanitized README drafts live in [docs/github-readmes](docs/github-readmes).
