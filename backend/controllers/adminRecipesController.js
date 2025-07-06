import prisma from "../database/prismaClient.js";
import { includeUserData } from "./utils/recipeDataPrisma.js";

// GET - Récupérer toutes les recettes validées (status accepted)
// Disponible pour tout les utilisateurs depuis la nav générale
export const getAllAcceptedRecipes = async (req, res, next) => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: { status: "accepted" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        createdAt: true,
        ...includeUserData,
      },
    });

    return res.status(200).json({ recipes });
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    next(error);
  }
};
