import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natuursteen",
  description: "Ontdek ons assortiment natuursteen: marmer, graniet, hardsteen en travertijn. Tijdloos materiaal voor keuken en interieur.",
  openGraph: {
    title: "Natuursteen - Ella Natuursteen",
    description: "Marmer, graniet, hardsteen en travertijn voor keuken en interieur.",
  },
};

export default function NatuursteenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
