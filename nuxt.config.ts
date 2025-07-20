// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    // '@nuxt/bundle-analysis',
    '@nuxt/content',
    '@pinia/nuxt',  
  ],
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      // Judul default untuk seluruh situs
      title: 'Toko Koding Keren',
      // Template untuk judul halaman, %s akan diganti dengan judul spesifik
      titleTemplate: '%s - Toko Koding Keren', 
      meta: [
        // Deskripsi default
        { name: 'description', content: 'Toko online terbaik untuk semua kebutuhan developer.' },
        // Mengatur bahasa konten
        { name: 'lang', content: 'id' }
      ],
      // Anda juga bisa menambahkan link untuk font, stylesheet, dll. di sini
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    } 
  },
})