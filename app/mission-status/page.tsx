"use client";

import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, CheckCircle2, Clock, Circle, Rocket } from "lucide-react";
import { useSearchParams } from "next/navigation";

const projects = {
  "smartconnect-ai": {
    title: "SmartConnect AI",
    status: "ACTIVE DEVELOPMENT",
    progress: 80,
    message:
      "Building an AI-powered communication platform designed to streamline client interactions, lead management, and intelligent workflows.",
    currentPhase: "Integrating backend services and AI features.",
    quote:
      "This mission is actively under development. Full demo and case study will be available soon.",
    logs: [
      { text: "Requirements Analysis", status: "done" },
      { text: "System Architecture", status: "done" },
      { text: "UI/UX Design", status: "done" },
      { text: "Frontend Development", status: "done" },
      { text: "Backend Development", status: "active" },
      { text: "AI Integration", status: "active" },
      { text: "Authentication & Database", status: "pending" },
      { text: "Testing & Optimization", status: "pending" },
      { text: "Production Deployment", status: "pending" },
    ],
  },

  "book-portfolio": {
    title: "Book Portfolio",
    status: "ACTIVE DEVELOPMENT",
    progress: 70,
    message:
      "A premium portfolio experience presented through an interactive digital book with immersive page transitions.",
    currentPhase: "Building responsive layouts and interactive book animations.",
    quote:
      "Every great story deserves a beautiful cover. This one is still being written.",
    logs: [
      { text: "Concept & Planning", status: "done" },
      { text: "UI Design", status: "done" },
      { text: "Page Structure", status: "done" },
      { text: "Animations", status: "done" },
      { text: "Responsive Development", status: "active" },
      { text: "CMS Integration", status: "pending" },
      { text: "Performance Optimization", status: "pending" },
      { text: "Final Testing", status: "pending" },
      { text: "Deployment", status: "pending" },
    ],
  },

  "technova-v2": {
    title: "TechNova V2",
    status: "ACTIVE DEVELOPMENT",
    progress: 60,
    message:
      "TechNova V2 is a complete rebuild of the original TechNova into a modern full-stack e-commerce platform with a powerful admin dashboard, authentication, order management, wishlist, AI features, and scalable architecture.",
    currentPhase:
      "Developing backend APIs, authentication, admin dashboard, and database integration.",
    quote:
      "The next generation of TechNova is under construction. Bigger, smarter, and faster than ever.",
    logs: [
      { text: "Project Planning & Requirements", status: "done" },
      { text: "UI/UX Redesign", status: "done" },
      { text: "Frontend Development", status: "done" },
      { text: "Authentication System", status: "active" },
      { text: "Admin Dashboard", status: "active" },
      { text: "Database Integration", status: "active" },
      { text: "Order Management", status: "pending" },
      { text: "Payment Integration", status: "pending" },
      { text: "AI Shopping Assistant", status: "pending" },
      { text: "Testing & Optimization", status: "pending" },
      { text: "Production Deployment", status: "pending" },
    ],
  },
} as const;

type ProjectKey = keyof typeof projects;

function MissionStatusContent() {
  const searchParams = useSearchParams();
  const selectedProject = searchParams.get("project") as ProjectKey | null;

  const project =
    selectedProject && selectedProject in projects
      ? projects[selectedProject]
      : projects["smartconnect-ai"];

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-12 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/#missions"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
        >
          <ArrowLeft size={16} />
          Back to Missions
        </Link>

        <div className="rounded-[2rem] border border-slate-800 bg-[#0F172A]/90 p-6 shadow-2xl shadow-blue-950/20 md:p-10">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
                Mission Status
              </p>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                {project.title}
              </h1>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                <Clock size={16} />
                {project.status}
              </div>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
              <Rocket size={36} />
            </div>
          </div>

          <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              System Message
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              {project.message}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h2 className="mb-5 text-xl font-black text-white">
                Mission Log
              </h2>

              <div className="space-y-4">
                {project.logs.map((log) => (
                  <div
                    key={log.text}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                  >
                    {log.status === "done" && (
                      <CheckCircle2 className="text-green-400" size={20} />
                    )}

                    {log.status === "active" && (
                      <Clock className="text-yellow-300" size={20} />
                    )}

                    {log.status === "pending" && (
                      <Circle className="text-slate-500" size={20} />
                    )}

                    <span
                      className={
                        log.status === "pending"
                          ? "font-semibold text-slate-500"
                          : "font-semibold text-slate-200"
                      }
                    >
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                  Current Phase
                </p>
                <p className="text-slate-300">{project.currentPhase}</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                    Mission Progress
                  </p>
                  <span className="font-black text-blue-400">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                  Estimated Release
                </p>
                <p className="text-2xl font-black text-white">COMING SOON</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm leading-relaxed text-slate-400">
                  “{project.quote}”
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-black/40 p-5 font-mono text-sm text-green-400">
            <p>&gt; Initializing modules...</p>
            <p>&gt; Connecting AI services...</p>
            <p>&gt; Compiling assets...</p>
            <p>&gt; No critical errors detected.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function MissionStatusPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#030712] text-slate-100">
          <p className="font-mono text-sm text-blue-400">
            Loading mission status...
          </p>
        </main>
      }
    >
      <MissionStatusContent />
    </Suspense>
  );
}