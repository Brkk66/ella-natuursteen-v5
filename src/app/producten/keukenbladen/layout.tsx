import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keukenbladen op Maat",
  description: "Keukenbladen van natuursteen, composiet en keramiek. Volledig op maat gemaakt met levertijd van 5-7 werkdagen. Inclusief inmeten.",
  openGraph: {
    title: "Keukenbladen - Ella Natuursteen",
    description: "Maatwerk keukenbladen van natuursteen, composiet en keramiek.",
  },
};

export default function KeukenbladenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
