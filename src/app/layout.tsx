import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a1a",
};

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
        {/* Preconnect to external origins for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
