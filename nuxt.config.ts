export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tak-food',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/repositories.ts',
    {src: "~/plugins/vue-leaflet.ts", ssr: false}


  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    ['@nuxtjs/vuetify', { /* module options */ }],
   
    
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['nuxt-leaflet', { ssr: false /* module options */ }],
  ],

  axios: {
    baseURL: 'https://app.takfood.ir/api/', // Used as fallback if no runtime config is provided
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
