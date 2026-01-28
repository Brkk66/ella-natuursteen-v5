import { Suspense } from "react";
import { getKeramiekProducts } from "../../../../sanity/lib/queries";
import KeramiekContent from "./KeramiekContent";

export const revalidate = 60;

export default async function KeramiekPage() {
  const products = await getKeramiekProducts();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <KeramiekContent products={products} />
    </Suspense>
  );
}
