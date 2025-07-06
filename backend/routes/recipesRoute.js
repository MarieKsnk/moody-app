import { Router } from "express";
import { createRecipe } from "../controllers/recipeController.js";
import { uploadRecipeMiddleware } from "../middlewares/upload_recipe/uploadRecipeMiddleware.js";
import { imageKitRecipeMiddleware } from "../middlewares/upload_recipe/imageKitRecipeMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { rateLimiterMiddleware } from "../middlewares/rateLimiterMiddleware.js";
import {
  createRecipeValidator,
  idParamValidator,
  updateRecipeValidator,
} from "../middlewares/validatorsMiddleware.js";
import { getRecipeById } from "../controllers/recipeController.js";
import { updateRecipe } from "../controllers/recipeController.js";
import { deleteRecipe } from "../controllers/recipeController.js";
import { getAllRecipes } from "../controllers/recipeController.js";
import { getRecipesByMood } from "../controllers/recipeController.js";

const recipeRouter = Router();

recipeRouter.post(
  "/add-recipe",
  authMiddleware,
  rateLimiterMiddleware,
  uploadRecipeMiddleware,
  imageKitRecipeMiddleware,
  createRecipeValidator,
  createRecipe
);

recipeRouter.get("/:id", idParamValidator, getRecipeById);

recipeRouter.get("/", getAllRecipes);

recipeRouter.get("/by-mood/:id", idParamValidator, getRecipesByMood);

recipeRouter.patch(
  "/:id",
  authMiddleware,
  idParamValidator,
  rateLimiterMiddleware,
  uploadRecipeMiddleware,
  imageKitRecipeMiddleware,
  updateRecipeValidator,
  updateRecipe
);

recipeRouter.delete("/:id", authMiddleware, idParamValidator, deleteRecipe);

export default recipeRouter;
