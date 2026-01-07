import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { WhyUs } from "@/components/sections/WhyUs";
import { Materials } from "@/components/sections/Materials";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <FeaturedProject />
        <Materials />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
