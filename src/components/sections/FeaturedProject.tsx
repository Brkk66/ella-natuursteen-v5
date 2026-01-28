"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

// Default values
const defaultFeatures = [
  "Volledig op maat gemaakt",
  "Keuze uit 100+ materialen",
  "Vakkundige montage",
];

interface FeaturedProjectProps {
  badge?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  features?: string[];
  primaryButton?: string;
  secondaryButton?: string;
  statsValue?: string;
  statsLabel?: string;
}

export function FeaturedProject({
  badge = "Maatwerk",
  title = "Uw droomproject in",
  titleAccent = "natuursteen",
  description = "Van een unieke eettafel tot een luxe keukenblad — wij maken het volledig op maat. Vertel ons uw wensen en wij realiseren het.",
  features = defaultFeatures,
  primaryButton = "Start uw project",
  secondaryButton = "Keukens op maat",
  statsValue = "500+",
  statsLabel = "Tevreden klanten",
}: FeaturedProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Use provided features or fallback to defaults
  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

  return (
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-32 bg-stone relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="bg-sand p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 rounded-full mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full"></span>
                <span className="text-gold text-xs sm:text-sm font-medium">{badge}</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-stone mb-3 sm:mb-4 leading-tight">
                {title}
                <span className="text-gold"> {titleAccent}</span>
              </h2>

              <p className="text-stone-light text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                {description}
              </p>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {displayFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold" />
                    </div>
                    <span className="text-stone-light text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/offerte"
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gold text-white text-sm rounded-full hover:bg-gold-dark transition-colors"
                >
                  {primaryButton}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/keukens"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-stone text-sm hover:text-gold transition-colors"
                >
                  {secondaryButton}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-[600px]">
            {/* Main Image */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[80%] sm:w-[85%] h-[70%] sm:h-[75%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
                alt="Exclusief natuursteen project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 85vw, 50vw"
              />
            </motion.div>

            {/* Overlapping Small Image */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-[45%] sm:w-[50%] h-[40%] sm:h-[45%] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 sm:border-4 border-stone"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070&auto=format&fit=crop"
                alt="Natuursteen detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-[60%] sm:top-[65%] right-[5%] bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
            >
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl font-serif text-gold">{statsValue}</span>
                <span className="text-[10px] sm:text-xs text-stone-light uppercase tracking-wider">{statsLabel}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
