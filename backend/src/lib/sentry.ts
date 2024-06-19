// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import { env } from '@/env'
import * as Sentry from '@sentry/node'
//@ts-ignore
import { nodeProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: env.SENTRY_DNS,
  integrations: [nodeProfilingIntegration()],

  tracesSampleRate: 1.0,

  profilesSampleRate: 1.0,

  environment: env.SENTRY_ENVIRONMENT
})
