import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDb = await prisma.post.findMany();

  // find first
  const findFirst = await prisma.post.findFirst({
    where: {
      id: 2,
    },
  });

  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       published: true,
  //     },
  //   });

  //   const findUnique = await prisma.post.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   });

  const findUnique = await prisma.post.findUnique({
    where: {
      id: 5,
    },
    select: {
      title: true,
    },
  });

  console.log({ findUnique });
};

main();
