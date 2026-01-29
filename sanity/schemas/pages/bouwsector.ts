import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bouwsector',
  title: 'Bouwsector',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Sectie' },
    { name: 'intro', title: 'Intro Sectie' },
    { name: 'voordelen', title: 'Voordelen Sectie' },
    { name: 'diensten', title: 'Diensten Sectie' },
    { name: 'cta', title: 'CTA Sectie' },
  ],
  fields: [
    // ============ HERO ============
    defineField({
      name: 'heroSubtitel',
      title: 'Hero Subtitel',
      type: 'string',
      group: 'hero',
      initialValue: 'Voor professionals',
    }),
    defineField({
      name: 'heroTitel',
      title: 'Hero Titel',
      type: 'string',
      group: 'hero',
      initialValue: 'Bouwsector',
    }),
    defineField({
      name: 'heroBeschrijving',
      title: 'Hero Beschrijving',
      type: 'string',
      group: 'hero',
      initialValue: 'Betrouwbare partner voor aannemers, projectontwikkelaars en keukenbedrijven',
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
      initialValue: 'Samenwerken',
    }),
    defineField({
      name: 'introTitel',
      title: 'Intro Titel',
      type: 'string',
      group: 'intro',
      initialValue: 'Uw betrouwbare partner in natuursteen',
    }),
    defineField({
      name: 'introParagraaf1',
      title: 'Intro Paragraaf 1',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Al meer dan 25 jaar werken wij samen met aannemers, keukenbedrijven en projectontwikkelaars door heel Nederland. Wij begrijpen dat in de bouw tijd geld is en dat kwaliteit essentieel is.',
    }),
    defineField({
      name: 'introParagraaf2',
      title: 'Intro Paragraaf 2',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Daarom bieden wij niet alleen hoogwaardige natuursteen producten, maar ook een complete service: van advies en inmeten tot levering en montage. Alles om uw project tot een succes te maken.',
    }),
    defineField({
      name: 'introKnopTekst',
      title: 'Intro Knop Tekst',
      type: 'string',
      group: 'intro',
      initialValue: 'Word partner',
    }),
    defineField({
      name: 'introAfbeelding',
      title: 'Intro Afbeelding',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
    }),

    // ============ VOORDELEN ============
    defineField({
      name: 'voordelenSubtitel',
      title: 'Voordelen Subtitel',
      type: 'string',
      group: 'voordelen',
      initialValue: 'Waarom Ella Natuursteen',
    }),
    defineField({
      name: 'voordelenTitel',
      title: 'Voordelen Titel',
      type: 'string',
      group: 'voordelen',
      initialValue: 'Voordelen voor de bouwsector',
    }),
    defineField({
      name: 'voordelen',
      title: 'Voordelen',
      type: 'array',
      group: 'voordelen',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icoon',
            title: 'Icoon',
            type: 'string',
            options: {
              list: [
                { title: 'Handshake (handdruk)', value: 'handshake' },
                { title: 'Truck (vrachtwagen)', value: 'truck' },
                { title: 'Shield (schild)', value: 'shield' },
                { title: 'Building (gebouw)', value: 'building' },
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
        { icoon: 'handshake', titel: 'Persoonlijk contact', beschrijving: 'Eén vast aanspreekpunt voor al uw projecten. Direct contact, korte lijnen.' },
        { icoon: 'truck', titel: 'Snelle levering', beschrijving: 'Flexibele levertijden die aansluiten op uw bouwplanning.' },
        { icoon: 'shield', titel: 'Kwaliteitsgarantie', beschrijving: 'Alle producten worden geleverd met garantie en certificering.' },
        { icoon: 'building', titel: 'Projectondersteuning', beschrijving: 'Van inmeten tot montage - wij ontzorgen u volledig.' },
      ],
    }),

    // ============ DIENSTEN ============
    defineField({
      name: 'dienstenSubtitel',
      title: 'Diensten Subtitel',
      type: 'string',
      group: 'diensten',
      initialValue: 'Ons aanbod',
    }),
    defineField({
      name: 'dienstenTitel',
      title: 'Diensten Titel',
      type: 'string',
      group: 'diensten',
      initialValue: 'Producten voor de bouw',
    }),
    defineField({
      name: 'dienstenBeschrijving',
      title: 'Diensten Beschrijving',
      type: 'text',
      rows: 2,
      group: 'diensten',
      initialValue: 'Van nieuwbouwprojecten tot renovaties - wij leveren natuursteen voor ieder project. Onze producten worden op maat gemaakt in onze eigen werkplaats.',
    }),
    defineField({
      name: 'dienstenLijst',
      title: 'Diensten Lijst',
      type: 'array',
      group: 'diensten',
      of: [{ type: 'string' }],
      initialValue: [
        'Keukenbladen op maat',
        'Vensterbanken & dorpels',
        'Badkamerafwerking',
        'Vloeren & wandbekleding',
        'Trappen & borders',
        'Maatwerk projecten',
      ],
    }),
    defineField({
      name: 'dienstenKnopTekst',
      title: 'Diensten Knop Tekst',
      type: 'string',
      group: 'diensten',
      initialValue: 'Offerte aanvragen',
    }),
    defineField({
      name: 'dienstenAfbeeldingen',
      title: 'Diensten Afbeeldingen (2 stuks)',
      type: 'array',
      group: 'diensten',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),

    // ============ CTA ============
    defineField({
      name: 'ctaTitel',
      title: 'CTA Titel',
      type: 'string',
      group: 'cta',
      initialValue: 'Interesse in een samenwerking?',
    }),
    defineField({
      name: 'ctaBeschrijving',
      title: 'CTA Beschrijving',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Neem contact met ons op om de mogelijkheden te bespreken. Wij denken graag met u mee.',
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
      initialValue: 'Bel direct: 078 879 5045',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Bouwsector',
        subtitle: 'Pagina content',
      }
    },
  },
})
