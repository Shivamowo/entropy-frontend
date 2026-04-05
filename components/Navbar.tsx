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
      className="sticky top-0 z-50 border-b border-white/[0.12] bg-[#020617]/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-[family-name:var(--font-poppins)] text-xl font-extrabold tracking-tight text-white sm:text-2xl"
        >
          Entropy <span className="text-[#FF6B00]">Classes</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-slate-200 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden min-h-[44px] items-center rounded-xl bg-[#FF6B00] px-6 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_32px_-4px_rgba(255,107,0,0.65)] ring-2 ring-[#FF6B00] ring-offset-2 ring-offset-[#020617] transition hover:scale-[1.04] hover:shadow-[0_0_40px_0_rgba(255,107,0,0.55)] md:inline-flex"
          >
            Enroll now
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-slate-200 md:hidden"
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
          className="border-t border-white/10 bg-[#020617] md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-100 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 flex min-h-[52px] items-center justify-center rounded-xl bg-[#FF6B00] text-center text-base font-extrabold uppercase tracking-wide text-white shadow-[0_0_24px_-4px_rgba(255,107,0,0.6)]"
              onClick={() => setOpen(false)}
            >
              Enroll now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
