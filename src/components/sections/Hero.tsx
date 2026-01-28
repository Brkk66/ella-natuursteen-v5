"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

// Default values (huidige content)
const defaultUsps = [
  "Gratis adviesgesprek",
  "Eigen montage",
  "25 jaar ervaring",
];

interface HeroProps {
  subtitle?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  usps?: string[];
  backgroundImage?: string;
}

export function Hero({
  subtitle = "Sinds 1994",
  title = "Ella Natuursteen",
  titleAccent = "& Maatwerk",
  description = "Waar uw droominterieur werkelijkheid wordt. Van marmer tot graniet — exclusief voor u vervaardigd.",
  primaryButton = "Maak een afspraak",
  secondaryButton = "Bekijk onze projecten",
  usps = defaultUsps,
  backgroundImage = "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2940&auto=format&fit=crop",
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-sand">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Luxe keuken met natuursteen aanrechtblad"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay - stronger on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative min-h-[100svh] flex items-center pt-20 pb-32 md:pt-24 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-gold text-xs sm:text-sm lg:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
                {subtitle}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-serif leading-[1.1] mb-4 sm:mb-6"
            >
              {title}
              <br />
              <span className="text-gold">{titleAccent}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-lg leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold text-white text-sm tracking-wide hover:bg-gold-dark transition-all duration-300 rounded-full"
              >
                {primaryButton}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projecten"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm tracking-wide border border-white/30 hover:bg-white hover:text-stone transition-all duration-300 rounded-full"
              >
                {secondaryButton}
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-8 lg:gap-16">
            {usps.map((usp, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold" />
                </div>
                <span className="text-stone text-xs sm:text-sm font-medium">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
