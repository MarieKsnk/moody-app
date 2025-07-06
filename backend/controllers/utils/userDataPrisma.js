import prisma from "../../database/prismaClient.js";

export const getUserWithRoleById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      profilePicture: true,
      role: { select: { id: true, name: true } },
      createdAt: true,
    },
  });
};

export const getAllUsersWithRole = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      profilePicture: true,
      role: { select: { id: true, name: true } },
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
};
