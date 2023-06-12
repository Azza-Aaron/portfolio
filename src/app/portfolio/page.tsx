import {MyHeaders} from "@/components/headers";
import {bodyClass} from "@/app/tailWindClasses";
import MyFooter from "@/components/footers";
import {ProjectCard} from "@/components/cards";
import {prisma} from "@/db";

export default async function portfolioPage(){
    const projects = await prisma.projects.findMany()
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