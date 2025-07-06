import prisma from "../database/prismaClient.js";
import {
  includeRecipeData,
  includeUserData,
} from "./utils/recipeDataPrisma.js";

// GET - Récupérer toutes les recettes en attentes de validation (status pending)
// Utilisé dans le dashboard admin pour valider / refuser une recette
export const getPendingRecipes = async (req, res, next) => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: { status: "pending" },
      include: {
        ...includeUserData,
        ...includeRecipeData,
      },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(recipes);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des recettes à valider :",
      error
    );
    next(error);
  }
};

// PATCH - Accepter une recette en attente et la passer en status accepted
// Apres validation la recette devient visible publiquement.
export const acceptRecipe = async (req, res, next) => {
  const recipeId = req.params.id;

  try {
    const recipe = await prisma.recipe.findUnique({ where: { id: recipeId } });

    if (!recipe || recipe.status !== "pending") {
      return res
        .status(404)
        .json({ error: "Recette introuvable ou déjà traitée" });
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeId },
      data: { status: "accepted" },
      include: {
        ...includeUserData,
        ...includeRecipeData,
      },
    });

    res.status(200).json({
      message: "Cette recette a été acceptée",
      recipe: updatedRecipe,
    });
  } catch (error) {
    console.error("Erreur lors de l'acceptation de la recette :", error);
    next(error);
  }
};

// PATCH - Refuser une recette en attente et la passer en status rejected
// Apres refus de la recette elle ne sera jamais visible
export const rejectRecipe = async (req, res, next) => {
  const recipeId = req.params.id;

  try {
    const recipe = await prisma.recipe.findUnique({ where: { id: recipeId } });

    if (!recipe || recipe.status !== "pending") {
      return res
        .status(404)
        .json({ error: "Recette introuvable ou déjà traitée" });
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeId },
      data: { status: "rejected" },
      include: {
        ...includeUserData,
        ...includeRecipeData,
      },
    });

    res.status(200).json({
      message: "Cette recette a été refusée",
      recipe: updatedRecipe,
    });
  } catch (error) {
    console.error("Erreur lors du rejet de la recette :", error);
    next(error);
  }
};
