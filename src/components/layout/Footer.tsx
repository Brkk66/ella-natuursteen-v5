"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/materialen", label: "Materialen" },
  { href: "/projecten", label: "Projecten" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/diensten/keukenbladen", label: "Keukenbladen" },
  { href: "/diensten/badkamers", label: "Badkamers" },
  { href: "/diensten/vloeren-wanden", label: "Vloeren & Wanden" },
  { href: "/diensten/maatwerk", label: "Maatwerk" },
];

export function Footer() {
  return (
    <footer className="bg-stone-light text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-serif tracking-wide text-white">
                  Ella
                </span>
                <span className="text-xs tracking-[0.3em] uppercase text-white/60">
                  Natuursteen
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Specialist in maatwerk natuursteen voor keuken, badkamer en
              interieur. Vakmanschap en kwaliteit sinds jaar en dag.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Diensten
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+31101234567"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  +31 (0)10 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ellanatuurteen.nl"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  info@ellanatuurteen.nl
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-gold mt-0.5" />
                  <span>
                    Steenweg 123
                    <br />
                    3012 AB Rotterdam
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Ella Natuursteen. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
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
