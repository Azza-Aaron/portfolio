import {MyHeaders} from "@/components/headers";
import {bodyClass} from "@/app/tailWindClasses";
import MyFooter from "@/components/footers";
import {ProjectCard} from "@/components/cards";
import {getProjects} from "@/model/getProjects";
import {Projects} from ".prisma/client";

export default async function PortfolioPage(){
    const projects: Projects[] = await getProjects()
    if(!projects){
        return <h1>Content unavailable in your country.</h1>
    }
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className={bodyClass}>
                <ProjectCard projects={projects}/>
            </div>
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}