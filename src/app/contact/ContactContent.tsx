"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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

interface ContactContentProps {
  data: any;
}

export default function ContactContent({ data }: ContactContentProps) {
  // Use data from Sanity or fallback to defaults
  const heroSubtitel = data?.heroSubtitel || "Neem contact op";
  const heroTitel = data?.heroTitel || "Contact";

  const formulierSubtitel = data?.formulierSubtitel || "Stuur een bericht";
  const formulierTitel = data?.formulierTitel || "Hoe kunnen we u helpen?";
  const formulierBeschrijving = data?.formulierBeschrijving || "Vul het formulier in en we nemen zo snel mogelijk contact met u op. Of bel ons direct voor een persoonlijk gesprek.";

  const contactSubtitel = data?.contactSubtitel || "Contactgegevens";
  const contactTitel = data?.contactTitel || "Bezoek onze showroom";
  const telefoon = data?.telefoon || "078 879 5045";
  const mobiel = data?.mobiel || "+31 6 39 31 85 32";
  const email = data?.email || "info@ellanatuursteen.nl";
  const adres = data?.adres || "Edisonweg 8 B, 2952 AD Alblasserdam";
  const openingstijden = data?.openingstijden || "Ma-Vr: 08:30-18:00 | Za: 09:00-17:00";
  const googleMapsUrl = data?.googleMapsUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.8969837043844!2d4.661944!3d51.859722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42d3f5a7b1b1b%3A0x1b1b1b1b1b1b1b1b!2sEdisonweg%208B%2C%20Alblasserdam!5e0!3m2!1snl!2snl!4v1234567890";

  const ctaTitel = data?.ctaTitel || "Liever direct een offerte?";
  const ctaBeschrijving = data?.ctaBeschrijving || "Vraag vrijblijvend een offerte aan en ontvang binnen 48 uur een voorstel op maat.";
  const ctaKnopTekst = data?.ctaKnopTekst || "Offerte aanvragen";

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefoon",
      value: telefoon,
      href: `tel:${telefoon.replace(/\s/g, '')}`,
    },
    {
      icon: Phone,
      label: "Mobiel",
      value: mobiel,
      href: `tel:${mobiel.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MapPin,
      label: "Adres",
      value: adres,
      href: `https://maps.google.com/?q=${encodeURIComponent(adres)}`,
    },
    {
      icon: Clock,
      label: "Openingstijden",
      value: openingstijden,
      href: null,
    },
  ];

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

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-cream">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
              >
                <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                  {formulierSubtitel}
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  {formulierTitel}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light mb-8">
                  {formulierBeschrijving}
                </motion.p>

                <motion.form variants={fadeInUp} className="space-y-5">
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
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-stone mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>

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
                    <label htmlFor="subject" className="block text-sm text-stone mb-2">
                      Onderwerp
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="offerte">Offerte aanvragen</option>
                      <option value="showroom">Showroom bezoek</option>
                      <option value="advies">Advies</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-stone mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-sand-dark bg-white focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Uw bericht..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-stone text-white hover:bg-stone-light transition-colors"
                  >
                    Verstuur bericht
                  </button>
                </motion.form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
              >
                <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[0.2em] text-sm mb-3">
                  {contactSubtitel}
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-8">
                  {contactTitel}
                </motion.h2>

                <motion.div variants={fadeInUp} className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-stone-light mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-stone hover:text-gold transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-stone">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  variants={fadeInUp}
                  className="relative h-[300px] bg-sand-dark rounded-2xl overflow-hidden"
                >
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gold text-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif mb-4">
                {ctaTitel}
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                {ctaBeschrijving}
              </p>
              <a
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 bg-white text-gold px-8 py-3 hover:bg-cream transition-colors"
              >
                {ctaKnopTekst}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
