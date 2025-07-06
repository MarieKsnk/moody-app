import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import {
  getPendingRecipes,
  acceptRecipe,
  rejectRecipe,
} from "../controllers/adminController.js";
import { getAllAcceptedRecipes } from "../controllers/adminRecipesController.js";
import { idParamValidator } from "../middlewares/validatorsMiddleware.js";

const adminRecipesRouter = express.Router();

adminRecipesRouter.get(
  "/pending",
  authMiddleware,
  adminMiddleware,
  getPendingRecipes
);
adminRecipesRouter.patch(
  "/:id/accept",
  authMiddleware,
  adminMiddleware,
  idParamValidator,
  acceptRecipe
);
adminRecipesRouter.patch(
  "/:id/reject",
  authMiddleware,
  adminMiddleware,
  idParamValidator,
  rejectRecipe
);

adminRecipesRouter.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllAcceptedRecipes
);

export default adminRecipesRouter;
