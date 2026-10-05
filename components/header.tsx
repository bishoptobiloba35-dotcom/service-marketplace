import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-black text-white">
            S
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-950">Scout</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Trusted work</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/browse" className="hover:text-brand-600">Browse</Link>
          <Link href="/providers" className="hover:text-brand-600">Pros</Link>
          <Link href="/post-job" className="hover:text-brand-600">Post a job</Link>
          <Link href="/dashboard" className="hover:text-brand-600">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/post-job" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-600 md:inline-flex">
            Post a job
          </Link>
          <Link href="/login" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
