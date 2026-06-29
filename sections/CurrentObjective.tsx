"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Brain, Briefcase, Cpu } from "lucide-react";

const objectives = [
  {
    icon: Rocket,
    title: "Building AI-powered SaaS Products",
  },
  {
    icon: Cpu,
    title: "Mastering Full Stack Development",
  },
  {
    icon: Briefcase,
    title: "Seeking Remote Development Opportunities",
  },
  {
    icon: Brain,
    title: "Expanding AI Integration Expertise",
  },
];

export default function CurrentObjective() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="os-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Mission Focus
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-6xl">
            CURRENT OBJECTIVE
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            Current priorities actively being pursued inside FizzaOS.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <Target className="shrink-0 text-blue-400" size={22} />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.25em]">
              ACTIVE OBJECTIVES
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;

              return (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-blue-500/30 hover:bg-slate-900 sm:items-center sm:p-5"
                >
                  <div className="shrink-0 rounded-xl border border-slate-700 bg-slate-900 p-3">
                    <Icon size={20} className="text-blue-400" />
                  </div>

                  <span className="text-sm font-medium leading-6 text-slate-200 sm:text-base">
                    {objective.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}