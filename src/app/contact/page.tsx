import { Suspense } from "react";
import { getContact } from "../../../sanity/lib/queries";
import ContactContent from "./ContactContent";

export const revalidate = 60;

export default async function ContactPage() {
  const data = await getContact();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <ContactContent data={data} />
    </Suspense>
  );
}
