/*
  Warnings:

  - Made the column `nome` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "nome" SET NOT NULL;
