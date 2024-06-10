import { FastifyInstance } from 'fastify'
import { getById, updateById } from '../controllers/question'

export async function questionRoutes(app: FastifyInstance) {
  app.get('/:id', getById)
  app.put('/:id', updateById)
}
