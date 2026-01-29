import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Accessoires",
  subtitle: "De details maken het verschil",
  description: "Maak uw keuken of badkamer helemaal af met onze accessoires. Van zeephouders tot snijplanken, van afdruiprekken tot onderhoudsmiddelen. Alles om uw natuursteen optimaal te gebruiken en te onderhouden.",
  features: [
    "Passend bij elk interieur",
    "Hoogwaardige materialen",
    "Praktisch en stijlvol",
    "Onderhoudsmiddelen",
    "Beschermingsproducten",
    "Snelle levering",
  ],
  materials: [
    { name: "Snijplanken", description: "Bescherm uw werkblad" },
    { name: "Onderhoud", description: "Reinigings- en verzorgingsproducten" },
    { name: "Afdichtmiddelen", description: "Bescherm tegen vlekken" },
    { name: "Decoratie", description: "Stijlvolle afwerking" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
};

export default async function AccessoiresPage() {
  const data = await getProductPagina("accessoires");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Accessoires" defaultData={defaultData} />
    </Suspense>
  );
}
