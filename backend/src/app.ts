import Fastify from 'fastify'
import { appRoutes } from './http/routes'
import { env } from 'process'
import { ZodError } from 'zod'

export const app = Fastify({
  logger: true
})

app.register(appRoutes)

app.setErrorHandler((error, _request, response) => {
  if (error instanceof ZodError) {
    return response.status(400).send({ message: 'Validation Error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
  }

  return response.status(500).send({
    message: 'Internal server error.'
  })
})
