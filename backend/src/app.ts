import './lib/sentry.ts'

import Fastify from 'fastify'
import { appRoutes } from './http/routes'
import { env } from 'process'
import { ZodError } from 'zod'
import { AppError } from './errors'
import cors from '@fastify/cors'
import { captureException } from '@sentry/node'
const Sentry = require('@sentry/node')

export const app = Fastify({
  logger: true
})

Sentry.setupFastifyErrorHandler(app)

app.register(appRoutes)

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
})

app.setErrorHandler((error, _request, response) => {
  if (error instanceof ZodError) {
    return response.status(400).send({ message: 'Validation Error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  if (error instanceof AppError) {
    return response.status(500).send({
      message: error.message
    })
  }

  captureException(error)

  return response.status(500).send({
    message: 'Internal server error.'
  })
})
