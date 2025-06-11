import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Moody app");
});

app.use((err, res,) => {
  if (err instanceof multer.MulterError || err.message?.includes("JPEG, PNG et WebP")) {
    return res.status(400).json({
      field: "profilePicture",
      message: err.message,
    });
  }
  res.status(500).json({ message: "Erreur serveur" });
});

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
