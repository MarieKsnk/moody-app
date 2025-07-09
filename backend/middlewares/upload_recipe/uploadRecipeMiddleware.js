import multer from "multer";

const storage = multer.memoryStorage();

// configuration Multer
const uploader = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "recipePicture"));
    }
  },
}).single("recipePicture");

// Middleware d’upload pour la photo d'une recette
export const uploadRecipeMiddleware = (req, res, next) => {
  uploader(req, res, (err) => {
    if (err) {
      console.error("uploadRecipe erreur multer :", err);

      // dépassement de la taille
      if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
        return res.status(413).json({
          error: "Image trop volumineuse (2 Mo max).",
          details: { size: req.file?.size },
        });
      }

      // type de fichier non autorisé
      if (
        err instanceof multer.MulterError &&
        err.code === "LIMIT_UNEXPECTED_FILE"
      ) {
        return res.status(415).json({
          error: "Format non autorisé. Seuls JPEG, PNG et WebP sont acceptés.",
          details: { mimetype: req.file?.mimetype },
        });
      }

      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      }

      return next(err);
    }

    next();
  });
};
