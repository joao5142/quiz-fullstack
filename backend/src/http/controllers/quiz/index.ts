import {
  createQuizUseCaseFactory,
  finishQuizUseCaseFactory,
  getQuizByIdUseCaseFactory
} from '@/use-cases/factories/quiz'
import { getPaginatedByQuizIdUseCaseFactory } from '@/use-cases/factories/quizQuestion'

import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const bodyParams = z.object({
    userId: z.coerce.number(),
    questionCategorySlug: z.coerce.string()
  })

  const queryData = bodyParams.safeParse(request.body)

  if (queryData.success) {
    const createQuizUseCase = createQuizUseCaseFactory()

    const quiz = await createQuizUseCase.execute({
      userId: queryData.data.userId,
      questionCategorySlug: queryData.data.questionCategorySlug
    })

    return reply.status(201).send(quiz)
  } else {
    return reply.status(400)
  }
}

export async function finish(request: FastifyRequest, reply: FastifyReply) {
  const routerParams = z.object({
    quizId: z.coerce.number()
  })

  const paramsData = routerParams.safeParse(request.params)

  if (paramsData.success) {
    const finishQuizUseCase = finishQuizUseCaseFactory()
    const quiz = await finishQuizUseCase.execute({ quizId: paramsData.data.quizId })

    return reply.status(200).send(quiz)
  } else {
    return reply.status(400)
  }
}

export async function getById(request: FastifyRequest, reply: FastifyReply) {
  const routerParams = z.object({
    quizId: z.coerce.number()
  })

  const paramsData = routerParams.safeParse(request.params)

  if (paramsData.success) {
    const getQuizByIdUseCase = getQuizByIdUseCaseFactory()
    const quiz = await getQuizByIdUseCase.execute({ quizId: paramsData.data.quizId })

    return reply.status(200).send(quiz)
  } else {
    return reply.status(400)
  }
}

export async function getPaginatedQuiz(request: FastifyRequest, reply: FastifyReply) {
  const routerParams = z.object({
    quizId: z.coerce.number()
  })

  const queryParams = z.object({
    page: z.coerce.number()
  })

  const paramsData = routerParams.safeParse(request.params)

  if (paramsData.success) {
    const queryData = queryParams.safeParse(request.query)

    const getPaginatedByQuizIdUseCase = getPaginatedByQuizIdUseCaseFactory()

    const quiz = await getPaginatedByQuizIdUseCase.execute({
      quizId: paramsData.data.quizId,
      page: (queryData.success && queryData.data.page) || 1
    })

    return reply.status(200).send(quiz)
  } else {
    return reply.status(400)
  }
}
