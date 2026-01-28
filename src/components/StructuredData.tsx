export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ellanatuursteen.nl/#organization",
    name: "Ella Natuursteen",
    description: "Specialist in maatwerk natuursteen voor keuken, badkamer en interieur. Al 25 jaar vakmanschap in Alblasserdam.",
    url: "https://www.ellanatuursteen.nl",
    logo: "https://www.ellanatuursteen.nl/logo.png",
    image: "https://www.ellanatuursteen.nl/showroom.jpg",
    telephone: "+31788795045",
    email: "info@ellanatuursteen.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Edisonweg 8 B",
      addressLocality: "Alblasserdam",
      postalCode: "2952 AD",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.8597,
      longitude: 4.6619,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    sameAs: [
      "https://www.facebook.com/ellanatuursteen",
      "https://www.instagram.com/ellanatuursteen",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Natuursteen Producten",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Keukenbladen",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Granieten keukenblad" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Marmeren keukenblad" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Composiet keukenblad" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Keramisch keukenblad" } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ellanatuursteen.nl/#website",
    url: "https://www.ellanatuursteen.nl",
    name: "Ella Natuursteen",
    description: "Specialist in maatwerk natuursteen voor keuken, badkamer en interieur",
    publisher: {
      "@id": "https://www.ellanatuursteen.nl/#organization",
    },
    inLanguage: "nl-NL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  image,
  category,
}: {
  name: string;
  description: string;
  image?: string;
  category: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image || "https://www.ellanatuursteen.nl/showroom.jpg",
    category,
    brand: {
      "@type": "Brand",
      name: "Ella Natuursteen",
    },
    manufacturer: {
      "@id": "https://www.ellanatuursteen.nl/#organization",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@id": "https://www.ellanatuursteen.nl/#organization",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
