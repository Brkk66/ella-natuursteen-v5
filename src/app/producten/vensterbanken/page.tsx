import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Vensterbanken",
  subtitle: "Elegante afwerking",
  description: "Vensterbanken van natuursteen geven uw interieur een luxe en tijdloze uitstraling. Perfect als afwerking van uw ramen, praktisch en decoratief tegelijk. Wij leveren op maat in diverse steensoorten.",
  features: [
    "Op maat gemaakt",
    "Grote kleurenkeuze",
    "Diverse afwerkingen",
    "Eenvoudige montage",
    "Krasbestendig",
    "Eenvoudig te reinigen",
  ],
  materials: [
    { name: "Graniet", description: "Duurzaam en onderhoudsarm" },
    { name: "Marmer", description: "Klassieke luxe uitstraling" },
    { name: "Composiet", description: "Uniform en vlekbestendig" },
    { name: "Keramiek", description: "Modern en krasbestendig" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
};

export default async function VensterbankenPage() {
  const data = await getProductPagina("vensterbanken");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Vensterbanken" defaultData={defaultData} />
    </Suspense>
  );
}
