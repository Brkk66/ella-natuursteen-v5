import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons",
  description: "Al 25 jaar specialist in natuursteen. Ontdek ons verhaal, onze 600m² showroom en ons vakmanschap in Alblasserdam.",
  openGraph: {
    title: "Over Ella Natuursteen",
    description: "Al 25 jaar specialist in natuursteen met een 600m² showroom in Alblasserdam.",
  },
};

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
