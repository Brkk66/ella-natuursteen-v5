import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { getHomepage } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/client";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="py-32 bg-cream" />,
});
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="py-32 bg-sand" />,
});
const FeaturedProject = dynamic(() => import("@/components/sections/FeaturedProject").then(mod => ({ default: mod.FeaturedProject })), {
  loading: () => <div className="py-32 bg-stone" />,
});
const Materials = dynamic(() => import("@/components/sections/Materials").then(mod => ({ default: mod.Materials })), {
  loading: () => <div className="py-32 bg-cream" />,
});
const WhyUs = dynamic(() => import("@/components/sections/WhyUs").then(mod => ({ default: mod.WhyUs })), {
  loading: () => <div className="py-32 bg-sand" />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-32 bg-sand" />,
});
const CTA = dynamic(() => import("@/components/sections/CTA").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="py-32 bg-stone" />,
});

export default async function Home() {
  const data = await getHomepage();

  return (
    <>
      <Navbar />
      <main>
        <Hero
          subtitle={data?.heroSubtitle}
          title={data?.heroTitle}
          titleAccent={data?.heroTitleAccent}
          description={data?.heroDescription}
          primaryButton={data?.heroPrimaryButton}
          secondaryButton={data?.heroSecondaryButton}
          usps={data?.heroUsps}
          backgroundImage={data?.heroImage ? urlFor(data.heroImage).url() : undefined}
        />
        <Intro
          subtitle={data?.introSubtitle}
          title={data?.introTitle}
          paragraph1={data?.introParagraph1}
          paragraph2={data?.introParagraph2}
          yearsExperience={data?.introYearsExperience}
          stats={data?.introStats}
          buttonText={data?.introButton}
        />
        <Services
          subtitle={data?.servicesSubtitle}
          title={data?.servicesTitle}
          description={data?.servicesDescription}
          services={data?.services?.map((s: any) => ({
            ...s,
            image: s.image ? urlFor(s.image).url() : undefined,
          }))}
          buttonText={data?.servicesButton}
        />
        <Projects
          subtitle={data?.projectsSubtitle}
          title={data?.projectsTitle}
          projects={data?.projects?.map((p: any) => ({
            ...p,
            image: p.image ? urlFor(p.image).url() : undefined,
          }))}
          buttonText={data?.projectsButton}
        />
        <FeaturedProject
          badge={data?.featuredBadge}
          title={data?.featuredTitle}
          titleAccent={data?.featuredTitleAccent}
          description={data?.featuredDescription}
          features={data?.featuredFeatures}
          primaryButton={data?.featuredPrimaryButton}
          secondaryButton={data?.featuredSecondaryButton}
          statsValue={data?.featuredStatsValue}
          statsLabel={data?.featuredStatsLabel}
        />
        <Materials
          subtitle={data?.materialsSubtitle}
          title={data?.materialsTitle}
          description={data?.materialsDescription}
          materials={data?.materials?.map((m: any) => ({
            ...m,
            image: m.image ? urlFor(m.image).url() : undefined,
          }))}
        />
        <WhyUs
          subtitle={data?.whyusSubtitle}
          title={data?.whyusTitle}
          description={data?.whyusDescription}
          features={data?.whyusFeatures}
        />
        <Testimonials
          subtitle={data?.testimonialsSubtitle}
          title={data?.testimonialsTitle}
          description={data?.testimonialsDescription}
          testimonials={data?.testimonials}
        />
        <CTA
          subtitle={data?.ctaSubtitle}
          title={data?.ctaTitle}
          titleAccent={data?.ctaTitleAccent}
          description={data?.ctaDescription}
          options={data?.ctaOptions}
          buttonText={data?.ctaButton}
        />
      </main>
      <Footer />
    </>
  );
}
