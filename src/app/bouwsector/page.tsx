import { Suspense } from "react";
import { getBouwsector } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/client";
import BouwsectorContent from "./BouwsectorContent";

export const revalidate = 60;

export default async function BouwsectorPage() {
  const data = await getBouwsector();

  // Transform images
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    dienstenAfbeeldingen: data.dienstenAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <BouwsectorContent data={transformedData} />
    </Suspense>
  );
}
