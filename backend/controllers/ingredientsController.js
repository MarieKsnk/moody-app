import prisma from "../database/prismaClient.js";

// GET - Récupérer tous les ingrédients
// Utilisé dans le formulaire de création et d'édition de recette
export const getAllIngredients = async (req, res, next) => {
  try {
    const ingredients = await prisma.ingredient.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ ingredients });
  } catch (error) {
    console.error("Erreur lors de la récupération des ingrédients :", error);
    next(error);
  }
};
