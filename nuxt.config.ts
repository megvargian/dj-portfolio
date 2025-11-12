// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'DJ RONN - Architect of Sound | Electronic Music DJ & Producer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'DJ RONN - Professional DJ and music producer specializing in electronic music, club events, private parties, and music production. With a background in architecture, creating unique soundscapes that blend structure, emotion, and energy. Available for bookings worldwide.'
        },
        {
          name: 'keywords',
          content: 'DJ RONN, electronic music DJ, music producer, club events, private events, DJ bookings, music production, architect of sound, electronic music, synthwave, deep house'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'DJ RONN - Architect of Sound | Electronic Music DJ & Producer' },
        {
          property: 'og:description',
          content: 'Professional DJ and music producer creating unique soundscapes. Specializing in club events, private parties, and custom music production. Book now for your next event.'
        },
        { property: 'og:image', content: '/main-img-min-1.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'DJ RONN - Architect of Sound' },
        {
          name: 'twitter:description',
          content: 'Professional DJ and music producer creating unique soundscapes. Available for club events, private parties, and custom music production.'
        },
        { name: 'twitter:image', content: '/main-img-min-1.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.jpg' }
      ]
    }
  }
})
