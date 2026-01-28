"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Tag, ArrowRight } from "lucide-react";

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

// Dit wordt later uit CMS gehaald
const offers = [
  {
    id: 1,
    title: "Keramiek Taj Mahal",
    description: "Uitzonderlijk krasvast en bestand tegen zuren en chemicaliën. Hygiënisch oppervlak dat niet verkleurt. 1.2 cm dikte massief.",
    originalPrice: null,
    salePrice: "€ 220",
    unit: "per str. meter",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    badge: "Populair",
  },
  {
    id: 2,
    title: "Composiet Taurus Terrazzo Dark",
    description: "Moderne terrazzo look in donkere uitvoering. 1.2 cm dikte massief. Perfect voor stijlvolle keukens.",
    originalPrice: null,
    salePrice: "€ 99",
    unit: "per str. meter",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    badge: "Voordelig",
  },
  {
    id: 3,
    title: "Marmer Ella Carrara Keukenblad",
    description: "Prachtig Italiaans Carrara marmer met subtiele grijze adering. Luxe uitstraling voor uw keuken.",
    originalPrice: "€ 350",
    salePrice: "€ 199",
    unit: "per str. meter",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    badge: "-43%",
  },
  {
    id: 4,
    title: "Belgisch Hardsteen Donker Gezoet",
    description: "Betonlook keukenblad van Belgisch hardsteen. 2 cm dikte massief. Stoer en tijdloos.",
    originalPrice: null,
    salePrice: "€ 90",
    unit: "per str. meter",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    badge: "Budget tip",
  },
];

export default function AanbiedingenPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-stone">
          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Tag className="w-8 h-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4"
            >
              Aanbiedingen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 max-w-xl mx-auto"
            >
              Profiteer van onze scherpe aanbiedingen op natuursteen producten
            </motion.p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16 sm:py-24 bg-cream">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {offers.map((offer) => (
                <motion.div
                  key={offer.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-[250px] sm:h-[300px]">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-sm font-medium rounded-full">
                      {offer.badge}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-serif text-stone mb-2">{offer.title}</h3>
                    <p className="text-stone-light text-sm mb-4">{offer.description}</p>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-2xl sm:text-3xl font-serif text-gold">{offer.salePrice}</span>
                      {offer.originalPrice && (
                        <span className="text-stone-light line-through">{offer.originalPrice}</span>
                      )}
                      <span className="text-stone-light text-sm">{offer.unit}</span>
                    </div>
                    <a
                      href="/offerte"
                      className="inline-flex items-center gap-2 text-stone hover:text-gold transition-colors font-medium"
                    >
                      Offerte aanvragen
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 sm:py-16 bg-sand">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-serif text-stone mb-4">
                Over onze aanbiedingen
              </h2>
              <p className="text-stone-light mb-6">
                Alle prijzen zijn richtprijzen voor oppervlaktes van 60/63 cm diep en berekend per strekkende meter. Aanbiedingen zijn geldig zolang de voorraad strekt. Neem contact op voor exacte voorwaarden en beschikbaarheid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-stone text-white px-6 py-3 hover:bg-stone-light transition-colors"
                >
                  Neem contact op
                </a>
                <a
                  href="/materialen/natuursteen"
                  className="inline-flex items-center justify-center gap-2 border border-stone text-stone px-6 py-3 hover:bg-stone hover:text-white transition-colors"
                >
                  Bekijk alle materialen
                </a>
              </div>
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
                Liever persoonlijk advies?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                Bezoek onze showroom en ontdek alle mogelijkheden. Onze adviseurs helpen u graag.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  Plan een bezoek
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
