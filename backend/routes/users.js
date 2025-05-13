import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("Tous les utilisateurs");
});

export default userRouter;