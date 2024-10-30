import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;

  // delete user by raw query
  // await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;

  console.log(posts);
};

rawQuery();
