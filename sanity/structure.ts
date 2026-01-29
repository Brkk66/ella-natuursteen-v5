import { StructureBuilder } from 'sanity/structure'
import {
  HomeIcon,
  UsersIcon,
  EnvelopeIcon,
  CubeIcon,
  DocumentIcon,
  TagIcon,
  SparklesIcon
} from '@sanity/icons'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // ============ PAGINA'S ============
      S.listItem()
        .title("Pagina's")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Pagina's")
            .items([
              // Homepage - singleton
              S.listItem()
                .title('Homepage')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('homepage')
                    .documentId('homepage')
                    .title('Homepage')
                ),
              // Over Ons - singleton
              S.listItem()
                .title('Over Ons')
                .icon(UsersIcon)
                .child(
                  S.document()
                    .schemaType('overOns')
                    .documentId('over-ons')
                    .title('Over Ons')
                ),
              // Contact - singleton
              S.listItem()
                .title('Contact')
                .icon(EnvelopeIcon)
                .child(
                  S.document()
                    .schemaType('contact')
                    .documentId('contact')
                    .title('Contact')
                ),
              // Keukens - singleton
              S.listItem()
                .title('Keukens')
                .icon(CubeIcon)
                .child(
                  S.document()
                    .schemaType('keukens')
                    .documentId('keukens')
                    .title('Keukens')
                ),
              // Bouwsector - singleton
              S.listItem()
                .title('Bouwsector')
                .icon(CubeIcon)
                .child(
                  S.document()
                    .schemaType('bouwsector')
                    .documentId('bouwsector')
                    .title('Bouwsector')
                ),
            ])
        ),

      S.divider(),

      // ============ PRODUCTEN ============
      S.listItem()
        .title('Producten')
        .icon(CubeIcon)
        .child(
          S.documentTypeList('productPagina')
            .title('Product Paginas')
        ),

      S.divider(),

      // ============ MATERIALEN ============
      S.listItem()
        .title('Materialen')
        .icon(SparklesIcon)
        .child(
          S.list()
            .title('Materialen')
            .items([
              S.documentTypeListItem('natuursteen').title('Natuursteen'),
              S.documentTypeListItem('composiet').title('Composiet'),
              S.documentTypeListItem('keramiek').title('Keramiek'),
            ])
        ),

      // ============ TEGELS ============
      S.listItem()
        .title('Tegels')
        .icon(CubeIcon)
        .child(
          S.list()
            .title('Tegels')
            .items([
              S.documentTypeListItem('tegelsNatuursteen').title('Natuursteen Tegels'),
              S.documentTypeListItem('tegelsWandtegels').title('Wandtegels'),
              S.documentTypeListItem('tegelsKeramische').title('Keramische Tegels'),
              S.documentTypeListItem('tegelsVintage').title('Vintage Tegels'),
              S.documentTypeListItem('tegelsKeramischParket').title('Keramisch Parket'),
              S.documentTypeListItem('tegelsGrootformaat').title('Grootformaat Tegels'),
              S.documentTypeListItem('tegelsMozaiek').title('Mozaïek'),
              S.documentTypeListItem('tegelsTerrazzo').title('Terrazzo'),
            ])
        ),

      S.divider(),

      // ============ AANBIEDINGEN ============
      S.listItem()
        .title('Aanbiedingen')
        .icon(TagIcon)
        .child(
          S.documentTypeList('aanbieding')
            .title('Aanbiedingen')
        ),
    ])
