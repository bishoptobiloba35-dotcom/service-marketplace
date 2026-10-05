import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { categories, featuredPros, trustSignals } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Scout
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Hire trusted pros for the work that matters.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Post offers, discover vetted tradespeople, and hire with escrow for secure payments and peace of mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/browse" className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600">
                Browse services
              </Link>
              <Link href="/providers" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-600">
                Become a pro
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="block text-2xl font-bold text-slate-950">12k+</span>
                <span>jobs completed</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-950">4.9/5</span>
                <span>average rating</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-950">24/7</span>
                <span>secure escrow</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Live marketplace</p>
                    <p className="mt-2 text-2xl font-bold">$128,420</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">
                    +18.6%
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {['Plumbing', 'Electrical', 'Cleaning', 'Landscaping'].map((service, index) => (
                    <div key={service} className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
                      <div>
                        <p className="font-medium">{service}</p>
                        <p className="text-xs text-slate-300">{index + 2} pros available</p>
                      </div>
                      <span className="text-lg text-emerald-300">●</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-gradient-to-r from-brand-500 to-brand-700 p-5 text-white">
                <p className="text-sm text-brand-100">Escrow protection</p>
                <p className="mt-1 text-xl font-bold">Payment held until the job is done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {trustSignals.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-black text-brand-600">{item.value}</div>
              <div className="mt-2 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Popular categories</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Find the right pro for every job</h2>
          </div>
          <Link href="/browse" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all services →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl">{category.icon}</div>
              <h3 className="text-xl font-bold text-slate-950">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              <div className="mt-5 text-sm font-semibold text-brand-600">{category.count} pros</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Why Scout users choose us</p>
            <h2 className="mt-3 text-3xl font-black">Security, trust, and clear outcomes.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 text-3xl">🔒</div>
              <h3 className="text-xl font-bold">Escrow-backed payments</h3>
              <p className="mt-3 text-sm text-slate-300">Funds are held securely until work is approved, reducing risk for both sides.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 text-3xl">✅</div>
              <h3 className="text-xl font-bold">Verified professionals</h3>
              <p className="mt-3 text-sm text-slate-300">Profiles include experience, references, and skills so clients can decide with confidence.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="text-xl font-bold">Fast hiring</h3>
              <p className="mt-3 text-sm text-slate-300">Post offers, compare quotes, and move from request to approval in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Featured pros</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Top-rated professionals near you</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredPros.map((pro) => (
            <article key={pro.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-300 text-lg font-bold text-brand-700">
                    {pro.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{pro.name}</h3>
                    <p className="text-sm text-slate-500">{pro.service}</p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-600">★ {pro.rating}</span>
              </div>

              <p className="mt-4 text-sm text-slate-600">{pro.bio}</p>

              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <span>{pro.jobs} jobs</span>
                <span>From ${pro.rate}</span>
              </div>

              <button className="mt-6 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700">
                View profile
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-brand-500 to-brand-700 p-8 text-center text-white shadow-soft md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Ready to get started?</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Post an offer or find a trusted pro today.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/browse" className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">
              Explore services
            </Link>
            <Link href="/dashboard" className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Open dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
