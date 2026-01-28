import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aanbiedingen",
  description: "Bekijk onze scherpe aanbiedingen op natuursteen keukenbladen en aanrechtbladen. Composiet vanaf €99 per strekkende meter.",
  openGraph: {
    title: "Aanbiedingen - Ella Natuursteen",
    description: "Scherpe aanbiedingen op natuursteen keukenbladen.",
  },
};

export default function AanbiedingenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
