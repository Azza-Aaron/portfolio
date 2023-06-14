import Link from "next/link";
import {getProjects} from "@/model/getProjects";
import {Projects} from ".prisma/client";
import {ReactElement} from "react";
import {bodyClass, headerClass, inputClassEdit, linkClass, radioClass, textAreaClass} from "@/app/tailWindClasses";
import {newProject} from "@/model/addProject";

export const MyProjectsForm = async ({projects}: {projects:Projects[]}) :Promise<ReactElement> => {
    if(!projects){
        return <h1>No Projects Yet</h1>
    }
    //const submitChanges = () => { console.log('button pressed')}
    const mappedProjects: ReactElement[] =  projects.map((project:Projects) => {
        let complete:boolean = project.complete
        return (
            <li key={project.id} className={'mt-8 rounded-2xl border-2 border-slate-400 bg-gray-900 text-center'}>
                <form className={'p-3'} action={newProject} >
                    <div  className={"px-64 flex-auto max-w-max rounded"}>
                        <input name={'title'} placeholder={project.title} className={`w-fit text-2xl ${inputClassEdit} mx-auto`} />
                        <label className={`underline ${bodyClass}`}>Body</label>
                        <textarea name={'body'} className={`${textAreaClass} contentEditable={true} w-96`}
                                  id="exampleFormControlTextarea1"
                                  rows={6} >{project.body}</textarea>
                        <label className={`underline ${bodyClass}`}>Languages</label>
                        <textarea name={'body'} className={`${textAreaClass} contentEditable={true} mx-auto`}
                                  id="exampleFormControlTextarea1"
                                  rows={1} >{project.languages}</textarea>
                        <label className={`underline ${bodyClass}`}>Link</label>
                        <textarea name={'body'} className={`${textAreaClass} contentEditable={true} mx-auto`}
                                  id="exampleFormControlTextarea1">{project.link}</textarea>
                        <label className={`underline ${bodyClass}`}>Created At</label>
                        <textarea name={'body'} className={`${textAreaClass} contentEditable={true} w-96`}
                                  id="exampleFormControlTextarea1">{project.createdAt.toString()}</textarea>
                        <br></br>
                        <div className="inline-flex rounded-md shadow-sm" role="group">

                            <div className="">
                                <input id="default-radio-1" type="radio" value="0" name="default-radio"
                                       className={radioClass}/>
                                    <label htmlFor="default-radio-1"
                                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Incomplete</label>
                            </div>
                            <div className="ml-3">
                                <input checked id="default-radio-2" type="radio" value="1" name="default-radio"
                                       className={radioClass}/>
                                    <label htmlFor="default-radio-2"
                                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Complete</label>
                            </div>
                        </div>
                        <div>
                                <button id={project.id} type={"submit"} className={`mt-4 ${linkClass} text-center`} >Submit Changes</button>
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

/*
<label htmlFor="default-radio-1"
       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>

<label htmlFor="default-radio-2"
       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>*/


/*
<div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value={"true"} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

</div>
<div className="flex items-center">
    <input checked id="default-radio-2" type="radio" value={"false"} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

</div>*/
