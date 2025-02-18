export default {
  // Konfigurasi dasar
  mode: 'universal',
  target: 'server',
  ssr: true,

  // Hapus konfigurasi head karena sudah dipindah ke app.html
  head: false,

  // Matikan semua fitur loading
  loading: false,
  loadingIndicator: false,

  // Modules yang diperlukan
  modules: [
    '@nuxtjs/axios'
  ],

  // CSS global
  css: [
    '@/assets/css/main.css'
  ],

  // Komponen auto-import
  components: true,

  // Build Configuration
  build: {
    extractCSS: true,
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all'
      }
    },
    
    // Hapus modern build untuk menghindari konflik
    modern: false,
    
    // Pastikan components bisa dimuat
    transpile: [
      'vue',
      'vue-router'
    ],

    // Konfigurasi untuk memastikan components terload
    babel: {
      compact: true
    }
  },

  // Render configuration - penting untuk loading components
  render: {
    resourceHints: false,
    injectScripts: true, // Ubah kembali ke true
    crossorigin: false
  },

  // Matikan telemetry
  telemetry: false,

  router: {
    // Tambahkan hook router untuk mengatur canonical
    extendRoutes(routes, resolve) {
      routes.forEach(route => {
        route.meta = route.meta || {}
        route.meta.canonical = `https://www.nibung88.eu.org${route.path}`
      })
    }
  },

  head: {
    htmlAttrs: {
      lang: 'id'
    },
    title: 'NIBUNG88 POKER - Situs IDN Poker Terpercaya | Agen Poker IDN Online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'NIBUNG88 merupakan situs IDN Poker terpercaya sejak 2018, menyediakan permainan poker online berkualitas dengan sistem yang fair dan aman. Download Apk IDN Poker Online Melalui Nibung88.'
      },
      { 
        hid: 'keywords', 
        name: 'keywords', 
        content: 'nibung88, idn poker, poker online, agen poker, situs poker, poker terpercaya'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Nibung88' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'NIBUNG88 POKER - Situs IDN Poker Terpercaya | Agen Poker IDN Online' },
      { property: 'og:description', content: 'NIBUNG88 merupakan situs IDN Poker terpercaya sejak 2018, menyediakan permainan poker online berkualitas dengan sistem yang fair dan aman.' },
      { property: 'og:image', content: '/_nuxt/static/logo.png' },
      { property: 'og:url', content: 'https://www.nibung88.eu.org' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'NIBUNG88 POKER - Situs IDN Poker Terpercaya' },
      { name: 'twitter:description', content: 'NIBUNG88 merupakan situs IDN Poker terpercaya sejak 2018.' },
      { name: 'twitter:image', content: '/_nuxt/static/logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' },
      {
        rel: 'preload',
        as: 'image',
        href: 'https://www.nibung88.eu.org/_nuxt/img/nibung88-poker.1442010.png'
      }
    ],
    script: [
      {
        hid: 'schema',
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NIBUNG88 POKER",
          "url": "https://www.nibung88.eu.org",
          "logo": "https://www.nibung88.eu.org/_nuxt/static/logo.png",
          "description": "NIBUNG88 merupakan situs IDN Poker terpercaya sejak 2018, menyediakan permainan poker online berkualitas.",
          "foundingDate": "2018",
          "sameAs": [
            "https://www.facebook.com/nibung88",
            "https://www.twitter.com/nibung88",
            "https://www.instagram.com/nibung88"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+81275955498",
            "contactType": "customer service",
            "availableLanguage": ["Indonesian", "English"],
            "areaServed": "ID",
            "contactOption": "TollFree",
            "hoursAvailable": "Mo-Su 00:00-24:00"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ID"
          }
        }
      },
      {
        hid: 'website-schema',
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "NIBUNG88 POKER",
          "url": "https://www.nibung88.eu.org",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.nibung88.eu.org/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      },
      {
        hid: 'breadcrumb-schema',
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.nibung88.eu.org"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Games",
              "item": "https://www.nibung88.eu.org/games"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Panduan",
              "item": "https://www.nibung88.eu.org/panduan"
            }
          ]
        }
      }
    ]
  },

  // Plugin untuk menangani canonical URL
  plugins: [
    { src: '~/plugins/canonical.js' }
  ],

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: 'https://www.nibung88.eu.org/_nuxt/img/nibung88-poker.1442010.png'
        }
      ]
    }
  },
}
