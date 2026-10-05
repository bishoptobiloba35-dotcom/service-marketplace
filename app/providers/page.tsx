import Link from 'next/link';

const pros = [
  { name: 'Ava M.', specialty: 'General handyman', rate: '$45/hr', badge: 'Top rated' },
  { name: 'Noah T.', specialty: 'Painting & finishing', rate: '$60/hr', badge: 'Verified' },
  { name: 'Sofia L.', specialty: 'Interior cleaning', rate: '$35/hr', badge: 'Available today' },
  { name: 'Leo B.', specialty: 'Outdoor upgrades', rate: '$70/hr', badge: '5.0 rating' },
];

export default function ProvidersPage() {
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
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Service providers</p>
          <h1 className="mt-2 text-4xl font-black text-slate-950">Meet trusted pros in your area</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pros.map((pro) => (
            <article key={pro.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-lg font-black text-brand-700">
                {pro.name.charAt(0)}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-slate-950">{pro.name}</h2>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                  {pro.badge}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{pro.specialty}</p>
              <div className="mt-5 text-xl font-black text-slate-950">{pro.rate}</div>
              <button className="mt-5 w-full rounded-full bg-brand-500 px-4 py-2.5 font-semibold text-white hover:bg-brand-600">
                Hire now
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
