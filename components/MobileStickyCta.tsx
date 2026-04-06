"use client";

/**
 * High-visibility enrollment CTA on small screens (premium funnels keep conversion one tap away).
 */
export function MobileStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="pointer-events-auto mx-auto max-w-lg rounded-2xl border border-black/10 bg-white/80 p-2 shadow-[0_-18px_45px_-28px_rgba(31,26,43,0.25)] backdrop-blur-xl">
        <a
          href="#contact"
          className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#6D28D9] px-6 text-base font-bold text-white shadow-[0_18px_40px_-26px_rgba(109,40,217,0.65)] active:scale-[0.98]"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
