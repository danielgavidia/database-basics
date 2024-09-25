import prisma from "./prismaClient";

const borrowBook = async (id: number, memberId: number) => {
    const book = await prisma.book.update({
        where: {
            id: id,
        },
        data: {
            rentedByMemberId: memberId,
        },
    });
    console.log(book);
};

await borrowBook(2, 2);
