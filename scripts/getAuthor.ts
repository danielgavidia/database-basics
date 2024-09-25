import prisma from "./prismaClient";

async function main() {
    // ... you will write your Prisma Client queries here
    const allBooks = await prisma.author.findMany();
    console.log(allBooks);
}

await main();
