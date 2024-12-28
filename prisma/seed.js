import prisma from "@/app/_lib/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        username: "john_doe",
        email: "test@test.com",
        password: "test1234",
        role: "admin",
        joinedAt: new Date(),
        lastLogin: new Date(),
        status: "active",
      },
      {
        username: "jane_doe",
        email: "test1@test.com",
        password: "test1234",
        role: "user",
        joinedAt: new Date(),
        lastLogin: new Date(),
        status: "active",
      },
    ],
  });
  console.log("Seeding completed!");
}

seed()
  .catch(console.error)
  .finally(() => process.exit());
