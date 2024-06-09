/*
  Warnings:

  - The `slug` column on the `QuestionCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('html', 'css', 'js', 'accessibility');

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "correctAlternative" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuestionCategory" DROP COLUMN "slug",
ADD COLUMN     "slug" "Categories";

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "categorySlug" "Categories",
ADD COLUMN     "correctQuestions" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "QuestionCategory_slug_key" ON "QuestionCategory"("slug");
