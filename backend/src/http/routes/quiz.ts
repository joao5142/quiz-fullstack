import { FastifyInstance } from 'fastify'
import { create, finish, getById, getPaginatedQuiz } from '../controllers/quiz'
import { markQuizQuestion } from '../controllers/quizQuestion'

export async function quizRoutes(app: FastifyInstance) {
  app.post('', create)
  app.get('/:quizId', getById)
  app.post('/:quizId/questions/:questionId/mark', markQuizQuestion)
  app.get('/:quizId/questions', getPaginatedQuiz)
  app.post('/:quizId/finish', finish)
}
