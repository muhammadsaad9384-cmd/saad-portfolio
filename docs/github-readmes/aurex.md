# Aurex (portfolio README)

Multi-asset **demo trading desk** for client UAT: matching, cash desk, ops console, Android WebView client.

This is a demonstration UI and ops tool, not a licensed retail broker.

## Stack

Next.js, TypeScript, Prisma, PostgreSQL, Docker, Android WebView. Flutter cabin exists as a cancelled layout reference.

## Setup (local)

PostgreSQL via Docker, then:

```bash
docker compose up -d db
cp .env.example .env
npm install
npx prisma db push
npm run db:seed
npm run dev
```

Do not publish real credentials, payment rails, or KYC documents.
