"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { urlFor } from "../../sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  image: any;
  description?: string;
  group?: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-stone-light">
        Producten worden binnenkort toegevoegd.
      </div>
    );
  }

  // Group products by their group field
  const groupedProducts = products.reduce((acc, product) => {
    const groupName = product.group || "Overige";
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const groupNames = Object.keys(groupedProducts);
  const hasMultipleGroups = groupNames.length > 1 || (groupNames.length === 1 && groupNames[0] !== "Overige");

  return (
    <>
      {hasMultipleGroups ? (
        // Display with group headers
        <div className="space-y-12">
          {groupNames.map((groupName) => (
            <div key={groupName}>
              <h3 className="text-2xl font-serif text-stone mb-6 border-b border-gold/30 pb-2">
                {groupName}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupedProducts[groupName].map((product) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={urlFor(product.image).width(400).height(400).url()}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-stone text-center truncate">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Display without group headers (single group or no groups)
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProduct(product)}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="relative aspect-square">
              <Image
                src={urlFor(product.image).width(400).height(400).url()}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-stone text-center truncate">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5 text-stone" />
              </button>

              {/* Image */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full">
                <Image
                  src={urlFor(selectedProduct.image).width(1200).height(900).url()}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone mb-2">
                  {selectedProduct.name}
                </h3>
                {selectedProduct.description && (
                  <p className="text-stone-light text-sm">
                    {selectedProduct.description}
                  </p>
                )}
                <a
                  href="/offerte"
                  className="inline-flex items-center gap-2 mt-4 bg-gold text-white px-6 py-2.5 text-sm hover:bg-gold-dark transition-colors"
                >
                  Offerte aanvragen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
