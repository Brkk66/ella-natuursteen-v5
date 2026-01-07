"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Users, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Maatwerk & Advies",
    description:
      "Persoonlijk advies en op maat gemaakte oplossingen voor elk project.",
  },
  {
    icon: Shield,
    title: "Hoogwaardige Materialen",
    description:
      "Alleen de beste natuursteen, direct van gerenommeerde steenhouwerijen.",
  },
  {
    icon: Award,
    title: "Vakkundige Plaatsing",
    description:
      "Onze ervaren vakmensen zorgen voor een perfecte afwerking.",
  },
  {
    icon: Users,
    title: "Persoonlijk & Betrouwbaar",
    description:
      "Een familiebedrijf met persoonlijke aandacht en service.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-sand">
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
            Onze Belofte
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-3 sm:mb-4">
            Waarom Ella Natuursteen?
          </h2>
          <p className="text-stone-light text-sm sm:text-base max-w-2xl mx-auto">
            Ervaring, vakmanschap en passie voor natuursteen.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg lg:text-xl font-serif text-stone mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-light text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
