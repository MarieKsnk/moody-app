import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { uploadProfileMiddleware } from "../middlewares/upload/uploadProfileMiddleware.js";
import { imageKitMiddleware } from "../middlewares/upload/imageKitMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/register",
  uploadProfileMiddleware,
  imageKitMiddleware,
  register
);
authRouter.post("/login", login);

export default authRouter;
