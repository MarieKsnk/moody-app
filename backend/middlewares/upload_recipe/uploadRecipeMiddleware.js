import multer from "multer";

const storage = multer.memoryStorage();

export const uploadRecipeMiddleware = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Seuls les fichiers JPEG, PNG et WebP sont autorisés !"));
    }
  },
}).single("recipePicture");
