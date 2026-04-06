"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Sparkles, Trophy } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "5,000+",
    label: "Students trained",
    hint: "Across JEE, NEET & foundation",
  },
  {
    icon: Trophy,
    value: "200+",
    label: "Top selections",
    hint: "IITs, NITs & medical colleges",
  },
  {
    icon: Sparkles,
    value: "15+",
    label: "Years of excellence",
    hint: "Proven track record in Noida",
  },
  {
    icon: BookOpen,
    value: "50K+",
    label: "Problem sets solved",
    hint: "Structured practice & mocks",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Stats() {
  return (
    <section className="relative border-b border-black/5 bg-[#FBF7F2] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="section-divider-line pointer-events-none absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D28D9]">
            Trusted outcomes
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-[#1F1A2B] sm:text-4xl lg:text-5xl">
            Numbers that build confidence
          </h2>
          <p className="mt-4 text-lg font-medium text-[#4B445F]">
            A steady track record—so you feel secure about your preparation journey.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_18px_45px_-28px_rgba(31,26,43,0.22)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C4B5FD]" />
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-xl bg-[#6D28D9]/10 p-3 text-[#6D28D9] ring-1 ring-[#6D28D9]/15 transition group-hover:bg-[#6D28D9]/15">
                  <s.icon className="size-6" strokeWidth={2.25} />
                </div>
              </div>
              <div className="mt-6">
                <p className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold tracking-tight text-[#1F1A2B]">
                  {s.value}
                </p>
                <p className="mt-2 text-base font-semibold text-[#1F1A2B]">{s.label}</p>
                <p className="mt-2 text-sm font-medium text-[#6A6280]">{s.hint}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
