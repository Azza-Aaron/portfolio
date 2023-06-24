import {addProjectSchema} from "@/utility/yupSchema";
import {prisma} from "@/db";
import moment from  "moment"
import {InferType} from "yup";
import {validatedAdd} from "@/app/add-projects/schemaValidate";
import {redirect} from "next/navigation";

export async function newProject(data: FormData){
    "use server"
    console.log('logging data ', data)
    type FormData = InferType<typeof addProjectSchema> | false
    const myData:FormData= await validatedAdd(data)
    if(!myData){return}
    await prisma.projects.create({data: {
            title: myData.title,
            body: myData.body,
            languages: myData.languages,
            link: myData.link,
            complete: myData.complete,
            createdAt: moment().format('DD/MM/YYYY').toString()
        }})
    redirect('/portfolio')
}