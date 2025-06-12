import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

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
    console.error(err);
    res.status(500).json({ error: "Échec de l'upload de l'image de recette." });
  }
};
