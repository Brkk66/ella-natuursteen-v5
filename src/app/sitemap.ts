import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ellanatuursteen.nl'

  // Statische pagina's
  const staticPages = [
    '',
    '/over-ons',
    '/contact',
    '/offerte',
    '/aanbiedingen',
    '/bouwsector',
    '/keukens',
    // Producten
    '/producten/keukenbladen',
    '/producten/vensterbanken',
    '/producten/wastafels',
    '/producten/raamdorpels',
    '/producten/openhaarden',
    '/producten/tafelbladen',
    '/producten/spoelbakken',
    '/producten/kranen',
    '/producten/accessoires',
    '/producten/bbq-blad',
    // Materialen
    '/materialen/natuursteen',
    '/materialen/composiet',
    '/materialen/keramiek',
    // Tegels
    '/tegels/natuursteen',
    '/tegels/wandtegels',
    '/tegels/keramische-tegels',
    '/tegels/keramisch-parket',
    '/tegels/vintage',
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/producten/') ? 0.8 : 0.6,
  }))
}
