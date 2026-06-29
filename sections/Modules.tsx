"use client";

import { motion } from "framer-motion";
import { modules } from "@/data/modules";
import {
  CheckCircle2,
  Cpu,
  Database,
  BrainCircuit,
  Server,
} from "lucide-react";

export default function Modules() {
  const icons = [Cpu, Server, BrainCircuit, Database];

  return (
    <section
      id="modules"
      className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-28"
    >
      <div className="os-container relative z-10">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            System Components
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-6xl">
            ACTIVE MODULES
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Core technologies currently powering development inside FizzaOS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {modules.map((module, index) => {
            const Icon = icons[index] || Cpu;

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl transition hover:border-blue-500/30 sm:p-6"
              >
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-2xl border border-slate-700 bg-slate-950 p-3">
                      <Icon size={22} className="text-blue-400" />
                    </div>

                    <div>
                      <h3 className="break-words text-lg font-bold text-white sm:text-xl">
                        {module.title}
                      </h3>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.25em]">
                        System Component
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-emerald-300 sm:text-xs sm:tracking-[0.2em]">
                    {module.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {module.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-3 sm:px-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-400"
                      />

                      <span className="break-words text-sm leading-6 text-slate-300 sm:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}