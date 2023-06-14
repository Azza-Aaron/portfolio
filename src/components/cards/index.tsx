import Link from "next/link";
import {Projects} from ".prisma/client";
import {ReactElement} from "react";

export const ProjectCard = ({projects}: {projects:Projects[]}) => {
    console.log(projects)
    const myProjects: ReactElement[] = projects?.map((project: Projects) => {
        let lastUpdate:string = project.updatedAt.toString()
        lastUpdate = lastUpdate.replaceAll("(Australian Western Standard Time)", "")
        return(
            <li className={"mt-6"}>
                <div className="font-bold text-xl mb-6" style={{textAlign: 'center'}}>{project.title}</div>
                <div className={'mx-auto flex justify-center mt-2 rounded-2xl border-2 border-slate-400 p-2 bg-gray-900 shadow-lg'} style={{textAlign: 'center'}}>
                    <div className="max-w-max rounded overflow-hidden shadow-lg" id={project.id}>
                        <div className="px-8 py-4">
                            <p className="text-base">
                                {project.body}
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-2">
                            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Languages: {project.languages}</span>
                            <br></br>
                            <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Completion: {project.complete ? 'Project is Complete' : 'Project is Incomplete'}</span>
                        </div>
                    <div className="text-center text-sm">
                        <Link className="text-blue-500 leading-none" href={project.link} >Click for GitHub</Link>
                        <p className="text-gray-600">Last Updated {lastUpdate}</p>
                    </div>
                    </div>
                </div>
            </li>

            )
    })
    return (
        <ul>
            {myProjects}
        </ul>
    )
}