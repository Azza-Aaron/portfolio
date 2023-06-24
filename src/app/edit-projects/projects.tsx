import Link from "next/link";
import {getProjects} from "@/model/getProjects";
import {Projects} from ".prisma/client";
import {ReactElement} from "react";
import {bodyClass, headerClass, inputClassEdit, linkClass, radioClass, textAreaClass} from "@/app/tailWindClasses";
import {editProject} from "@/model/editProject";
import {deleteProject} from "@/model/deleteProject";

export const MyProjectsForm = async ({projects}: {projects:Projects[]}) :Promise<ReactElement> => {
    if(!projects){
        return <h1>No Projects Yet</h1>
    }
    //const submitChanges = () => { console.log('button pressed')}
    const mappedProjects: ReactElement[] =  projects.map((project:Projects) => {
        let complete:boolean = project.complete
        return (
            <li key={project.id} className={'mt-8 rounded-2xl border-2 border-slate-400 bg-gray-900 text-center'}>
                <form className={'p-3'} action={editProject}>
                    <div className={'max-w-md mx-auto'}>
      <textarea name={'title'} required placeholder={project.title} className={`w-full text-2xl ${inputClassEdit} mx-auto mt-3`}
                defaultValue={project.title}></textarea>
                        <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Body</label>
                        <textarea name={'body'} required className={`${textAreaClass} w-full`}
                                  rows={5} defaultValue={project.body}></textarea>
                        <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Languages</label>
                        <textarea name={'languages'} required className={`${textAreaClass} w-full`}
                                  rows={1} defaultValue={project.languages}></textarea>
                        <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Link</label>
                        <textarea name={'link'} required className={`${textAreaClass} w-full`}
                                  defaultValue={project.link}></textarea>
                        <label className={`block mt-4 text-sm font-medium text-gray-200 text-left ${bodyClass}`}>Created At</label>
                        <textarea name={'createdAt'} required className={`${textAreaClass} w-full`}
                                  defaultValue={project.createdAt}></textarea>
                        <div className={'my-4 flex justify-between'}>
                            <div>
                                <input required id="default-radio-1" type="radio" value="0" name="default-radio"
                                       className={radioClass} />
                                <label htmlFor="default-radio-1"
                                       className="inline-block ml-2 text-sm font-medium text-gray-200 dark:text-gray-300">Incomplete</label>
                            </div>
                            <div>
                                <input required id="default-radio-2" type="radio" value="1" name="default-radio"
                                       className={radioClass} />
                                <label htmlFor="default-radio-2"
                                       className="inline-block ml-2 text-sm font-medium text-gray-200 dark:text-gray-300">Complete</label>
                            </div>
                        </div>
                        <div className={'mb-3'}>
                            <button id={project.id} type={'submit'} name={'pressed-button'} value={project.id}
                                    className={`mt-4 ${linkClass} text-center w-full`}>Submit Changes</button>
                        </div>
                        <div className={'flex'}>
                            <input name={'delete'} className={textAreaClass} style={{maxWidth: '150px'}} placeholder={'DELETE'}
                                   required={false}></input>
                            <label htmlFor="default-radio-2"
                                   className="mt-4 ml-2 text-sm font-medium text-gray-200 dark:text-gray-300">Type delete and submit to delete
                                from DB</label>
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
