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


  css: [
    "~/assets/css/main.css",
    '~assets/css/style_aws.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/repositories.ts',
    {src: "~/plugins/vue-leaflet.ts", ssr: false},
    '~/plugins/sw.client.ts',




  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    ['@nuxtjs/vuetify', { /* module options */ }],
   
    
  ],

 
  modules: [
    ['nuxt-leaflet', { ssr: false /* module options */ }],
    '@nuxtjs/toast',
  ],


  axios: {
    baseURL: 'https://app.takfood.ir/api/', // Used as fallback if no runtime config is provided
  },
  vuetify :{
    customVariables: ["~/assets/scss/styles.scss"],
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath :"http://localhost:3000"
  },
  pwa: {
   
    
  }
}
