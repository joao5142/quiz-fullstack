import { NuxtPage } from 'nuxt/schema'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',

  dir: {
    public: '../public',
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  // ssr: false,

  app: {
    head: {
      title: 'Quiz',
      link: [],
    },
  },

  hooks: {
    'pages:extend'(pages) {
      function acceptPagesMatching(pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          if (page.path.includes('components')) {
            pagesToRemove.push(page)
          } else {
            acceptPagesMatching(page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }

        // console.log('accept Pages ', pagesToRemove)
      }
      acceptPagesMatching(pages)
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  components: [
    {
      path: '@/components/ui',
      pathPrefix: false,
    },
    {
      path: '@/components/partials',
      pathPrefix: false,
    },
    {
      path: '@/components/layout',
      pathPrefix: false,
    },
  ],

  css: ['vuetify/styles', '@/styles/main.scss'],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        //@ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    manifest: {
      name: 'Quiz App PWA',
      short_name: 'Quiz App PWA',
      description: 'Frontend Quiz App',
      start_url: '/',
      theme_color: '#ffffff',
      display: 'standalone',
      lang: 'pt-br',
      screenshots: [
        {
          src: 'manifest/screen.png',
          sizes: '320x320',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Frontend Quiz App',
        },
      ],
      icons: [
        {
          src: 'manifest/icons/64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'manifest/icons/144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'manifest/icons/192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'manifest/icons/512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  typescript: {
    strict: true,
  },
})
