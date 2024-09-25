import prisma from "./prismaClient";

const getMember = async (id: number) => {
    const member = await prisma.member.findUnique({
        where: {
            id: id,
        },
        include: {
            books: true,
        },
    });
    console.log(member);
};

const id = 4;

await getMember(id);
