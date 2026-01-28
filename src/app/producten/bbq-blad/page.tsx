"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";

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

const productData = {
  title: "BBQ-blad",
  subtitle: "Voor buitenkeukens",
  description: "Een BBQ-blad van natuursteen is de perfecte basis voor uw buitenkeuken. Hittebestendig, weerbestendig en stijlvol. Wij maken BBQ-bladen op maat, inclusief uitsparingen voor uw apparatuur.",
  features: [
    "Op maat gemaakt",
    "Hittebestendig materiaal",
    "Weerbestendig",
    "Uitsparingen op maat",
    "Diverse diktes beschikbaar",
    "UV-bestendig",
  ],
  materials: [
    { name: "Graniet", description: "Ideaal voor buiten, vorstbestendig" },
    { name: "Keramiek", description: "Extreem hittebestendig" },
    { name: "Composiet", description: "Onderhoudsarm en sterk" },
    { name: "Hardsteen", description: "Robuust en tijdloos" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
};

export default function BBQBladPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt={productData.title}
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
              {productData.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif"
            >
              {productData.title}
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
                  Producten
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  {productData.title} van natuursteen
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  {productData.description}
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {productData.features.map((feature, index) => (
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
                    Offerte aanvragen
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-stone text-stone px-6 py-3 hover:bg-stone hover:text-white transition-colors"
                  >
                    Advies op maat
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
                    src={productData.gallery[0]}
                    alt={productData.title}
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
                Materialen
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                Kies uw materiaal
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {productData.materials.map((material, index) => (
                <motion.a
                  key={index}
                  href={`/materialen/${material.name.toLowerCase()}`}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-lg font-serif text-stone mb-2 group-hover:text-gold transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-stone-light text-sm">{material.description}</p>
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
                Inspiratie
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                Onze projecten
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {productData.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative rounded-2xl overflow-hidden ${
                    index === 0 ? "col-span-2 row-span-2 h-[300px] sm:h-[400px]" : "h-[150px] sm:h-[195px]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${productData.title} project ${index + 1}`}
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
                Interesse in een {productData.title.toLowerCase()}?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                Vraag vrijblijvend een offerte aan of bezoek onze showroom voor persoonlijk advies.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  Offerte aanvragen
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  Bezoek showroom
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
