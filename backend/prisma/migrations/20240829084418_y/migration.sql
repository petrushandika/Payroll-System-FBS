/*
  Warnings:

  - You are about to drop the `Absensi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gaji` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HariKerja` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pegawai` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Employee', 'Admin');

-- DropForeignKey
ALTER TABLE "Absensi" DROP CONSTRAINT "Absensi_pegawaiId_fkey";

-- DropForeignKey
ALTER TABLE "Gaji" DROP CONSTRAINT "Gaji_pegawaiId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pegawaiId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- DropTable
DROP TABLE "Absensi";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Gaji";

-- DropTable
DROP TABLE "HariKerja";

-- DropTable
DROP TABLE "Pegawai";

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telp" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salary" (
    "id" SERIAL NOT NULL,
    "pegawaiId" INTEGER NOT NULL,
    "gajiPokok" DOUBLE PRECISION NOT NULL,
    "tunjangan" DOUBLE PRECISION NOT NULL,
    "potongan" DOUBLE PRECISION NOT NULL,
    "totalGaji" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingDay" (
    "id" SERIAL NOT NULL,
    "hari" TEXT NOT NULL,
    "jamMasuk" TEXT NOT NULL,
    "jamKeluar" TEXT NOT NULL,

    CONSTRAINT "WorkingDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "pegawaiId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "jamMasuk" TEXT NOT NULL,
    "jamKeluar" TEXT NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salary" ADD CONSTRAINT "Salary_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
