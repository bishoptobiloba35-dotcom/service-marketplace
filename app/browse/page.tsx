import Link from 'next/link';

const jobs = [
  { title: 'Need a plumber for kitchen sink repair', budget: '$120', location: 'Brooklyn, NY', posted: '2h ago' },
  { title: 'Looking for reliable electrician for panel upgrade', budget: '$350', location: 'Austin, TX', posted: '5h ago' },
  { title: 'Home cleaning for 2-bedroom apartment', budget: '$90', location: 'Chicago, IL', posted: '1d ago' },
  { title: 'Install a fence and replace gate', budget: '$500', location: 'Miami, FL', posted: '2d ago' },
];

export default function BrowsePage() {
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
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Marketplace</p>
            <h1 className="mt-2 text-4xl font-black text-slate-950">Browse active service requests</h1>
          </div>
          <button className="rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-600">
            Post an offer
          </button>
        </div>

        <div className="grid gap-5">
          {jobs.map((job) => (
            <article key={job.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">{job.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.posted}</span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <div className="text-lg font-bold text-brand-600">{job.budget}</div>
                  <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-brand-500 hover:text-brand-600">
                    Send offer
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
