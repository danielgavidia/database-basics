import prisma from "../prismaClient";

const postBook = async () => {
    const book = await prisma.book.create({
        data: {
            title: "The Adventures of Huckleberry Finn",
            ISBN: "123-1-12-123456-1",
            memberId: 5,
            authorId: 7,
        },
    });
    console.log(book);
};

await postBook();
