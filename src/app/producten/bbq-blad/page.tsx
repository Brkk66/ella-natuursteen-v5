import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "BBQ-blad",
  subtitle: "Voor buitenkeukens",
  description: "Een BBQ-blad van natuursteen is de perfecte basis voor uw buitenkeuken. Hittebestendig, weerbestendig en stijlvol. Wij maken BBQ-bladen op maat, inclusief uitsparingen voor uw apparatuur.",
  features: [
    "Op maat gemaakt",
    "Hittebestendig materiaal",
    "Weerbestendig",
    "Uitsparingen op maat",
    "Diverse diktes beschikbaar",
    "UV-bestendig",
  ],
  materials: [
    { name: "Graniet", description: "Ideaal voor buiten, vorstbestendig" },
    { name: "Keramiek", description: "Extreem hittebestendig" },
    { name: "Composiet", description: "Onderhoudsarm en sterk" },
    { name: "Hardsteen", description: "Robuust en tijdloos" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
};

export default async function BBQBladPage() {
  const data = await getProductPagina("bbq-blad");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="BBQ Blad" defaultData={defaultData} />
    </Suspense>
  );
}
