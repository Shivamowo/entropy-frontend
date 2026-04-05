"use client";

/**
 * High-visibility enrollment CTA on small screens (premium funnels keep conversion one tap away).
 */
export function MobileStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="pointer-events-auto mx-auto max-w-lg rounded-2xl border border-white/15 bg-[#020617]/95 p-2 shadow-[0_-8px_40px_-8px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <a
          href="#contact"
          className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#FF6B00] px-6 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_0_32px_-4px_rgba(255,107,0,0.65)] ring-2 ring-[#FF6B00] ring-offset-2 ring-offset-[#020617] active:scale-[0.98]"
        >
          Enroll now — speak to us
        </a>
      </div>
    </div>
  );
}
