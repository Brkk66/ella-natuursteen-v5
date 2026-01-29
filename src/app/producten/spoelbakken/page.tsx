import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Spoelbakken",
  subtitle: "Functioneel design",
  description: "Een spoelbak van natuursteen of composiet past perfect bij uw keukenblad. Wij leveren ondergebouwde, opgebouwde en vlakgemonteerde spoelbakken in diverse uitvoeringen.",
  features: [
    "Diverse montage opties",
    "Passend bij elk blad",
    "Ruime keuze in formaten",
    "Onderhoudsvriendelijk",
    "Duurzame materialen",
    "Strakke afwerking",
  ],
  materials: [
    { name: "Graniet", description: "Robuust en tijdloos" },
    { name: "Composiet", description: "Naadloos te integreren" },
    { name: "RVS", description: "Hygiënisch en praktisch" },
    { name: "Keramiek", description: "Klassiek en elegant" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
};

export default async function SpoelbakkenPage() {
  const data = await getProductPagina("spoelbakken");
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent data={transformedData} productName="Spoelbakken" defaultData={defaultData} />
    </Suspense>
  );
}
