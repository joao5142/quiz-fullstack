// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import { env } from '@/env'
import * as Sentry from '@sentry/node'
//@ts-ignore
import { nodeProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: 'https://fff34995467c229183bb231718b8ef8b@o4507459846471680.ingest.us.sentry.io/4507460123164672',
  integrations: [nodeProfilingIntegration()],

  tracesSampleRate: 1.0,

  profilesSampleRate: 1.0,

  environment: env.SENTRY_ENVIRONMENT
})
