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
import { getHomepage } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/client";

export default async function Home() {
  const data = await getHomepage();

  // Helper to get image URL from Sanity or fallback
  const getImageUrl = (sanityImage: any, fallback: string) => {
    if (sanityImage) {
      return urlFor(sanityImage).url();
    }
    return fallback;
  };

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
