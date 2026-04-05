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
    <section className="relative border-b border-white/[0.12] bg-[#0F172A] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="section-divider-line pointer-events-none absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            Proof, not promises
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Numbers that hit different
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-400">
            Scale, experience, and grind—so you know you&apos;re not experimenting with your career.
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
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#020617] pl-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)]"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#FF6B00] to-red-600" />
              <div className="p-6 pl-7 pt-7">
                <div className="mb-5 inline-flex rounded-xl bg-[#FF6B00]/15 p-3.5 text-[#FF6B00] ring-1 ring-[#FF6B00]/40 transition group-hover:bg-[#FF6B00]/25">
                  <s.icon className="size-7" strokeWidth={2.25} />
                </div>
                <p className="font-[family-name:var(--font-poppins)] text-4xl font-black tracking-tight text-white lg:text-[2.75rem]">
                  {s.value}
                </p>
                <p className="mt-2 text-base font-bold text-white">{s.label}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{s.hint}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
