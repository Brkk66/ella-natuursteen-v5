"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/over-ons", label: "Over Ons" },
  { href: "/materialen/natuursteen", label: "Materialen" },
  { href: "/tegels/keramische-tegels", label: "Tegels" },
  { href: "/aanbiedingen", label: "Aanbiedingen" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/producten/keukenbladen", label: "Keukenbladen" },
  { href: "/producten/wastafels", label: "Wastafels" },
  { href: "/producten/vensterbanken", label: "Vensterbanken" },
  { href: "/keukens", label: "Keukens" },
];

export function Footer() {
  return (
    <footer className="bg-stone-light text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 mb-4 sm:mb-0">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif tracking-wide text-white">
                  Ella
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/60">
                  Natuursteen
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Specialist in maatwerk natuursteen voor keuken, badkamer en
              interieur. Vakmanschap en kwaliteit sinds jaar en dag.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-gold transition-colors duration-300 rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-gold transition-colors duration-300 rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-gold transition-colors duration-300 rounded-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-6">
              Navigatie
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-6">
              Diensten
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+31788795045"
                  className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-gold transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                  078 879 5045
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ellanatuursteen.nl"
                  className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-gold transition-colors text-xs sm:text-sm"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                  info@ellanatuursteen.nl
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold mt-0.5" />
                  <span>
                    Edisonweg 8 B
                    <br />
                    2952 AD Alblasserdam
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs lg:text-sm text-white/50">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Ella Natuursteen. Alle rechten voorbehouden.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-gold transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
