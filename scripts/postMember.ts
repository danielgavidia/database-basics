import prisma from "./prismaClient";

interface book {
    title: string;
    authorId: number;
}

interface dataMember {
    name: string;
    email: string;
}

const postMember = async (data: dataMember) => {
    const member = await prisma.member.create({
        data: data,
    });
    console.log(member);
};

const data = {
    name: "John Smith",
    email: "johnsmith@gmail.com",
};

await postMember(data);
