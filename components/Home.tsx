"use client";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { About } from "./About";
import { Courses } from "./Courses";
import { Testimonials } from "./Testimonials";
import { CTAForm } from "./CTAForm";
import { Footer } from "./Footer";
import { MobileStickyCta } from "./MobileStickyCta";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

/** Landing page composition: hero → stats → about → courses → testimonials → CTA → footer */
export function Home() {
  const mounted = useMounted();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="premium-grid absolute inset-0 opacity-60" />
        <motion.div
          className="floating-blob absolute -left-28 top-20 size-[360px] rounded-full bg-[#6D28D9]/12 blur-[110px]"
          animate={mounted ? { y: [0, -12, 0], x: [0, 8, 0] } : false}
          transition={mounted ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
        <motion.div
          className="floating-blob absolute right-[-120px] top-1/3 size-[420px] rounded-full bg-[#A78BFA]/16 blur-[120px]"
          animate={mounted ? { y: [0, 16, 0], x: [0, -10, 0] } : false}
          transition={mounted ? { duration: 12, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
      </div>
      <Navbar />
      <main className="flex-1 pb-28 md:pb-0">
        <Hero />
        <Stats />
        <About />
        <Courses />
        <Testimonials />
        <CTAForm />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
