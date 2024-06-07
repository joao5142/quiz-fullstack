import { FastifyInstance } from 'fastify'
import { questionRoutes } from './question'
import { quizRoutes } from './quiz'

export async function appRoutes(app: FastifyInstance) {
  app.register(questionRoutes, { prefix: '/question' })
  app.register(quizRoutes, { prefix: '/quiz' })
}
