"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Upload, CheckCircle } from "lucide-react";

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

const steps = [
  "Vul het formulier in met uw wensen",
  "Upload optioneel een schets of foto",
  "Ontvang binnen 48 uur een offerte op maat",
  "Bespreek de details en start uw project",
];

export default function OffertePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-stone">
          <div className="relative z-10 text-center text-white px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Vrijblijvend
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif"
            >
              Offerte aanvragen
            </motion.h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 sm:py-24 bg-cream">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Steps Sidebar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="lg:col-span-1"
              >
                <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                  Hoe werkt het?
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-serif text-stone mb-8">
                  In 4 eenvoudige stappen
                </motion.h2>

                <motion.div variants={fadeInUp} className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-stone-light pt-1">{step}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-10 p-6 bg-sand rounded-xl">
                  <h3 className="font-serif text-stone mb-2">Vragen?</h3>
                  <p className="text-stone-light text-sm mb-4">
                    Bel ons gerust voor persoonlijk advies.
                  </p>
                  <a
                    href="tel:+31781234567"
                    className="text-gold hover:text-gold-dark transition-colors font-medium"
                  >
                    +31 (0)78 123 4567
                  </a>
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="lg:col-span-2"
              >
                <motion.div variants={fadeInUp} className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-serif text-stone mb-6">Uw gegevens</h2>

                  <form className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm text-stone mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="Uw volledige naam"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm text-stone mb-2">
                          Bedrijfsnaam
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="Optioneel"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm text-stone mb-2">
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="uw@email.nl"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm text-stone mb-2">
                          Telefoon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="Uw telefoonnummer"
                        />
                      </div>
                    </div>

                    <hr className="border-sand-dark" />

                    <h3 className="text-xl font-serif text-stone">Project details</h3>

                    <div>
                      <label htmlFor="project-type" className="block text-sm text-stone mb-2">
                        Type project *
                      </label>
                      <select
                        id="project-type"
                        name="project-type"
                        required
                        className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                      >
                        <option value="">Selecteer een optie</option>
                        <option value="keukenblad">Keukenblad</option>
                        <option value="badkamer">Badkamer</option>
                        <option value="vloer">Vloer</option>
                        <option value="vensterbank">Vensterbank</option>
                        <option value="tafelblad">Tafelblad</option>
                        <option value="openhaard">Openhaard</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="material" className="block text-sm text-stone mb-2">
                        Gewenst materiaal
                      </label>
                      <select
                        id="material"
                        name="material"
                        className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                      >
                        <option value="">Weet ik nog niet / advies gewenst</option>
                        <option value="graniet">Graniet</option>
                        <option value="marmer">Marmer</option>
                        <option value="composiet">Composiet</option>
                        <option value="keramiek">Keramiek</option>
                        <option value="dekton">Dekton</option>
                        <option value="neolith">Neolith</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="dimensions" className="block text-sm text-stone mb-2">
                          Afmetingen (indicatie)
                        </label>
                        <input
                          type="text"
                          id="dimensions"
                          name="dimensions"
                          className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="Bijv. 300 x 60 cm"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm text-stone mb-2">
                          Budget indicatie
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                        >
                          <option value="">Geen voorkeur</option>
                          <option value="1000-2500">€ 1.000 - € 2.500</option>
                          <option value="2500-5000">€ 2.500 - € 5.000</option>
                          <option value="5000-10000">€ 5.000 - € 10.000</option>
                          <option value="10000+">€ 10.000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm text-stone mb-2">
                        Omschrijving van uw project *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Vertel ons meer over uw project, wensen en eventuele bijzonderheden..."
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm text-stone mb-2">
                        Bijlagen (optioneel)
                      </label>
                      <div className="border-2 border-dashed border-sand-dark rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                        <input
                          type="file"
                          id="files"
                          name="files"
                          multiple
                          accept="image/*,.pdf"
                          className="hidden"
                        />
                        <label htmlFor="files" className="cursor-pointer">
                          <Upload className="w-10 h-10 text-stone-light mx-auto mb-3" />
                          <p className="text-stone mb-1">
                            Sleep bestanden hierheen of{" "}
                            <span className="text-gold">klik om te uploaden</span>
                          </p>
                          <p className="text-stone-light text-sm">
                            Foto&apos;s, schetsen of PDF (max. 10MB per bestand)
                          </p>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="privacy" className="text-sm text-stone-light">
                        Ik ga akkoord met de{" "}
                        <a href="/privacy" className="text-gold hover:underline">
                          privacyverklaring
                        </a>{" "}
                        en geef toestemming om contact met mij op te nemen.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 bg-gold text-white hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Offerte aanvragen
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
