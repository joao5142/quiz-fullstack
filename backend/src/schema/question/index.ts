import { z } from 'zod'

export const QuestionSchema = z.object({
  correctAlternative: z.enum(['a', 'b', 'c', 'd', 'e']),
  alternativeA: z.string(),
  alternativeB: z.string(),
  alternativeC: z.string(),
  alternativeD: z.string(),
  alternativeE: z.string(),
  description: z.string()
})
