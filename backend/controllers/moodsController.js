import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllMoods = async (req, res) => {
  try {
    const moods = await prisma.mood.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ moods });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
