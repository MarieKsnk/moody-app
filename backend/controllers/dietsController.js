import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDiets = async (req, res) => {
  try {
    const diets = await prisma.diet.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ diets });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
