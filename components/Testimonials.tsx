"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kabir Kadam",
    result: "JEE aspirant",
    quote:
      "The faculty here is exceptional—graduates from IITs with deep teaching experience. They invest in every student; I’m fortunate to learn at Entropy.",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Vivek",
    result: "Top 100 AIR mentors",
    quote:
      "Experienced mentors who’ve guided top JEE Advanced rankers. Teachers from premier IITs, and an environment where you can focus without worries.",
    image: "https://i.pravatar.cc/200?img=33",
  },
  {
    name: "Anubhav Kumar",
    result: "Result-focused prep",
    quote:
      "Best-in-class pedagogy with passionate faculty—content and experience that stands out from typical institutes.",
    image: "https://i.pravatar.cc/200?img=15",
  },
  {
    name: "Pushpam Kumar",
    result: "Holistic growth",
    quote:
      "Professional, subject-expert faculty who track both progress and wellbeing. Expecting outstanding results ahead.",
    image: "https://i.pravatar.cc/200?img=27",
  },
];

export function Testimonials() {
  return (
    <section
      id="results"
      className="border-b border-white/[0.12] bg-[#020617] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
            Results & voices
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by aspirants who play the long game
          </h2>
          <p className="mt-6 text-lg font-medium text-slate-400 sm:text-xl">
            Real feedback—focused prep, expert mentorship, and a culture that pushes you forward.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0F172A] p-8 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)]"
            >
              <Quote
                className="absolute right-6 top-6 size-12 text-[#FF6B00]/30"
                strokeWidth={1.5}
              />
              <div className="flex gap-5">
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-2xl border-2 border-[#FF6B00]/35 shadow-lg shadow-black/40">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 pt-1">
                  <figcaption className="font-[family-name:var(--font-poppins)] text-lg font-extrabold text-white">
                    {t.name}
                  </figcaption>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#FF6B00]">
                    {t.result}
                  </p>
                </div>
              </div>
              <blockquote className="relative mt-6 border-l-2 border-[#FF6B00]/40 pl-5 text-base font-medium leading-relaxed text-slate-300">
                “{t.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
