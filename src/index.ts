import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title 2",
  //       content: "This is content",
  //       authorName: "Gandib",
  //     },
  //   });
  //   console.log(result);

  const getAllFromDb = await prisma.post.findMany();
  console.log(getAllFromDb);
};

main();
