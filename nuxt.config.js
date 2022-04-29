import {i18n} from "./config/i18n";
import {styleResources} from "./config/style-resources";
import {primevue} from "./config/primevue";
import {image} from "./config/image";
import {axios} from "./config/axios";
import {router} from "./config/router";
import {auth} from "./config/auth";


export default {
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'primeflex/primeflex.css',
    '~assets/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/axios.js', mode: 'client'
    },
    {
      src: '~/plugins/moment.js', mode: 'client'
    },
    {
      src: '~/plugins/i18n.js', mode: 'client'
    },
    {
      src: '~/plugins/vuelidate.js', mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    ['@nuxtjs/i18n', i18n],
    ['primevue/nuxt', primevue],
    ['@nuxtjs/style-resources', styleResources],
    ['@nuxt/image', image],
    ['@nuxtjs/axios', axios],
    ['@nuxtjs/auth-next', auth]
  ],

  router: {
    middleware: ['auth'],
    extendRoutes(routes, resolve) {
      return router
    },
  },

  loading: {
    color: 'lightblue',
    height: '2px'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
  }
}
