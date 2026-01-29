import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Openhaarden & Schouw",
  subtitle: "Een sieraad in uw woning",
  description: "Een sieraad in uw woning is zonder twijfel de open haard. Een schouw of haardombouw van natuursteen biedt niet alleen esthetische waarde, maar ook brandveiligheid en verhoogt de waarde van uw woning. Wij leveren zowel standaard ontwerpen als volledig op maat gemaakte schouwen.",
  features: [
    "Standaard én maatwerk",
    "Hittebestendig materiaal",
    "Verhoogt woningwaarde",
    "Brandveilig",
    "Inclusief montage",
    "25 jaar ervaring",
  ],
  materials: [
    { name: "Marmer", description: "Klassieke elegantie" },
    { name: "Graniet", description: "Robuust en tijdloos" },
    { name: "Hardsteen", description: "Stoer en industrieel" },
    { name: "Kalksteen", description: "Warm en landelijk" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
};

export default async function OpenHaardenPage() {
  const data = await getProductPagina("openhaarden");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Openhaarden" defaultData={defaultData} />
    </Suspense>
  );
}
