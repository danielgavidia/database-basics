import prisma from "./prismaClient";

interface id {
    id: number;
}

interface dataBook {
    title: string;
    ISBN: string;
    authorId: number;
    rentedByMemberId: number;
    genres: {
        connect: id[];
    };
}

const postBook = async (data: dataBook) => {
    const book = await prisma.book.create({
        data: data,
    });
    console.log(book);
};

const data = {
    title: "The Adventures of a Huckleberry Finn",
    ISBN: "1-123-123456-12-1",
    authorId: 1,
    rentedByMemberId: 1,
    genres: {
        connect: [{ id: 1 }],
    },
};

await postBook(data);
