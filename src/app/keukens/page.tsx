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

const process = [
  {
    icon: Ruler,
    title: "Inmeten",
    description: "Wij komen bij u langs om de exacte maten op te nemen.",
  },
  {
    icon: Wrench,
    title: "Productie",
    description: "Uw keukenblad wordt op maat gemaakt in onze werkplaats.",
  },
  {
    icon: Truck,
    title: "Levering",
    description: "Wij leveren op het door u gewenste tijdstip.",
  },
  {
    icon: BadgeCheck,
    title: "Montage",
    description: "Vakkundige plaatsing door onze eigen monteurs.",
  },
];

const benefits = [
  "Directe levering aan keukenbedrijven",
  "Flexibele levertijden",
  "Eigen inmeetservice",
  "Vakkundige montage",
  "Ruim materiaalaanbod",
  "Scherpe tarieven voor partners",
];

export default function KeukensPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070"
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
              Voor keukenbedrijven
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4"
            >
              Keukens & Montage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 max-w-xl mx-auto"
            >
              Complete service voor keukenbladen - van inmeten tot montage
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
                  Samenwerking
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  Partner voor keukenbedrijven
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-4">
                  Ella Natuursteen is al jarenlang de vaste partner van keukenbedrijven door heel Nederland.
                  Wij begrijpen dat een perfecte keuken staat of valt bij de details - en het werkblad is daar een essentieel onderdeel van.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  Met onze complete service ontzorgen wij u volledig: van het eerste advies en inmeten,
                  tot de productie in onze eigen werkplaats en vakkundige montage bij uw klant.
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3">
                  {benefits.slice(0, 3).map((item, index) => (
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
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                    alt="Keukenblad montage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-xl shadow-lg">
                  <span className="text-4xl font-serif font-bold">500+</span>
                  <span className="block text-sm">keukens per jaar</span>
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
                Hoe werkt het
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone">
                Ons proces
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-sm text-center relative"
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-serif text-stone mb-2">{step.title}</h3>
                  <p className="text-stone-light text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
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
                      src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070"
                      alt="Graniet keukenblad"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] sm:h-[280px] rounded-2xl overflow-hidden mt-8">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070"
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
                  Voordelen
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  Waarom samenwerken?
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light leading-relaxed mb-6">
                  Als keukenbedrijf wilt u zich kunnen focussen op uw klant.
                  Wij zorgen ervoor dat het werkblad geen zorgen oplevert.
                </motion.p>
                <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
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
                    Word partner
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
                Klaar om samen te werken?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                Neem contact op om de mogelijkheden voor uw keukenbedrijf te bespreken.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 hover:bg-gold-dark transition-colors"
                >
                  Neem contact op
                </a>
                <a
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  Offerte aanvragen
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
