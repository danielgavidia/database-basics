import prisma from "./prismaClient";

const postMember = async () => {
    const member = await prisma.member.create({
        data: {
            name: "Daniel Gavidia",
            email: "dgavidia1@gmail.com",
            books: {
                create: [
                    {
                        title: "The Adventures of Huckleberry Finn",
                        authorId: 6,
                    },
                ],
            },
        },
    });
    console.log(member);
};

await postMember();
