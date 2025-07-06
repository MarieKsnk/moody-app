import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { uploadProfileMiddleware } from "../middlewares/upload_profile/uploadProfileMiddleware.js";
import { imageKitProfileMiddleware } from "../middlewares/upload_profile/imageKitProfileMiddleware.js";
import { rateLimiterMiddleware } from "../middlewares/rateLimiterMiddleware.js";
import {
  registerValidator,
  loginValidator,
} from "../middlewares/validatorsMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/register",
  rateLimiterMiddleware,
  uploadProfileMiddleware,
  imageKitProfileMiddleware,
  registerValidator,
  register
);
authRouter.post("/login", rateLimiterMiddleware, loginValidator, login);

export default authRouter;
