"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { Activity, MapPin, Radio, User, BriefcaseBusiness } from "lucide-react";

const statusItems = [
  {
    label: "NAME",
    value: "Fizza Jabeen",
    icon: User,
  },
  {
    label: "ROLE",
    value: "Software Engineer",
    icon: BriefcaseBusiness,
  },
  {
    label: "CURRENT MISSION",
    value: "Building AI SaaS Products",
    icon: Activity,
  },
  {
    label: "STATUS",
    value: "Available for Projects",
    icon: Radio,
    highlight: true,
  },
  {
    label: "LOCATION",
    value: "Pakistan",
    icon: MapPin,
  },
];

export default function SystemStatus() {
  return (
    <section id="status" className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-28">
      <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px] sm:left-10 sm:top-20 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="os-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Diagnostics Panel
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-6xl">
            SYSTEM STATUS
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Developer identity, current mission, and availability running inside
            FizzaOS.
          </p>
        </motion.div>

        <GlassCard className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {statusItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-2xl border p-4 sm:p-5 ${
                    item.highlight
                      ? "border-blue-500/40 bg-blue-500/10"
                      : "border-slate-800 bg-slate-950/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 sm:h-10 sm:w-10">
                      <Icon
                        size={18}
                        className={
                          item.highlight ? "text-blue-400" : "text-slate-400"
                        }
                      />
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.25em]">
                      {item.label}
                    </p>
                  </div>

                  <p
                    className={`mt-4 break-words text-lg font-semibold sm:text-xl ${
                      item.highlight ? "text-blue-300" : "text-white"
                    }`}
                  >
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}