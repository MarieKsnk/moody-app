import multer from "multer";

const storage = multer.memoryStorage();

// Middleware d’upload pour la photo d'une recette
export const uploadRecipeMiddleware = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Seuls les fichiers JPEG, PNG et WebP sont autorisés !"));
    }
  },
}).single("recipePicture");
