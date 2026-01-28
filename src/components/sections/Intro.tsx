"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Default values
const defaultStats = [
  { value: "500+", label: "Projecten" },
  { value: "100%", label: "Maatwerk" },
  { value: "5★", label: "Reviews" },
];

interface IntroProps {
  subtitle?: string;
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  yearsExperience?: number;
  stats?: { value: string; label: string }[];
  buttonText?: string;
}

export function Intro({
  subtitle = "Over Ella Natuursteen",
  title = "Maatwerk & Vakmanschap",
  paragraph1 = "Bij Ella Natuursteen combineren we ambachtelijk vakmanschap met moderne precisie. Al jaren zijn wij specialist in het leveren en plaatsen van exclusief natuursteen.",
  paragraph2 = "Van een elegant marmeren keukenblad tot een complete badkamer in graniet — wij begeleiden u van advies tot en met de perfecte afwerking.",
  yearsExperience = 25,
  stats = defaultStats,
  buttonText = "Lees ons verhaal",
}: IntroProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-sand overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1"
          >
            {/* Main Image - Large rounded */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 w-[75%] sm:w-[70%] h-[65%] sm:h-[70%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop"
                alt="Vakman aan het werk met natuursteen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 35vw"
              />
            </motion.div>

            {/* Secondary Image - Small square */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[55%] sm:w-[55%] h-[45%] sm:h-[50%] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl"
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
              className="absolute top-[55%] sm:top-[60%] right-[30%] sm:right-[35%] bg-gold text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg z-10"
            >
              <span className="block text-2xl sm:text-3xl font-serif">{yearsExperience}+</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90">Jaar ervaring</span>
            </motion.div>

            {/* Decorative dots - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 opacity-20">
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              {subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-4 sm:mb-6 leading-tight">
              {title.includes("&") ? (
                <>
                  {title.split("&")[0].trim()} &<br />{title.split("&")[1]?.trim()}
                </>
              ) : (
                title
              )}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-stone-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              <p>{paragraph1}</p>
              <p className="hidden sm:block">{paragraph2}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 py-4 sm:py-6 border-y border-sand-dark">
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-serif text-stone">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-stone-light">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/over-ons"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-stone text-white text-sm rounded-full hover:bg-stone-light transition-colors"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
