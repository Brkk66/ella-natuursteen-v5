"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const materials = [
  {
    title: "Natuursteen",
    subtitle: "Marmer, Graniet, Hardsteen",
    description: "Tijdloze elegantie met unieke natuurlijke patronen",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2127&auto=format&fit=crop",
    href: "/materialen/natuursteen",
    color: "bg-stone",
  },
  {
    title: "Keramiek",
    subtitle: "Groot Formaat Tegels",
    description: "Modern en onderhoudsvriendelijk alternatief",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&w=2080&auto=format&fit=crop",
    href: "/materialen/keramiek",
    color: "bg-gold",
  },
  {
    title: "Composiet",
    subtitle: "Quartz & Solid Surface",
    description: "Robuust met eindeloze kleurmogelijkheden",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070&auto=format&fit=crop",
    href: "/materialen/composiet",
    color: "bg-stone-light",
  },
];

export function Materials() {
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
            Ons Assortiment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-4">
            Onze Materialen
          </h2>
          <p className="text-stone-light max-w-2xl mx-auto">
            Ontdek het materiaal dat perfect bij uw project past.
          </p>
        </motion.div>

        {/* Materials Grid - Asymmetric */}
        <div className="grid lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={index === 1 ? "lg:-mt-12" : ""}
            >
              <Link href={material.href} className="group block">
                {/* Image Container with unique shape */}
                <div className="relative mb-6">
                  {/* Background shadow shape */}
                  <div className={`absolute inset-0 ${material.color} rounded-3xl translate-x-3 translate-y-3 opacity-20`} />

                  {/* Image */}
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={material.image}
                      alt={material.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-4 py-2 ${material.color} text-white text-xs uppercase tracking-wider rounded-full`}>
                        {material.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-stone mb-2 group-hover:text-gold transition-colors">
                      {material.title}
                    </h3>
                    <p className="text-stone-light text-sm">
                      {material.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-stone/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-stone group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
