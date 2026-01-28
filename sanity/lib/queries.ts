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
