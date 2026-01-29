"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";
import { ProductNav } from "@/components/ProductNav";

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

interface ProductPageContentProps {
  data: any;
  productName: string;
  defaultData: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    materials: { name: string; description: string; link?: string }[];
    gallery: string[];
    heroImage: string;
  };
}

export default function ProductPageContent({ data, productName, defaultData }: ProductPageContentProps) {
  // Use data from Sanity or fallback to defaults
  const heroTitel = data?.heroTitel || defaultData.title;
  const heroSubtitel = data?.heroSubtitel || defaultData.subtitle;
  const heroAfbeelding = data?.heroAfbeelding || defaultData.heroImage;

  const introSubtitel = data?.introSubtitel || "Producten";
  const introTitel = data?.introTitel || `${defaultData.title} van natuursteen`;
  const introBeschrijving = data?.introBeschrijving || defaultData.description;
  const introAfbeelding = data?.introAfbeelding || defaultData.gallery[0];
  const introKenmerken = data?.introKenmerken || defaultData.features;
  const introPrimaireKnop = data?.introPrimaireKnop || "Offerte aanvragen";
  const introSecundaireKnop = data?.introSecundaireKnop || "Advies op maat";

  const materialenSubtitel = data?.materialenSubtitel || "Materialen";
  const materialenTitel = data?.materialenTitel || "Kies uw materiaal";
  const materialen = data?.materialen?.length > 0 ? data.materialen : defaultData.materials;

  const galerijSubtitel = data?.galerijSubtitel || "Inspiratie";
  const galerijTitel = data?.galerijTitel || "Onze projecten";
  const galerijAfbeeldingen = data?.galerijAfbeeldingen?.length > 0 ? data.galerijAfbeeldingen : defaultData.gallery;

  const ctaTitel = data?.ctaTitel || `Interesse in ${heroTitel.toLowerCase()}?`;
  const ctaBeschrijving = data?.ctaBeschrijving || "Vraag vrijblijvend een offerte aan of bezoek onze showroom voor persoonlijk advies.";
  const ctaPrimaireKnop = data?.ctaPrimaireKnop || "Offerte aanvragen";
  const ctaSecundaireKnop = data?.ctaSecundaireKnop || "Bezoek showroom";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src={heroAfbeelding}
            alt={heroTitel}
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
              className="text-4xl sm:text-5xl lg:text-6xl font-serif"
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
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  {introBeschrijving}
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {introKenmerken.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-stone">
                      <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/offerte"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 hover:bg-gold-dark transition-colors"
                  >
                    {introPrimaireKnop}
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-stone text-stone px-6 py-3 hover:bg-stone hover:text-white transition-colors"
                  >
                    {introSecundaireKnop}
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
                    alt={heroTitel}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
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
                {materialenSubtitel}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                {materialenTitel}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {materialen.map((material: any, index: number) => (
                <motion.a
                  key={index}
                  href={material.link || `/materialen/${(material.naam || material.name).toLowerCase()}`}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-lg font-serif text-stone mb-2 group-hover:text-gold transition-colors">
                    {material.naam || material.name}
                  </h3>
                  <p className="text-stone-light text-sm">{material.beschrijving || material.description}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-24 bg-cream">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                {galerijSubtitel}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                {galerijTitel}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {galerijAfbeeldingen.slice(0, 4).map((image: string, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative rounded-2xl overflow-hidden ${
                    index === 0 ? "col-span-2 row-span-2 h-[300px] sm:h-[400px]" : "h-[150px] sm:h-[195px]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${heroTitel} project ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
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
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  {ctaPrimaireKnop}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  {ctaSecundaireKnop}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <ProductNav currentProduct={productName} />
      </main>
      <Footer />
    </>
  );
}
