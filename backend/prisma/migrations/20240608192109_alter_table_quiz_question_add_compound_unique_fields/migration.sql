/*
  Warnings:

  - A unique constraint covering the columns `[quizId,questionId]` on the table `QuizQuestion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "QuizQuestion_quizId_questionId_key" ON "QuizQuestion"("quizId", "questionId");
