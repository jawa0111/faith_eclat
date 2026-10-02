-- Faith Éclat — core commerce schema
-- Run this once in the Supabase SQL editor (or via `supabase db push`).

create extension if not exists "pgcrypto";

create type order_status as enum ('pending', 'paid', 'failed', 'cancelled', 'refunded');

create table if not exists products (
  id text primary key,
  name text not null,
  description text,
  weight_grams integer not null,
  price numeric(10, 2) not null,
  currency text not null default 'LKR',
  origin text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  payhere_order_id text unique not null,
  status order_status not null default 'pending',
  customer_name text not null,
  phone text not null,
  email text,
  address text not null,
  city text,
  product_id text not null references products (id),
  quantity integer not null check (quantity > 0),
  unit_price numeric(10, 2) not null,
  total_amount numeric(10, 2) not null,
  currency text not null default 'LKR',
  payhere_payment_id text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_status_idx on orders (status);
create index if not exists orders_created_at_idx on orders (created_at desc);

alter table products enable row level security;
alter table orders enable row level security;

-- Anyone can read the active product catalog.
create policy "Public can read active products"
  on products for select
  using (is_active = true);

-- Anyone can create an order (checkout is unauthenticated); only the
-- service role (used by the PayHere webhook) can read or update orders.
create policy "Public can create orders"
  on orders for insert
  with check (status = 'pending');

insert into products (id, name, description, weight_grams, price, currency, origin)
values ('glow-cream-20g', 'Glow Cream', 'Night-use glow cream imported from Pakistan.', 20, 2990, 'LKR', 'Pakistan')
on conflict (id) do nothing;
