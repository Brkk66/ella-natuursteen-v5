"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Intro() {
  return (
    <section className="py-24 lg:py-32 bg-sand overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Image - Large rounded */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop"
                alt="Vakman aan het werk met natuursteen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 35vw"
              />
            </motion.div>

            {/* Secondary Image - Small square */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Natuursteen detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 55vw, 27vw"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-[60%] right-[35%] bg-gold text-white px-6 py-4 rounded-2xl shadow-lg z-10"
            >
              <span className="block text-3xl font-serif">30+</span>
              <span className="text-xs uppercase tracking-wider opacity-90">Jaar ervaring</span>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gold" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Over Ella Natuursteen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-6 leading-tight">
              Maatwerk &<br />Vakmanschap
            </h2>
            <div className="space-y-4 text-stone-light leading-relaxed mb-8">
              <p>
                Bij Ella Natuursteen combineren we ambachtelijk vakmanschap met
                moderne precisie. Al jaren zijn wij specialist in het leveren en
                plaatsen van exclusief natuursteen voor particuliere en
                zakelijke projecten.
              </p>
              <p>
                Van een elegant marmeren keukenblad tot een complete badkamer in
                graniet — wij begeleiden u van advies tot en met de perfecte
                afwerking.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-sand-dark">
              <div>
                <span className="block text-3xl font-serif text-stone">500+</span>
                <span className="text-sm text-stone-light">Projecten</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-stone">100%</span>
                <span className="text-sm text-stone-light">Maatwerk</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-stone">5★</span>
                <span className="text-sm text-stone-light">Reviews</span>
              </div>
            </div>

            <Link
              href="/over-ons"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-stone text-white rounded-full hover:bg-stone-light transition-colors"
            >
              Lees ons verhaal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
