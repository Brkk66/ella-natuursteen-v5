import { Suspense } from "react";
import { getTegelsVintage } from "../../../../sanity/lib/queries";
import VintageContent from "./VintageContent";

export const revalidate = 60;

export default async function VintagePage() {
  const products = await getTegelsVintage();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <VintageContent products={products} />
    </Suspense>
  );
}
