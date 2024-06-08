import { PrismaClient } from '@prisma/client'
import { questionCategories } from './questionCategory'
import { questions } from './question'
import { defaultUser } from './user'
const prisma = new PrismaClient()

async function main() {
  await prisma.questionCategory.createMany({
    data: questionCategories
  })
  await prisma.question.createMany({
    data: questions
  })

  await prisma.user.create({
    data: defaultUser
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
