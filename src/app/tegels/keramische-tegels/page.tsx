import { Suspense } from "react";
import { getTegelsKeramische } from "../../../../sanity/lib/queries";
import KeramischeTegelsContent from "./KeramischeTegelsContent";

export const revalidate = 60;

export default async function KeramischeTegelsPage() {
  const products = await getTegelsKeramische();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <KeramischeTegelsContent products={products} />
    </Suspense>
  );
}
