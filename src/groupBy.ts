import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const group = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      published: true,
    },
    having: {
      published: true,
    },
  });

  const groupByWithHaving = await prisma.user.groupBy({
    by: ["age"],
    _count: {
      age: true,
    },
    having: {
      age: {
        _max: {
          gt: 20,
        },
      },
    },
  });
  console.log(groupByWithHaving);
};

groupBy();
