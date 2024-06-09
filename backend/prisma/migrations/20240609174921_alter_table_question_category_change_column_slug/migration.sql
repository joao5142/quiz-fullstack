/*
  Warnings:

  - Made the column `slug` on table `QuestionCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "QuestionCategory" ALTER COLUMN "slug" SET NOT NULL;
