# Barakah (portfolio README)

Custom luxury storefront and admin in one Next.js app. Not Shopify. Editorial storefront, merchandising, checkout, and ops.

## Stack

Next.js, TypeScript, Prisma, PostgreSQL, Redis, next-intl, Docker, Nginx.

## Setup

PostgreSQL and Redis running, then:

```bash
cp .env.example .env
npm install
npx prisma db push
npm run db:seed
npm run dev
```

Change `AUTH_SECRET` and any seeded staff accounts before a public deploy. Do not commit `.env`.
