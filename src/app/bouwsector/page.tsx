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

const benefits = [
  {
    icon: Handshake,
    title: "Persoonlijk contact",
    description: "Eén vast aanspreekpunt voor al uw projecten. Direct contact, korte lijnen.",
  },
  {
    icon: Truck,
    title: "Snelle levering",
    description: "Flexibele levertijden die aansluiten op uw bouwplanning.",
  },
  {
    icon: Shield,
    title: "Kwaliteitsgarantie",
    description: "Alle producten worden geleverd met garantie en certificering.",
  },
  {
    icon: Building2,
    title: "Projectondersteuning",
    description: "Van inmeten tot montage - wij ontzorgen u volledig.",
  },
];

const services = [
  "Keukenbladen op maat",
  "Vensterbanken & dorpels",
  "Badkamerafwerking",
  "Vloeren & wandbekleding",
  "Trappen & borders",
  "Maatwerk projecten",
];

export default function BouwsectorPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
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
              Voor professionals
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4"
            >
              Bouwsector
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 max-w-xl mx-auto"
            >
              Betrouwbare partner voor aannemers, projectontwikkelaars en keukenbedrijven
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
                  Samenwerken
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  Uw betrouwbare partner in natuursteen
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-4">
                  Al meer dan 25 jaar werken wij samen met aannemers, keukenbedrijven en projectontwikkelaars door heel Nederland. Wij begrijpen dat in de bouw tijd geld is en dat kwaliteit essentieel is.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  Daarom bieden wij niet alleen hoogwaardige natuursteen producten, maar ook een complete service: van advies en inmeten tot levering en montage. Alles om uw project tot een succes te maken.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-stone text-white px-6 py-3 hover:bg-stone-light transition-colors"
                  >
                    Word partner
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
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070"
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
                Waarom Ella Natuursteen
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                Voordelen voor de bouwsector
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-serif text-stone mb-2">{benefit.title}</h3>
                  <p className="text-stone-light text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
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
                      src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070"
                      alt="Keukenblad montage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] sm:h-[250px] rounded-2xl overflow-hidden mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070"
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
                  Ons aanbod
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  Producten voor de bouw
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  Van nieuwbouwprojecten tot renovaties - wij leveren natuursteen voor ieder project.
                  Onze producten worden op maat gemaakt in onze eigen werkplaats.
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {services.map((service, index) => (
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
                    Offerte aanvragen
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
                Interesse in een samenwerking?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                Neem contact met ons op om de mogelijkheden te bespreken. Wij denken graag met u mee.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  Neem contact op
                </a>
                <a
                  href="tel:+31788795045"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  Bel direct: 078 879 5045
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
