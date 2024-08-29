/*
  Warnings:

  - You are about to drop the column `adminId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_adminId_fkey";

-- DropIndex
DROP INDEX "User_adminId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "adminId";

-- DropTable
DROP TABLE "Admin";
