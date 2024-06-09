import { PrismaClient } from '@prisma/client'
import { questionCategories } from './questionCategory'
import { questions } from './question'
import { defaultUser } from './user'
const prisma = new PrismaClient()

async function main() {
  await prisma.questionCategory.createMany({
    data: questionCategories as any
  })
  await prisma.question.createMany({
    data: questions as any
  })

  await prisma.user.create({
    data: defaultUser as any
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
