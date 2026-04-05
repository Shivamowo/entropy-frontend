import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { About } from "./About";
import { Courses } from "./Courses";
import { Testimonials } from "./Testimonials";
import { CTAForm } from "./CTAForm";
import { Footer } from "./Footer";
import { MobileStickyCta } from "./MobileStickyCta";

/** Landing page composition: hero → stats → about → courses → testimonials → CTA → footer */
export function Home() {
  return (
    <>
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
