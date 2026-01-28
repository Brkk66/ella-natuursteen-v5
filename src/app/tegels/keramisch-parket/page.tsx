import { Suspense } from "react";
import { getTegelsKeramischParket } from "../../../../sanity/lib/queries";
import KeramischParketContent from "./KeramischParketContent";

export const revalidate = 60;

export default async function KeramischParketPage() {
  const products = await getTegelsKeramischParket();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <KeramischParketContent products={products} />
    </Suspense>
  );
}
