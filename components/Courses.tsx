"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    title: "JEE (Main + Advanced)",
    description:
      "Full-syllabus programs with problem-solving drills, DPPs, and All India test series aligned with latest patterns.",
    tags: ["Advanced"],
  },
  {
    title: "NEET",
    description:
      "Biology-forward pedagogy with NCERT mastery, physics-chemistry frameworks, and exam-style mocks for medical aspirants.",
    tags: ["Advanced"],
  },
  {
    title: "Foundation",
    description:
      "Early momentum for grades 8–10: conceptual clarity, Olympiad orientation, and habits that compound for JEE/NEET later.",
    tags: ["Beginner"],
  },
  {
    title: "Crash Courses",
    description:
      "High-intensity revision capsules—formula banks, rapid drills, and last-mile strategy for peak exam weeks.",
    tags: ["Crash"],
  },
  {
    title: "Online Programs",
    description:
      "Live classes, recorded backups, and digital doubt support—learn from anywhere without compromising rigour.",
    tags: ["Beginner", "Advanced"],
  },
];

export function Courses() {
  return (
    <section
      id="courses"
      className="border-b border-white/[0.12] bg-[#0F172A] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">Programs</p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Courses built for serious rankers
          </h2>
          <p className="mt-6 text-lg font-medium text-slate-400 sm:text-xl">
            Pick your track—expert faculty, structured content, and relentless practice. Same Entropy
            rigour, tailored to your goal.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative flex flex-col rounded-2xl border border-white/[0.12] bg-[#020617] p-7 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)] transition hover:border-[#FF6B00]/55 hover:shadow-[0_0_0_1px_rgba(255,107,0,0.25),0_28px_70px_-24px_rgba(255,107,0,0.2)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-extrabold leading-snug text-white sm:text-2xl">
                  {c.title}
                </h3>
                <ArrowUpRight className="size-6 shrink-0 text-slate-500 transition group-hover:text-[#FF6B00]" strokeWidth={2.5} />
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-slate-400">{c.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[#FF6B00]/40 bg-[#FF6B00]/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#FFC9A0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#FF6B00] py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_8px_28px_-8px_rgba(255,107,0,0.7)] transition hover:bg-[#ff7a1a] hover:shadow-[0_12px_36px_-6px_rgba(255,107,0,0.85)]"
              >
                Explore &amp; enroll
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
