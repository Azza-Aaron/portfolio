import {MyHeaders} from "@/components/headers";
import {bodyClass, headerClass, linkClass} from "@/app/tailWindClasses";
import MyFooter from "@/components/footers";
import {prisma} from "@/db";
import {auth} from "@/utility/authentication";
import {MyLogin} from "@/components/forms/login";
import {MyProjectsForm} from "@/components/forms/projects";
import {getProjects} from "@/model/getProjects";
import {Projects} from ".prisma/client";



export default async function newProjectPage(){
    const authed: boolean = await auth()
    if(!authed){
        return (
            <>
                <header>
                    <MyHeaders headers={['portfolio']}/>
                </header>
                <MyLogin />
            </>
        )
    }
    const projects: Projects[]  = await getProjects()
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className={bodyClass}>
                <button className={linkClass}> Add Project</button>
            </div>
            <div className={bodyClass}>
                <MyProjectsForm projects={projects} />
            </div>
        </>
    )
}