import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Accès refusé : Token invalide" });
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
    return res
      .status(500)
      .json({ error: "Erreur lors de vérification du token" });
  }
};
