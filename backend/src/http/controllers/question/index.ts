import { getByIdUseCaseFactory } from '@/use-cases/factories/question'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getById(request: FastifyRequest, reply: FastifyReply) {
  const queryParams = z.object({
    id: z.coerce.number()
  })

  const queryData = queryParams.safeParse(request.params)

  if (queryData.success) {
    const getQuestionByIdUseCase = getByIdUseCaseFactory()

    const question = await getQuestionByIdUseCase.execute({ id: queryData.data.id })

    return reply.status(200).send(question)
  } else {
    return reply.status(400)
  }
}
