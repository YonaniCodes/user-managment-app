import { PrismaClient } from "@prisma/client";

// Initialize a Prisma Client instance
const prisma = new PrismaClient();

// Export the Prisma instance for use elsewhere in your app
export default prisma;
