"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

export function Hero() {
  const mounted = useMounted();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-black/5 bg-[#F5F1EB] px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[min(560px,55vh)] w-[min(560px,90vw)] rounded-full bg-[#6D28D9]/18 blur-[130px]" />
        <div className="absolute -left-36 bottom-[-40px] h-[460px] w-[460px] rounded-full bg-[#A78BFA]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-20%,rgba(109,40,217,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full border border-[#6D28D9]/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6D28D9] shadow-sm sm:text-xs"
          >
            Noida · JEE · NEET · NTSE
          </motion.p>

          <motion.h1
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 14 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-8 font-[family-name:var(--font-poppins)] text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1F1A2B] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            Crack JEE &amp; NEET with a{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
              calm, premium
            </span>{" "}
            coaching experience
          </motion.h1>

          <motion.p
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 12 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-[#3A3350] sm:text-xl"
          >
            Thoughtfully structured programs led by IITians and doctors—clear concepts, steady
            practice, and disciplined evaluation. Built to earn trust and deliver outcomes.
          </motion.p>

          <motion.div
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 12 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#6D28D9] px-10 py-4 text-base font-bold text-white shadow-[0_18px_40px_-26px_rgba(109,40,217,0.65)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_48px_-28px_rgba(109,40,217,0.7)]"
            >
              Book a free counselling call
            </a>
            <a
              href="#courses"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#6D28D9]/25 bg-white/70 px-10 py-4 text-base font-semibold text-[#1F1A2B] shadow-sm transition hover:bg-white hover:shadow-md"
            >
              View courses
            </a>
          </motion.div>

          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-sm font-medium text-[#6A6280]"
          >
            JEE Main 2024 · Unparalleled performance · Entropy Noida
          </motion.p>
        </div>

        <motion.div
          initial={false}
          animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-[#6D28D9]/18 via-[#A78BFA]/18 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_24px_70px_-40px_rgba(31,26,43,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="Students preparing for competitive exams"
              width={720}
              height={560}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A2B]/55 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/25 bg-white/75 p-5 backdrop-blur-md sm:p-6">
              <p className="font-[family-name:var(--font-poppins)] text-base font-extrabold text-[#1F1A2B] sm:text-lg">
                Mentorship you can trust.
              </p>
              <p className="mt-1 text-sm font-medium text-[#4B445F]">
                Structured classes, doubt support, and evaluation—delivered with calm clarity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
