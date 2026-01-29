import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Raamdorpels",
  subtitle: "Duurzaam & stijlvol",
  description: "Raamdorpels van natuursteen beschermen uw kozijnen tegen weersinvloeden en geven uw gevel een luxe uitstraling. Wij leveren raamdorpels op maat in diverse natuursteensoorten.",
  features: [
    "Op maat gemaakt",
    "Weerbestendig materiaal",
    "Diverse afwerkingen",
    "Eenvoudige montage",
    "Lange levensduur",
    "Onderhoudsarm",
  ],
  materials: [
    { name: "Graniet", description: "Extreem duurzaam en vorstbestendig" },
    { name: "Hardsteen", description: "Klassieke Nederlandse uitstraling" },
    { name: "Composiet", description: "Uniform en kleurvast" },
    { name: "Keramiek", description: "Modern en onderhoudsvriendelijk" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
};

export default async function RaamdorpelsPage() {
  const data = await getProductPagina("raamdorpels");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Raamdorpels" defaultData={defaultData} />
    </Suspense>
  );
}
