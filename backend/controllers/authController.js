import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import prisma from "../database/prismaClient.js";
import { getUserWithRoleById } from "./utils/userDataPrisma.js";

const JWT_SECRET = process.env.JWT_SECRET;

// POST - Inscription d'un nouvel utilisateur
// Vérification de l’email, hash du mot de passe, et création du compte
export const register = async (req, res, next) => {
  const { firstName, lastName, email, password, profilePicture } = req.body;

  try {
    const emailVerification = await prisma.user.findUnique({
      where: { email },
    });

    if (emailVerification) {
      return res.status(409).json({ error: "Email déjà utilisé" });
    }

    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltPassword);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profilePicture: profilePicture || null,
      },
      include: { role: true },
    });

    const userWithRole = await getUserWithRoleById(newUser.id);

    const token = jwt.sign(
      {
        id: newUser.id,
        role: userWithRole.role.name,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      token,
      message: `Bienvenue sur Moody, ${newUser.firstName} !`,
      user: userWithRole,
    });
  } catch (error) {
    console.error("Erreur dans register :", error);
    next(error);
  }
};

// POST - Connexion d’un utilisateur
// Vérification de l’email et du mot de passe, donne le token si les infos sont ok
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        password: true,
        profilePicture: true,
        role: { select: { id: true, name: true } },
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role.name,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: _removed, ...userSafe } = user;

    return res.status(201).json({
      token,
      user: userSafe,
    });
  } catch (error) {
    console.error("Erreur dans login :", error);
    next(error);
  }
};
