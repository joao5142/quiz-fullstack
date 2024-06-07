import { FastifyInstance } from 'fastify'
import { create, finish, getById } from '../controllers/quiz'

export async function quizRoutes(app: FastifyInstance) {
  app.post('', create)
  app.get('/:quizId', getById)
  app.post('/:quizId/finish', finish)
}
