import prisma from "./prismaClient";

const postMember = async () => {
    const author = await prisma.member.create({
        data: {
            name: "Daniel Gavidia",
            email: "dgavidia1@gmail.com",
        },
    });
    console.log(author);
};

await postMember();
