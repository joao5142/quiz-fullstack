import { AppError } from '@/errors'

export class MarkQuizQuestionError extends AppError {
  message: string

  constructor(message: string) {
    super(message)
    this.message = message
  }
}
