import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tegelsKeramische',
  title: 'Tegels - Keramische Tegels',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'group',
      title: 'Groep',
      type: 'string',
      description: 'Bijv: "Betonlook", "Marmerlook", "Uni"',
    }),
    defineField({
      name: 'description',
      title: 'Beschrijving (optioneel)',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      group: 'group',
      media: 'image',
    },
    prepare({ title, group, media }) {
      return {
        title,
        subtitle: group || '',
        media,
      }
    },
  },
})
