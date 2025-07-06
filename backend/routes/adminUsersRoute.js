import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import {
  getAdminAllUsers,
  getAdminUserById,
  deleteAdminUserById,
} from "../controllers/adminUsersController.js";
import { idParamValidator } from "../middlewares/validatorsMiddleware.js";

const adminUsersRouter = express.Router();

adminUsersRouter.get("/", authMiddleware, adminMiddleware, getAdminAllUsers);
adminUsersRouter.get(
  "/:id",
  authMiddleware,
  adminMiddleware,
  idParamValidator,
  getAdminUserById
);
adminUsersRouter.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  idParamValidator,
  deleteAdminUserById
);

export default adminUsersRouter;
