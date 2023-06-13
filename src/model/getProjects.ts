import {prisma} from "@/db";


export const getProjects = async () => {
    return prisma.projects.findMany();
}