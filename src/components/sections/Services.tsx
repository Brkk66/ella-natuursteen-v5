"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Keukenbladen",
    description: "Elegant en duurzaam",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    href: "/diensten/keukenbladen",
    size: "large",
  },
  {
    title: "Badkamers",
    description: "Luxe wellness",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop",
    href: "/diensten/badkamers",
    size: "small",
  },
  {
    title: "Vloeren & Wanden",
    description: "Tijdloze elegantie",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop",
    href: "/diensten/vloeren-wanden",
    size: "small",
  },
  {
    title: "Maatwerk",
    description: "Uniek voor u",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    href: "/diensten/maatwerk",
    size: "large",
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Onze Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-4">
            Onze Toepassingen
          </h2>
          <p className="text-stone-light max-w-2xl mx-auto">
            Van keukenbladen tot complete badkamers — ontdek de mogelijkheden.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Large Card - Keukenbladen */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Link href={services[0].href} className="group block h-full">
              <div className="relative h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gold/90 text-white text-xs uppercase tracking-wider rounded-full mb-3">
                        Populair
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-serif text-white mb-2">
                        {services[0].title}
                      </h3>
                      <p className="text-white/70">{services[0].description}</p>
                    </div>
                    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-stone group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Small Cards */}
          {services.slice(1, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <Link href={service.href} className="group block">
                <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-serif text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-sm">{service.description}</p>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-gold transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Wide Card - Maatwerk */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Link href={services[3].href} className="group block">
              <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-white mb-1">
                        {services[3].title}
                      </h3>
                      <p className="text-white/70 text-sm">{services[3].description}</p>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-gold transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white rounded-full hover:bg-gold-dark transition-colors"
          >
            Bekijk alle diensten
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
