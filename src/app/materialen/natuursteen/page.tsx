import { Suspense } from "react";
import { getNatuursteenProducts } from "../../../../sanity/lib/queries";
import NatuursteenContent from "./NatuursteenContent";

export const revalidate = 60;

export default async function NatuursteenPage() {
  const products = await getNatuursteenProducts();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <NatuursteenContent products={products} />
    </Suspense>
  );
}
