import { env } from '@/env/'
import { PrismaClient } from '@prisma/client'
import prismaRandom from 'prisma-extension-random'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : ['error']
}).$extends(prismaRandom())
