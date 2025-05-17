import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const emailVerification = await prisma.user.findUnique({
      where: { email },
    });

    if (emailVerification) {
      res.status(409).json("Email déjà utilisé");
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

    return res.status(201).json(`Bienvenue sur Moody, ${firstName}`);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erreur serveur");
  }
};
