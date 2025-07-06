import { Router } from "express";
import {
  getAllUsers,
  getMe,
  deleteMe,
} from "../controllers/usersController.js";
import { getUserRecipes } from "../controllers/recipeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { idParamValidator } from "../middlewares/validatorsMiddleware.js";

const userRouter = Router();

userRouter.get("/me", authMiddleware, getMe);
userRouter.get("/", authMiddleware, getAllUsers);
userRouter.get(
  "/:id/recipes",
  authMiddleware,
  idParamValidator,
  getUserRecipes
);
userRouter.delete("/me", authMiddleware, deleteMe);

export default userRouter;
