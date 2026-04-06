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
      className="border-b border-black/5 bg-[#FBF7F2] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D28D9]">Programs</p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-[#1F1A2B] sm:text-4xl lg:text-5xl">
            Courses built for serious rankers
          </h2>
          <p className="mt-6 text-lg font-medium text-[#4B445F] sm:text-xl">
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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_18px_45px_-28px_rgba(31,26,43,0.22)] transition hover:shadow-[0_26px_64px_-38px_rgba(31,26,43,0.3)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C4B5FD]" />
              <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-[#A78BFA]/25 blur-3xl transition-opacity group-hover:opacity-90" />

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-extrabold leading-snug text-[#1F1A2B] sm:text-2xl">
                  {c.title}
                </h3>
                <ArrowUpRight
                  className="size-6 shrink-0 text-[#6A6280] transition group-hover:text-[#6D28D9]"
                  strokeWidth={2.5}
                />
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-[#4B445F]">{c.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#6D28D9]/15 bg-[#6D28D9]/5 px-3 py-1 text-xs font-semibold tracking-wide text-[#6D28D9]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#6D28D9] py-3.5 text-sm font-bold text-white shadow-[0_16px_34px_-22px_rgba(109,40,217,0.6)] transition hover:translate-y-[-1px] hover:shadow-[0_20px_42px_-26px_rgba(109,40,217,0.65)]"
              >
                Explore
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
