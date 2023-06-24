import {prisma} from "@/db";
import {redirect} from "next/navigation";

export async function deleteProject(id:string) {
    "use server"
    console.log('delete')
    try {
        await prisma.projects.delete({where: {id}})
    } catch (e) {
        console.log(e)
    }
}

