create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null,
  role text not null default 'customer',
  avatar_url text,
  bio text,
  rating numeric default 5.0,
  total_jobs integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  category text not null,
  description text not null,
  budget numeric not null,
  location text not null,
  status text default 'open',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists offers (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references jobs(id) on delete cascade,
  provider_id uuid not null references profiles(id) on delete cascade,
  customer_id uuid not null references profiles(id) on delete cascade,
  amount numeric not null,
  message text,
  status text default 'pending',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists escrow_payments (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references jobs(id) on delete cascade,
  customer_id uuid not null references profiles(id) on delete cascade,
  provider_id uuid references profiles(id) on delete set null,
  amount numeric not null,
  status text default 'pending',
  stripe_payment_intent text,
  created_at timestamptz default now(),
  released_at timestamptz,
  updated_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references jobs(id) on delete cascade,
  reviewer_id uuid not null references profiles(id) on delete cascade,
  provider_id uuid not null references profiles(id) on delete cascade,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references jobs(id) on delete cascade,
  sender_id uuid not null references profiles(id) on delete cascade,
  recipient_id uuid not null references profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);

create index if not exists idx_jobs_customer on jobs(customer_id);
create index if not exists idx_jobs_status on jobs(status);
create index if not exists idx_jobs_category on jobs(category);
create index if not exists idx_offers_job on offers(job_id);
create index if not exists idx_offers_provider on offers(provider_id);
create index if not exists idx_offers_status on offers(status);
create index if not exists idx_escrow_job on escrow_payments(job_id);
create index if not exists idx_escrow_status on escrow_payments(status);
create index if not exists idx_messages_job on messages(job_id);

alter table profiles enable row level security;
alter table jobs enable row level security;
alter table offers enable row level security;
alter table escrow_payments enable row level security;
alter table reviews enable row level security;
alter table messages enable row level security;

create policy "Profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Jobs are viewable by everyone" on jobs for select using (true);
create policy "Users can create jobs" on jobs for insert with check (auth.uid() = customer_id);
create policy "Users can update own jobs" on jobs for update using (auth.uid() = customer_id);
create policy "Offers are viewable by involved parties" on offers for select using (auth.uid() = provider_id or auth.uid() = customer_id);
create policy "Providers can create offers" on offers for insert with check (auth.uid() = provider_id);
create policy "Escrow visible to involved parties" on escrow_payments for select using (auth.uid() = customer_id or auth.uid() = provider_id);
create policy "Customers can create escrow" on escrow_payments for insert with check (auth.uid() = customer_id);
