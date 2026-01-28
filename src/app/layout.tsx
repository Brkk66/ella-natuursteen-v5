import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

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
  title: {
    default: "Ella Natuursteen | Specialist in Natuursteen Alblasserdam",
    template: "%s | Ella Natuursteen",
  },
  description:
    "Al 25 jaar specialist in maatwerk natuursteen voor keuken, badkamer en interieur. Bezoek onze 600m² showroom in Alblasserdam.",
  keywords: [
    "natuursteen",
    "keukenblad",
    "marmer",
    "graniet",
    "composiet",
    "keramiek",
    "Alblasserdam",
    "tegels",
    "aanrechtblad",
  ],
  authors: [{ name: "Ella Natuursteen" }],
  creator: "Ella Natuursteen",
  metadataBase: new URL("https://www.ellanatuursteen.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Ella Natuursteen",
    title: "Ella Natuursteen | Specialist in Natuursteen",
    description: "Al 25 jaar specialist in maatwerk natuursteen. Bezoek onze showroom in Alblasserdam.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ellanatuursteen.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
