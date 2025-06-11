import { Router } from "express";
import { getAllUsers, getMe } from "../controllers/usersController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/me", authMiddleware, getMe);
userRouter.get("/", authMiddleware, getAllUsers);

export default userRouter;
