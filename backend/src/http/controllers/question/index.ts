import { QuestionSchema } from '@/schema/question'
import { getByIdUseCaseFactory, updateQuestionByIdFactory } from '@/use-cases/factories/question'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getById(request: FastifyRequest, reply: FastifyReply) {
  const routerParams = z.object({
    id: z.coerce.number()
  })

  const queryData = routerParams.safeParse(request.params)

  if (queryData.success) {
    const getQuestionByIdUseCase = getByIdUseCaseFactory()

    const question = await getQuestionByIdUseCase.execute({ id: queryData.data.id })

    return reply.status(200).send(question)
  } else {
    return reply.status(400)
  }
}

export async function updateById(request: FastifyRequest, reply: FastifyReply) {
  const routerParams = z.object({
    id: z.coerce.number()
  })

  const bodyParams = QuestionSchema.partial()

  const queryData = routerParams.safeParse(request.params)
  const bodyData = bodyParams.safeParse(request.body)

  if (queryData.success && bodyData.success) {
    const updateQuestionByIdUseCase = updateQuestionByIdFactory()

    const question = await updateQuestionByIdUseCase.execute({
      questionId: queryData.data.id,
      data: bodyData.data
    })

    return reply.status(200).send(question)
  } else {
    return reply.status(400)
  }
}
