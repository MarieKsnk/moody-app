import prisma from "../database/prismaClient.js";

// GET - Nombre total d'utilisateurs inscrits
// Utilisé dans le dashboard admin pour afficher les stats
export const getUsersCount = async (req, res, next) => {
  try {
    const count = await prisma.user.count();
    res.status(200).json({ count });
  } catch (error) {
    console.error("Erreur dans getUsersCount :", error);
    next(error);
  }
};

// GET - Nombre total de recettes acceptées (status accepted)
// Utilisé dans le dashboard admin pour afficher les stats
export const getRecipesCount = async (req, res, next) => {
  try {
    const count = await prisma.recipe.count({
      where: { status: "accepted" },
    });
    res.status(200).json({ count });
  } catch (error) {
    console.error("Erreur dans getRecipesCount :", error);
    next(error);
  }
};

// GET - Nombre de recettes en attente de validation (status pending)
// Utilisé dans le dashboard admin pour afficher les stats
export const getPendingRecipesCount = async (req, res, next) => {
  try {
    const count = await prisma.recipe.count({
      where: { status: "pending" },
    });
    res.status(200).json({ count });
  } catch (error) {
    console.error("Erreur dans getPendingRecipesCount :", error);
    next(error);
  }
};
