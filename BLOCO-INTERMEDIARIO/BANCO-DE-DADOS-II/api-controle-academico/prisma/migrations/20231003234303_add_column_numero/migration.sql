/*
  Warnings:

  - Added the required column `numero` to the `endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "endereco" ADD COLUMN     "numero" VARCHAR(20) NOT NULL;
