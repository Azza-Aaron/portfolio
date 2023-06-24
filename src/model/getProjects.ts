import {prisma} from "@/db";


export const getProjects = async () => {
    "use server"
    console.log('this was called')
    return await prisma.projects.findMany();
}