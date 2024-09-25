import prisma from "./prismaClient";

interface dataAuthor {
    name: string;
    biography: string;
}

const postAuthor = async (data: dataAuthor) => {
    const author = await prisma.author.create({
        data: data,
    });
    console.log(author);
};

const data = { name: "Mark Twain", biography: "Hello" };

await postAuthor(data);
