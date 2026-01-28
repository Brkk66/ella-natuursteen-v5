"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Keukenbladen", href: "/producten/keukenbladen" },
  { name: "Vensterbanken", href: "/producten/vensterbanken" },
  { name: "Wastafels", href: "/producten/wastafels" },
  { name: "Openhaarden", href: "/producten/openhaarden" },
  { name: "Tafelbladen", href: "/producten/tafelbladen" },
  { name: "Raamdorpels", href: "/producten/raamdorpels" },
  { name: "Spoelbakken", href: "/producten/spoelbakken" },
  { name: "BBQ Blad", href: "/producten/bbq-blad" },
  { name: "Kranen", href: "/producten/kranen" },
  { name: "Accessoires", href: "/producten/accessoires" },
];

interface ProductNavProps {
  currentProduct: string;
}

export function ProductNav({ currentProduct }: ProductNavProps) {
  // Filter out current product and get others
  const otherProducts = products.filter(
    (p) => p.name.toLowerCase() !== currentProduct.toLowerCase()
  );

  return (
    <section className="py-12 sm:py-16 bg-sand border-t border-sand-dark">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-stone-light text-sm">Bekijk ook onze andere producten</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {otherProducts.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-stone hover:bg-gold hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {product.name}
              <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
