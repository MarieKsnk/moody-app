import prisma from "../database/prismaClient.js";
import {
  getUserWithRoleById,
  getAllUsersWithRole,
} from "./utils/userDataPrisma.js";

// GET - Récupérer le profil d'un utilisateur par son ID (pour l'admin)
// Affiche les infos complètes de l'utilisateur dans le dashboard admin
export const getAdminUserById = async (req, res, next) => {
  try {
    const user = await getUserWithRoleById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération d’un utilisateur admin :",
      error
    );
    next(error);
  }
};

// GET - Récupérer la liste complète des utilisateurs (pour l'admin)
// Utilisé pour la gestion des comptes utilisateurs dans le dashboard admin
export const getAdminAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersWithRole();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de tous les utilisateurs admin :",
      error
    );
    next(error);
  }
};

// DELETE - Supprimer un utilisateur (par l'admin)
export const deleteAdminUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(200).json({ message: "Utilisateur supprimé" });
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de l’utilisateur admin :",
      error
    );
    next(error);
  }
};
