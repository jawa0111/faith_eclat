# Faith Éclat

Product site for Faith Éclat's Glow Cream — Next.js (App Router) + Tailwind CSS. Customers view
the product and order over WhatsApp; online payments come later once the business registration
is in place (see below).

## Stack

- **Next.js 16** (App Router, TypeScript) — pages
- **Tailwind CSS v4** — styling, using the brand's cream / gold / sage / rose tokens in `app/globals.css`
- **Supabase (Postgres) + PayHere** — prepared but not wired in yet (see "Turning on payments")

## Local setup

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. Nothing else to configure — WhatsApp ordering works out
of the box via `lib/site-config.ts` (brand WhatsApp number and email).

## Turning on payments later

Once the Business Registration is through and you can open a PayHere merchant account, this
project already has the online-payment layer designed — it's just not connected to any live
routes right now, so there's nothing half-working for customers to stumble into.

- `lib/payhere.ts` — PayHere hash generation and webhook signature verification
- `lib/supabase/server.ts` — server-side Supabase client (service role)
- `supabase/schema.sql` — `products` / `orders` tables with row-level security, ready to run in
  Supabase's SQL editor
- `.env.example` — the env vars this layer needs (`NEXT_PUBLIC_SUPABASE_URL`,
  `SUPABASE_SERVICE_ROLE_KEY`, `PAYHERE_MERCHANT_ID`, `PAYHERE_MERCHANT_SECRET`, etc.)

To re-enable checkout, add back `app/checkout/page.tsx` (a delivery-details form), an
`app/api/checkout/route.ts` that inserts a `pending` order via `createServiceClient()` and
returns a signed PayHere payment request from `buildPayhereHash()`, and
`app/api/payhere/notify/route.ts` to verify PayHere's webhook with `verifyPayhereNotification()`
and mark the order paid. Ask for this build-out when you're ready — the design and data model are
already settled, so it's a quick follow-up rather than a redesign.

## Project structure

```
app/                  routes (currently just the homepage)
components/           UI sections (hero, product, routine, safety, footer, etc.)
lib/                  site config, plus the dormant PayHere + Supabase helpers above
supabase/schema.sql   database schema for when payments turn on
reference/index.html  the original single-file artifact version of this site
```

## Adding more products later

The schema already supports multiple products (`products` table, `orders.product_id` foreign
key) — `lib/site-config.ts` currently hardcodes the single Glow Cream product for simplicity.
When a second product launches, move the catalog into Supabase and fetch it in `app/page.tsx`
instead of importing the static constant.
