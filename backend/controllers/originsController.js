import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllOrigins = async (req, res) => {
  try {
    const origins = await prisma.origin.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ origins });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
