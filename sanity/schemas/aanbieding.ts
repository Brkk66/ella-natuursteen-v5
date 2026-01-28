import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aanbieding',
  title: 'Aanbieding',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Originele prijs (bijv. € 289)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'salePrice',
      title: 'Actieprijs (bijv. € 229)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Eenheid (bijv. per m²)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (bijv. Populair, -20%, Nieuw)',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Actief',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'salePrice',
      media: 'image',
    },
  },
})
