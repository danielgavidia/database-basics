import prisma from "./prismaClient";

const getGenre = async (id: number) => {
    const genre = await prisma.genre.findUnique({
        where: {
            id: id,
        },
        include: {
            books: true,
        },
    });
    console.log(genre);
};

const id = 1;

await getGenre(id);
