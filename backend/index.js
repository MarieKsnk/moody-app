import express from "express";
import multer from "multer";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";

import userRouter from "./routes/usersRoute.js";
import authRouter from "./routes/authRoute.js";
import recipeRouter from "./routes/recipesRoute.js";
import ingredientsRouter from "./routes/ingredientsRoute.js";
import categoriesRouter from "./routes/categoriesRoute.js";
import adminRecipesRouter from "./routes/adminRecipesRoute.js";
import statsRouter from "./routes/statsRoute.js";
import adminUsersRouter from "./routes/adminUsersRoute.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Sécurité
app.use(helmet());

const allowedOrigins = ["http://localhost:3000", process.env.FRONTEND_MOODY];
const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Error CORS"));
      }
    },
  })
);

// Parsing + formulaire
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/admin/recipes", adminRecipesRouter);
app.use("/api/admin/stats", statsRouter);
app.use("/api/admin/users", adminUsersRouter);

// Route de test
app.get("/", (req, res) => {
  res.send("Welcome to Moody app");
});

// Middleware d’erreur Multer verifiant le type et la taille des fichiers
app.use((err, req, res, next) => {
  if (
    err instanceof multer.MulterError ||
    err.message?.includes("JPEG") ||
    err.message?.includes("PNG") ||
    err.message?.includes("WebP") ||
    err.message?.toLowerCase().includes("fichier")
  ) {
    return res.status(400).json({
      field: "image",
      message: err.message,
    });
  }
  next(err);
});

// Middleware d’erreurs globales
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Erreur serveur" });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
