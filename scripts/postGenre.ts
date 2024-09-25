import prisma from "./prismaClient";

const postGenre = async () => {
    const genre = await prisma.genre.create({
        data: {
            name: "Coming of Age",
        },
    });
    console.log(genre);
};

await postGenre();
