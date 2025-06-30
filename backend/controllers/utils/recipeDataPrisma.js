// Fichier regroupant les fonctions utilitaires permettant la manipulation des données des recettes dans le controller Recipe

export const parseRecipeData = (body) => {
  const { moodIds, dietIds, originIds, typeIds, ingredientList, instructions } =
    body;

  return {
    parsedMoodIds:
      typeof moodIds === "string" ? JSON.parse(moodIds) : moodIds || [],
    parsedDietIds:
      typeof dietIds === "string" ? JSON.parse(dietIds) : dietIds || [],
    parsedOriginIds:
      typeof originIds === "string" ? JSON.parse(originIds) : originIds || [],
    parsedTypeIds:
      typeof typeIds === "string" ? JSON.parse(typeIds) : typeIds || [],
    parsedIngredients:
      typeof ingredientList === "string"
        ? JSON.parse(ingredientList)
        : ingredientList,
    parsedInstructions:
      typeof instructions === "string"
        ? instructions.split("\n").filter(Boolean)
        : instructions,
  };
};

export const prismaRelations = ({
  parsedMoodIds,
  parsedDietIds,
  parsedOriginIds,
  parsedTypeIds,
  parsedIngredients,
}) => ({
  moods: { create: parsedMoodIds.map((id) => ({ moodId: id })) },
  diets: { create: parsedDietIds.map((id) => ({ dietId: id })) },
  origins: { create: parsedOriginIds.map((id) => ({ originId: id })) },
  types: { create: parsedTypeIds.map((id) => ({ typeId: id })) },
  ingredients: {
    create: parsedIngredients.map((item) => ({
      ingredientId: item.ingredientId,
      quantity: item.quantity,
    })),
  },
});

export const includeRecipeData = {
  ingredients: { include: { ingredient: true } },
  moods: { include: { mood: true } },
  diets: { include: { diet: true } },
  origins: { include: { origin: true } },
  types: { include: { type: true } },
};

export const includeUserData = {
  user: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      profilePicture: true,
    },
  },
};

export const newUpdatedRecipeData = (existingRecipe, body, parsedData) => {
  const {
    parsedMoodIds,
    parsedDietIds,
    parsedOriginIds,
    parsedTypeIds,
    parsedIngredients,
    parsedInstructions,
  } = parsedData;

  return {
    title: body.title ?? existingRecipe.title,
    description: body.description ?? existingRecipe.description,
    recipeUrl: body.recipeUrl ?? existingRecipe.recipeUrl,
    recipePicture: body.recipePicture ?? existingRecipe.recipePicture,
    prepTime:
      body.prepTime !== undefined
        ? Number(body.prepTime)
        : existingRecipe.prepTime,
    cookTime:
      body.cookTime !== undefined
        ? Number(body.cookTime)
        : existingRecipe.cookTime,
    serve: body.serve !== undefined ? Number(body.serve) : existingRecipe.serve,
    instructions:
      parsedInstructions.length > 0
        ? parsedInstructions.join("\n")
        : existingRecipe.instructions,

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
    ingredients: {
      create: parsedIngredients.map((item) => ({
        ingredientId: item.ingredientId,
        quantity: item.quantity,
      })),
    },
  };
};
