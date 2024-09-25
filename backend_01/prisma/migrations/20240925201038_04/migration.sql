/*
  Warnings:

  - You are about to drop the `_BookToMember` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rentedByMemberId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookToMember" DROP CONSTRAINT "_BookToMember_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToMember" DROP CONSTRAINT "_BookToMember_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "rentedByMemberId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_BookToMember";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_rentedByMemberId_fkey" FOREIGN KEY ("rentedByMemberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
