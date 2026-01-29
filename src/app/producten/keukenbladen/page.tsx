import { Suspense } from "react";
import { getProductPagina } from "../../../../sanity/lib/queries";
import { urlFor } from "../../../../sanity/lib/client";
import ProductPageContent from "@/components/ProductPageContent";

export const revalidate = 60;

const defaultData = {
  title: "Keukenbladen",
  subtitle: "Topkwaliteit op maat",
  description: "Het aanrechtblad is een zeer belangrijk aspect in uw keuken. Wij maken uw keukenblad in onze eigen ambachtelijke steenzagerij, met keuze uit verschillende materialen en afwerkingen. Wij controleren de hele productketen: van het zoeken van de bron tot het plaatsen op locatie.",
  features: [
    "Volledig op maat gemaakt",
    "Eigen ambachtelijke werkplaats",
    "Inclusief inmeten",
    "Vakkundige montage",
    "Levertijd 5-7 werkdagen",
    "25 jaar ervaring",
  ],
  materials: [
    { name: "Natuursteen", description: "Tijdloos met unieke tekening" },
    { name: "Composiet", description: "Vlekbestendig en modern" },
    { name: "Keramiek", description: "Krasbestendig en hittebestendig" },
    { name: "Dekton", description: "Ultra duurzaam en UV-bestendig" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2070",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
  ],
  heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070",
};

export default async function KeukenbladenPage() {
  const data = await getProductPagina("keukenbladen");

  // Transform images
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    galerijAfbeeldingen: data.galerijAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ProductPageContent
        data={transformedData}
        productName="Keukenbladen"
        defaultData={defaultData}
      />
    </Suspense>
  );
}
