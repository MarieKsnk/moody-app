import { PrismaClient } from "@prisma/client";
import {
  parseRecipeData,
  prismaRelations,
  includeRecipeData,
  includeUserData,
  newUpdatedRecipeData,
} from "./utils/recipeDataPrisma.js";

const prisma = new PrismaClient();

// PUSH - Fonction asynchrone permettant de creer une recette via un formulaire
export const createRecipe = async (req, res) => {
  const userId = req.user.id;
  const {
    title,
    description,
    recipeUrl,
    prepTime,
    cookTime,
    serve,
    instructions,
    ingredientList,
    typeIds,
  } = req.body;

  const recipePicture = req.body.recipePicture;

  try {
    if (
      !typeIds ||
      typeIds.length === 0 ||
      !recipePicture ||
      !ingredientList ||
      !instructions
    ) {
      return res
        .status(400)
        .json({ error: "Un ou plusieurs champs obligatoires sont manquants" });
    }

    const {
      parsedMoodIds,
      parsedDietIds,
      parsedOriginIds,
      parsedTypeIds,
      parsedIngredients,
      parsedInstructions,
    } = parseRecipeData(req.body);

    const relations = prismaRelations({
      parsedMoodIds,
      parsedDietIds,
      parsedOriginIds,
      parsedTypeIds,
      parsedIngredients,
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
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// GET - Fonction asynchrone permettant de recuperer toutes les recettes d'un utilisateur
export const getUserRecipes = async (req, res) => {
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
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// GET - Fonction asynchrone permettant de recuperer une recette par son ID
export const getRecipeById = async (req, res) => {
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

    res.status(200).json(recipe);
  } catch (error) {
    console.error("Erreur lors de la récupération de la recette :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// GET - Fonction asynchrone permettant de recuprer toutes les recettes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await prisma.recipe.findMany({
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
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// PATCH - Fonction asynchrone permettant de modifier une recette (uniquement par son auteur)
export const updateRecipe = async (req, res) => {
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

    if (existingRecipe.userId !== userId) {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const { parsedTypeIds, parsedIngredients, parsedInstructions } =
      parseRecipeData(req.body);

    // On accepte la modification que si ces 3 champs sont modifies (ou inchanges)
    if (
      parsedTypeIds.length === 0 ||
      parsedIngredients.length === 0 ||
      parsedInstructions.length === 0
    ) {
      return res.status(400).json({
        error: "Champs obligatoires manquants ou incomplets",
      });
    }

    // On supprime dans un premier temps toutes les anciennes relations
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

    // On re-creer la recette avec les nouvelles relations (ou les anciennes si elles n'ont pas ete remplacees)
    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeId },
      data: newUpdatedRecipeData(existingRecipe, req.body, parsedData),
      include: includeRecipeData,
    });

    res.status(200).json({
      message: "Recette mise à jour avec succès",
      recipe: updatedRecipe,
    });
  } catch (error) {
    console.error("Erreur lors de la modification de la recette :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// DELETE - Fonction asynchrone permettant de supprimer une recette (uniquement par son auteur)
export const deleteRecipe = async (req, res) => {
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

    return res.status(200).json({ message: "Recette supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la recette :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

///////////////////
export const getRecipesByMood = async (req, res) => {
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
    res.status(500).json({ error: "Erreur serveur" });
  }
};
