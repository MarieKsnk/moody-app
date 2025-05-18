import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;

//{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwZjdiY2QwLTM2NDItNGEyYS05NGE3LWFlMmNiZGY3ZWYzNiIsImlhdCI6MTc0NzQ3MjI2OCwiZXhwIjoxNzQ4MDc3MDY4fQ.6ZbXOivAlXwwqZRAW2789xfKMyz-jA0T1gFtqD149A0",
// "message": "Bienvenue sur Moody, Marie !"}
