import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "This is title 04",
  //     },
  //   });
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "This is title 3",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   const upsertData = await prisma.post.upsert({
  //     where: {
  //       id: 5,
  //     },
  //     update: {
  //       authorName: "Gandib",
  //     },
  //     create: {
  //       title: "This is title 1",
  //       content: "This is content 1",
  //     },
  //   });
  //   console.log(upsertData);
};

main();
