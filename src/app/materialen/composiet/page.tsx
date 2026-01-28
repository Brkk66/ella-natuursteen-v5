import { Suspense } from "react";
import { getComposietProducts } from "../../../../sanity/lib/queries";
import ComposietContent from "./ComposietContent";

export const revalidate = 60;

export default async function ComposietPage() {
  const products = await getComposietProducts();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ComposietContent products={products} />
    </Suspense>
  );
}
