import prisma from "../database/prismaClient.js";

// Middleware admin - Vérifie si l'utilisateur connecté est un admin
// Sécurise toutes les routes de du dashboard admin
export const adminMiddleware = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Utilisateur non connecté" });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: { select: { name: true } } },
    });

    if (!user || user.role.name !== "ADMIN") {
      return res.status(403).json({ error: "Accès réservé à l'admin" });
    }

    next();
  } catch (error) {
    console.error("Erreur middleware admin :", error);
    next(error);
  }
};
