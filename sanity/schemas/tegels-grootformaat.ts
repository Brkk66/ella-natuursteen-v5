import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tegelsGrootformaat',
  title: 'Tegels - Grootformaat',
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
      description: 'Bijv: "120x120", "120x60", "Marmer look"',
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
