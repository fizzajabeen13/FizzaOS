"use client";

import { motion } from "framer-motion";
import { missions } from "@/data/missions";
import { ArrowUpRight, MonitorPlay } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Missions() {
  return (
    <section
      id="missions"
      className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-violet-500/10 blur-[110px] sm:right-10 sm:top-20 sm:h-80 sm:w-80 sm:blur-[130px]" />

      <div className="os-container relative z-10">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Project Missions
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-6xl">
            ACTIVE MISSIONS
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Selected systems built as deployed products, active experiments, and
            future SaaS foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {missions.map((mission, index) => (
            <motion.article
              key={mission.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="relative h-40 overflow-hidden border-b border-slate-800 bg-slate-950/70 sm:h-52">
                <ScreenshotSlider
                  name={mission.name}
                  images={mission.screenshots || [mission.screenshot]}
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:tracking-[0.25em]">
                    {mission.code}
                  </p>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.16em] sm:text-xs sm:tracking-[0.18em] ${
                      mission.status === "ACTIVE"
                        ? "bg-blue-500/10 text-blue-300"
                        : mission.status === "DEPLOYED"
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "bg-violet-500/10 text-violet-300"
                    }`}
                  >
                    {mission.status}
                  </span>
                </div>

                <h3 className="break-words text-xl font-bold leading-tight text-white sm:text-2xl">
                  {mission.name}
                </h3>

                <div className="mt-5 space-y-5 sm:mt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:tracking-[0.25em]">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {mission.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:tracking-[0.25em]">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {mission.solution}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:tracking-[0.25em]">
                      Tech Stack
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {mission.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={mission.demo}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
                  >
                    Demo <MonitorPlay size={16} />
                  </a>

                  <a
                    href={`/mission/${mission.slug}`}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-400 transition group-hover:text-blue-300 sm:ml-auto"
                  >
                    Open Case Study <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotSlider({
  images,
  name,
}: {
  images: readonly string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-40 overflow-hidden border-b border-slate-800 bg-slate-950/70 sm:h-52">
      <Image
        src={images[active]}
        alt={`${name} screenshot`}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/70 px-3 py-2 backdrop-blur-xl">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-5 bg-blue-400" : "w-1.5 bg-slate-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}