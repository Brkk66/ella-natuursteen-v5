import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Kranen",
  subtitle: "De perfecte finishing touch",
  description: "Maak uw keuken of badkamer compleet met een stijlvolle kraan. Wij bieden een selectie van hoogwaardige kranen die perfect aansluiten bij uw natuurstenen blad of wastafel.",
  features: [
    "Diverse stijlen",
    "Premium kwaliteit",
    "Passend bij elk interieur",
    "Duurzame materialen",
    "Eenvoudige installatie",
    "Inclusief garantie",
  ],
  materials: [
    { name: "RVS", description: "Tijdloos en hygiënisch" },
    { name: "Mat zwart", description: "Modern en stijlvol" },
    { name: "Chroom", description: "Klassiek en glanzend" },
    { name: "Geborsteld goud", description: "Luxe accent" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
};

export default async function KranenPage() {
  const data = await getProductPagina("kranen");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Kranen" defaultData={defaultData} />
    </Suspense>
  );
}
