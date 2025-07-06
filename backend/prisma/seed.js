import prisma from "../database/prismaClient.js";
import { ingredients } from "./ingredients.js";
import bcrypt from "bcryptjs";

async function main() {
  await prisma.role.upsert({
    where: { id: "USER" },
    update: {},
    create: {
      id: "USER",
      name: "Utilisateur",
    },
  });

  await prisma.role.upsert({
    where: { id: "ADMIN" },
    update: {},
    create: {
      id: "ADMIN",
      name: "Administrateur",
    },
  });

  await prisma.ingredient.createMany({
    data: ingredients,
    skipDuplicates: true,
  });

  await prisma.type.createMany({
    data: [
      { name: "Entrée" },
      { name: "Apero" },
      { name: "Plat principal" },
      { name: "Dessert" },
      { name: "Snack" },
      { name: "Boisson" },
    ],
    skipDuplicates: true,
  });

  await prisma.diet.createMany({
    data: [
      { name: "Vegan" },
      { name: "Végétarien" },
      { name: "Sans gluten" },
      { name: "Sans lactose" },
      { name: "Sans sucre" },
      { name: "IG bas" },
      { name: "Protéiné" },
      { name: "Viandard" },
      { name: "Low FODMAP" },
      { name: "Anti-inflammatoire" },
    ],
    skipDuplicates: true,
  });

  await prisma.mood.createMany({
    data: [
      { name: "J'ai la dalle" },
      { name: "J'ai la flemme" },
      { name: "J'ai envie de voyager" },
      { name: "J'ai plus de thune" },
      { name: "J'ai pas le temps" },
      { name: "Je veux flexer" },
      { name: "J'ai envie de douceur" },
      { name: "Je suis healthy" },
    ],
    skipDuplicates: true,
  });

  await prisma.origin.createMany({
    data: [
      { name: "Europe" },
      { name: "Asie" },
      { name: "Amérique du Sud" },
      { name: "Amérique du Nord" },
      { name: "Afrique" },
    ],
    skipDuplicates: true,
  });

  const allTypes = await prisma.type.findMany();
  const allMoods = await prisma.mood.findMany();
  const allDiets = await prisma.diet.findMany();
  const allOrigins = await prisma.origin.findMany();
  const allRecipes = await prisma.recipe.findMany();

  for (const recipe of allRecipes) {
    const type = allTypes[Math.floor(Math.random() * allTypes.length)];
    const moods = allMoods.sort(() => 0.5 - Math.random()).slice(0, 2);
    const diet = allDiets[Math.floor(Math.random() * allDiets.length)];
    const origin = allOrigins[Math.floor(Math.random() * allOrigins.length)];

    await prisma.typeRecipe.create({
      data: {
        recipeId: recipe.id,
        typeId: type.id,
      },
    });

    for (const mood of moods) {
      await prisma.moodRecipe.create({
        data: {
          recipeId: recipe.id,
          moodId: mood.id,
        },
      });
    }

    await prisma.dietRecipe.create({
      data: {
        recipeId: recipe.id,
        dietId: diet.id,
      },
    });

    await prisma.originRecipe.create({
      data: {
        recipeId: recipe.id,
        originId: origin.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
