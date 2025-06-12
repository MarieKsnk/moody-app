import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { uploadProfileMiddleware } from "../middlewares/upload_profile/uploadProfileMiddleware.js";
import { imageKitProfileMiddleware } from "../middlewares/upload_profile/imageKitProfileMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/register",
  uploadProfileMiddleware,
  imageKitProfileMiddleware,
  register
);
authRouter.post("/login", login);

export default authRouter;
