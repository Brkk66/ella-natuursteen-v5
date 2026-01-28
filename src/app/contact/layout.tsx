import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Ella Natuursteen. Bezoek onze showroom in Alblasserdam of bel 078 879 5045 voor gratis advies.",
  openGraph: {
    title: "Contact - Ella Natuursteen",
    description: "Bezoek onze showroom in Alblasserdam of bel voor gratis advies.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
