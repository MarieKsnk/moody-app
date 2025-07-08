import prisma from "../database/prismaClient.js";
import jwt from "jsonwebtoken";
import {
  parseRecipeData,
  prismaRelations,
  includeRecipeData,
  includeUserData,
  newUpdatedRecipeData,
} from "./utils/recipeDataPrisma.js";

// POST - Créer une nouvelle recette par un utilisateur
export const createRecipe = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const title = req.body.title;
    const description = req.body.description;
    const recipeUrl = req.body.recipeUrl;
    const recipePicture = req.body.recipePicture;
    const prepTime = req.body.prepTime;
    const cookTime = req.body.cookTime;
    const serve = req.body.serve;
    const instructions = req.body.instructions;

    const moodIds = JSON.parse(req.body.moodIds || "[]");
    const typeIds = JSON.parse(req.body.typeIds || "[]");
    const dietIds = JSON.parse(req.body.dietIds || "[]");
    const originIds = JSON.parse(req.body.originIds || "[]");
    const ingredientList = JSON.parse(req.body.ingredientList || "[]");

    const parsedInstructions = instructions ? instructions.split("\n") : [];

    if (
      !title?.trim() ||
      !recipePicture ||
      ingredientList.length === 0 ||
      typeIds.length === 0 ||
      parsedInstructions.length === 0
    ) {
      return res.status(400).json({
        error:
          "Certains champs obligatoires sont manquants (titre, image, ingrédients, instructions et type).",
      });
    }

    const relations = prismaRelations({
      parsedMoodIds: moodIds,
      parsedTypeIds: typeIds,
      parsedDietIds: dietIds,
      parsedOriginIds: originIds,
      parsedIngredients: ingredientList,
    });

    const newRecipe = await prisma.recipe.create({
      data: {
        userId,
        title,
        description,
        recipeUrl,
        recipePicture,
        prepTime: Number(prepTime),
        cookTime: Number(cookTime),
        serve: Number(serve),
        instructions: parsedInstructions.join("\n"),
        ...relations,
      },
      include: includeRecipeData,
    });

    res.status(201).json({
      message: "Recette ajoutée, en attente de validation.",
      recipe: newRecipe,
    });
  } catch (error) {
    console.error("Erreur lors de la création de la recette :", error);
    next(error);
  }
};

// GET - Récupérer toutes les recettes créées par un utilisateur
export const getUserRecipes = async (req, res, next) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: "Id requis" });
  }

  try {
    const recipes = await prisma.recipe.findMany({
      where: { userId },
      include: includeRecipeData,
    });

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    next(error);
  }
};

// GET - Récupérer une recette par son ID
export const getRecipeById = async (req, res, next) => {
  const recipeId = req.params.id;
  if (!recipeId) {
    return res.status(400).json({ error: "Id requis" });
  }

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
      include: {
        ...includeUserData,
        ...includeRecipeData,
      },
    });

    if (!recipe) {
      return res.status(404).json({ error: "Recette non trouvée" });
    }

    let isAdmin = false;
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const role =
          typeof payload.role === "string" ? payload.role : payload.role?.name;
        isAdmin = role === "ADMIN";
      } catch (err) {}
    }

    if (recipe.status !== "accepted" && !isAdmin) {
      return res
        .status(403)
        .json({ error: "Cette recette est en attente de validation" });
    }

    return res.status(200).json(recipe);
  } catch (error) {
    console.error("Erreur lors de la récupération de la recette :", error);
    next(error);
  }
};

// GET - Récupérer toutes les recettes acceptées
export const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: { status: "accepted" },
      include: {
        ...includeUserData,
        ...includeRecipeData,
      },
    });

    res.status(200).json(recipes);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de toutes les recettes :",
      error
    );
    next(error);
  }
};

// PATCH - Mets à jour une recette (seulement par l'auteur de la recette ou l'admin)
export const updateRecipe = async (req, res, next) => {
  const userId = req.user.id;
  const recipeId = req.params.id;
  const parsedData = parseRecipeData(req.body);

  try {
    const existingRecipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
      include: includeRecipeData,
    });

    if (!existingRecipe) {
      return res.status(404).json({ error: "Recette non trouvée" });
    }

    const userRole =
      typeof req.user.role === "string" ? req.user.role : req.user.role?.name;
    const isAdmin = userRole === "ADMIN";

    if (existingRecipe.userId !== userId && !isAdmin) {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const { parsedTypeIds, parsedIngredients, parsedInstructions } = parsedData;

    if (
      parsedTypeIds.length === 0 ||
      parsedIngredients.length === 0 ||
      parsedInstructions.length === 0
    ) {
      return res.status(400).json({
        error: "Champs obligatoires manquants ou incomplets",
      });
    }

    await prisma.recipe.update({
      where: { id: recipeId },
      data: {
        moods: { deleteMany: {} },
        diets: { deleteMany: {} },
        origins: { deleteMany: {} },
        types: { deleteMany: {} },
        ingredients: { deleteMany: {} },
      },
    });

    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeId },
      data: {
        ...newUpdatedRecipeData(existingRecipe, req.body, parsedData),
        status: isAdmin ? existingRecipe.status : "pending",
      },
      include: includeRecipeData,
    });

    res.status(200).json({
      message: isAdmin
        ? "Recette mise à jour avec succès"
        : "Recette mise à jour, en attente de validation",
      recipe: updatedRecipe,
    });
  } catch (error) {
    console.error("Erreur lors de la modification de la recette :", error);
    next(error);
  }
};

// DELETE - Supprimer une recette (seulement par l'auteur de la recette)
export const deleteRecipe = async (req, res, next) => {
  const userId = req.user.id;
  const recipeId = req.params.id;

  try {
    const existingRecipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
    });

    if (!existingRecipe) {
      return res.status(404).json({ error: "Recette non trouvée" });
    }

    if (existingRecipe.userId !== userId) {
      return res.status(403).json({ error: "Accès interdit" });
    }

    await prisma.recipe.update({
      where: { id: recipeId },
      data: {
        moods: { deleteMany: {} },
        diets: { deleteMany: {} },
        origins: { deleteMany: {} },
        types: { deleteMany: {} },
        ingredients: { deleteMany: {} },
      },
    });

    await prisma.recipe.delete({
      where: { id: recipeId },
    });

    res.status(200).json({ message: "Recette supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la recette :", error);
    next(error);
  }
};

// GET - Récupérer toutes les recettes associées à un mood
export const getRecipesByMood = async (req, res, next) => {
  const moodId = req.params.id;

  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        moods: {
          some: {
            moodId: moodId,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      include: {
        user: true,
        moods: {
          include: {
            mood: true,
          },
        },
      },
    });

    res.status(200).json({ recipes });
  } catch (error) {
    console.error("Erreur dans getRecipesByMood:", error);
    next(error);
  }
};
