import { PrismaClient, UserRole } from "@prisma/client";

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
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "Gandib3",
  //     email: "gandib3@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...",
  //     userId: 3,
  //   },
  // });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Programming",
  //   },
  // });
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "This is title",
  //     content: "This is content",
  //     authorId: 1,
  //     postCategory: {
  //       create: [{ categoryId: 1 }, { categoryId: 3 }],
  //       // create: {
  //       //   categoryId: 3,
  //       //   // category: {
  //       //   //   connect: {
  //       //   //     id: 1,
  //       //   //   },
  //       //   // },
  //       // },
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  // console.log(createPost);
};

main();
