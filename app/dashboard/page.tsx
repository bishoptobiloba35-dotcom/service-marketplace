import Link from 'next/link';

const stats = [
  { label: 'Open jobs', value: '12' },
  { label: 'Active offers', value: '7' },
  { label: 'Escrow balance', value: '$2,430' },
  { label: 'Rating', value: '4.9' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-black text-slate-950">Scout</Link>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <Link href="/browse">Browse</Link>
            <Link href="/providers">Pros</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Dashboard</p>
            <h1 className="mt-2 text-4xl font-black text-slate-950">Welcome back, Serena</h1>
          </div>
          <button className="rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-600">
            New request
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className="mt-3 text-3xl font-black text-slate-950">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Recent jobs</h2>
            <div className="mt-6 space-y-4">
              {[
                ['Kitchen remodel quote', 'Escrow funded', 'In progress'],
                ['Garage lighting install', 'Awaiting approval', 'Pending'],
                ['Apartment cleaning', 'Completed', 'Reviewed'],
              ].map(([title, status, state]) => (
                <div key={title} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="text-sm text-slate-500">{status}</div>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">
                    {state}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Escrow status</h2>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-5 text-white">
              <div className="text-sm text-brand-100">Protected amount</div>
              <div className="mt-2 text-3xl font-black">$1,450</div>
              <div className="mt-4 text-sm text-brand-100">Release milestone: after final walkthrough</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
