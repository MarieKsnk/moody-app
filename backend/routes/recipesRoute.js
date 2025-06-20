import { Router } from "express";
import { createRecipe } from "../controllers/recipeController.js";
import { uploadRecipeMiddleware } from "../middlewares/upload_recipe/uploadRecipeMiddleware.js";
import { imageKitRecipeMiddleware } from "../middlewares/upload_recipe/imageKitRecipeMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const recipeRouter = Router();

recipeRouter.post(
    "/add-recipe",
    authMiddleware,
    uploadRecipeMiddleware,
    imageKitRecipeMiddleware,
    createRecipe
)


export default recipeRouter;