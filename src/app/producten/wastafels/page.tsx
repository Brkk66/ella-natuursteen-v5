import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Wastafels",
  subtitle: "Luxe voor uw badkamer",
  description: "Een wastafel van natuursteen is het pronkstuk van uw badkamer. Uniek, duurzaam en tijdloos. Wij maken wastafels en wastafelbladen volledig op maat, passend bij uw interieur.",
  features: [
    "Op maat gemaakt",
    "Unieke tekening per steen",
    "Diverse opstellingen mogelijk",
    "Inclusief uitsparing kraan",
    "Waterbestendig afgewerkt",
    "Eenvoudig te onderhouden",
  ],
  materials: [
    { name: "Graniet", description: "Vlekbestendig en duurzaam" },
    { name: "Marmer", description: "Luxe uitstraling met aders" },
    { name: "Composiet", description: "Naadloze afwerking mogelijk" },
    { name: "Keramiek", description: "Hygiënisch en modern" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
};

export default async function WastafelsPage() {
  const data = await getProductPagina("wastafels");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Wastafels" defaultData={defaultData} />
    </Suspense>
  );
}
