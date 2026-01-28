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

const contactInfo = [
  {
    icon: Phone,
    label: "Telefoon",
    value: "078 879 5045",
    href: "tel:+31788795045",
  },
  {
    icon: Phone,
    label: "Mobiel",
    value: "+31 6 39 31 85 32",
    href: "tel:+31639318532",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@ellanatuursteen.nl",
    href: "mailto:info@ellanatuursteen.nl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Edisonweg 8 B, 2952 AD Alblasserdam",
    href: "https://maps.google.com/?q=Edisonweg+8B+2952AD+Alblasserdam",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Ma-Vr: 08:30-18:00 | Za: 09:00-17:00",
    href: null,
  },
];

export default function ContactPage() {
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
              Neem contact op
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif"
            >
              Contact
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
                  Stuur een bericht
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-6">
                  Hoe kunnen we u helpen?
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-stone-light mb-8">
                  Vul het formulier in en we nemen zo snel mogelijk contact met u op. Of bel ons direct voor een persoonlijk gesprek.
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
                  Contactgegevens
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif text-stone mb-8">
                  Bezoek onze showroom
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.8969837043844!2d4.661944!3d51.859722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42d3f5a7b1b1b%3A0x1b1b1b1b1b1b1b1b!2sEdisonweg%208B%2C%20Alblasserdam!5e0!3m2!1snl!2snl!4v1234567890"
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
                Liever direct een offerte?
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Vraag vrijblijvend een offerte aan en ontvang binnen 48 uur een voorstel op maat.
              </p>
              <a
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 bg-white text-gold px-8 py-3 hover:bg-cream transition-colors"
              >
                Offerte aanvragen
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
