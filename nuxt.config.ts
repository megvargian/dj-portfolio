// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  // Static site generation for cPanel deployment
  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/services',
        '/club-dj',
        '/private-events',
        '/dj-dubai',
        '/music',
        '/contact',
        '/press-kit'
      ]
    }
  },

  // Global CSS
  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'DJ RONN - Professional DJ Services | Architect of Sound',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Professional DJ services for clubs, private events, weddings, and corporate events in Dubai, Beirut, and worldwide. DJ RONN - Architect of Sound offers premium entertainment with multicultural music expertise.'
        },
        {
          name: 'keywords',
          content: 'DJ Dubai, DJ Beirut, wedding DJ, club DJ, private event DJ, corporate event DJ, professional DJ services, Dubai wedding DJ, Lebanese DJ, Arabic DJ, international DJ'
        },
        { name: 'author', content: 'DJ RONN' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'DJ RONN - Architect of Sound' },
        { property: 'og:title', content: 'DJ RONN - Professional DJ Services | Architect of Sound' },
        {
          property: 'og:description',
          content: 'Professional DJ services for clubs, private events, weddings, and corporate events in Dubai, Beirut, and worldwide.'
        },
        { property: 'og:url', content: 'https://ronnarchitectofsound.com' },
        { property: 'og:image', content: '/main-img-min.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@djronn' },
        { name: 'twitter:title', content: 'DJ RONN - Professional DJ Services' },
        {
          name: 'twitter:description',
          content: 'Professional DJ services for clubs, private events, weddings, and corporate events in Dubai, Beirut, and worldwide.'
        },
        { name: 'twitter:image', content: '/main-img-min.jpg' },
        // Schema.org structured data
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'DJ RONN',
            alternateName: 'Architect of Sound',
            jobTitle: 'Professional DJ',
            description: 'Professional DJ services for clubs, private events, weddings, and corporate events',
            url: 'https://ronnarchitectofsound.com',
            sameAs: [
              'https://instagram.com/djronn',
              'https://youtube.com/@djronn'
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dubai',
              addressCountry: 'UAE'
            },
            offers: {
              '@type': 'Service',
              name: 'DJ Services',
              description: 'Professional DJ services for various events',
              provider: {
                '@type': 'Person',
                name: 'DJ RONN'
              }
            }
          })
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ronnarchitectofsound.com' }
      ]
    }
  },

  // SEO and sitemap
  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://ronnarchitectofsound.com',
    gzip: true,
    routes: [
      '/',
      '/about',
      '/services',
      '/club-dj',
      '/private-events',
      '/dj-dubai',
      '/music',
      '/contact',
      '/press-kit'
    ]
  }
})
