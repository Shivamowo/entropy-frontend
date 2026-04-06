"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

const courseOptions = [
  "JEE (Main + Advanced)",
  "NEET",
  "Foundation",
  "Crash Course",
  "Online Program",
];

export function CTAForm() {
  const mounted = useMounted();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-black/5 bg-[#FBF7F2] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-0 h-[440px] w-[440px] rounded-full bg-[#6D28D9]/14 blur-[120px]" />
        <div className="absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/18 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(109,40,217,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={false}
          whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D28D9]">
            Counselling · course selection · next steps
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-[#1F1A2B] sm:text-5xl lg:text-[3.1rem] lg:leading-[1.1]">
            Start your journey with confidence
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-[#4B445F] sm:text-xl">
            Share your details—our team will help you choose the right program and a realistic plan.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-12 overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-[0_24px_70px_-40px_rgba(31,26,43,0.35)] sm:p-0"
        >
          <div className="h-1 w-full bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C4B5FD]" />
          <div className="p-6 sm:p-10 lg:p-12">
          {status === "sent" ? (
            <p className="text-center text-xl font-extrabold text-[#1F1A2B]">
              Thank you—our team will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold tracking-wide text-[#1F1A2B]"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="As on ID / exam form"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base font-medium text-[#1F1A2B] outline-none transition focus:border-[#6D28D9]/40 focus:ring-4 focus:ring-[#6D28D9]/15"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold tracking-wide text-[#1F1A2B]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base font-medium text-[#1F1A2B] outline-none transition focus:border-[#6D28D9]/40 focus:ring-4 focus:ring-[#6D28D9]/15"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold tracking-wide text-[#1F1A2B]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 ..."
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base font-medium text-[#1F1A2B] outline-none transition focus:border-[#6D28D9]/40 focus:ring-4 focus:ring-[#6D28D9]/15"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="course" className="block text-sm font-semibold tracking-wide text-[#1F1A2B]">
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base font-semibold text-[#1F1A2B] outline-none transition focus:border-[#6D28D9]/40 focus:ring-4 focus:ring-[#6D28D9]/15"
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
              <motion.button
                type="submit"
                whileHover={{ y: -1, scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
                className="cta-pulse flex w-full min-h-[56px] items-center justify-center gap-3 rounded-xl bg-[#6D28D9] py-4 text-base font-bold text-white transition"
              >
                Request a callback
                <Send className="size-5" strokeWidth={2.25} />
              </motion.button>
              <p className="text-center text-xs font-medium text-[#6A6280]">
                Response within one working day.
              </p>
            </form>
          )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
