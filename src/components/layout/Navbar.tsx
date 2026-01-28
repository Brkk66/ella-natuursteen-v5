"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const productenLinks = [
  { href: "/producten/keukenbladen", label: "Keukenbladen" },
  { href: "/producten/raamdorpels", label: "Raamdorpels" },
  { href: "/producten/vensterbanken", label: "Vensterbanken" },
  { href: "/producten/wastafels", label: "Wastafels" },
  { href: "/producten/bbq-blad", label: "BBQ-blad" },
  { href: "/producten/openhaarden", label: "Openhaarden & Schouw" },
  { href: "/producten/tafelbladen", label: "Tafelbladen" },
  { href: "/producten/spoelbakken", label: "Spoelbakken" },
  { href: "/producten/kranen", label: "Kranen" },
  { href: "/producten/accessoires", label: "Accessoires" },
];

const materialenLinks = [
  { href: "/materialen/natuursteen", label: "Natuursteen" },
  { href: "/materialen/composiet", label: "Composiet" },
  { href: "/materialen/keramiek", label: "Keramiek" },
];

const tegelsLinks = [
  { href: "/tegels/natuursteen", label: "Natuursteen Tegels" },
  { href: "/tegels/wandtegels", label: "Wandtegels" },
  { href: "/tegels/keramische-tegels", label: "Keramische Tegels" },
  { href: "/tegels/keramisch-parket", label: "Keramisch Parket" },
  { href: "/tegels/vintage", label: "Vintage Tegels" },
];

const zakelijkLinks = [
  { href: "/bouwsector", label: "Bouwsector" },
  { href: "/keukens", label: "Keukenbedrijven" },
];

const mobileNavLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/producten/keukenbladen", label: "Producten", hasSubmenu: true, submenu: productenLinks },
  { href: "/materialen/natuursteen", label: "Materialen", hasSubmenu: true, submenu: materialenLinks },
  { href: "/tegels/natuursteen", label: "Tegels", hasSubmenu: true, submenu: tegelsLinks },
  { href: "/bouwsector", label: "Zakelijk", hasSubmenu: true, submenu: zakelijkLinks },
  { href: "/aanbiedingen", label: "Aanbiedingen" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col"
              >
                <span
                  className={`text-xl sm:text-2xl lg:text-3xl font-serif tracking-wide transition-colors duration-500 ${
                    isScrolled ? "text-stone" : "text-white"
                  }`}
                >
                  Ella
                </span>
                <span
                  className={`text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-colors duration-500 ${
                    isScrolled ? "text-stone-light" : "text-white/80"
                  }`}
                >
                  Natuursteen
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Home */}
              <Link
                href="/"
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-stone" : "text-white"
                }`}
              >
                Home
              </Link>

              {/* Over Ons */}
              <Link
                href="/over-ons"
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-stone" : "text-white"
                }`}
              >
                Over Ons
              </Link>

              {/* Producten Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("producten")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                    isScrolled ? "text-stone" : "text-white"
                  }`}
                >
                  Producten
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "producten" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "producten" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-white rounded-xl shadow-xl p-6 min-w-[500px] grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-stone-light mb-3">Producten</p>
                          {productenLinks.slice(0, 4).map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block py-2 text-stone hover:text-gold transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-stone-light mb-3">&nbsp;</p>
                          {productenLinks.slice(4).map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block py-2 text-stone hover:text-gold transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                        <div className="col-span-2 pt-4 mt-4 border-t border-sand-dark">
                          <Link
                            href="/aanbiedingen"
                            className="text-gold hover:text-gold-dark transition-colors text-sm font-medium"
                          >
                            Bekijk alle aanbiedingen →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Materialen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("materialen")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                    isScrolled ? "text-stone" : "text-white"
                  }`}
                >
                  Materialen
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "materialen" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "materialen" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-white rounded-xl shadow-xl p-6 min-w-[300px]">
                        <p className="text-xs uppercase tracking-wider text-stone-light mb-3">Onze materialen</p>
                        {materialenLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-2 text-stone hover:text-gold transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tegels Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("tegels")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                    isScrolled ? "text-stone" : "text-white"
                  }`}
                >
                  Tegels
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "tegels" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "tegels" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-white rounded-xl shadow-xl p-6 min-w-[280px]">
                        <p className="text-xs uppercase tracking-wider text-stone-light mb-3">Onze tegels</p>
                        {tegelsLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-2 text-stone hover:text-gold transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Zakelijk Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("zakelijk")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                    isScrolled ? "text-stone" : "text-white"
                  }`}
                >
                  Zakelijk
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "zakelijk" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "zakelijk" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-white rounded-xl shadow-xl p-6 min-w-[250px]">
                        <p className="text-xs uppercase tracking-wider text-stone-light mb-3">Voor professionals</p>
                        {zakelijkLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-2 text-stone hover:text-gold transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Aanbiedingen */}
              <Link
                href="/aanbiedingen"
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-gold" : "text-gold"
                }`}
              >
                Aanbiedingen
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-stone" : "text-white"
                }`}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                href="/offerte"
                className={`flex items-center gap-2 px-5 py-2.5 text-sm tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? "bg-gold text-white hover:bg-gold-dark"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-stone"
                }`}
              >
                Offerte aanvragen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${
                isMobileMenuOpen
                  ? "text-stone"
                  : isScrolled
                  ? "text-stone"
                  : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col pt-20 sm:pt-24 px-6 sm:px-8 pb-8">
                {mobileNavLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)}
                          className="flex items-center justify-between w-full py-3 text-base text-stone border-b border-sand-dark"
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === link.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-sand/50"
                            >
                              {link.submenu?.map((sublink) => (
                                <Link
                                  key={sublink.href}
                                  href={sublink.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 px-4 text-sm text-stone-light hover:text-gold transition-colors"
                                >
                                  {sublink.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-base border-b border-sand-dark transition-colors ${
                          link.label === "Aanbiedingen" ? "text-gold" : "text-stone hover:text-gold"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 space-y-3"
                >
                  <Link
                    href="/offerte"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold text-white text-sm text-center hover:bg-gold-dark transition-colors rounded-lg"
                  >
                    Offerte aanvragen
                  </Link>
                  <Link
                    href="tel:+31781234567"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-stone text-white text-sm text-center hover:bg-stone-light transition-colors rounded-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Bel ons
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
