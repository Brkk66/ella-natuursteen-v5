"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Ruler, Wrench, Truck, BadgeCheck, Check } from "lucide-react";

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
  ruler: Ruler,
  wrench: Wrench,
  truck: Truck,
  badgecheck: BadgeCheck,
};

// Default values
const defaultProcesStappen = [
  { icoon: "ruler", titel: "Inmeten", beschrijving: "Wij komen bij u langs om de exacte maten op te nemen." },
  { icoon: "wrench", titel: "Productie", beschrijving: "Uw keukenblad wordt op maat gemaakt in onze werkplaats." },
  { icoon: "truck", titel: "Levering", beschrijving: "Wij leveren op het door u gewenste tijdstip." },
  { icoon: "badgecheck", titel: "Montage", beschrijving: "Vakkundige plaatsing door onze eigen monteurs." },
];

const defaultVoordelenLijst = [
  "Directe levering aan keukenbedrijven",
  "Flexibele levertijden",
  "Eigen inmeetservice",
  "Vakkundige montage",
  "Ruim materiaalaanbod",
  "Scherpe tarieven voor partners",
];

const defaultHighlights = [
  "Directe levering aan keukenbedrijven",
  "Flexibele levertijden",
  "Eigen inmeetservice",
];

interface KeukensContentProps {
  data: any;
}

export default function KeukensContent({ data }: KeukensContentProps) {
  // Use data from Sanity or fallback to defaults
  const heroSubtitel = data?.heroSubtitel || "Voor keukenbedrijven";
  const heroTitel = data?.heroTitel || "Keukens & Montage";
  const heroBeschrijving = data?.heroBeschrijving || "Complete service voor keukenbladen - van inmeten tot montage";
  const heroAfbeelding = data?.heroAfbeelding || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070";

  const introSubtitel = data?.introSubtitel || "Samenwerking";
  const introTitel = data?.introTitel || "Partner voor keukenbedrijven";
  const introParagraaf1 = data?.introParagraaf1 || "Ella Natuursteen is al jarenlang de vaste partner van keukenbedrijven door heel Nederland. Wij begrijpen dat een perfecte keuken staat of valt bij de details - en het werkblad is daar een essentieel onderdeel van.";
  const introParagraaf2 = data?.introParagraaf2 || "Met onze complete service ontzorgen wij u volledig: van het eerste advies en inmeten, tot de productie in onze eigen werkplaats en vakkundige montage bij uw klant.";
  const introAfbeelding = data?.introAfbeelding || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070";
  const introStatsTekst = data?.introStatsTekst || "500+";
  const introStatsLabel = data?.introStatsLabel || "keukens per jaar";
  const introHighlights = data?.introHighlights || defaultHighlights;

  const procesSubtitel = data?.procesSubtitel || "Hoe werkt het";
  const procesTitel = data?.procesTitel || "Ons proces";
  const procesStappen = data?.procesStappen || defaultProcesStappen;

  const voordelenSubtitel = data?.voordelenSubtitel || "Voordelen";
  const voordelenTitel = data?.voordelenTitel || "Waarom samenwerken?";
  const voordelenBeschrijving = data?.voordelenBeschrijving || "Als keukenbedrijf wilt u zich kunnen focussen op uw klant. Wij zorgen ervoor dat het werkblad geen zorgen oplevert.";
  const voordelenLijst = data?.voordelenLijst || defaultVoordelenLijst;
  const voordelenKnopTekst = data?.voordelenKnopTekst || "Word partner";
  const voordelenAfbeeldingen = data?.voordelenAfbeeldingen || [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
  ];

  const ctaTitel = data?.ctaTitel || "Klaar om samen te werken?";
  const ctaBeschrijving = data?.ctaBeschrijving || "Neem contact op om de mogelijkheden voor uw keukenbedrijf te bespreken.";
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
            alt="Moderne keuken met natuursteen"
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
                    alt="Keukenblad montage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-xl shadow-lg">
                  <span className="text-4xl font-serif font-bold">{introStatsTekst}</span>
                  <span className="block text-sm">{introStatsLabel}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                {procesSubtitel}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                {procesTitel}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {procesStappen.map((step: any, index: number) => {
                const IconComponent = iconMap[step.icoon] || Ruler;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl shadow-sm text-center relative"
                  >
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-serif text-stone mb-2">{step.titel}</h3>
                    <p className="text-stone-light text-sm leading-relaxed">{step.beschrijving}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
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
                      src={voordelenAfbeeldingen[0] || "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070"}
                      alt="Graniet keukenblad"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] sm:h-[280px] rounded-2xl overflow-hidden mt-8">
                    <Image
                      src={voordelenAfbeeldingen[1] || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070"}
                      alt="Marmer keukenblad"
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
                  {voordelenSubtitel}
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  {voordelenTitel}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  {voordelenBeschrijving}
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {voordelenLijst.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-stone">
                      <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInUp}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-stone text-white px-6 py-3 hover:bg-stone-light transition-colors"
                  >
                    {voordelenKnopTekst}
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
