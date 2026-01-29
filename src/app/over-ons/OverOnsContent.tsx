"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, Award, Users, Clock, Shield, Heart } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Icon mapping
const iconMap: { [key: string]: any } = {
  award: Award,
  users: Users,
  clock: Clock,
  shield: Shield,
  heart: Heart,
};

// Default values
const defaultWaarden = [
  {
    icoon: "award",
    titel: "Vakmanschap",
    beschrijving: "Elke steen wordt met precisie en passie bewerkt door onze ervaren vakmensen.",
  },
  {
    icoon: "users",
    titel: "Persoonlijke aanpak",
    beschrijving: "We denken met u mee en leveren altijd maatwerk dat past bij uw wensen.",
  },
  {
    icoon: "clock",
    titel: "Betrouwbaar",
    beschrijving: "Afspraak is afspraak. We leveren op tijd en binnen budget.",
  },
];

const defaultHighlights = [
  "Meer dan 25 jaar ervaring",
  "Eigen werkplaats in Alblasserdam",
  "Showroom van 600m²",
];

interface OverOnsContentProps {
  data: any;
}

export default function OverOnsContent({ data }: OverOnsContentProps) {
  // Use data from Sanity or fallback to defaults
  const heroSubtitel = data?.heroSubtitel || "Ons verhaal";
  const heroTitel = data?.heroTitel || "Over Ella Natuursteen";
  const heroAfbeelding = data?.heroAfbeelding || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053";

  const introSubtitel = data?.introSubtitel || "Wie wij zijn";
  const introTitel = data?.introTitel || "Passie voor natuursteen sinds 2000";
  const introParagraaf1 = data?.introParagraaf1 || "Ella Natuursteen is al meer dan 25 jaar dé specialist in natuursteen voor keuken, badkamer en interieur. Wat begon als een klein familiebedrijf is uitgegroeid tot een begrip in de regio.";
  const introParagraaf2 = data?.introParagraaf2 || "Vanuit onze werkplaats en showroom in Alblasserdam bedienen we zowel particulieren als professionals. Of het nu gaat om een luxe keukenblad, een stijlvolle badkamer of een unieke vloer – wij maken het mogelijk.";
  const introAfbeelding = data?.introAfbeelding || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070";
  const introJarenErvaring = data?.introJarenErvaring || 25;
  const introHighlights = data?.introHighlights || defaultHighlights;

  const waardenSubtitel = data?.waardenSubtitel || "Onze waarden";
  const waardenTitel = data?.waardenTitel || "Waar wij voor staan";
  const waarden = data?.waarden || defaultWaarden;

  const showroomSubtitel = data?.showroomSubtitel || "Bezoek ons";
  const showroomTitel = data?.showroomTitel || "Onze showroom";
  const showroomParagraaf1 = data?.showroomParagraaf1 || "In onze showroom van 600m² kunt u op uw gemak rondkijken en de verschillende materialen bekijken en voelen. Onze adviseurs staan klaar om u te helpen bij het maken van de juiste keuze.";
  const showroomParagraaf2 = data?.showroomParagraaf2 || "Kom gerust langs voor een vrijblijvend adviesgesprek. We nemen graag de tijd voor u.";
  const showroomKnopTekst = data?.showroomKnopTekst || "Plan een bezoek";
  const showroomAfbeeldingen = data?.showroomAfbeeldingen || [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070",
  ];

  const ctaTitel = data?.ctaTitel || "Benieuwd wat wij voor u kunnen betekenen?";
  const ctaBeschrijving = data?.ctaBeschrijving || "Neem contact met ons op voor een vrijblijvend adviesgesprek of vraag direct een offerte aan.";
  const ctaPrimaireKnop = data?.ctaPrimaireKnop || "Neem contact op";
  const ctaSecundaireKnop = data?.ctaSecundaireKnop || "Offerte aanvragen";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src={heroAfbeelding}
            alt="Ella Natuursteen werkplaats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone/60" />
          <div className="relative z-10 text-center text-white px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
            >
              {heroSubtitel}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4"
            >
              {heroTitel}
            </motion.h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-cream">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
              >
                <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                  {introSubtitel}
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  {introTitel}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-4">
                  {introParagraaf1}
                </motion.p>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  {introParagraaf2}
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3">
                  {introHighlights.slice(0, 3).map((item: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-stone">
                      <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={introAfbeelding}
                    alt="Ella Natuursteen showroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-xl shadow-lg">
                  <span className="text-4xl font-serif font-bold">{introJarenErvaring}+</span>
                  <span className="block text-sm">jaar ervaring</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 bg-sand">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                {waardenSubtitel}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                {waardenTitel}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-3 gap-8"
            >
              {waarden.map((value: any, index: number) => {
                const IconComponent = iconMap[value.icoon] || Award;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-2xl shadow-sm text-center"
                  >
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-serif text-stone mb-3">{value.titel}</h3>
                    <p className="text-stone-light text-sm leading-relaxed">{value.beschrijving}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Team/Showroom Section */}
        <section className="py-16 sm:py-24 bg-cream">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] sm:h-[280px] rounded-2xl overflow-hidden">
                    <Image
                      src={showroomAfbeeldingen[0] || "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"}
                      alt="Showroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] sm:h-[280px] rounded-2xl overflow-hidden mt-8">
                    <Image
                      src={showroomAfbeeldingen[1] || "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070"}
                      alt="Werkplaats"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="order-1 lg:order-2"
              >
                <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                  {showroomSubtitel}
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  {showroomTitel}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-4">
                  {showroomParagraaf1}
                </motion.p>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  {showroomParagraaf2}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-stone text-white px-6 py-3 hover:bg-stone-light transition-colors"
                  >
                    {showroomKnopTekst}
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-stone text-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif mb-4">
                {ctaTitel}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                {ctaBeschrijving}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  {ctaPrimaireKnop}
                </a>
                <a
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  {ctaSecundaireKnop}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
