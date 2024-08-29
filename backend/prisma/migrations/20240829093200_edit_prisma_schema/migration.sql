/*
  Warnings:

  - You are about to drop the column `pegawaiId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pegawaiId_fkey";

-- DropIndex
DROP INDEX "User_pegawaiId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "pegawaiId";
