import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productPagina',
  title: 'Product Pagina',
  type: 'document',
  groups: [
    { name: 'algemeen', title: 'Algemeen' },
    { name: 'hero', title: 'Hero Sectie' },
    { name: 'intro', title: 'Intro Sectie' },
    { name: 'materialen', title: 'Materialen Sectie' },
    { name: 'galerij', title: 'Galerij Sectie' },
    { name: 'cta', title: 'CTA Sectie' },
  ],
  fields: [
    // ============ ALGEMEEN ============
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      group: 'algemeen',
      options: {
        list: [
          { title: 'Keukenbladen', value: 'keukenbladen' },
          { title: 'Vensterbanken', value: 'vensterbanken' },
          { title: 'Wastafels', value: 'wastafels' },
          { title: 'Openhaarden', value: 'openhaarden' },
          { title: 'Tafelbladen', value: 'tafelbladen' },
          { title: 'Raamdorpels', value: 'raamdorpels' },
          { title: 'Spoelbakken', value: 'spoelbakken' },
          { title: 'BBQ Blad', value: 'bbq-blad' },
          { title: 'Kranen', value: 'kranen' },
          { title: 'Accessoires', value: 'accessoires' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // ============ HERO ============
    defineField({
      name: 'heroTitel',
      title: 'Hero Titel',
      type: 'string',
      group: 'hero',
      description: 'Bijv. "Keukenbladen"',
    }),
    defineField({
      name: 'heroSubtitel',
      title: 'Hero Subtitel',
      type: 'string',
      group: 'hero',
      description: 'Bijv. "Topkwaliteit op maat"',
    }),
    defineField({
      name: 'heroAfbeelding',
      title: 'Hero Achtergrond',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // ============ INTRO ============
    defineField({
      name: 'introSubtitel',
      title: 'Intro Subtitel',
      type: 'string',
      group: 'intro',
      initialValue: 'Producten',
    }),
    defineField({
      name: 'introTitel',
      title: 'Intro Titel',
      type: 'string',
      group: 'intro',
      description: 'Bijv. "Keukenbladen van natuursteen"',
    }),
    defineField({
      name: 'introBeschrijving',
      title: 'Intro Beschrijving',
      type: 'text',
      rows: 4,
      group: 'intro',
    }),
    defineField({
      name: 'introAfbeelding',
      title: 'Intro Afbeelding',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introKenmerken',
      title: 'Intro Kenmerken',
      type: 'array',
      group: 'intro',
      of: [{ type: 'string' }],
      description: 'Lijst met productkenmerken (checkmarks)',
    }),
    defineField({
      name: 'introPrimaireKnop',
      title: 'Intro Primaire Knop',
      type: 'string',
      group: 'intro',
      initialValue: 'Offerte aanvragen',
    }),
    defineField({
      name: 'introSecundaireKnop',
      title: 'Intro Secundaire Knop',
      type: 'string',
      group: 'intro',
      initialValue: 'Advies op maat',
    }),

    // ============ MATERIALEN ============
    defineField({
      name: 'materialenSubtitel',
      title: 'Materialen Subtitel',
      type: 'string',
      group: 'materialen',
      initialValue: 'Materialen',
    }),
    defineField({
      name: 'materialenTitel',
      title: 'Materialen Titel',
      type: 'string',
      group: 'materialen',
      initialValue: 'Kies uw materiaal',
    }),
    defineField({
      name: 'materialen',
      title: 'Materialen',
      type: 'array',
      group: 'materialen',
      of: [{
        type: 'object',
        fields: [
          { name: 'naam', title: 'Naam', type: 'string' },
          { name: 'beschrijving', title: 'Beschrijving', type: 'string' },
          { name: 'link', title: 'Link (optioneel)', type: 'string', description: 'Bijv. /materialen/natuursteen' },
        ],
        preview: {
          select: { title: 'naam', subtitle: 'beschrijving' },
        },
      }],
    }),

    // ============ GALERIJ ============
    defineField({
      name: 'galerijSubtitel',
      title: 'Galerij Subtitel',
      type: 'string',
      group: 'galerij',
      initialValue: 'Inspiratie',
    }),
    defineField({
      name: 'galerijTitel',
      title: 'Galerij Titel',
      type: 'string',
      group: 'galerij',
      initialValue: 'Onze projecten',
    }),
    defineField({
      name: 'galerijAfbeeldingen',
      title: 'Galerij Afbeeldingen',
      type: 'array',
      group: 'galerij',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Minimaal 4 afbeeldingen voor optimale weergave',
      validation: (Rule) => Rule.min(4),
    }),

    // ============ CTA ============
    defineField({
      name: 'ctaTitel',
      title: 'CTA Titel',
      type: 'string',
      group: 'cta',
      description: 'Bijv. "Interesse in keukenbladen?"',
    }),
    defineField({
      name: 'ctaBeschrijving',
      title: 'CTA Beschrijving',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Vraag vrijblijvend een offerte aan of bezoek onze showroom voor persoonlijk advies.',
    }),
    defineField({
      name: 'ctaPrimaireKnop',
      title: 'CTA Primaire Knop',
      type: 'string',
      group: 'cta',
      initialValue: 'Offerte aanvragen',
    }),
    defineField({
      name: 'ctaSecundaireKnop',
      title: 'CTA Secundaire Knop',
      type: 'string',
      group: 'cta',
      initialValue: 'Bezoek showroom',
    }),
  ],
  preview: {
    select: {
      title: 'heroTitel',
      productType: 'productType',
      media: 'heroAfbeelding',
    },
    prepare({ title, productType, media }) {
      return {
        title: title || productType || 'Product Pagina',
        subtitle: `Product: ${productType || 'Niet ingesteld'}`,
        media,
      }
    },
  },
})
