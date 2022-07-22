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
   // publicPath :"http://localhost:3000"
    publicPath :"tac-food.vercel.app"
  },
  pwa: {
    manifest: {
      name: ' تک فود',
      short_name: 'سفارش آنلاین غذا در شرستان ساوه',
      start_url : "/?source=pwa",
      display :"standalone",
      "scope" : ".",
      lang: 'fa',
      useWebmanifestExtension: false,
      background_color:"#ff2200",
      theme_color:"#fc685a",
      icons : [
        {
            "src" : "/icons/icon48.png",
            "sizes" : "48x48",
            "type" : "image/png"
        },{
            "src" : "/icons/icon72.png",
            "sizes" : "72x72",
            "type" : "image/png"
        },{
            "src" : "/icons/icon96.png",
            "sizes" : "96x96",
            "type" : "image/png"
        },{
            "src" : "/icons/icon144.png",
            "sizes" : "144x144",
            "type" : "image/png"
        },{
            "src" : "/icons/icon168.png",
            "sizes" : "168x168",
            "type" : "image/png"
        },{
            "src" : "/icons/icon192.png",
            "sizes" : "192x192",
            "type" : "image/png"
        },{
            "src" : "/icons/icon256.png",
            "sizes" : "256x256",
            "type" : "image/png"
        },{
            "src" : "/icons/icon512.png",
            "sizes" : "512x512",
            "type" : "image/png"
        }
    ]
    },
    workbox: {
      importScripts: [
          'custom-sw.js'
      ],
    }
    
  }
}
