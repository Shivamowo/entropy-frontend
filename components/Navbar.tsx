"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-black/5 bg-[#F5F1EB]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-[family-name:var(--font-poppins)] text-xl font-extrabold tracking-tight text-[#1F1A2B] sm:text-2xl"
        >
          Entropy <span className="text-[#6D28D9]">Classes</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-[#3A3350] transition hover:text-[#1F1A2B]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden min-h-[44px] items-center rounded-xl bg-[#6D28D9] px-6 py-2.5 text-sm font-bold text-white shadow-[0_14px_30px_-18px_rgba(109,40,217,0.55)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_38px_-20px_rgba(109,40,217,0.6)] md:inline-flex"
          >
            Enroll Now
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-[#3A3350] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-black/5 bg-[#F5F1EB] md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-[#1F1A2B] hover:bg-black/[0.04]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 flex min-h-[52px] items-center justify-center rounded-xl bg-[#6D28D9] text-center text-base font-bold text-white shadow-[0_18px_40px_-26px_rgba(109,40,217,0.65)]"
              onClick={() => setOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
