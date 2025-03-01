import prisma from "~/lib/prisma";
import { faker } from "@faker-js/faker";

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const NAME_DIVIDER = "|||";

  function generateFullName() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return `${firstName}${NAME_DIVIDER}${lastName}`;
  }

  const seedUsers = faker.helpers
    .uniqueArray(generateFullName, 10)
    .map((name) => {
      const [firstName, lastName] = name.split(NAME_DIVIDER);
      return {
        email: faker.internet.email({ firstName, lastName }),
        name: faker.person.fullName({ firstName, lastName }),
      };
    });

  await prisma.user.createMany({
    data: seedUsers,
  });

  const exsitUsers = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  const authorIds = [];
  for (const user of exsitUsers) {
    const numberOfPosts = faker.number.int({ min: 1, max: 10 });
    for (let i = 0; i < numberOfPosts; i++) {
      authorIds.push(user.id);
    }
  }

  const newPostData = authorIds.map((id) => {
    return {
      title: faker.hacker.noun(),
      content: faker.hacker.phrase(),
      published: faker.datatype.boolean({
        probability: 0.8,
      }),
      authorId: id,
    };
  });

  await prisma.post.createMany({
    data: newPostData,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
