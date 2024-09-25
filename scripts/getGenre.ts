import prisma from "../prismaClient";

const getGenre = async (id: number) => {
    const genre = await prisma.genre.findUnique({
        where: {
            id: id,
        },
    });
    console.log(genre);
};

await getGenre(7);
