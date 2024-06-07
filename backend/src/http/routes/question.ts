import { FastifyInstance } from 'fastify'
import { getById } from '../controllers/question'

export async function questionRoutes(app: FastifyInstance) {
  app.get('/:id', getById)
}
