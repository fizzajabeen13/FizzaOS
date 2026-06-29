"use client";

import { useState } from "react";
import {
  Briefcase,
  Code2,
  Download,
  Mail,
  Rocket,
  X,
  Check,
} from "lucide-react";

export default function RecruiterMode() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const links = [
    {
      label: "Download Resume",
      href: "/Fizza-Jabeen-Resume.pdf",
      icon: Download,
      download: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fizza-jabeen-13ch",
      icon: Briefcase,
    },
    {
      label: "GitHub",
      href: "https://github.com/fizzajabeen13",
      icon: Code2,
    },
    {
      label: "Projects",
      href: "#missions",
      icon: Rocket,
    },
  ];

  const copyEmail = async () => {
    await navigator.clipboard.writeText("fizzajabeen13@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <>
      <button
      onClick={() => setOpen(true)}
      className="fixed top-24 right-6 z-50 rounded-full border border-blue-500/40 bg-slate-950/80 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-300 shadow-2xl shadow-blue-500/20 backdrop-blur-xl transition hover:bg-blue-500 hover:text-white"
      >
        Recruiter Mode
      </button>

      {open && (
        <div className="fixed inset-0 z-[9997] flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm sm:items-start sm:justify-end sm:p-6">
          <div className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-3xl border border-slate-800 bg-[#081421]/95 p-4 shadow-2xl shadow-blue-500/20 backdrop-blur-2xl sm:mt-14 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-xs sm:tracking-[0.3em]">
                  Recruiter Mode
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Quick Access
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-400">
                  Essential links for recruiters and clients.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full border border-slate-700 p-2 text-slate-400 transition hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.25em]">
                Current Status
              </p>

              <p className="mt-2 text-sm font-semibold text-emerald-300">
                ● Available for Remote Projects
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-slate-500">Missions</p>
                  <p className="mt-1 font-bold text-white">07</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-slate-500">Deployed</p>
                  <p className="mt-1 font-bold text-white">05</p>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download={link.download}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Icon size={18} className="shrink-0 text-blue-400" />
                      <span className="truncate">{link.label}</span>
                    </span>

                    <span className="shrink-0 text-slate-600">↗</span>
                  </a>
                );
              })}

              <button
                type="button"
                onClick={copyEmail}
                className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
              >
                <span className="flex min-w-0 items-center gap-3">
                  {copied ? (
                    <Check size={18} className="shrink-0 text-emerald-400" />
                  ) : (
                    <Mail size={18} className="shrink-0 text-blue-400" />
                  )}

                  <span className="truncate">
                    {copied ? "Email Copied" : "Copy Email"}
                  </span>
                </span>

                <span className="shrink-0 text-slate-600">
                  {copied ? "✓" : "↗"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}