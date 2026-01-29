import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'keukens',
  title: 'Keukens',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Sectie' },
    { name: 'intro', title: 'Intro Sectie' },
    { name: 'proces', title: 'Proces Sectie' },
    { name: 'voordelen', title: 'Voordelen Sectie' },
    { name: 'cta', title: 'CTA Sectie' },
  ],
  fields: [
    // ============ HERO ============
    defineField({
      name: 'heroSubtitel',
      title: 'Hero Subtitel',
      type: 'string',
      group: 'hero',
      initialValue: 'Voor keukenbedrijven',
    }),
    defineField({
      name: 'heroTitel',
      title: 'Hero Titel',
      type: 'string',
      group: 'hero',
      initialValue: 'Keukens & Montage',
    }),
    defineField({
      name: 'heroBeschrijving',
      title: 'Hero Beschrijving',
      type: 'string',
      group: 'hero',
      initialValue: 'Complete service voor keukenbladen - van inmeten tot montage',
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
      initialValue: 'Samenwerking',
    }),
    defineField({
      name: 'introTitel',
      title: 'Intro Titel',
      type: 'string',
      group: 'intro',
      initialValue: 'Partner voor keukenbedrijven',
    }),
    defineField({
      name: 'introParagraaf1',
      title: 'Intro Paragraaf 1',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Ella Natuursteen is al jarenlang de vaste partner van keukenbedrijven door heel Nederland. Wij begrijpen dat een perfecte keuken staat of valt bij de details - en het werkblad is daar een essentieel onderdeel van.',
    }),
    defineField({
      name: 'introParagraaf2',
      title: 'Intro Paragraaf 2',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Met onze complete service ontzorgen wij u volledig: van het eerste advies en inmeten, tot de productie in onze eigen werkplaats en vakkundige montage bij uw klant.',
    }),
    defineField({
      name: 'introAfbeelding',
      title: 'Intro Afbeelding',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introStatsTekst',
      title: 'Intro Stats Tekst (bijv. "500+")',
      type: 'string',
      group: 'intro',
      initialValue: '500+',
    }),
    defineField({
      name: 'introStatsLabel',
      title: 'Intro Stats Label',
      type: 'string',
      group: 'intro',
      initialValue: 'keukens per jaar',
    }),
    defineField({
      name: 'introHighlights',
      title: 'Intro Highlights',
      type: 'array',
      group: 'intro',
      of: [{ type: 'string' }],
      initialValue: [
        'Directe levering aan keukenbedrijven',
        'Flexibele levertijden',
        'Eigen inmeetservice',
      ],
    }),

    // ============ PROCES ============
    defineField({
      name: 'procesSubtitel',
      title: 'Proces Subtitel',
      type: 'string',
      group: 'proces',
      initialValue: 'Hoe werkt het',
    }),
    defineField({
      name: 'procesTitel',
      title: 'Proces Titel',
      type: 'string',
      group: 'proces',
      initialValue: 'Ons proces',
    }),
    defineField({
      name: 'procesStappen',
      title: 'Proces Stappen',
      type: 'array',
      group: 'proces',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icoon',
            title: 'Icoon',
            type: 'string',
            options: {
              list: [
                { title: 'Ruler (liniaal)', value: 'ruler' },
                { title: 'Wrench (gereedschap)', value: 'wrench' },
                { title: 'Truck (vrachtwagen)', value: 'truck' },
                { title: 'BadgeCheck (vinkje)', value: 'badgecheck' },
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
        { icoon: 'ruler', titel: 'Inmeten', beschrijving: 'Wij komen bij u langs om de exacte maten op te nemen.' },
        { icoon: 'wrench', titel: 'Productie', beschrijving: 'Uw keukenblad wordt op maat gemaakt in onze werkplaats.' },
        { icoon: 'truck', titel: 'Levering', beschrijving: 'Wij leveren op het door u gewenste tijdstip.' },
        { icoon: 'badgecheck', titel: 'Montage', beschrijving: 'Vakkundige plaatsing door onze eigen monteurs.' },
      ],
    }),

    // ============ VOORDELEN ============
    defineField({
      name: 'voordelenSubtitel',
      title: 'Voordelen Subtitel',
      type: 'string',
      group: 'voordelen',
      initialValue: 'Voordelen',
    }),
    defineField({
      name: 'voordelenTitel',
      title: 'Voordelen Titel',
      type: 'string',
      group: 'voordelen',
      initialValue: 'Waarom samenwerken?',
    }),
    defineField({
      name: 'voordelenBeschrijving',
      title: 'Voordelen Beschrijving',
      type: 'text',
      rows: 2,
      group: 'voordelen',
      initialValue: 'Als keukenbedrijf wilt u zich kunnen focussen op uw klant. Wij zorgen ervoor dat het werkblad geen zorgen oplevert.',
    }),
    defineField({
      name: 'voordelenLijst',
      title: 'Voordelen Lijst',
      type: 'array',
      group: 'voordelen',
      of: [{ type: 'string' }],
      initialValue: [
        'Directe levering aan keukenbedrijven',
        'Flexibele levertijden',
        'Eigen inmeetservice',
        'Vakkundige montage',
        'Ruim materiaalaanbod',
        'Scherpe tarieven voor partners',
      ],
    }),
    defineField({
      name: 'voordelenKnopTekst',
      title: 'Voordelen Knop Tekst',
      type: 'string',
      group: 'voordelen',
      initialValue: 'Word partner',
    }),
    defineField({
      name: 'voordelenAfbeeldingen',
      title: 'Voordelen Afbeeldingen (2 stuks)',
      type: 'array',
      group: 'voordelen',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),

    // ============ CTA ============
    defineField({
      name: 'ctaTitel',
      title: 'CTA Titel',
      type: 'string',
      group: 'cta',
      initialValue: 'Klaar om samen te werken?',
    }),
    defineField({
      name: 'ctaBeschrijving',
      title: 'CTA Beschrijving',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Neem contact op om de mogelijkheden voor uw keukenbedrijf te bespreken.',
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
        title: 'Keukens',
        subtitle: 'Pagina content',
      }
    },
  },
})
