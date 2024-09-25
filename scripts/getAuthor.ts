import prisma from "./prismaClient";

const getAuthor = async (id: number) => {
    const author = await prisma.author.findUnique({
        where: {
            id: id,
        },
    });
    console.log(author);
};

await getAuthor(7);
