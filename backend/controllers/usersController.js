import prisma from "../database/prismaClient.js";
import {
  getUserWithRoleById,
  getAllUsersWithRole,
} from "./utils/userDataPrisma.js";

// GET - Récupérer le profil de l'utilisateur connecté
// Utilise l'ID dans le token pour sécuriser l'accès
export const getMe = async (req, res, next) => {
  try {
    const user = await getUserWithRoleById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res
      .status(200)
      .json({ user, message: `${user.firstName}, voici votre profil` });
  } catch (error) {
    console.error("Erreur dans getMe :", error);
    next(error);
  }
};

// GET - Récupérer la liste de tous les utilisateurs
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersWithRole();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }

    res
      .status(200)
      .json({ users, message: "Liste des utilisateurs récupérée avec succès" });
  } catch (error) {
    console.error("Erreur dans getAllUsers :", error);
    next(error);
  }
};

// DELETE - Supprimer son propre compte utilisateur et toutes ses recettes associées
export const deleteMe = async (req, res, next) => {
  try {
    const userId = req.user.id;

    await prisma.recipe.deleteMany({ where: { userId } });
    await prisma.user.delete({ where: { id: userId } });

    res.status(200).json({
      message:
        "Compte et toutes les recettes supprimés (les images sont à supprimer séparément via ImageKit)",
    });
  } catch (error) {
    console.error("Erreur suppression compte user :", error);
    next(error);
  }
};
