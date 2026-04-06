"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-black/5 bg-[#F5F1EB] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="section-divider-line pointer-events-none absolute inset-x-0 top-0" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D28D9]">
            About Entropy Classes
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-[#1F1A2B] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            A high‑trust coaching experience—{" "}
            <span className="text-[#6D28D9]">structured</span>, steady, and personal
          </h2>
          <p className="mt-8 text-lg font-medium leading-relaxed text-[#3A3350] sm:text-xl">
            Premium IIT JEE and NEET coaching in Noida—built for students who want structure,
            intensity, and mentors who&apos;ve lived the exam.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#4B445F] sm:text-lg">
            Our faculty includes IITians and doctors committed to depth, not noise. We combine
            innovative methods with periodic evaluation and personalised care—so you grow fast and
            stay accountable.
          </p>
          <ul className="mt-10 space-y-4 border-l-2 border-[#6D28D9]/25 pl-6">
            {[
              "Doubt clearing & periodic evaluation",
              "Study material, library & mock tests",
              "Counselling, guidance & parent connect",
            ].map((t) => (
              <li key={t} className="text-base font-semibold text-[#1F1A2B] sm:text-lg">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#6D28D9]/18 to-[#A78BFA]/18 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_28px_80px_-44px_rgba(31,26,43,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
              alt="Modern classroom and collaborative learning"
              width={640}
              height={480}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
