"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const courseOptions = [
  "JEE (Main + Advanced)",
  "NEET",
  "Foundation",
  "Crash Course",
  "Online Program",
];

export function CTAForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-black/20 bg-gradient-to-br from-[#FF5500] via-[#FF6B00] to-[#C41E1E] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white/25 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-200/25 blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
            Next batch · limited seats
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Start your journey <span className="text-white drop-shadow-sm">today</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-white/95 sm:text-xl">
            Drop your details—we&apos;ll map the right program and call you back with a clear next
            step. No fluff.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-12 rounded-[1.5rem] border-4 border-black/20 bg-white p-6 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.55)] sm:p-10 lg:p-12"
        >
          {status === "sent" ? (
            <p className="text-center text-xl font-extrabold text-[#020617]">
              You&apos;re in. We&apos;ll contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-extrabold uppercase tracking-wide text-[#020617]">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="As on ID / exam form"
                    className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium text-[#020617] outline-none transition focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/25"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-extrabold uppercase tracking-wide text-[#020617]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium text-[#020617] outline-none transition focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/25"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-extrabold uppercase tracking-wide text-[#020617]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 ..."
                    className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium text-[#020617] outline-none transition focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/25"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="course" className="block text-sm font-extrabold uppercase tracking-wide text-[#020617]">
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-semibold text-[#020617] outline-none transition focus:border-[#FF6B00] focus:ring-4 focus:ring-[#FF6B00]/25"
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {courseOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full min-h-[60px] items-center justify-center gap-3 rounded-xl bg-[#020617] py-4 text-lg font-extrabold uppercase tracking-wide text-white shadow-[0_12px_40px_-8px_rgba(2,6,23,0.6)] transition hover:scale-[1.01] hover:bg-black hover:shadow-[0_16px_48px_-6px_rgba(2,6,23,0.75)]"
              >
                Request a callback
                <Send className="size-6" strokeWidth={2.5} />
              </button>
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                We respect your time—response within one working day.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
