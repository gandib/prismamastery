import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransactions = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "gandibroy",
      email: "gandib3@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 36,
    },
  });

  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(userData, updatedData);
};

batchTransactions();
