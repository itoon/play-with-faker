import prisma from "~/lib/prisma";

async function main() {
  await prisma.user.upsert({
    where: { email: "songklod@codeventure.app" },
    update: {},
    create: {
      email: "songklod@codeventure.app",
      name: "Songklod",
      Post: {
        create: {
          title: "CodeVenture a gamify coding education for kids",
          content: "https://codeventure.app",
          published: true,
        },
      },
    },
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
