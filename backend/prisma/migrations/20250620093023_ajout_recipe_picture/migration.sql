/*
  Warnings:

  - You are about to alter the column `name` on the `Diet` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `Ingredient` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `quantity` on the `IngredientRecipe` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `name` on the `Mood` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `Origin` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the column `createAt` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Recipe` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `name` on the `Type` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the column `createAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profilPicture` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - You are about to alter the column `firstName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `lastName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ustensil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UstensilRecipe` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `recipePicture` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_typeId_fkey";

-- DropForeignKey
ALTER TABLE "UstensilRecipe" DROP CONSTRAINT "UstensilRecipe_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "UstensilRecipe" DROP CONSTRAINT "UstensilRecipe_ustensilId_fkey";

-- AlterTable
ALTER TABLE "Diet" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "IngredientRecipe" ALTER COLUMN "quantity" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Mood" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Origin" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "createAt",
DROP COLUMN "imageUrl",
DROP COLUMN "typeId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "recipePicture" VARCHAR(255) NOT NULL,
ADD COLUMN     "recipeUrl" VARCHAR(255),
ADD COLUMN     "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
ALTER COLUMN "title" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Type" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createAt",
DROP COLUMN "profilPicture",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "profilePicture" VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(50);

-- DropTable
DROP TABLE "Favorite";

-- DropTable
DROP TABLE "Ustensil";

-- DropTable
DROP TABLE "UstensilRecipe";

-- CreateTable
CREATE TABLE "TypeRecipe" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "TypeRecipe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TypeRecipe" ADD CONSTRAINT "TypeRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeRecipe" ADD CONSTRAINT "TypeRecipe_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
