import {editProjectSchema, validatedEdit} from "@/utility/yupSchema";
import {prisma} from "@/db";
import moment from  "moment"

export async function newProject(data: FormData){
    "use server"
    const myData= await validatedEdit(data)
    if(!myData){return}
    // @ts-ignore
    const id:string = myData.id
    // @ts-ignore
    const date = moment(myData.date)
    // @ts-ignore
    await prisma.projects.update({where: {id}, data: {
        title: myData.title,
        body: myData.body,
        languages: myData.languages,
        link: myData.link,
        complete: myData.complete,
        //createdAt:date
        }})
}