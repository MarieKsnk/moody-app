import { Router } from "express";
import {
  getUsersCount,
  getRecipesCount,
  getPendingRecipesCount,
} from "../controllers/statsController.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const statsRouter = Router();

statsRouter.get("/users", authMiddleware, adminMiddleware, getUsersCount);
statsRouter.get("/recipes", authMiddleware, adminMiddleware, getRecipesCount);
statsRouter.get(
  "/pending-recipes",
  authMiddleware,
  adminMiddleware,
  getPendingRecipesCount
);

export default statsRouter;
