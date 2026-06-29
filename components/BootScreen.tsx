"use client";

import { useEffect, useState } from "react";

const bootLines = [
  "Initializing...",
  "Loading Developer Profile",
  "Loading AI Systems",
  "Loading Projects",
  "Loading Mission Archive",
  "System Online",
];

export default function BootScreen() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [hideBoot, setHideBoot] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 280);
    });

    setTimeout(() => {
      setHideBoot(true);
    }, 2000);
  }, []);

  if (hideBoot) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]">
      <div className="w-[90%] max-w-xl rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
        <h1 className="logo-text text-3xl font-bold text-white">
          FIZZA <span className="gradient-text">OS</span> v1.0
        </h1>

        <div className="mt-8 space-y-3">
          {visibleLines.map((line, index) => (
            <p
              key={index}
              className={`text-sm tracking-[0.2em] ${
                line === "System Online"
                  ? "text-blue-400"
                  : "text-slate-400"
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-8 h-1 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full animate-[boot_2s_ease-in-out_forwards] rounded-full bg-blue-500" />
        </div>
      </div>
    </div>
  );
}