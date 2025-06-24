import { Router } from "express";
import { createRecipe } from "../controllers/recipeController.js";
import { uploadRecipeMiddleware } from "../middlewares/upload_recipe/uploadRecipeMiddleware.js";
import { imageKitRecipeMiddleware } from "../middlewares/upload_recipe/imageKitRecipeMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getRecipeById } from "../controllers/recipeController.js";

const recipeRouter = Router();

recipeRouter.post(
  "/add-recipe",
  authMiddleware,
  uploadRecipeMiddleware,
  imageKitRecipeMiddleware,
  createRecipe
);

recipeRouter.get("/:id", getRecipeById);

export default recipeRouter;
