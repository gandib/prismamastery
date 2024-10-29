import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // offset pagination
  const offsetPagination = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });

  // cursor based pagination
  //   const cursorPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 15,
  //     },
  //   });

  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
  });
  console.log(sortedData);
};

main();
