import prisma from "./prismaClient";

const getAuthor = async (id: number) => {
    const author = await prisma.author.findUnique({
        where: {
            id: id,
        },
        include: {
            books: true,
        },
    });
    console.log(author);
};

const id = 1;

await getAuthor(id);
