import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fonction asynchrone permettant de creer une recette via un formulaire
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
    moodIds,
    dietIds,
    originIds,
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
        .json({ error: "un ou plusieurs champs obligatoires sont manquants" });
    }

    const parsedIngredients =
      typeof ingredientList === "string"
        ? JSON.parse(ingredientList)
        : ingredientList;

    const parsedInstructions =
      typeof instructions === "string"
        ? instructions.split("\n").filter(Boolean)
        : instructions;

    const parsedMoodIds =
      typeof moodIds === "string" ? JSON.parse(moodIds) : moodIds || [];

    const parsedDietIds =
      typeof dietIds === "string" ? JSON.parse(dietIds) : dietIds || [];

    const parsedOriginIds =
      typeof originIds === "string" ? JSON.parse(originIds) : originIds || [];

    const parsedTypeIds =
      typeof typeIds === "string" ? JSON.parse(typeIds) : typeIds || [];

    const newRecipe = await prisma.recipe.create({
      data: {
        userId,
        title,
        description,
        recipePicture,
        recipeUrl,
        prepTime: Number(prepTime),
        cookTime: Number(cookTime),
        serve: Number(serve),
        instructions: Array.isArray(parsedInstructions)
          ? parsedInstructions.join("\n")
          : parsedInstructions,

        ingredients: {
          create: parsedIngredients.map((item) => ({
            ingredientId: item.ingredientId,
            quantity: item.quantity,
          })),
        },

        moods: {
          create: parsedMoodIds.map((id) => ({ moodId: id })),
        },
        diets: {
          create: parsedDietIds.map((id) => ({ dietId: id })),
        },
        origins: {
          create: parsedOriginIds.map((id) => ({ originId: id })),
        },
        types: {
          create: parsedTypeIds.map((id) => ({ typeId: id })),
        },
      },
      include: {
        ingredients: { include: { ingredient: true } },
        moods: { include: { mood: true } },
        diets: { include: { diet: true } },
        origins: { include: { origin: true } },
        types: { include: { type: true } },
      },
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

// Fonction asynchrone permettant de recuperer toutes les recettes d'un utilisateur
export const getUserRecipes = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: "L'id utilisateur est requis" });
  }

  try {
    const recipes = await prisma.recipe.findMany({
      where: { userId },
      include: {
        moods: { include: { mood: true } },
        diets: { include: { diet: true } },
        origins: { include: { origin: true } },
        types: { include: { type: true } },
      },
    });

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Fonction asynchrone permettant de recuperer une recette par son ID
export const getRecipeById = async (req, res) => {
  const recipeId = req.params.id;

  if (!recipeId) {
    return res.status(400).json({ error: "L'id de la recette est requis" });
  }

  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            profilePicture: true,
          },
        },
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        moods: {
          include: {
            mood: true,
          },
        },
        diets: {
          include: {
            diet: true,
          },
        },
        origins: {
          include: {
            origin: true,
          },
        },
        types: {
          include: {
            type: true,
          },
        },
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
