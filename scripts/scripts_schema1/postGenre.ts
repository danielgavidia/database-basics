import prisma from "./prismaClient";

interface dataGenre {
    name: string;
}

const postGenre = async (data: dataGenre) => {
    const genre = await prisma.genre.create({
        data: data,
    });
    console.log(genre);
};

const data = {
    name: "Coming of Age",
};

await postGenre(data);
