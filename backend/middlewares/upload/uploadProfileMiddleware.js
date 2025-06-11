import multer from "multer";

const storage = multer.memoryStorage();

export const uploadProfileMiddleware = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Seuls JPEG, PNG et WebP sont autorisés !"));
    }
  },
}).single("profilePicture");
