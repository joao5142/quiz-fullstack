import { NuxtPage } from 'nuxt/schema'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',
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
  // imports: {
  //   dirs: ['@/lib/api'],
  // },

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
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
  ],

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
