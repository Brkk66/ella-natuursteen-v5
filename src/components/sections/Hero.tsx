"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

const usps = [
  "Gratis adviesgesprek",
  "Eigen montage",
  "30 jaar ervaring",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-sand">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2940&auto=format&fit=crop"
          alt="Luxe keuken met natuursteen aanrechtblad"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-gold text-sm lg:text-base tracking-[0.3em] uppercase mb-6">
                Sinds 1994
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl text-white font-serif leading-[1.1] mb-6"
            >
              Ella Natuursteen
              <br />
              <span className="text-gold">&amp; Maatwerk</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed"
            >
              Waar uw droominterieur werkelijkheid wordt.
              Van marmer tot graniet — exclusief voor u vervaardigd.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white text-sm tracking-wide hover:bg-gold-dark transition-all duration-300 rounded-full"
              >
                Maak een afspraak
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projecten"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-sm tracking-wide border border-white/30 hover:bg-white hover:text-stone transition-all duration-300 rounded-full"
              >
                Bekijk onze projecten
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* USP Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {usps.map((usp, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="text-stone text-sm font-medium">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
