"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/[0.12] bg-[#020617] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            About Entropy Classes
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Where learning is an{" "}
            <span className="text-[#FF6B00]">exciting, uncompromising</span> journey
          </h2>
          <p className="mt-8 text-lg font-medium leading-relaxed text-slate-300 sm:text-xl">
            Premium IIT JEE and NEET coaching in Noida—built for students who want structure,
            intensity, and mentors who&apos;ve lived the exam.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            Our faculty includes IITians and doctors committed to depth, not noise. We combine
            innovative methods with periodic evaluation and personalised care—so you grow fast and
            stay accountable.
          </p>
          <ul className="mt-10 space-y-4 border-l-2 border-[#FF6B00]/40 pl-6">
            {[
              "Doubt clearing & periodic evaluation",
              "Study material, library & mock tests",
              "Counselling, guidance & parent connect",
            ].map((t) => (
              <li key={t} className="text-base font-semibold text-slate-200 sm:text-lg">
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
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#FF6B00]/35 to-red-600/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border-2 border-white/[0.15] shadow-[0_32px_80px_-32px_rgba(0,0,0,0.95)]">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
              alt="Modern classroom and collaborative learning"
              width={640}
              height={480}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
