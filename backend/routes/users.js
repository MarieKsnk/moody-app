import { Router } from "express";
import { getUserProfile } from "../controllers/usersController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/profile", authMiddleware, getUserProfile);

export default userRouter;
