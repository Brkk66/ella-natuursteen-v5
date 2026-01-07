"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Familie De Vries",
    location: "Rotterdam",
    rating: 5,
    text: "Fantastische ervaring van begin tot eind. Het marmeren keukenblad is prachtig geworden en de plaatsing was zeer professioneel. Echt vakwerk!",
  },
  {
    name: "M. Jansen",
    location: "Den Haag",
    rating: 5,
    text: "Ella Natuursteen heeft onze badkamer volledig getransformeerd. De persoonlijke aanpak en het oog voor detail maken echt het verschil.",
  },
  {
    name: "R. & T. Bakker",
    location: "Leiden",
    rating: 5,
    text: "Uitstekend advies gekregen over de verschillende steensoorten. De kwaliteit van het graniet en de afwerking overtreffen onze verwachtingen.",
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

export function Testimonials() {
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
            Tevreden Klanten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-4">
            Wat Klanten Zeggen
          </h2>
          <p className="text-stone-light max-w-2xl mx-auto">
            Ontdek waarom onze klanten voor Ella Natuursteen kiezen.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-light leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-medium text-stone">{testimonial.name}</p>
                <p className="text-sm text-stone-light">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
