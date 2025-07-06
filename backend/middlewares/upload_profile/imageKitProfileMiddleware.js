import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Middleware d’upload pour la photo de profil vers ImageKit
// L'image est envoyé dans le dossier /profile-pics et le lien URL et l'ID du fichier sont ajoutés à req.body
export const imageKitProfileMiddleware = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const { buffer, originalname } = req.file;

    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `moody-profile-${Date.now()}-${originalname}`,
      folder: "/profile-pics",
      useUniqueFileName: true,
    });

    req.body.profilePicture = uploadResponse.url;
    req.body.profilePictureId = uploadResponse.fileId;

    next();
  } catch (err) {
    console.error("Erreur lors de l’upload ImageKit (profile):", err);
    return res.status(502).json({
      error: "Impossible de téléverser l'image de profil sur ImageKit.",
    });
  }
};
