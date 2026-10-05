export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-black text-slate-950">Scout</div>
          <p className="mt-2 text-sm text-slate-600">Connecting skilled trade pros with people who need trusted work.</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-600">
          <a href="#" className="hover:text-brand-600">Privacy</a>
          <a href="#" className="hover:text-brand-600">Terms</a>
          <a href="#" className="hover:text-brand-600">Support</a>
          <a href="#" className="hover:text-brand-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
