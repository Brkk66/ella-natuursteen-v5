"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Building2, Handshake, Truck, Shield, Check } from "lucide-react";

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
  handshake: Handshake,
  truck: Truck,
  shield: Shield,
  building: Building2,
};

// Default values
const defaultVoordelen = [
  { icoon: "handshake", titel: "Persoonlijk contact", beschrijving: "Eén vast aanspreekpunt voor al uw projecten. Direct contact, korte lijnen." },
  { icoon: "truck", titel: "Snelle levering", beschrijving: "Flexibele levertijden die aansluiten op uw bouwplanning." },
  { icoon: "shield", titel: "Kwaliteitsgarantie", beschrijving: "Alle producten worden geleverd met garantie en certificering." },
  { icoon: "building", titel: "Projectondersteuning", beschrijving: "Van inmeten tot montage - wij ontzorgen u volledig." },
];

const defaultDienstenLijst = [
  "Keukenbladen op maat",
  "Vensterbanken & dorpels",
  "Badkamerafwerking",
  "Vloeren & wandbekleding",
  "Trappen & borders",
  "Maatwerk projecten",
];

interface BouwsectorContentProps {
  data: any;
}

export default function BouwsectorContent({ data }: BouwsectorContentProps) {
  // Use data from Sanity or fallback to defaults
  const heroSubtitel = data?.heroSubtitel || "Voor professionals";
  const heroTitel = data?.heroTitel || "Bouwsector";
  const heroBeschrijving = data?.heroBeschrijving || "Betrouwbare partner voor aannemers, projectontwikkelaars en keukenbedrijven";
  const heroAfbeelding = data?.heroAfbeelding || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070";

  const introSubtitel = data?.introSubtitel || "Samenwerken";
  const introTitel = data?.introTitel || "Uw betrouwbare partner in natuursteen";
  const introParagraaf1 = data?.introParagraaf1 || "Al meer dan 25 jaar werken wij samen met aannemers, keukenbedrijven en projectontwikkelaars door heel Nederland. Wij begrijpen dat in de bouw tijd geld is en dat kwaliteit essentieel is.";
  const introParagraaf2 = data?.introParagraaf2 || "Daarom bieden wij niet alleen hoogwaardige natuursteen producten, maar ook een complete service: van advies en inmeten tot levering en montage. Alles om uw project tot een succes te maken.";
  const introKnopTekst = data?.introKnopTekst || "Word partner";
  const introAfbeelding = data?.introAfbeelding || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070";

  const voordelenSubtitel = data?.voordelenSubtitel || "Waarom Ella Natuursteen";
  const voordelenTitel = data?.voordelenTitel || "Voordelen voor de bouwsector";
  const voordelen = data?.voordelen || defaultVoordelen;

  const dienstenSubtitel = data?.dienstenSubtitel || "Ons aanbod";
  const dienstenTitel = data?.dienstenTitel || "Producten voor de bouw";
  const dienstenBeschrijving = data?.dienstenBeschrijving || "Van nieuwbouwprojecten tot renovaties - wij leveren natuursteen voor ieder project. Onze producten worden op maat gemaakt in onze eigen werkplaats.";
  const dienstenLijst = data?.dienstenLijst || defaultDienstenLijst;
  const dienstenKnopTekst = data?.dienstenKnopTekst || "Offerte aanvragen";
  const dienstenAfbeeldingen = data?.dienstenAfbeeldingen || [
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ];

  const ctaTitel = data?.ctaTitel || "Interesse in een samenwerking?";
  const ctaBeschrijving = data?.ctaBeschrijving || "Neem contact met ons op om de mogelijkheden te bespreken. Wij denken graag met u mee.";
  const ctaPrimaireKnop = data?.ctaPrimaireKnop || "Neem contact op";
  const ctaSecundaireKnop = data?.ctaSecundaireKnop || "Bel direct: 078 879 5045";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src={heroAfbeelding}
            alt="Bouwplaats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone/70" />
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
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 max-w-xl mx-auto"
            >
              {heroBeschrijving}
            </motion.p>
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
                <motion.div variants={fadeInUp}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-stone text-white px-6 py-3 hover:bg-stone-light transition-colors"
                  >
                    {introKnopTekst}
                  </a>
                </motion.div>
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
                    alt="Samenwerking"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                {voordelenSubtitel}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                {voordelenTitel}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {voordelen.map((benefit: any, index: number) => {
                const IconComponent = iconMap[benefit.icoon] || Handshake;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-serif text-stone mb-2">{benefit.titel}</h3>
                    <p className="text-stone-light text-sm leading-relaxed">{benefit.beschrijving}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
                  <div className="relative h-[200px] sm:h-[250px] rounded-2xl overflow-hidden">
                    <Image
                      src={dienstenAfbeeldingen[0] || "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070"}
                      alt="Keukenblad montage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] sm:h-[250px] rounded-2xl overflow-hidden mt-8">
                    <Image
                      src={dienstenAfbeeldingen[1] || "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070"}
                      alt="Natuursteen project"
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
                  {dienstenSubtitel}
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  {dienstenTitel}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  {dienstenBeschrijving}
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {dienstenLijst.map((service: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-stone">
                      <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      {service}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInUp}>
                  <a
                    href="/offerte"
                    className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 hover:bg-gold-dark transition-colors"
                  >
                    {dienstenKnopTekst}
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
                  href="tel:+31788795045"
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
