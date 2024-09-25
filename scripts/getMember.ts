import prisma from "../prismaClient";

const getMember = async (id: number) => {
    const member = await prisma.member.findUnique({
        where: {
            id: id,
        },
    });
    console.log(member);
};

await getMember(7);
