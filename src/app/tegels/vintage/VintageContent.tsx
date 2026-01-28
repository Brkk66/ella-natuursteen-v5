"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/ProductGrid";
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

const features = [
  "Unieke patronen en dessins",
  "Authentieke vintage uitstraling",
  "Combineerbaar met moderne stijlen",
  "Geschikt voor vloer en wand",
  "Duurzaam keramisch materiaal",
  "Grote collectie op voorraad",
];

interface Product {
  _id: string;
  name: string;
  image: any;
  description?: string;
}

interface Props {
  products: Product[];
}

export default function VintageContent({ products }: Props) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070"
            alt="Vintage Tegels"
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
              Tegels
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif"
            >
              Vintage Tegels
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
                  Tijdloze charme
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  Patronen met karakter
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-4">
                  Vintage tegels brengen karakter en persoonlijkheid in uw interieur.
                  Geïnspireerd op historische dessins uit Portugal, Marokko en het Art Deco tijdperk.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  Perfect voor het creëren van een unieke sfeer in hal, keuken of badkamer.
                  Combineer met moderne elementen voor een eclectische look.
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-stone">
                      <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      {feature}
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
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                    alt="Vintage tegels"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
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
                Onze collectie
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                Vintage tegels
              </motion.h2>
            </motion.div>

            <ProductGrid products={products} />
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
                Ontdek onze vintage collectie
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                Bekijk alle patronen en kleuren in onze showroom. Laat u verrassen.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  Offerte aanvragen
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  Bezoek showroom
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
