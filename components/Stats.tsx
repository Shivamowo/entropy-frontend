"use client";

import { animate, motion, useInView } from "framer-motion";
import { BookOpen, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMounted } from "@/hooks/useMounted";

const stats = [
  {
    icon: GraduationCap,
    value: 5000,
    suffix: "+",
    label: "Students trained",
    hint: "Across JEE, NEET & foundation",
  },
  {
    icon: Trophy,
    value: 200,
    suffix: "+",
    label: "Top selections",
    hint: "IITs, NITs & medical colleges",
  },
  {
    icon: Sparkles,
    value: 15,
    suffix: "+",
    label: "Years of excellence",
    hint: "Proven track record in Noida",
  },
  {
    icon: BookOpen,
    value: 50000,
    compact: true,
    suffix: "+",
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

function CountUp({
  value,
  suffix = "",
  compact = false,
}: {
  value: number;
  suffix?: string;
  compact?: boolean;
}) {
  const mounted = useMounted();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!mounted || !inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate(v) {
        const rounded = Math.round(v);
        setDisplay(
          compact && rounded >= 1000
            ? `${Math.round(rounded / 1000)}K`
            : rounded.toLocaleString("en-IN"),
        );
      },
    });
    return () => controls.stop();
  }, [compact, inView, mounted, value]);

  return (
    <span ref={ref}>
      {mounted ? display : "0"}
      {suffix}
    </span>
  );
}

export function Stats() {
  const mounted = useMounted();

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
          transition={{ duration: 0.6 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl p-[1px] shadow-[0_18px_45px_-28px_rgba(31,26,43,0.22)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/35 via-[#C4B5FD]/45 to-[#8B5CF6]/30 opacity-60" />
              <div className="relative rounded-[15px] bg-white p-7">
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-[15px] bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C4B5FD]" />
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-xl bg-[#6D28D9]/10 p-3 text-[#6D28D9] ring-1 ring-[#6D28D9]/15 transition group-hover:bg-[#6D28D9]/15 group-hover:scale-105">
                    <s.icon className="size-6" strokeWidth={2.25} />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold tracking-tight text-[#1F1A2B]">
                    <CountUp value={s.value} suffix={s.suffix} compact={s.compact} />
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#1F1A2B]">{s.label}</p>
                  <p className="mt-2 text-sm font-medium text-[#6A6280]">{s.hint}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
