import prisma from "./prismaClient";

const postAuthor = async () => {
    const author = await prisma.author.create({
        data: {
            name: "Mark Twain",
            biography: "Hello",
        },
    });
    console.log(author);
};

await postAuthor();
