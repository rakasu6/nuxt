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
        route.meta.canonical = `https://nibung88.com${route.path}`
      })
    }
  },

  head: {
    htmlAttrs: {
    },
    link: [
    ]
  },

  // Plugin untuk menangani canonical URL
  plugins: [
    { src: '~/plugins/canonical.js' }
  ],
}
