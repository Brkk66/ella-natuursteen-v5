import { Suspense } from "react";
import { getTegelsWandtegels } from "../../../../sanity/lib/queries";
import WandtegelsContent from "./WandtegelsContent";

export const revalidate = 60;

export default async function WandtegelsPage() {
  const products = await getTegelsWandtegels();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <WandtegelsContent products={products} />
    </Suspense>
  );
}
