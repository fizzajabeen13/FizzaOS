"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Status", href: "#status" },
  { label: "Missions", href: "#missions" },
  { label: "Modules", href: "#modules" },
  { label: "Archive", href: "#archive" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-full border border-white/10 bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
      <nav className="relative flex h-14 items-center justify-between px-4 md:h-16 md:px-8">
        <a href="#home" className="logo-text text-lg font-bold text-slate-100 md:text-xl">
          Fizza<span className="gradient-text">OS</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Fizza-Jabeen-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-2 text-xs font-semibold text-blue-300 backdrop-blur-xl transition hover:bg-blue-500 hover:text-white md:px-5 md:py-2.5 md:text-sm"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="absolute left-0 top-[calc(100%+12px)] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#081421]/95 p-3 shadow-2xl shadow-blue-500/20 backdrop-blur-2xl md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}