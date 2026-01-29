import { client } from './client'

// Materialen
export async function getNatuursteenProducts() {
  return client.fetch(
    `*[_type == "natuursteen"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getComposietProducts() {
  return client.fetch(
    `*[_type == "composiet"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getKeramiekProducts() {
  return client.fetch(
    `*[_type == "keramiek"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

// Tegels
export async function getTegelsNatuursteen() {
  return client.fetch(
    `*[_type == "tegelsNatuursteen"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsWandtegels() {
  return client.fetch(
    `*[_type == "tegelsWandtegels"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsKeramische() {
  return client.fetch(
    `*[_type == "tegelsKeramische"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsVintage() {
  return client.fetch(
    `*[_type == "tegelsVintage"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsKeramischParket() {
  return client.fetch(
    `*[_type == "tegelsKeramischParket"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsGrootformaat() {
  return client.fetch(
    `*[_type == "tegelsGrootformaat"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsMozaiek() {
  return client.fetch(
    `*[_type == "tegelsMozaiek"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

export async function getTegelsTerrazzo() {
  return client.fetch(
    `*[_type == "tegelsTerrazzo"] | order(group asc, name asc) {
      _id,
      name,
      image,
      description,
      group
    }`
  )
}

// Aanbiedingen
export async function getAanbiedingen() {
  return client.fetch(
    `*[_type == "aanbieding" && active == true] | order(order asc) {
      _id,
      title,
      description,
      originalPrice,
      salePrice,
      unit,
      image,
      badge
    }`
  )
}

// ============ PAGINA'S ============

// Homepage
export async function getHomepage() {
  return client.fetch(
    `*[_type == "homepage"][0] {
      // Hero
      heroSubtitle,
      heroTitle,
      heroTitleAccent,
      heroDescription,
      heroPrimaryButton,
      heroSecondaryButton,
      heroUsps,
      heroImage,
      // Intro
      introSubtitle,
      introTitle,
      introParagraph1,
      introParagraph2,
      introYearsExperience,
      introStats,
      introButton,
      // Services
      servicesSubtitle,
      servicesTitle,
      servicesDescription,
      services[] {
        title,
        description,
        image,
        href
      },
      servicesButton,
      // Projects
      projectsSubtitle,
      projectsTitle,
      projects[] {
        title,
        location,
        image,
        href
      },
      projectsButton,
      // Featured
      featuredBadge,
      featuredTitle,
      featuredTitleAccent,
      featuredDescription,
      featuredFeatures,
      featuredPrimaryButton,
      featuredSecondaryButton,
      featuredStatsValue,
      featuredStatsLabel,
      // Materials
      materialsSubtitle,
      materialsTitle,
      materialsDescription,
      materials[] {
        title,
        subtitle,
        description,
        image,
        href,
        color
      },
      // Why Us
      whyusSubtitle,
      whyusTitle,
      whyusDescription,
      whyusFeatures[] {
        icon,
        title,
        description
      },
      // Testimonials
      testimonialsSubtitle,
      testimonialsTitle,
      testimonialsDescription,
      testimonials[] {
        name,
        location,
        rating,
        text
      },
      // CTA
      ctaSubtitle,
      ctaTitle,
      ctaTitleAccent,
      ctaDescription,
      ctaOptions[] {
        icon,
        title,
        description
      },
      ctaButton
    }`
  )
}

// Over Ons
export async function getOverOns() {
  return client.fetch(
    `*[_type == "overOns"][0] {
      // Hero
      heroSubtitel,
      heroTitel,
      heroAfbeelding,
      // Intro
      introSubtitel,
      introTitel,
      introParagraaf1,
      introParagraaf2,
      introAfbeelding,
      introJarenErvaring,
      introHighlights,
      // Waarden
      waardenSubtitel,
      waardenTitel,
      waarden[] {
        icoon,
        titel,
        beschrijving
      },
      // Showroom
      showroomSubtitel,
      showroomTitel,
      showroomParagraaf1,
      showroomParagraaf2,
      showroomKnopTekst,
      showroomAfbeeldingen,
      // CTA
      ctaTitel,
      ctaBeschrijving,
      ctaPrimaireKnop,
      ctaSecundaireKnop
    }`
  )
}

// Contact
export async function getContact() {
  return client.fetch(
    `*[_type == "contact"][0] {
      // Hero
      heroSubtitel,
      heroTitel,
      // Formulier
      formulierSubtitel,
      formulierTitel,
      formulierBeschrijving,
      // Contactgegevens
      contactSubtitel,
      contactTitel,
      telefoon,
      mobiel,
      email,
      adres,
      openingstijden,
      googleMapsUrl,
      // CTA
      ctaTitel,
      ctaBeschrijving,
      ctaKnopTekst
    }`
  )
}

// Keukens
export async function getKeukens() {
  return client.fetch(
    `*[_type == "keukens"][0] {
      // Hero
      heroSubtitel,
      heroTitel,
      heroBeschrijving,
      heroAfbeelding,
      // Intro
      introSubtitel,
      introTitel,
      introParagraaf1,
      introParagraaf2,
      introAfbeelding,
      introStatsTekst,
      introStatsLabel,
      introHighlights,
      // Proces
      procesSubtitel,
      procesTitel,
      procesStappen[] {
        icoon,
        titel,
        beschrijving
      },
      // Voordelen
      voordelenSubtitel,
      voordelenTitel,
      voordelenBeschrijving,
      voordelenLijst,
      voordelenKnopTekst,
      voordelenAfbeeldingen,
      // CTA
      ctaTitel,
      ctaBeschrijving,
      ctaPrimaireKnop,
      ctaSecundaireKnop
    }`
  )
}

// Bouwsector
export async function getBouwsector() {
  return client.fetch(
    `*[_type == "bouwsector"][0] {
      // Hero
      heroSubtitel,
      heroTitel,
      heroBeschrijving,
      heroAfbeelding,
      // Intro
      introSubtitel,
      introTitel,
      introParagraaf1,
      introParagraaf2,
      introKnopTekst,
      introAfbeelding,
      // Voordelen
      voordelenSubtitel,
      voordelenTitel,
      voordelen[] {
        icoon,
        titel,
        beschrijving
      },
      // Diensten
      dienstenSubtitel,
      dienstenTitel,
      dienstenBeschrijving,
      dienstenLijst,
      dienstenKnopTekst,
      dienstenAfbeeldingen,
      // CTA
      ctaTitel,
      ctaBeschrijving,
      ctaPrimaireKnop,
      ctaSecundaireKnop
    }`
  )
}

// Product Pagina
export async function getProductPagina(productType: string) {
  return client.fetch(
    `*[_type == "productPagina" && productType == $productType][0] {
      productType,
      // Hero
      heroTitel,
      heroSubtitel,
      heroAfbeelding,
      // Intro
      introSubtitel,
      introTitel,
      introBeschrijving,
      introAfbeelding,
      introKenmerken,
      introPrimaireKnop,
      introSecundaireKnop,
      // Materialen
      materialenSubtitel,
      materialenTitel,
      materialen[] {
        naam,
        beschrijving,
        link
      },
      // Galerij
      galerijSubtitel,
      galerijTitel,
      galerijAfbeeldingen,
      // CTA
      ctaTitel,
      ctaBeschrijving,
      ctaPrimaireKnop,
      ctaSecundaireKnop
    }`,
    { productType }
  )
}
