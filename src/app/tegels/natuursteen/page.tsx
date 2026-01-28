import { Suspense } from "react";
import { getTegelsNatuursteen } from "../../../../sanity/lib/queries";
import TegelsNatuursteenContent from "./TegelsNatuursteenContent";

export const revalidate = 60;

export default async function TegelsNatuursteenPage() {
  const products = await getTegelsNatuursteen();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <TegelsNatuursteenContent products={products} />
    </Suspense>
  );
}
