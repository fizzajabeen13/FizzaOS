"use client";

import { Send, Radio, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute bottom-16 left-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px] sm:bottom-20 sm:left-20 sm:h-80 sm:w-80 sm:blur-[130px]" />

      <div className="os-container relative z-10">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
            Contact Terminal
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-6xl">
            SEND TRANSMISSION
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Send project details, collaboration ideas, or remote work inquiries
            directly to FizzaOS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <Radio size={22} className="shrink-0 text-blue-400" />

              <h3 className="text-lg font-bold text-white sm:text-xl">
                Transmission Node
              </h3>
            </div>

            <div className="space-y-5 text-sm leading-6 text-slate-400">
              <p>
                Status:{" "}
                <span className="font-semibold text-blue-300">
                  Ready to receive
                </span>
              </p>

              <p>
                Channel:{" "}
                <span className="font-semibold text-slate-200">
                  Remote Projects
                </span>
              </p>

              <p>
                Response Mode:{" "}
                <span className="font-semibold text-slate-200">
                  Email Contact
                </span>
              </p>

              <p className="flex flex-wrap items-center gap-2 pt-3 text-slate-300">
                <Mail size={16} className="shrink-0 text-blue-400" />
                <span className="break-all">fizzajabeen13@gmail.com</span>
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/fizzajabeen13@gmail.com"
            method="POST"
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl sm:p-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New FizzaOS Transmission"
            />
            <input type="hidden" name="_next" value="/#contact" />

            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:tracking-[0.25em]">
                  Name
                </label>

                <input
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 sm:px-5"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:tracking-[0.25em]">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 sm:px-5"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:tracking-[0.25em]">
                  Project Details
                </label>

                <textarea
                  name="project_details"
                  required
                  rows={6}
                  placeholder="Describe your project, idea, or collaboration request..."
                  className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 sm:px-5"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
              >
                Transmit Message <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}