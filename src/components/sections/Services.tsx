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
  },
  {
    title: "Badkamers",
    description: "Luxe wellness",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop",
    href: "/diensten/badkamers",
  },
  {
    title: "Vloeren & Wanden",
    description: "Tijdloze elegantie",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop",
    href: "/diensten/vloeren-wanden",
  },
  {
    title: "Maatwerk",
    description: "Uniek voor u",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    href: "/diensten/maatwerk",
  },
];

export function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Onze Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-3 sm:mb-4">
            Onze Toepassingen
          </h2>
          <p className="text-stone-light text-sm sm:text-base max-w-2xl mx-auto">
            Van keukenbladen tot complete badkamers — ontdek de mogelijkheden.
          </p>
        </motion.div>

        {/* Mobile: Simple Grid / Desktop: Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Large Card - Keukenbladen (spans 2 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <Link href={services[0].href} className="group block h-full">
              <div className="relative h-[280px] sm:h-[350px] lg:h-full lg:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="inline-block px-2.5 sm:px-3 py-1 bg-gold/90 text-white text-[10px] sm:text-xs uppercase tracking-wider rounded-full mb-2 sm:mb-3">
                        Populair
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-1 sm:mb-2">
                        {services[0].title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">{services[0].description}</p>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-stone group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Small Cards */}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <Link href={service.href} className="group block">
                <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif text-white mb-0.5 sm:mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm">{service.description}</p>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-gold transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-white text-sm rounded-full hover:bg-gold-dark transition-colors"
          >
            Bekijk alle diensten
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
