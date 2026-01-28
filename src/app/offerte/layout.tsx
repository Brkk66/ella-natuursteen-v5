import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerte Aanvragen",
  description: "Vraag vrijblijvend een offerte aan voor uw natuursteen project. Maatwerk keukenbladen, vensterbanken en meer.",
  openGraph: {
    title: "Offerte Aanvragen - Ella Natuursteen",
    description: "Vrijblijvende offerte voor maatwerk natuursteen.",
  },
};

export default function OfferteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
