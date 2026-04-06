"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

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
  const mounted = useMounted();

  return (
    <section
      id="results"
      className="border-b border-black/5 bg-[#F5F1EB] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D28D9]">
            Results & voices
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-[#1F1A2B] sm:text-4xl lg:text-5xl">
            Trusted by aspirants who play the long game
          </h2>
          <p className="mt-6 text-lg font-medium text-[#4B445F] sm:text-xl">
            Trust comes from consistency: clear teaching, patient support, and honest evaluation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={false}
              whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/55 p-8 shadow-[0_18px_45px_-28px_rgba(31,26,43,0.22)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ffffff]/60 via-white/25 to-[#C4B5FD]/25" />
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[#A78BFA]/20 blur-3xl" />
              <Quote
                className="absolute right-6 top-6 size-12 text-[#6D28D9]/18"
                strokeWidth={1.5}
              />
              <div className="relative flex gap-5">
                <div className="relative size-[72px] shrink-0 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 pt-1">
                  <figcaption className="font-[family-name:var(--font-poppins)] text-lg font-extrabold text-[#1F1A2B]">
                    {t.name}
                  </figcaption>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-[#6D28D9]">
                    {t.result}
                  </p>
                </div>
              </div>
              <blockquote className="relative mt-6 border-l-2 border-[#6D28D9]/20 pl-5 text-base font-medium leading-relaxed text-[#3A3350]">
                “{t.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
