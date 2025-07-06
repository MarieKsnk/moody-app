import prisma from "../database/prismaClient.js";

// GET - Récupérer toutes les catégories diets
export const getAllDiets = async (req, res, next) => {
  try {
    const diets = await prisma.diet.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ diets });
  } catch (error) {
    console.error("Erreur lors de la récupération des diets :", error);
    next(error);
  }
};

// GET - Récupérer toutes les catégories moods
export const getAllMoods = async (req, res, next) => {
  try {
    const moods = await prisma.mood.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ moods });
  } catch (error) {
    console.error("Erreur lors de la récupération des moods :", error);
    next(error);
  }
};

// GET - Récupérer toutes les catégories origins
export const getAllOrigins = async (req, res, next) => {
  try {
    const origins = await prisma.origin.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ origins });
  } catch (error) {
    console.error("Erreur lors de la récupération des origins :", error);
    next(error);
  }
};

// GET - Récupérer toutes les catégories types
export const getAllTypes = async (req, res, next) => {
  try {
    const types = await prisma.type.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ types });
  } catch (error) {
    console.error("Erreur lors de la récupération des types :", error);
    next(error);
  }
};
