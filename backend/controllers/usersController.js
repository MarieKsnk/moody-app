import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        profilePicture: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res
      .status(200)
      .json({ user, message: `${user.firstName}, voici votre profil` });
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }
    return res
      .status(200)
      .json({ users, message: "Liste des utilisateurs récupérée avec succès" });
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
