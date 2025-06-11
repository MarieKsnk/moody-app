import { PrismaClient } from "@prisma/client";
import { ingredients } from "./ingredients.js";
import { ustensils } from "./ustensils.js";

const prisma = new PrismaClient();

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

  await prisma.ustensil.createMany({
    data: ustensils,
    skipDuplicates: true,
  });

  await prisma.type.createMany({
    data: [
      { name: "Entree" },
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
      { name: "Je veux faire genre" },
      { name: "J'ai besoin de réconfort" },
      { name: "Je veux manger healthy" },
    ],
    skipDuplicates: true,
  });

  await prisma.origin.createMany({
    data: [
      { name: "France" },
      { name: "Italie" },
      { name: "Espagne" },
      { name: "Grèce" },
      { name: "Allemagne" },
      { name: "Belgique" },
      { name: "Portugal" },
      { name: "Royaume-Uni" },
      { name: "Europe du Nord" },
      { name: "Europe de l'Est" },
      { name: "Asie centrale" },
      { name: "Asie de l'Est" },
      { name: "Amérique du nord" },
      { name: "Amérique latine" },
      { name: "Australie" },
      { name: "Afrique" },
      { name: "Moyen-Orient" },
    ],
    skipDuplicates: true,
  });
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
