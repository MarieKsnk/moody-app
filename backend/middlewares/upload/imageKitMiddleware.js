import ImageKit from "imagekit";
import dotenv from "dotenv";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const imageKitMiddleware = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const { buffer, originalname } = req.file;
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `moody-profile-${Date.now()}-${originalname}`,
      folder: "/profile-pics",
      useUniqueFileName: true,
    });
    req.body.profilePictureUrl = uploadResponse.url;
    req.body.profilePictureId = uploadResponse.fileId;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Échec de l'upload vers ImageKit." });
  }
};
