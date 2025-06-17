import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await prisma.ingredient.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ ingredients });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
