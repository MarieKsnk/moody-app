import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware authentification - Vérifie si l'utilisateur est connecté
// Si le token est valide on donne les infos utilisateur a req.user
export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Accès refusé : token manquant" });
  }

  try {
    const decoded = await jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ error: "Token invalide" });
    }

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(403).json({ error: "Token expiré, reconnectez-vous" });
    }

    console.error("Erreur dans authMiddleware :", error);
    next(error);
  }
};
