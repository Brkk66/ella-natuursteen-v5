"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Calendar } from "lucide-react";

const contactOptions = [
  {
    icon: MapPin,
    title: "Bezoek onze showroom",
    description: "Bekijk onze collectie en laat u inspireren",
  },
  {
    icon: Phone,
    title: "Bel voor advies",
    description: "Vrijblijvend telefonisch advies op maat",
  },
  {
    icon: Calendar,
    title: "Afspraak op locatie",
    description: "Wij komen graag bij u langs voor een opmeting",
  },
];

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-stone relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Neem Contact Op
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Klaar om uw project
              <br />
              <span className="text-gold">te bespreken?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-12">
              Plan een afspraak of vraag vrijblijvend advies aan. Wij helpen u
              graag bij het vinden van de perfecte steen voor uw project.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <option.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">{option.title}</h3>
                <p className="text-white/60 text-sm">{option.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gold text-white text-sm tracking-wide hover:bg-gold-dark transition-all duration-300"
            >
              Plan een afspraak
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
