# Creovox (portfolio README)

Image and video SaaS: Google auth, Stripe credits, Replicate models, character builder, gallery, admin.

## Stack

Next.js, TypeScript, NextAuth, Prisma, Stripe, Replicate.

## Setup

```bash
cp .env.example .env
npm install
npm run db:push
npm run db:seed
npm run dev
```

Without `REPLICATE_API_TOKEN` the app runs in demo mode. Do not commit API keys or Stripe secrets.
