"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Users, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Maatwerk & Advies",
    description:
      "Persoonlijk advies en op maat gemaakte oplossingen voor elk project. Wij denken met u mee van ontwerp tot realisatie.",
  },
  {
    icon: Shield,
    title: "Hoogwaardige Materialen",
    description:
      "Alleen de beste natuursteen, direct van gerenommeerde steenhouwerijen. Gecertificeerd en duurzaam.",
  },
  {
    icon: Award,
    title: "Vakkundige Plaatsing",
    description:
      "Onze ervaren vakmensen zorgen voor een perfecte afwerking. Met oog voor detail en precisie.",
  },
  {
    icon: Users,
    title: "Persoonlijk & Betrouwbaar",
    description:
      "Een familiebedrijf met persoonlijke aandacht. Wij staan voor eerlijkheid, kwaliteit en service.",
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
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-sand">
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
            Onze Belofte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-4">
            Waarom Ella Natuursteen?
          </h2>
          <p className="text-stone-light max-w-2xl mx-auto">
            Ervaring, vakmanschap en passie voor natuursteen — dat is wat ons
            drijft bij elk project.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-stone mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
