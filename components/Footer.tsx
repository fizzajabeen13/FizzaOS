export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-10 sm:py-12">
      <div className="os-container">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            FizzaOS v1.0
          </p>

          <div className="mt-6 space-y-3 text-sm leading-6 text-slate-400 sm:text-base">
            <p className="flex items-start gap-2">
              <span className="shrink-0 text-emerald-400">●</span>
              <span>System Online</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="shrink-0 text-blue-400">●</span>
              <span>Mission Archive Active</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="shrink-0 text-violet-400">●</span>
              <span>Developer Status: Building The Future</span>
            </p>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:text-xs sm:tracking-[0.25em]">
              END OF AVAILABLE RECORDS
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Additional archive entries remain classified.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}