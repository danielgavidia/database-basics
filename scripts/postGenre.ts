import prisma from "../prismaClient";

const postGenre = async () => {
    const genre = await prisma.genre.create({
        data: {
            name: "Adventure",
        },
    });
    console.log(genre);
};

await postGenre();
