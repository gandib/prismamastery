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
  //   const createMany = await prisma.post.createMany({
  //     data: [
  //       {
  //         title: "This is title 3",
  //         content: "This is content",
  //         authorName: "Gandib",
  //       },
  //       {
  //         title: "This is title 4",
  //         content: "This is content",
  //         authorName: "Gandib",
  //       },
  //     ],
  //   });
  //   console.log({ createMany });
};

main();
