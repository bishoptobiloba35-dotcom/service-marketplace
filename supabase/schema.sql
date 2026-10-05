-- This SQL file describes the suggested schema for a service marketplace.
-- It can be imported into Supabase SQL editor.

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text not null,
  role text not null default 'customer',
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  title text not null,
  description text not null,
  category text not null,
  price numeric not null default 0,
  location text,
  created_at timestamptz default now()
);

create table if not exists offers (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references profiles(id) on delete cascade,
  provider_id uuid references profiles(id) on delete cascade,
  service_id uuid references services(id) on delete cascade,
  status text not null default 'pending',
  amount numeric not null default 0,
  escrow_status text not null default 'pending',
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id) on delete cascade,
  reviewer_id uuid references profiles(id) on delete cascade,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamptz default now()
);

create index if not exists idx_services_category on services(category);
create index if not exists idx_offers_status on offers(status);
create index if not exists idx_profiles_role on profiles(role);
