# Scout

Scout is a service marketplace MVP for connecting clients with skilled tradespeople and service providers. The product is built around:

- Post offers or service requests
- Browse trusted professionals
- Hire with escrow-backed payments
- Review completed work

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase (ready for DB/auth integration)

## Quick start

1. Install dependencies:
   npm install
2. Copy the environment file:
   cp .env.example .env.local
3. Add your Supabase credentials to `.env.local`
4. Run the app:
   npm run dev
5. Open `http://localhost:3000`

## Core pages

- Landing page
- Service browse page
- Providers page
- Dashboard page
- Supabase schema in `supabase/schema.sql`

## Business idea behind the app

Scout helps people hire reliable professionals for home services, skilled trades, repairs, and maintenance. It combines:

- a trust-first marketplace
- escrow protection for payments
- a simple workflow for posting jobs and hiring pros

## Next steps

- connect real Supabase auth
- add user profiles and job postings
- add Stripe for escrow/payment handling
- build messaging and booking flow
