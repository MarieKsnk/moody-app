import { Router } from "express";
import { getAllUsers, getUserProfile } from "../controllers/usersController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/profile", authMiddleware, getUserProfile);
userRouter.get("/", authMiddleware, getAllUsers);

export default userRouter;
