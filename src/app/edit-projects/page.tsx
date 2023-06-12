import {MyHeaders} from "@/components/headers";
import {bodyClass, headerClass} from "@/app/tailWindClasses";
import MyFooter from "@/components/footers";
import {prisma} from "@/db";



export default async function newProjectPage(){
    // @ts-ignore
    await prisma.projects.create({data: {
            title: "Portfolio Project",
            body: "Creating a portfolio and expanding my knowledge.",
            languages: "TypeScript",
            link: "https://github.com/Azza-Aaron/portfolio",
            complete: false
        }})
    return(
        <>
            <header>
                <MyHeaders headers={['portfolio']}/>
            </header>
            <div className={bodyClass}>
                <p>body</p>
            </div>
            <footer>
                <MyFooter />
            </footer>
        </>
    )
}