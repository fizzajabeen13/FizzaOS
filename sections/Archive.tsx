"use client";

import { motion } from "framer-motion";
import { archive } from "@/data/archive";
import { Clock3, Sparkles, ShieldCheck } from "lucide-react";

export default function Archive() {
  return (
    <section
      id="archive"
      className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[110px] sm:top-20 sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="os-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-14"
        >
          <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
                ARCHIVE LOG
              </p>

              <h2 className="max-w-4xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-6xl">
                ACCESSING FUTURE RECORDS...
              </h2>
            </div>

            <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:w-auto sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:tracking-[0.25em]">
                Archive Status
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
                <p className="text-sm font-semibold text-blue-300">
                  Records Verified
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="shrink-0 text-blue-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.25em]">
                TIMELINE STATUS:
              </p>
            </div>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              2035 ARCHIVE SNAPSHOT
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Historical records retrieved from FizzaOS. Displaying founder
              development timeline.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent sm:left-5" />

            <div className="space-y-6 sm:space-y-8">
              {archive.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                >
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 shadow-lg shadow-blue-500/20 sm:h-10 sm:w-10">
                    {index === archive.length - 1 ? (
                      <Sparkles size={16} className="text-violet-400 sm:size-[18px]" />
                    ) : (
                      <Clock3 size={16} className="text-blue-400 sm:size-[18px]" />
                    )}
                  </div>

                  <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl transition hover:border-blue-500/30 sm:p-6">
                    <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.3em]">
                        {item.year}
                      </p>

                      <span className="w-fit rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="break-words text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Archived inside FizzaOS as part of the future founder
                      timeline.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 pl-12 sm:mt-10 sm:pl-16">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 text-center sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm sm:tracking-[0.3em]">
                  END OF AVAILABLE RECORDS
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                  Additional archive entries remain classified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}