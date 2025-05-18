import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const emailVerification = await prisma.user.findUnique({
      where: { email },
    });

    if (emailVerification) {
      res.status(409).json({ error: "Email déjà utilisé" });
      return;
    }

    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltPassword);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    const token = await jwt.sign({ id: newUser.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .status(201)
      .json({ token, message: `Bienvenue sur Moody, ${newUser.firstName} !` });
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Email ou mot de passe incorrect" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res
        .status(404)
        .json({ error: "Email ou mot de passe incorrrect" });
    }

    const token = await jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      token,
      message: `${user.firstName}, vous êtes maintenant connecté(e) !`,
    });
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
