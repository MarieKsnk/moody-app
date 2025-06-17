import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTypes = async (req, res) => {
  try {
    const types = await prisma.type.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json({ types });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
