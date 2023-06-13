import Link from "next/link";
import {getProjects} from "@/model/getProjects";
import {Projects} from ".prisma/client";
import {ReactElement} from "react";
import {headerClass} from "@/app/tailWindClasses";

export const MyProjectsForm = ({projects}: {projects:Projects[]}): ReactElement => {
    if(!projects){
        return <h1>No Projects Yet</h1>
    }
    //const submitChanges = () => { console.log('button pressed')}
    const mappedProjects: ReactElement[] =  projects.map((project:Projects) => {
        //let complete:boolean = project.complete
        //{complete ? "Complete" : 'Work in Progress'}
        //onClick={() => complete = !complete}
        return (
            <li key={project.id} className={'mt-8 rounded-2xl border-2 border-slate-400'} style={{textAlign: "center"}}>
                <form className={'p-3'} >
                    <div contentEditable={true}>
                        <h1 className={`${headerClass} justify-evenly`}>{project.title}</h1>
                        <textarea className={"peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"}
                                  id="exampleFormControlTextarea1"
                                  rows={6} >{project.body}</textarea>
                        <p>{project.languages}</p>
                        <p>{project.link}</p>
                        <label>Created at {project.createdAt.toString()}</label>
                        <br></br>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button id={project.id} type={"submit"}
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >Submit Changes</button>
                            <button type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Complete or Uncomplete
                            </button>
                        </div>

                    </div>
                </form>
            </li>
        )
    })
    return (
        <ul>
            {mappedProjects}
        </ul>
    )
}