import prisma from "./prismaClient";

const getBook = async (id: number) => {
    const book = await prisma.book.findUnique({
        where: {
            id: id,
        },
        include: {
            genres: true,
        },
    });
    console.log(book);
};

const id = 1;

await getBook(id);
