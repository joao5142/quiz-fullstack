import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function markQuizQuestion(request: FastifyRequest, reply: FastifyReply) {
  const registerBody = z.object({
    quizId: z.number(),
    questionId: z.string().email(),
    markedAlternative: z.string()
  })

  const { questionId, quizId, markedAlternative } = registerBody.parse(request.body)

  return reply.status(201).send()
}
