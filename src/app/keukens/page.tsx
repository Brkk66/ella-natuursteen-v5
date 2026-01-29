import { Suspense } from "react";
import { getKeukens } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/client";
import KeukensContent from "./KeukensContent";

export const revalidate = 60;

export default async function KeukensPage() {
  const data = await getKeukens();

  // Transform images
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    voordelenAfbeeldingen: data.voordelenAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <KeukensContent data={transformedData} />
    </Suspense>
  );
}
