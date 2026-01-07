import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ella Natuursteen | Tijdloze Luxe in Natuursteen",
  description:
    "Maatwerk natuursteen voor keuken, badkamer en interieur. Ontdek ons assortiment marmer, graniet, keramiek en composiet.",
  keywords: [
    "natuursteen",
    "marmer",
    "graniet",
    "keukenblad",
    "badkamer",
    "maatwerk",
    "Rotterdam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
