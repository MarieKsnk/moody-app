import { Router } from "express";
import { getAllUsers, getMe } from "../controllers/usersController.js";
import { getUserRecipes } from "../controllers/recipeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/me", authMiddleware, getMe);
userRouter.get("/", authMiddleware, getAllUsers);
userRouter.get("/:id/recipes", getUserRecipes);

export default userRouter;
