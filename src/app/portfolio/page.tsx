import {MyHeaders} from "@/components/headers";
import {bodyClass} from "@/app/tailWindClasses";
import MyFooter from "@/components/footers";
import {ProjectCard} from "@/components/cards";
import {getProjects} from "@/model/getProjects";

export default async function PortfolioPage(){
    const projects = await getProjects()
    if(!projects){
        console.log(projects)
        return (
            <>
                <header>
                    <MyHeaders headers={['portfolio']} />
                </header>
                <div className="max-w-screen-md mx-auto">
                    <div className={bodyClass}>
                        <h1>No Projects Available, Please Try Again At A Later Date</h1>
                    </div>
                </div>
                <footer>
                    <MyFooter />
                </footer>
            </>
        )
    }
    console.log(projects)
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']} />
            </header>
            <div className="max-w-screen-md mx-auto">
                <div className={bodyClass}>
                    <ProjectCard projects={projects} />
                </div>
            </div>
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}