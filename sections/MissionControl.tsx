"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, Rocket, Cpu, Layers3 } from "lucide-react";

const stats = [
  {
    label: "Active Missions",
    value: 7,
    icon: Rocket,
    color: "text-blue-400",
  },
  {
    label: "Deployed Systems",
    value: 5,
    icon: Activity,
    color: "text-emerald-400",
  },
  {
    label: "Systems In Development",
    value: 2,
    icon: Layers3,
    color: "text-violet-400",
  },
  {
    label: "Core Modules Online",
    value: 4,
    icon: Cpu,
    color: "text-cyan-400",
  },
];

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{String(count).padStart(2, "0")}</span>;
}

export default function MissionControl() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px] sm:h-72 sm:w-72" />

      <div className="os-container relative z-10">
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Command Center
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            MISSION CONTROL
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Real-time overview of systems currently operating inside FizzaOS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_60px_rgba(59,130,246,0.12)] sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-2xl border border-slate-700 bg-slate-950 p-3">
                    <Icon size={22} className={stat.color} />
                  </div>

                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,1)]" />
                </div>

                <h3 className="text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                  <Counter value={stat.value} />
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}