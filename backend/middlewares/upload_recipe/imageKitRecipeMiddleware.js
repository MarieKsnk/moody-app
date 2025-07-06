import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Middleware d’upload pour la photo d'une recette vers ImageKit
// L'image est envoyé dans le dossier /recipe-pics et le lien URL et l'ID du fichier sont ajoutés à req.body
export const imageKitRecipeMiddleware = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const { buffer, originalname } = req.file;
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `moody-recipe-${Date.now()}-${originalname}`,
      folder: "/recipe-pics",
      useUniqueFileName: true,
    });
    req.body.recipePicture = uploadResponse.url;
    req.body.recipePictureId = uploadResponse.fileId;
    next();
  } catch (err) {
    console.error("Erreur lors de l’upload ImageKit (recette):", err);
    res.status(502).json({
      error: "Impossible de téléverser l'image de recette sur ImageKit.",
    });
  }
};
