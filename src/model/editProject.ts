import {editProjectSchema} from "@/utility/yupSchema";
import {prisma} from "@/db";
import moment from  "moment"
import {InferType} from "yup";
import {validatedEdit} from "@/app/edit-projects/schemaValidate";
import {deleteProject} from "@/model/deleteProject";
import {redirect} from "next/navigation";

export async function editProject(data: FormData){
    "use server"
    console.log(data)
    if(data.get("delete")?.valueOf()?.toString().toLowerCase() === 'delete'){
        console.log('deleting')
        const id:string= <string>data.get("pressed-button")?.valueOf()
        await deleteProject(id)
        redirect('/portfolio')
        return
    }
    type FormData = InferType<typeof editProjectSchema> | false
    const myData:FormData = await validatedEdit(data)
    if(!myData){return}
    const id:string = myData.id
    await prisma.projects.update({where: {id}, data: {
        title: myData.title,
        body: myData.body,
        languages: myData.languages,
        link: myData.link,
        complete: myData.complete,
        createdAt: myData.createdAt
        }})
    redirect('/portfolio')
}