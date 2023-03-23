export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-firebase-auth',
    title: 'nuxt-firebase-auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/util.css' },
      { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
      { rel:'stylesheet' , href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'}
    ],
    script: [
      
      { src: '/vendor/glightbox/js/glightbox.min.js' },
      { src: '/vendor/swiper/swiper-bundle.min.js' }, 
      { src: '/js/main.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "aos/dist/aos.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/Mixitup.client.js', mode: 'client' },
    { src: '~/plugins/gsap', ssr: true}
  ],

  router: {
    middleware: ['auth']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    
      [
        '@nuxtjs/firebase',
        {
          config: {
            apiKey: "AIzaSyCD4f-BLgIDtgABmijlQTYhS_w0CftteYQ",
            authDomain: "nuxt-auth-a7c90.firebaseapp.com",
            projectId: "nuxt-auth-a7c90",
            databaseURL: "https://nuxt-auth-a7c90-default-rtdb.europe-west1.firebasedatabase.app",
            storageBucket: "nuxt-auth-a7c90.appspot.com",
            messagingSenderId: "672878960535",
            appId: "1:672878960535:web:91d0015906e28e44382ed2",
            measurementId: "G-7R1425LFEM"
          },
          services: {
            auth: {
              persistence: 'local', // default
              initialize: {
                onAuthStateChangedAction: 'onAuthStateChangedAction',
                subscribeManually: false
              },
              ssr: false,
            },
            firestore: true,
          }
        }
      ]
  ],

  bootstrapVue: {
    bootstrapCSS: true,
    icons: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"]
  }
}
