import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Sectie' },
    { name: 'intro', title: 'Intro Sectie' },
    { name: 'services', title: 'Toepassingen' },
    { name: 'projects', title: 'Projecten' },
    { name: 'featured', title: 'Maatwerk Sectie' },
    { name: 'materials', title: 'Materialen' },
    { name: 'whyus', title: 'Waarom Wij' },
    { name: 'testimonials', title: 'Reviews' },
    { name: 'cta', title: 'Contact CTA' },
  ],
  fields: [
    // ============ HERO SECTIE ============
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitel',
      type: 'string',
      group: 'hero',
      initialValue: 'Sinds 1994',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Titel',
      type: 'string',
      group: 'hero',
      initialValue: 'Ella Natuursteen',
    }),
    defineField({
      name: 'heroTitleAccent',
      title: 'Hero Titel Accent (gouden tekst)',
      type: 'string',
      group: 'hero',
      initialValue: '& Maatwerk',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Beschrijving',
      type: 'text',
      rows: 2,
      group: 'hero',
      initialValue: 'Waar uw droominterieur werkelijkheid wordt. Van marmer tot graniet — exclusief voor u vervaardigd.',
    }),
    defineField({
      name: 'heroPrimaryButton',
      title: 'Hero Primaire Knop',
      type: 'string',
      group: 'hero',
      initialValue: 'Maak een afspraak',
    }),
    defineField({
      name: 'heroSecondaryButton',
      title: 'Hero Secundaire Knop',
      type: 'string',
      group: 'hero',
      initialValue: 'Bekijk onze projecten',
    }),
    defineField({
      name: 'heroUsps',
      title: 'Hero USPs (onderaan)',
      type: 'array',
      group: 'hero',
      of: [{ type: 'string' }],
      initialValue: ['Gratis adviesgesprek', 'Eigen montage', '25 jaar ervaring'],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Achtergrond',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // ============ INTRO SECTIE ============
    defineField({
      name: 'introSubtitle',
      title: 'Intro Subtitel',
      type: 'string',
      group: 'intro',
      initialValue: 'Over Ella Natuursteen',
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Titel',
      type: 'string',
      group: 'intro',
      initialValue: 'Maatwerk & Vakmanschap',
    }),
    defineField({
      name: 'introParagraph1',
      title: 'Intro Paragraaf 1',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Bij Ella Natuursteen combineren we ambachtelijk vakmanschap met moderne precisie. Al jaren zijn wij specialist in het leveren en plaatsen van exclusief natuursteen.',
    }),
    defineField({
      name: 'introParagraph2',
      title: 'Intro Paragraaf 2',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Van een elegant marmeren keukenblad tot een complete badkamer in graniet — wij begeleiden u van advies tot en met de perfecte afwerking.',
    }),
    defineField({
      name: 'introYearsExperience',
      title: 'Jaren Ervaring',
      type: 'number',
      group: 'intro',
      initialValue: 25,
    }),
    defineField({
      name: 'introStats',
      title: 'Intro Statistieken',
      type: 'array',
      group: 'intro',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Waarde', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
      }],
      initialValue: [
        { value: '500+', label: 'Projecten' },
        { value: '100%', label: 'Maatwerk' },
        { value: '5★', label: 'Reviews' },
      ],
    }),
    defineField({
      name: 'introButton',
      title: 'Intro Knop Tekst',
      type: 'string',
      group: 'intro',
      initialValue: 'Lees ons verhaal',
    }),

    // ============ SERVICES/TOEPASSINGEN ============
    defineField({
      name: 'servicesSubtitle',
      title: 'Toepassingen Subtitel',
      type: 'string',
      group: 'services',
      initialValue: 'Onze Expertise',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Toepassingen Titel',
      type: 'string',
      group: 'services',
      initialValue: 'Onze Toepassingen',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Toepassingen Beschrijving',
      type: 'text',
      rows: 2,
      group: 'services',
      initialValue: 'Van keukenbladen tot complete badkamers — ontdek de mogelijkheden.',
    }),
    defineField({
      name: 'services',
      title: 'Toepassingen',
      type: 'array',
      group: 'services',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Titel', type: 'string' },
          { name: 'description', title: 'Beschrijving', type: 'string' },
          { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
          { name: 'href', title: 'Link', type: 'string' },
        ],
        preview: {
          select: { title: 'title', media: 'image' },
        },
      }],
    }),
    defineField({
      name: 'servicesButton',
      title: 'Toepassingen Knop',
      type: 'string',
      group: 'services',
      initialValue: 'Offerte aanvragen',
    }),

    // ============ PROJECTEN ============
    defineField({
      name: 'projectsSubtitle',
      title: 'Projecten Subtitel',
      type: 'string',
      group: 'projects',
      initialValue: 'Inspiratie',
    }),
    defineField({
      name: 'projectsTitle',
      title: 'Projecten Titel',
      type: 'string',
      group: 'projects',
      initialValue: 'Binnenkijken bij onze klanten',
    }),
    defineField({
      name: 'projects',
      title: 'Projecten',
      type: 'array',
      group: 'projects',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Titel', type: 'string' },
          { name: 'location', title: 'Locatie', type: 'string' },
          { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
          { name: 'href', title: 'Link', type: 'string' },
        ],
        preview: {
          select: { title: 'title', subtitle: 'location', media: 'image' },
        },
      }],
    }),
    defineField({
      name: 'projectsButton',
      title: 'Projecten Knop',
      type: 'string',
      group: 'projects',
      initialValue: 'Bekijk alle binnenkijkers',
    }),

    // ============ FEATURED/MAATWERK ============
    defineField({
      name: 'featuredBadge',
      title: 'Maatwerk Badge',
      type: 'string',
      group: 'featured',
      initialValue: 'Maatwerk',
    }),
    defineField({
      name: 'featuredTitle',
      title: 'Maatwerk Titel',
      type: 'string',
      group: 'featured',
      initialValue: 'Uw droomproject in',
    }),
    defineField({
      name: 'featuredTitleAccent',
      title: 'Maatwerk Titel Accent',
      type: 'string',
      group: 'featured',
      initialValue: 'natuursteen',
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Maatwerk Beschrijving',
      type: 'text',
      rows: 3,
      group: 'featured',
      initialValue: 'Van een unieke eettafel tot een luxe keukenblad — wij maken het volledig op maat. Vertel ons uw wensen en wij realiseren het.',
    }),
    defineField({
      name: 'featuredFeatures',
      title: 'Maatwerk Features',
      type: 'array',
      group: 'featured',
      of: [{ type: 'string' }],
      initialValue: ['Volledig op maat gemaakt', 'Keuze uit 100+ materialen', 'Vakkundige montage'],
    }),
    defineField({
      name: 'featuredPrimaryButton',
      title: 'Maatwerk Primaire Knop',
      type: 'string',
      group: 'featured',
      initialValue: 'Start uw project',
    }),
    defineField({
      name: 'featuredSecondaryButton',
      title: 'Maatwerk Secundaire Knop',
      type: 'string',
      group: 'featured',
      initialValue: 'Keukens op maat',
    }),
    defineField({
      name: 'featuredStatsValue',
      title: 'Maatwerk Stats Waarde',
      type: 'string',
      group: 'featured',
      initialValue: '500+',
    }),
    defineField({
      name: 'featuredStatsLabel',
      title: 'Maatwerk Stats Label',
      type: 'string',
      group: 'featured',
      initialValue: 'Tevreden klanten',
    }),

    // ============ MATERIALEN ============
    defineField({
      name: 'materialsSubtitle',
      title: 'Materialen Subtitel',
      type: 'string',
      group: 'materials',
      initialValue: 'Ons Assortiment',
    }),
    defineField({
      name: 'materialsTitle',
      title: 'Materialen Titel',
      type: 'string',
      group: 'materials',
      initialValue: 'Onze Materialen',
    }),
    defineField({
      name: 'materialsDescription',
      title: 'Materialen Beschrijving',
      type: 'text',
      rows: 2,
      group: 'materials',
      initialValue: 'Ontdek het materiaal dat perfect bij uw project past.',
    }),
    defineField({
      name: 'materials',
      title: 'Materialen',
      type: 'array',
      group: 'materials',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Titel', type: 'string' },
          { name: 'subtitle', title: 'Subtitel', type: 'string' },
          { name: 'description', title: 'Beschrijving', type: 'string' },
          { name: 'image', title: 'Afbeelding', type: 'image', options: { hotspot: true } },
          { name: 'href', title: 'Link', type: 'string' },
          {
            name: 'color',
            title: 'Kleur',
            type: 'string',
            options: {
              list: [
                { title: 'Donker (stone)', value: 'bg-stone' },
                { title: 'Goud', value: 'bg-gold' },
                { title: 'Licht (stone-light)', value: 'bg-stone-light' },
              ],
            },
          },
        ],
        preview: {
          select: { title: 'title', subtitle: 'subtitle', media: 'image' },
        },
      }],
    }),

    // ============ WAAROM WIJ ============
    defineField({
      name: 'whyusSubtitle',
      title: 'Waarom Wij Subtitel',
      type: 'string',
      group: 'whyus',
      initialValue: 'Onze Belofte',
    }),
    defineField({
      name: 'whyusTitle',
      title: 'Waarom Wij Titel',
      type: 'string',
      group: 'whyus',
      initialValue: 'Waarom Ella Natuursteen?',
    }),
    defineField({
      name: 'whyusDescription',
      title: 'Waarom Wij Beschrijving',
      type: 'text',
      rows: 2,
      group: 'whyus',
      initialValue: 'Ervaring, vakmanschap en passie voor natuursteen.',
    }),
    defineField({
      name: 'whyusFeatures',
      title: 'Waarom Wij Features',
      type: 'array',
      group: 'whyus',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icoon',
            type: 'string',
            options: {
              list: [
                { title: 'Sparkles (sterretjes)', value: 'sparkles' },
                { title: 'Shield (schild)', value: 'shield' },
                { title: 'Award (award)', value: 'award' },
                { title: 'Users (mensen)', value: 'users' },
              ],
            },
          },
          { name: 'title', title: 'Titel', type: 'string' },
          { name: 'description', title: 'Beschrijving', type: 'string' },
        ],
        preview: {
          select: { title: 'title' },
        },
      }],
    }),

    // ============ TESTIMONIALS ============
    defineField({
      name: 'testimonialsSubtitle',
      title: 'Reviews Subtitel',
      type: 'string',
      group: 'testimonials',
      initialValue: 'Tevreden Klanten',
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'Reviews Titel',
      type: 'string',
      group: 'testimonials',
      initialValue: 'Wat Klanten Zeggen',
    }),
    defineField({
      name: 'testimonialsDescription',
      title: 'Reviews Beschrijving',
      type: 'text',
      rows: 2,
      group: 'testimonials',
      initialValue: 'Ontdek waarom onze klanten voor Ella Natuursteen kiezen.',
    }),
    defineField({
      name: 'testimonials',
      title: 'Reviews',
      type: 'array',
      group: 'testimonials',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Naam', type: 'string' },
          { name: 'location', title: 'Locatie', type: 'string' },
          { name: 'rating', title: 'Sterren (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) },
          { name: 'text', title: 'Review Tekst', type: 'text', rows: 3 },
        ],
        preview: {
          select: { title: 'name', subtitle: 'location' },
        },
      }],
    }),

    // ============ CTA ============
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitel',
      type: 'string',
      group: 'cta',
      initialValue: 'Neem Contact Op',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Titel',
      type: 'string',
      group: 'cta',
      initialValue: 'Klaar om uw project',
    }),
    defineField({
      name: 'ctaTitleAccent',
      title: 'CTA Titel Accent',
      type: 'string',
      group: 'cta',
      initialValue: 'te bespreken?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Beschrijving',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Plan een afspraak of vraag vrijblijvend advies aan.',
    }),
    defineField({
      name: 'ctaOptions',
      title: 'CTA Opties',
      type: 'array',
      group: 'cta',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icoon',
            type: 'string',
            options: {
              list: [
                { title: 'MapPin (locatie)', value: 'mappin' },
                { title: 'Phone (telefoon)', value: 'phone' },
                { title: 'Calendar (kalender)', value: 'calendar' },
              ],
            },
          },
          { name: 'title', title: 'Titel', type: 'string' },
          { name: 'description', title: 'Beschrijving', type: 'string' },
        ],
        preview: {
          select: { title: 'title' },
        },
      }],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Knop',
      type: 'string',
      group: 'cta',
      initialValue: 'Plan een afspraak',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
        subtitle: 'Homepage content beheren',
      }
    },
  },
})
