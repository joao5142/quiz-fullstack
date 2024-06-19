import * as Sentry from '@sentry/vue'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  const vueApp = nuxtApp.vueApp
  nuxtApp.hook('app:created', () => {
    Sentry.init({
      app: vueApp,
      trackComponents: true,

      dsn: 'https://597dd56e035f74899df8083568d413a8@o4507459846471680.ingest.us.sentry.io/4507460088692736',
      integrations: [Sentry.browserTracingIntegration({ router })],

      tracesSampleRate: 1.0,
      tracePropagationTargets: ['localhost', /^https:\/\/frontendquiz\.com\.br\/api/],

      environment: import.meta.env.SENTRY_ENVIRONMENT ?? 'development',
      logErrors: true,
    })
  })
})
