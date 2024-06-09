import { AppError } from './AppError'

export class QuizError extends AppError {
  message: string

  constructor(message: string) {
    super(message)
    this.message = message
  }
}
