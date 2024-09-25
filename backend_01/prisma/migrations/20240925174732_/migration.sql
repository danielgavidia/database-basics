/*
  Warnings:

  - You are about to drop the column `memberId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_memberId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "memberId";

-- CreateTable
CREATE TABLE "_BookToMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToMember_AB_unique" ON "_BookToMember"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToMember_B_index" ON "_BookToMember"("B");

-- AddForeignKey
ALTER TABLE "_BookToMember" ADD CONSTRAINT "_BookToMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToMember" ADD CONSTRAINT "_BookToMember_B_fkey" FOREIGN KEY ("B") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
