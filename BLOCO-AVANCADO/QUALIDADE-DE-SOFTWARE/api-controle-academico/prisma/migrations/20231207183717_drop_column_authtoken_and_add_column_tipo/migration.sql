/*
  Warnings:

  - You are about to drop the column `auth_token` on the `aluno` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoAluno" AS ENUM ('M', 'T', 'F');

-- AlterTable
ALTER TABLE "aluno" DROP COLUMN "auth_token",
ADD COLUMN     "tipo" "TipoAluno" NOT NULL DEFAULT 'M';
