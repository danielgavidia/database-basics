import prisma from "./prismaClient";

interface book {
    title: string;
    authorId: number;
}

interface dataMember {
    name: string;
    email: string;
    books: {
        connect: book[];
    };
}

const postMember = async (data: dataMember) => {
    const member = await prisma.member.create({
        data: data,
    });
    console.log(member);
};

const data = {
    name: "Daniel Gavidia",
    email: "dgavidia1@gmail.com",
    books: {
        connect: [
            {
                title: "The Adventures of a Huckleberry Finn",
                authorId: 1,
            },
        ],
    },
};

await postMember(data);
