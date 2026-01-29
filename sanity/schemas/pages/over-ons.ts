import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'overOns',
  title: 'Over Ons',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Sectie' },
    { name: 'intro', title: 'Intro Sectie' },
    { name: 'waarden', title: 'Onze Waarden' },
    { name: 'showroom', title: 'Showroom Sectie' },
    { name: 'cta', title: 'CTA Sectie' },
  ],
  fields: [
    // ============ HERO ============
    defineField({
      name: 'heroSubtitel',
      title: 'Hero Subtitel',
      type: 'string',
      group: 'hero',
      initialValue: 'Ons verhaal',
    }),
    defineField({
      name: 'heroTitel',
      title: 'Hero Titel',
      type: 'string',
      group: 'hero',
      initialValue: 'Over Ella Natuursteen',
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
      initialValue: 'Wie wij zijn',
    }),
    defineField({
      name: 'introTitel',
      title: 'Intro Titel',
      type: 'string',
      group: 'intro',
      initialValue: 'Passie voor natuursteen sinds 2000',
    }),
    defineField({
      name: 'introParagraaf1',
      title: 'Intro Paragraaf 1',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Ella Natuursteen is al meer dan 25 jaar dé specialist in natuursteen voor keuken, badkamer en interieur. Wat begon als een klein familiebedrijf is uitgegroeid tot een begrip in de regio.',
    }),
    defineField({
      name: 'introParagraaf2',
      title: 'Intro Paragraaf 2',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Vanuit onze werkplaats en showroom in Alblasserdam bedienen we zowel particulieren als professionals. Of het nu gaat om een luxe keukenblad, een stijlvolle badkamer of een unieke vloer – wij maken het mogelijk.',
    }),
    defineField({
      name: 'introAfbeelding',
      title: 'Intro Afbeelding',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introJarenErvaring',
      title: 'Jaren Ervaring (getal)',
      type: 'number',
      group: 'intro',
      initialValue: 25,
    }),
    defineField({
      name: 'introHighlights',
      title: 'Intro Highlights',
      type: 'array',
      group: 'intro',
      of: [{ type: 'string' }],
      initialValue: [
        'Meer dan 25 jaar ervaring',
        'Eigen werkplaats in Alblasserdam',
        'Showroom van 600m²',
      ],
    }),

    // ============ WAARDEN ============
    defineField({
      name: 'waardenSubtitel',
      title: 'Waarden Subtitel',
      type: 'string',
      group: 'waarden',
      initialValue: 'Onze waarden',
    }),
    defineField({
      name: 'waardenTitel',
      title: 'Waarden Titel',
      type: 'string',
      group: 'waarden',
      initialValue: 'Waar wij voor staan',
    }),
    defineField({
      name: 'waarden',
      title: 'Waarden',
      type: 'array',
      group: 'waarden',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icoon',
            title: 'Icoon',
            type: 'string',
            options: {
              list: [
                { title: 'Award (trofee)', value: 'award' },
                { title: 'Users (mensen)', value: 'users' },
                { title: 'Clock (klok)', value: 'clock' },
                { title: 'Shield (schild)', value: 'shield' },
                { title: 'Heart (hart)', value: 'heart' },
              ],
            },
          },
          { name: 'titel', title: 'Titel', type: 'string' },
          { name: 'beschrijving', title: 'Beschrijving', type: 'text', rows: 2 },
        ],
        preview: {
          select: { title: 'titel' },
        },
      }],
      initialValue: [
        { icoon: 'award', titel: 'Vakmanschap', beschrijving: 'Elke steen wordt met precisie en passie bewerkt door onze ervaren vakmensen.' },
        { icoon: 'users', titel: 'Persoonlijke aanpak', beschrijving: 'We denken met u mee en leveren altijd maatwerk dat past bij uw wensen.' },
        { icoon: 'clock', titel: 'Betrouwbaar', beschrijving: 'Afspraak is afspraak. We leveren op tijd en binnen budget.' },
      ],
    }),

    // ============ SHOWROOM ============
    defineField({
      name: 'showroomSubtitel',
      title: 'Showroom Subtitel',
      type: 'string',
      group: 'showroom',
      initialValue: 'Bezoek ons',
    }),
    defineField({
      name: 'showroomTitel',
      title: 'Showroom Titel',
      type: 'string',
      group: 'showroom',
      initialValue: 'Onze showroom',
    }),
    defineField({
      name: 'showroomParagraaf1',
      title: 'Showroom Paragraaf 1',
      type: 'text',
      rows: 3,
      group: 'showroom',
      initialValue: 'In onze showroom van 600m² kunt u op uw gemak rondkijken en de verschillende materialen bekijken en voelen. Onze adviseurs staan klaar om u te helpen bij het maken van de juiste keuze.',
    }),
    defineField({
      name: 'showroomParagraaf2',
      title: 'Showroom Paragraaf 2',
      type: 'text',
      rows: 2,
      group: 'showroom',
      initialValue: 'Kom gerust langs voor een vrijblijvend adviesgesprek. We nemen graag de tijd voor u.',
    }),
    defineField({
      name: 'showroomKnopTekst',
      title: 'Showroom Knop Tekst',
      type: 'string',
      group: 'showroom',
      initialValue: 'Plan een bezoek',
    }),
    defineField({
      name: 'showroomAfbeeldingen',
      title: 'Showroom Afbeeldingen (2 stuks)',
      type: 'array',
      group: 'showroom',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),

    // ============ CTA ============
    defineField({
      name: 'ctaTitel',
      title: 'CTA Titel',
      type: 'string',
      group: 'cta',
      initialValue: 'Benieuwd wat wij voor u kunnen betekenen?',
    }),
    defineField({
      name: 'ctaBeschrijving',
      title: 'CTA Beschrijving',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Neem contact met ons op voor een vrijblijvend adviesgesprek of vraag direct een offerte aan.',
    }),
    defineField({
      name: 'ctaPrimaireKnop',
      title: 'CTA Primaire Knop',
      type: 'string',
      group: 'cta',
      initialValue: 'Neem contact op',
    }),
    defineField({
      name: 'ctaSecundaireKnop',
      title: 'CTA Secundaire Knop',
      type: 'string',
      group: 'cta',
      initialValue: 'Offerte aanvragen',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Over Ons',
        subtitle: 'Pagina content',
      }
    },
  },
})
