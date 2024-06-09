/*
  Warnings:

  - The `markedAlternative` column on the `QuizQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `correctAlternative` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "correctAlternative",
ADD COLUMN     "correctAlternative" "Alternatives" NOT NULL;

-- AlterTable
ALTER TABLE "QuizQuestion" DROP COLUMN "markedAlternative",
ADD COLUMN     "markedAlternative" "Alternatives";
