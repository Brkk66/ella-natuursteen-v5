"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

const features = [
  "Volop inspiratie",
  "Exclusieve materialen",
  "Vakkundige montage",
];

export function FeaturedProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-stone relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="bg-sand p-8 lg:p-12 rounded-3xl shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span className="text-gold text-sm font-medium">Nieuwe editie</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone mb-4 leading-tight">
                Laat je inspireren door ons
                <span className="text-gold"> lookbook</span>
              </h2>

              <p className="text-stone-light mb-8 leading-relaxed">
                Vraag gratis ons exclusieve natuursteen lookbook aan! Laat je inspireren door prachtige projecten en ontdek de mogelijkheden voor uw interieur.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-stone-light text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/lookbook"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-white rounded-full hover:bg-gold-dark transition-colors"
                >
                  Ontvang ons lookbook
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-stone hover:text-gold transition-colors"
                >
                  Of maak direct een afspraak
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[600px]">
            {/* Main Image */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[85%] h-[75%] rounded-3xl overflow-hidden shadow-2xl"
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
              className="absolute bottom-0 left-0 w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-xl border-4 border-stone"
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
              className="absolute top-[65%] right-[5%] bg-white p-5 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">500+</span>
                <span className="text-xs text-stone-light uppercase tracking-wider">Tevreden klanten</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
