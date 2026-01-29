import { Suspense } from "react";
import { getOverOns } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/client";
import OverOnsContent from "./OverOnsContent";

export const revalidate = 60;

export default async function OverOnsPage() {
  const data = await getOverOns();

  // Transform images
  const transformedData = data ? {
    ...data,
    heroAfbeelding: data.heroAfbeelding ? urlFor(data.heroAfbeelding).url() : undefined,
    introAfbeelding: data.introAfbeelding ? urlFor(data.introAfbeelding).url() : undefined,
    showroomAfbeeldingen: data.showroomAfbeeldingen?.map((img: any) => urlFor(img).url()) || [],
  } : null;

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <OverOnsContent data={transformedData} />
    </Suspense>
  );
}
