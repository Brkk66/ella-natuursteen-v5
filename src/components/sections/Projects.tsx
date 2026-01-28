"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Default values
const defaultProjects = [
  {
    title: "Familie Bakker",
    location: "Rotterdam",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    href: "/projecten/familie-bakker",
  },
  {
    title: "Villa Kralingen",
    location: "Kralingen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    href: "/projecten/villa-kralingen",
  },
  {
    title: "Penthouse Haven",
    location: "Rotterdam",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    href: "/projecten/penthouse-haven",
  },
  {
    title: "Woning De Vries",
    location: "Den Haag",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop",
    href: "/projecten/woning-devries",
  },
];

interface ProjectItem {
  title: string;
  location: string;
  image: string;
  href: string;
}

interface ProjectsProps {
  subtitle?: string;
  title?: string;
  projects?: ProjectItem[];
  buttonText?: string;
}

export function Projects({
  subtitle = "Inspiratie",
  title = "Binnenkijken bij onze klanten",
  projects = defaultProjects,
  buttonText = "Bekijk alle binnenkijkers",
}: ProjectsProps) {
  // Use provided projects or fallback to defaults
  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-sand overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-stone mb-3 sm:mb-4">
            {title}
          </h2>
        </motion.div>

        {/* Projects Scroll */}
        <div className="relative -mx-5 sm:-mx-6 lg:mx-0">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide px-5 sm:px-6 lg:px-0">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] snap-start"
              >
                <Link href={project.href} className="group block">
                  {/* Image with rounded top */}
                  <div className="relative aspect-[3/4] rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[100px] rounded-b-xl sm:rounded-b-2xl overflow-hidden shadow-lg sm:shadow-xl mb-3 sm:mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Caption */}
                  <div className="flex items-center justify-between px-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-serif text-stone group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-light">{project.location}</p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-4 sm:mt-8"
        >
          <Link
            href="/projecten"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-white text-sm rounded-full hover:bg-gold-dark transition-colors"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
