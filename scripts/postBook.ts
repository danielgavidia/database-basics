import prisma from "./prismaClient";

const postBook = async () => {
    const book = await prisma.book.create({
        data: {
            title: "The Adventures of Huckleberry Finn",
            ISBN: "123-1-12-123456-1",
            authorId: 7,
            genres: {
                create: [{ name: "Adventure" }, { name: "Coming of Age" }],
            },
        },
    });
    console.log(book);
};

await postBook();
