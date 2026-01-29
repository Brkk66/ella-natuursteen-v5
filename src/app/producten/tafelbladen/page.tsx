import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Tafelbladen",
  subtitle: "Uniek centerpiece",
  description: "Een tafelblad van natuursteen maakt van elke tafel een uniek meubelstuk. Ideaal voor eettafels, salontafels of vergadertafels. Wij maken tafelbladen op maat in diverse steensoorten.",
  features: [
    "Op maat gemaakt",
    "Unieke tekening",
    "Diverse vormen mogelijk",
    "Hittebestendig",
    "Krasbestendig oppervlak",
    "Jarenlang mooi",
  ],
  materials: [
    { name: "Marmer", description: "Luxe en unieke aders" },
    { name: "Graniet", description: "Robuust en praktisch" },
    { name: "Keramiek", description: "Modern en onderhoudsvriendelijk" },
    { name: "Composiet", description: "Uniform en vlekbestendig" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
};

export default async function TafelbladenPage() {
  const data = await getProductPagina("tafelbladen");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Tafelbladen" defaultData={defaultData} />
    </Suspense>
  );
}
