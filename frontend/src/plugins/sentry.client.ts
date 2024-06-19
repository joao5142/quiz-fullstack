import * as Sentry from '@sentry/vue'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  const vueApp = nuxtApp.vueApp
  nuxtApp.hook('app:created', () => {
    Sentry.init({
      app: vueApp,
      trackComponents: true,

      dsn: import.meta.env.VITE_SENTRY_DNS,
      integrations: [Sentry.browserTracingIntegration({ router })],

      tracesSampleRate: 1.0,
      tracePropagationTargets: ['localhost', /^https:\/\/frontendquiz\.com\.br\/api/],

      environment: import.meta.env.VITE_SENTRY_ENVIRONMENT ?? 'development',
      logErrors: true,
    })
  })
})
