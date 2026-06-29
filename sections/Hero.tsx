import AICore from "@/components/AICore";
import RecruiterBar from "@/components/RecruiterBar";
import { ArrowRight, Cpu, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:pt-16 lg:pt-14"
    >
      <div className="absolute left-4 top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-[110px] sm:left-20 sm:top-32 sm:h-80 sm:w-80 sm:blur-[130px]" />
      <div className="absolute bottom-20 right-4 h-64 w-64 rounded-full bg-violet-500/20 blur-[120px] sm:right-24 sm:h-96 sm:w-96 sm:blur-[150px]" />

      <div className="os-container relative z-10 grid min-h-[calc(100vh-112px)] grid-cols-1 items-center gap-12 py-10 sm:py-14 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:py-16">
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 text-center text-xs text-slate-300 sm:px-5 sm:text-sm">
              <Cpu size={16} className="text-blue-400" />
              FIZZA OS v1.0 — SYSTEM ONLINE
            </div>

            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300 sm:px-5 sm:text-sm sm:tracking-[0.18em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for Remote Projects
            </div>
          </div>

          <h1 className="max-w-5xl text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
            FIZZA JABEEN
          </h1>

          <div className="mt-6 space-y-2 text-lg font-medium leading-7 text-slate-200 sm:mt-8 sm:text-xl md:text-2xl md:leading-8">
            <p>Full Stack Developer</p>
            <p>AI Integration Developer</p>
            <p>Future SaaS Builder</p>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
            Building intelligent software, AI-powered experiences, and scalable
            digital products.
          </p>

          <div className="mt-8 space-y-5 sm:mt-9">
            <RecruiterBar />

            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#missions"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
              >
                View Missions <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white sm:w-auto"
              >
                Contact Terminal <Terminal size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <AICore />
        </div>
      </div>
    </section>
  );
}