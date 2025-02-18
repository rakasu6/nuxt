export default ({ app }) => {
  app.head.link = app.head.link || []
  
  // Tambahkan hook untuk setiap perubahan route
  app.router.afterEach((to) => {
    // Hapus canonical URL yang lama jika ada
    const canonicalIndex = app.head.link.findIndex(link => link.rel === 'canonical')
    if (canonicalIndex !== -1) {
      app.head.link.splice(canonicalIndex, 1)
    }

    // Tambahkan canonical URL yang baru
    app.head.link.push({
      rel: 'canonical',
      href: `https://www.nibung88.eu.org${to.path}`
    })
  })
} 