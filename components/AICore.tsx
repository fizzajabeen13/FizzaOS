"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Orbit, Sparkles } from "lucide-react";

export default function AICore() {
  return (
    <div className="relative hidden h-[520px] items-center justify-center lg:flex">
      <div className="absolute h-[420px] w-[420px] rounded-full border border-blue-500/10" />
      <div className="absolute h-[320px] w-[320px] rounded-full border border-violet-500/10" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-slate-700/70"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-blue-500/30"
      />

      <motion.div
        animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card relative z-10 flex h-56 w-56 items-center justify-center rounded-full"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl" />

        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/30 bg-slate-950/80">
          <BrainCircuit size={54} className="text-blue-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card absolute right-10 top-16 flex items-center gap-3 px-4 py-3"
      >
        <Sparkles size={18} className="text-blue-400" />
        <span className="text-sm text-slate-300">AI Core Active</span>
      </motion.div>

      <motion.div
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card absolute bottom-20 left-8 flex items-center gap-3 px-4 py-3"
      >
        <Orbit size={18} className="text-violet-400" />
        <span className="text-sm text-slate-300">Neural Sync</span>
      </motion.div>
    </div>
  );
}