"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.12] bg-[#020617] px-4 pb-24 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-36 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[min(520px,50vh)] w-[min(520px,90vw)] rounded-full bg-[#FF6B00]/35 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-red-600/25 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,107,0,0.18),transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full border border-[#FF6B00]/50 bg-[#FF6B00]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFB86C] sm:text-xs"
          >
            Noida · JEE · NEET · NTSE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-8 font-[family-name:var(--font-poppins)] text-[2.125rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            Crack JEE &amp; NEET with{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-red-500 bg-clip-text text-transparent">
              India’s most result‑driven
            </span>{" "}
            coaching
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-300 sm:text-xl"
          >
            IITians &amp; doctors. Brutal discipline on mocks. Doubt support that doesn’t sleep on
            your weak topics—built for rankers, not excuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#FF6B00] px-10 py-4 text-base font-extrabold tracking-wide text-white shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_8px_40px_-8px_rgba(255,107,0,0.75)] transition hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_48px_-6px_rgba(255,107,0,0.9)]"
            >
              Start learning — enroll
            </a>
            <a
              href="#courses"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white/20 bg-white/[0.04] px-10 py-4 text-base font-bold text-white backdrop-blur transition hover:border-[#FF6B00]/60 hover:bg-white/[0.08]"
            >
              View courses
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-sm font-medium text-slate-500"
          >
            JEE Main 2024 · Unparalleled performance · Entropy Noida
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-[#FF6B00]/40 via-transparent to-red-600/30 opacity-90 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border-2 border-white/15 bg-[#0f172a] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="Students preparing for competitive exams"
              width={720}
              height={560}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#020617]/95 p-5 backdrop-blur-md sm:p-6">
              <p className="font-[family-name:var(--font-poppins)] text-base font-extrabold text-white sm:text-lg">
                Rank‑focused. Data‑backed. Relentless.
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Programs engineered for selection—not just syllabus completion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
