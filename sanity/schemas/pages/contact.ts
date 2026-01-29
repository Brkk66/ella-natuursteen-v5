import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Sectie' },
    { name: 'formulier', title: 'Formulier Sectie' },
    { name: 'contactgegevens', title: 'Contactgegevens' },
    { name: 'cta', title: 'CTA Sectie' },
  ],
  fields: [
    // ============ HERO ============
    defineField({
      name: 'heroSubtitel',
      title: 'Hero Subtitel',
      type: 'string',
      group: 'hero',
      initialValue: 'Neem contact op',
    }),
    defineField({
      name: 'heroTitel',
      title: 'Hero Titel',
      type: 'string',
      group: 'hero',
      initialValue: 'Contact',
    }),

    // ============ FORMULIER ============
    defineField({
      name: 'formulierSubtitel',
      title: 'Formulier Subtitel',
      type: 'string',
      group: 'formulier',
      initialValue: 'Stuur een bericht',
    }),
    defineField({
      name: 'formulierTitel',
      title: 'Formulier Titel',
      type: 'string',
      group: 'formulier',
      initialValue: 'Hoe kunnen we u helpen?',
    }),
    defineField({
      name: 'formulierBeschrijving',
      title: 'Formulier Beschrijving',
      type: 'text',
      rows: 2,
      group: 'formulier',
      initialValue: 'Vul het formulier in en we nemen zo snel mogelijk contact met u op. Of bel ons direct voor een persoonlijk gesprek.',
    }),

    // ============ CONTACTGEGEVENS ============
    defineField({
      name: 'contactSubtitel',
      title: 'Contact Subtitel',
      type: 'string',
      group: 'contactgegevens',
      initialValue: 'Contactgegevens',
    }),
    defineField({
      name: 'contactTitel',
      title: 'Contact Titel',
      type: 'string',
      group: 'contactgegevens',
      initialValue: 'Bezoek onze showroom',
    }),
    defineField({
      name: 'telefoon',
      title: 'Telefoon',
      type: 'string',
      group: 'contactgegevens',
      initialValue: '078 879 5045',
    }),
    defineField({
      name: 'mobiel',
      title: 'Mobiel',
      type: 'string',
      group: 'contactgegevens',
      initialValue: '+31 6 39 31 85 32',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      group: 'contactgegevens',
      initialValue: 'info@ellanatuursteen.nl',
    }),
    defineField({
      name: 'adres',
      title: 'Adres',
      type: 'string',
      group: 'contactgegevens',
      initialValue: 'Edisonweg 8 B, 2952 AD Alblasserdam',
    }),
    defineField({
      name: 'openingstijden',
      title: 'Openingstijden',
      type: 'string',
      group: 'contactgegevens',
      initialValue: 'Ma-Vr: 08:30-18:00 | Za: 09:00-17:00',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      group: 'contactgegevens',
      description: 'De embed URL van Google Maps',
    }),

    // ============ CTA ============
    defineField({
      name: 'ctaTitel',
      title: 'CTA Titel',
      type: 'string',
      group: 'cta',
      initialValue: 'Liever direct een offerte?',
    }),
    defineField({
      name: 'ctaBeschrijving',
      title: 'CTA Beschrijving',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Vraag vrijblijvend een offerte aan en ontvang binnen 48 uur een voorstel op maat.',
    }),
    defineField({
      name: 'ctaKnopTekst',
      title: 'CTA Knop Tekst',
      type: 'string',
      group: 'cta',
      initialValue: 'Offerte aanvragen',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact',
        subtitle: 'Pagina content',
      }
    },
  },
})
